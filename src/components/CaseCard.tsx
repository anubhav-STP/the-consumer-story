import Link from "next/link";
import type { Case } from "@/data/cases";

const statusColors: Record<string, string> = {
  Settled: "bg-green-100 text-green-800",
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Ongoing: "bg-yellow-100 text-yellow-800",
  Convicted: "bg-red-100 text-red-800",
  "Order Issued": "bg-blue-100 text-blue-800",
};

export default function CaseCard({ caseData }: { caseData: Case }) {
  return (
    <Link href={`/cases/${caseData.slug}`} className="group block">
      <article className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-200 h-full flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {caseData.category}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[caseData.status]}`}
          >
            {caseData.status}
          </span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 group-hover:text-red-700 transition-colors mb-2 line-clamp-2">
          {caseData.title}
        </h3>

        <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
          {caseData.summary}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">{caseData.year}</span>
            <span className="text-xs font-semibold text-slate-700">
              {caseData.company}
            </span>
          </div>
          {caseData.amount !== "Multiple Orders" &&
            caseData.amount !== "Investigation" &&
            caseData.amount !== "Pending" &&
            caseData.amount !== "Suspension + Refunds" && (
              <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-1 rounded">
                {caseData.amount}
              </span>
            )}
        </div>
      </article>
    </Link>
  );
}
