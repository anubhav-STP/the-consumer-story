import Link from "next/link";
import { sortedCases, getFeaturedCases } from "@/data/cases";
import CaseCard from "@/components/CaseCard";

export default function HomePage() {
  const featuredCases = getFeaturedCases();
  const recentCases = sortedCases.slice(0, 9);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 text-sm text-red-300 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Documenting corporate misconduct worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              They took your money.
              <br />
              <span className="text-red-400">We tell the story.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              The united voice of consumers who refuse to be silenced.
              We document real cases of corporate misconduct, broken promises,
              and unethical business practices — backed by facts, court
              records, and regulatory filings. Because when corporations
              won&apos;t answer to you, they&apos;ll answer to everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cases"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Browse All Cases
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/know-your-rights"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
              >
                Know Your Rights
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Biggest Impact Cases
            </h2>
            <p className="text-slate-500 mt-1">
              Major corporate misconduct cases that made headlines
            </p>
          </div>
          <Link
            href="/cases"
            className="hidden sm:inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
          >
            View all cases
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCases.map((c) => (
            <CaseCard key={c.slug} caseData={c} />
          ))}
        </div>
      </section>

      {/* More Cases */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Latest Stories
            </h2>
            <Link
              href="/cases"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
            >
              See all {sortedCases.length} cases
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCases.map((c) => (
              <CaseCard key={c.slug} caseData={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-900 to-red-900 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Know Your Rights. Fight Back.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Every consumer has rights protected by law. Learn how to file
            complaints, approach consumer courts, and hold corporations
            accountable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/know-your-rights"
              className="inline-flex items-center px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Learn How to File a Complaint
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg border border-red-500 transition-colors"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
