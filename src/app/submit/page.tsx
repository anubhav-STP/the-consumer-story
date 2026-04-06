"use client";

import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";

// Company lists by country
const companiesByCountry: Record<string, string[]> = {
  IN: [
    "Airtel", "Airtel Payments Bank", "Air India", "Amazon India", "Bajaj Allianz",
    "Bajaj Finance", "BHIM", "BookMyShow", "BYJU'S", "CRED",
    "DLF", "Dunzo", "Flipkart", "HDFC Bank", "HDFC Ergo",
    "ICICI Bank", "ICICI Lombard", "IndiGo Airlines", "Jio", "Kotak Mahindra Bank",
    "LIC of India", "MakeMyTrip", "Meesho", "MobiKwik", "Myntra",
    "Nykaa", "Ola", "OYO Rooms", "Paytm", "PhonePe",
    "Policybazaar", "Rapido", "Reliance Retail", "SBI", "Snapdeal",
    "SpiceJet", "Star Health", "Swiggy", "Tata Motors", "Uber India",
    "Unacademy", "Upstox", "Urban Company", "Vedantu", "Vi (Vodafone Idea)",
    "Vistara", "WhiteHat Jr", "Zerodha", "Zomato", "Zudio",
  ],
  US: [
    "Amazon", "Apple", "AT&T", "Bank of America", "Capital One",
    "Chase Bank", "Comcast / Xfinity", "DoorDash", "Equifax", "Experian",
    "Facebook / Meta", "Google", "Grubhub", "Instacart", "JPMorgan Chase",
    "Lyft", "Microsoft", "Navient", "Netflix", "PayPal",
    "Robinhood", "Spectrum", "Southwest Airlines", "Spirit Airlines", "T-Mobile",
    "Tesla", "TikTok", "TransUnion", "Uber", "United Airlines",
    "UnitedHealthcare", "Verizon", "Vonage", "Walmart", "Wells Fargo",
  ],
  UK: [
    "Barclays", "British Airways", "British Gas", "BT", "EE",
    "HSBC", "Lloyds Bank", "NatWest", "O2", "Octopus Energy",
    "OVO Energy", "Ryanair", "Sainsbury's", "Scottish Power", "Sky",
    "Tesco", "Thames Water", "Three", "TSB", "Virgin Media",
    "Vodafone UK", "Wonga",
  ],
};

const categories = [
  "Banking / Financial Fraud",
  "E-Commerce / Online Shopping",
  "Telecom / Internet",
  "Insurance Claim Denial",
  "Real Estate / Housing",
  "Ed-Tech / Education",
  "Travel / Airlines / Hotels",
  "Food Delivery / Safety",
  "Subscription Traps",
  "Data Privacy / Breach",
  "Other",
];

function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  // Block disposable/temp email domains
  const blocked = [
    "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
    "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com",
    "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com",
    "maildrop.cc", "temp-mail.org", "getnada.com",
  ];
  const domain = email.split("@")[1]?.toLowerCase();
  return !blocked.includes(domain);
}

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [category, setCategory] = useState("");
  const [story, setStory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitError, setSubmitError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCompanies = useMemo(() => {
    if (!country || !companiesByCountry[country]) return [];
    const list = companiesByCountry[country];
    if (!companySearch) return list;
    const q = companySearch.toLowerCase();
    return list.filter((c) => c.toLowerCase().includes(q));
  }, [country, companySearch]);

  // Close dropdown on outside click
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
    if (!email) {
      setEmailError("");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address. Disposable/temporary emails are not accepted.");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit() {
    setSubmitError("");

    // Validation
    if (!name.trim()) { setSubmitError("Please enter your name."); return; }
    if (!email.trim() || !validateEmail(email)) { setSubmitError("Please enter a valid email address."); return; }
    if (!country) { setSubmitError("Please select a country."); return; }
    if (!companySearch.trim()) { setSubmitError("Please enter a company name."); return; }
    if (!category) { setSubmitError("Please select a category."); return; }
    if (!story.trim() || story.trim().length < 50) { setSubmitError("Please describe your story in at least 50 characters."); return; }

    // Build mailto
    const subject = encodeURIComponent(`Consumer Story Submission: ${companySearch} — ${category}`);
    const body = encodeURIComponent(
      `CONSUMER STORY SUBMISSION\n` +
      `========================\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Country: ${country === "IN" ? "India" : country === "US" ? "United States" : country === "UK" ? "United Kingdom" : "Other"}\n` +
      `Company: ${companySearch}\n` +
      `Category: ${category}\n\n` +
      `STORY:\n${story}\n\n` +
      `COMPLAINT FILED:\n${complaint || "Not specified"}\n`
    );

    window.location.href = `mailto:editor@theconsumerstory.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700">Share Your Story</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Share Your Story
      </h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Have you been a victim of corporate fraud, unethical business
        practices, or consumer rights violations? Share your experience to
        help warn others and hold companies accountable.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-amber-900 mb-2">Before You Submit</h2>
        <ul className="text-sm text-amber-800 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>
              All submissions are reviewed for accuracy before publication. We
              only publish stories that can be verified through documentation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>
              Please provide supporting evidence: receipts, emails,
              screenshots, court case numbers, complaint reference numbers.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>
              Stick to facts. Avoid exaggeration or unverifiable claims.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">&#8226;</span>
            <span>
              Your personal information will be kept confidential unless you
              explicitly consent to being named.
            </span>
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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
            onBlur={handleEmailBlur}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none ${
              emailError ? "border-red-400 bg-red-50" : "border-slate-300"
            }`}
            placeholder="your@email.com"
          />
          {emailError && (
            <p className="text-sm text-red-600 mt-1">{emailError}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            value={country}
            onChange={(e) => { setCountry(e.target.value); setCompanySearch(""); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Select your country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Company — Autocomplete */}
        <div ref={dropdownRef} className="relative">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={companySearch}
            onChange={(e) => { setCompanySearch(e.target.value); setShowDropdown(true); }}
            onFocus={() => setShowDropdown(true)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder={country ? "Start typing company name..." : "Select a country first"}
            disabled={!country}
          />
          {showDropdown && country && country !== "other" && filteredCompanies.length > 0 && (
            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredCompanies.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => { setCompanySearch(c); setShowDropdown(false); }}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                >
                  {c}
                </button>
              ))}
              {companySearch && !filteredCompanies.some((c) => c.toLowerCase() === companySearch.toLowerCase()) && (
                <button
                  type="button"
                  onClick={() => setShowDropdown(false)}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-500 bg-slate-50 hover:bg-slate-100"
                >
                  Use &quot;{companySearch}&quot; (not in list)
                </button>
              )}
            </div>
          )}
          {country && country !== "other" && (
            <p className="text-xs text-slate-400 mt-1">
              Type to search or enter a company not in the list
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Story */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Story <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={8}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Describe what happened. Include dates, amounts, and how the company responded to your complaint..."
          />
          <p className="text-xs text-slate-400 mt-1">
            {story.length < 50 ? `Minimum 50 characters (${story.length}/50)` : `${story.length} characters`}
          </p>
        </div>

        {/* Complaint Filed */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Have you filed a complaint with any agency or court?
          </label>
          <textarea
            rows={3}
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="If yes, please provide details — which agency, case/reference number, any orders passed..."
          />
        </div>

        {/* Error */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-700">{submitError}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
        >
          Submit Story for Review
        </button>

        <p className="text-xs text-slate-400 text-center">
          Clicking submit will open your email client to send the story to our editorial team at editor@theconsumerstory.com
        </p>
      </div>
    </div>
  );
}
