"use client";

import { useState, useMemo } from "react";
import type { Case } from "@/data/cases";
import CaseCard from "./CaseCard";

const regions = [
  { code: "all", label: "All" },
  { code: "IN", label: "India" },
  { code: "US", label: "United States" },
  { code: "UK", label: "United Kingdom" },
];

interface SearchFilterProps {
  cases: Case[];
  initialRegion?: string;
}

export default function SearchFilter({
  cases: allCases,
  initialRegion = "all",
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const categories = useMemo(
    () => [...new Set(allCases.map((c) => c.category))].sort(),
    [allCases]
  );

  const filteredCases = useMemo(() => {
    return allCases.filter((c) => {
      const matchesSearch =
        searchQuery === "" ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "all" || c.countryCode === selectedRegion;

      const matchesCategory =
        selectedCategory === "all" || c.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "all" || c.status === selectedStatus;

      return matchesSearch && matchesRegion && matchesCategory && matchesStatus;
    });
  }, [allCases, searchQuery, selectedRegion, selectedCategory, selectedStatus]);

  const hasActiveFilters =
    searchQuery ||
    selectedRegion !== "all" ||
    selectedCategory !== "all" ||
    selectedStatus !== "all";

  return (
    <div>
      {/* Region Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((r) => (
          <button
            key={r.code}
            onClick={() => setSelectedRegion(r.code)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRegion === r.code
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
            }`}
          >
            {r.label}
            <span
              className={`ml-1.5 text-xs ${
                selectedRegion === r.code ? "text-slate-400" : "text-slate-400"
              }`}
            >
              {r.code === "all"
                ? allCases.length
                : allCases.filter((c) => c.countryCode === r.code).length}
            </span>
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 mb-8 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search cases by company, title, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="Settled">Settled</option>
              <option value="Pending">Pending</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Convicted">Convicted</option>
              <option value="Order Issued">Order Issued</option>
              <option value="Completed">Completed</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                }}
                className="px-3 py-2 text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="mt-3 text-sm text-slate-500">
          Showing {filteredCases.length} of {allCases.length} cases
        </div>
      </div>

      {/* Results */}
      {filteredCases.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">
            No cases match your search criteria.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((c) => (
            <CaseCard key={c.slug} caseData={c} />
          ))}
        </div>
      )}
    </div>
  );
}
