import { notFound } from "next/navigation";
import Link from "next/link";
import { sortedCases, countryInfo } from "@/data/cases";
import SearchFilter from "@/components/SearchFilter";
import type { Metadata } from "next";

const validCountries = ["IN", "US", "UK"] as const;
type CountryCode = (typeof validCountries)[number];

export function generateStaticParams() {
  return validCountries.map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  if (!validCountries.includes(country as CountryCode)) {
    return { title: "Not Found — The Consumer Story" };
  }
  const info = countryInfo[country as CountryCode];
  return {
    title: `${info.name} Consumer Cases — The Consumer Story`,
    description: `Documented cases of corporate misconduct, consumer court orders, and regulatory actions in ${info.name}.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  if (!validCountries.includes(country as CountryCode)) {
    notFound();
  }

  const code = country as CountryCode;
  const info = countryInfo[code];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
        <span className="text-slate-700">{info.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          {info.name}
        </h1>
        <p className="text-slate-500 mt-2">
          Documented cases of corporate misconduct and consumer court orders.
        </p>
      </div>

      {/* Consumer Agencies */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="font-bold text-lg text-slate-900 mb-4">
          Consumer Protection Agencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {info.agencies.map((agency) => (
            <div
              key={agency.name}
              className="bg-slate-50 rounded-lg p-4 border border-slate-100"
            >
              <h3 className="font-semibold text-sm text-slate-900">
                {agency.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{agency.contact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cases — pass all cases but pre-select region */}
      <SearchFilter cases={sortedCases} initialRegion={code} />
    </div>
  );
}
