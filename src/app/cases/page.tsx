import { sortedCases } from "@/data/cases";
import SearchFilter from "@/components/SearchFilter";

export const metadata = {
  title: "All Cases — The Consumer Story",
  description:
    "Browse all documented cases of corporate fraud, unethical business practices, and consumer court orders.",
};

export default function CasesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          All Cases
        </h1>
        <p className="text-slate-500 mt-2">
          Every case documented on The Consumer Story — searchable and
          filterable by category and status.
        </p>
      </div>

      <SearchFilter cases={sortedCases} />
    </div>
  );
}
