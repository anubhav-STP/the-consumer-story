import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCaseBySlug } from "@/data/cases";
import type { Metadata } from "next";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData)
    return { title: "Case Not Found — The Consumer Story" };
  return {
    title: `${caseData.company}: ${caseData.title} — The Consumer Story`,
    description: caseData.summary,
  };
}

const statusColors: Record<string, string> = {
  Settled: "bg-green-100 text-green-800 border-green-200",
  Completed: "bg-green-100 text-green-800 border-green-200",
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Ongoing: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Convicted: "bg-red-100 text-red-800 border-red-200",
  "Order Issued": "bg-blue-100 text-blue-800 border-blue-200",
};

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <Link href="/cases" className="hover:text-slate-700">
          Cases
        </Link>
        <span>/</span>
        <span className="text-slate-700 truncate max-w-xs">
          {caseData.company}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {caseData.category}
          </span>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColors[caseData.status]}`}
          >
            {caseData.status}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {caseData.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          {caseData.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          {caseData.summary}
        </p>
      </div>

      {/* Key Facts Box */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-red-900 text-lg mb-4">Key Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-red-700 font-medium">Company</span>
            <p className="text-slate-900 font-semibold">{caseData.company}</p>
          </div>
          <div>
            <span className="text-sm text-red-700 font-medium">
              Penalty / Settlement
            </span>
            <p className="text-slate-900 font-semibold">{caseData.amount}</p>
          </div>
          <div>
            <span className="text-sm text-red-700 font-medium">
              Regulatory Agency
            </span>
            <p className="text-slate-900 font-semibold">{caseData.agency}</p>
          </div>
          <div>
            <span className="text-sm text-red-700 font-medium">Status</span>
            <p className="text-slate-900 font-semibold">{caseData.status}</p>
          </div>
        </div>
      </div>

      {/* Full Story */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          The Full Story
        </h2>
        <div className="prose prose-slate max-w-none">
          {caseData.fullStory.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Court Order */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
          Court Order / Regulatory Action
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed">{caseData.courtOrder}</p>
        </div>
      </section>

      {/* Outcome */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Outcome
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed">{caseData.outcome}</p>
        </div>
      </section>

      {/* Consumer Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Impact on Consumers
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-slate-700 leading-relaxed">
            {caseData.consumerImpact}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-200">
        <Link
          href="/cases"
          className="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors text-sm"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Cases
        </Link>
        <Link
          href="/know-your-rights"
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors text-sm"
        >
          Know Your Rights
        </Link>
      </div>
    </div>
  );
}
