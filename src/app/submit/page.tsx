"use client";

import Link from "next/link";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";

const categories = [
  "Banking / Financial",
  "E-Commerce / Online Shopping",
  "Telecom / Internet",
  "Insurance Claim Denial",
  "Real Estate / Housing",
  "Ed-Tech / Education",
  "Travel / Airlines / Hotels",
  "Food Delivery / Safety",
  "Subscription Traps",
  "Data Privacy / Breach",
  "Auto / Vehicle",
  "Utilities / Energy",
  "Other",
];

const blockedDomains = [
  "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
  "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com",
  "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com",
  "maildrop.cc", "temp-mail.org", "getnada.com", "tempinbox.com",
  "mohmal.com", "burpcollaborator.net", "mailnesia.com", "tempr.email",
];

function validateEmail(email: string): { valid: boolean; error: string } {
  if (!email) return { valid: false, error: "Email is required." };
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return { valid: false, error: "Please enter a valid email address." };
  const domain = email.split("@")[1]?.toLowerCase();
  if (blockedDomains.includes(domain)) return { valid: false, error: "Disposable/temporary emails are not accepted." };
  return { valid: true, error: "" };
}

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [otherCompany, setOtherCompany] = useState("");
  const [allCompanies, setAllCompanies] = useState<string[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(false);
  const [category, setCategory] = useState("");
  const [story, setStory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch companies from DB when country changes
  const fetchCompanies = useCallback(async (region: string) => {
    if (region === "other") { setAllCompanies([]); return; }
    setLoadingCompanies(true);
    try {
      const res = await fetch(`/api/companies?region=${region}`);
      const data = await res.json();
      setAllCompanies(data.companies || []);
    } catch {
      setAllCompanies([]);
    } finally {
      setLoadingCompanies(false);
    }
  }, []);

  useEffect(() => {
    if (country && country !== "other") {
      fetchCompanies(country);
    } else {
      setAllCompanies([]);
    }
  }, [country, fetchCompanies]);

  const filteredCompanies = useMemo(() => {
    if (!country || country === "other" || allCompanies.length === 0) return [];
    if (!companySearch) return allCompanies.slice(0, 20);
    const q = companySearch.toLowerCase();
    return allCompanies.filter((c) => c.toLowerCase().includes(q)).slice(0, 15);
  }, [country, companySearch, allCompanies]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleEmailBlur() {
    if (!email) { setEmailError(""); return; }
    const { valid, error } = validateEmail(email);
    setEmailError(valid ? "" : error);
  }

  async function handleSubmit() {
    setSubmitError("");

    // Validation
    if (!name.trim()) { setSubmitError("Please enter your name."); return; }
    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) { setSubmitError(emailCheck.error); return; }
    if (!country) { setSubmitError("Please select a country."); return; }
    const finalCompany = isOther ? otherCompany.trim() : companySearch.trim();
    if (!finalCompany) { setSubmitError("Please enter a company name."); return; }
    if (!category) { setSubmitError("Please select a category."); return; }
    if (!story.trim() || story.trim().length < 50) { setSubmitError("Please describe your story in at least 50 characters."); return; }

    setSubmitting(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          country,
          company: finalCompany,
          category,
          story: story.trim(),
          complaint: complaint.trim(),
          isNewCompany: isOther || (companySearch.trim() !== "" && !allCompanies.includes(companySearch.trim())),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Failed to submit. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 sm:p-12">
          <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Story Submitted Successfully</h2>
          <p className="text-green-700 mb-4">
            Thank you for sharing your experience about <strong>{isOther ? otherCompany : companySearch}</strong>.
            Our editorial team will review your submission and may reach out for additional details.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium transition-colors">
              Back to Home
            </Link>
            <button
              onClick={() => { setSubmitted(false); setName(""); setEmail(""); setCountry(""); setCompanySearch(""); setCategory(""); setStory(""); setComplaint(""); }}
              className="px-6 py-2 bg-white hover:bg-green-50 text-green-700 border border-green-300 rounded-lg font-medium transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span>/</span>
        <span className="text-slate-700">Share Your Story</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Share Your Story
      </h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Have you been a victim of corporate misconduct, unethical business
        practices, or consumer rights violations? Share your experience to
        help warn others and hold companies accountable.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-amber-900 mb-2">Before You Submit</h2>
        <ul className="text-sm text-amber-800 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>All submissions are reviewed for accuracy before publication. We only publish stories that can be verified through documentation.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>Please provide supporting evidence: receipts, emails, screenshots, court case numbers, complaint reference numbers.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>Stick to facts. Avoid exaggeration or unverifiable claims.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>Your personal information will be kept confidential unless you explicitly consent to being named.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Name <span className="text-red-500">*</span>
            <span className="font-normal text-slate-400 ml-1">(will be kept confidential)</span>
          </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Enter your name" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" value={email}
            onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
            onBlur={handleEmailBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none ${emailError ? "border-red-400 bg-red-50" : "border-slate-300"}`}
            placeholder="your@email.com" />
          {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <select value={country} onChange={(e) => { setCountry(e.target.value); setCompanySearch(""); setIsOther(false); setOtherCompany(""); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
            <option value="">Select your country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Company — Autocomplete with Other option */}
        <div ref={dropdownRef} className="relative">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          {!isOther ? (
            <>
              <input type="text" value={companySearch}
                onChange={(e) => { setCompanySearch(e.target.value); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                placeholder={!country ? "Select a country first" : loadingCompanies ? "Loading companies..." : "Start typing company name..."}
                disabled={!country || loadingCompanies} />
              {showDropdown && country && country !== "other" && (filteredCompanies.length > 0 || companySearch) && (
                <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredCompanies.map((c) => (
                    <button key={c} type="button"
                      onClick={() => { setCompanySearch(c); setShowDropdown(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 border-b border-slate-100 last:border-b-0">
                      {c}
                    </button>
                  ))}
                  <button type="button"
                    onClick={() => { setIsOther(true); setOtherCompany(companySearch); setShowDropdown(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 bg-slate-50 hover:bg-slate-100 border-t border-slate-200">
                    Other — Enter company name manually
                  </button>
                </div>
              )}
              {country && country !== "other" && !loadingCompanies && (
                <p className="text-xs text-slate-400 mt-1">
                  {allCompanies.length}+ companies listed. Type to search or select &quot;Other&quot; at the bottom.
                </p>
              )}
            </>
          ) : (
            <>
              <input type="text" value={otherCompany}
                onChange={(e) => setOtherCompany(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                placeholder="Enter the full company name"
                autoFocus />
              <button type="button"
                onClick={() => { setIsOther(false); setOtherCompany(""); }}
                className="text-xs text-blue-600 hover:text-blue-800 mt-1">
                Back to company list
              </button>
            </>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
            <option value="">Select category</option>
            {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
        </div>

        {/* Story */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Story <span className="text-red-500">*</span>
          </label>
          <textarea rows={8} value={story} onChange={(e) => setStory(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Describe what happened. Include dates, amounts, and how the company responded to your complaint..." />
          <p className="text-xs text-slate-400 mt-1">
            {story.length < 50 ? `Minimum 50 characters (${story.length}/50)` : `${story.length} characters`}
          </p>
        </div>

        {/* Complaint Filed */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Have you filed a complaint with any agency or court?
          </label>
          <textarea rows={3} value={complaint} onChange={(e) => setComplaint(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="If yes, please provide details — which agency, case/reference number, any orders passed..." />
        </div>

        {/* Error */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-700">{submitError}</p>
          </div>
        )}

        {/* Submit */}
        <button type="button" onClick={handleSubmit} disabled={submitting}
          className={`w-full px-6 py-3 font-semibold rounded-lg transition-colors ${
            submitting
              ? "bg-slate-400 text-white cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700 text-white"
          }`}>
          {submitting ? "Submitting..." : "Submit Story for Review"}
        </button>
      </div>
    </div>
  );
}
