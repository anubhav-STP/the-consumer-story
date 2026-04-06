import Link from "next/link";

export const metadata = {
  title: "About — The Consumer Story",
  description:
    "About The Consumer Story — the united voice of consumers fighting back against corporate misconduct and broken promises.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700">About</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        About The Consumer Story
      </h1>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Consumer Story exists for one reason: to shine a light on
            corporate misconduct and empower ordinary people to fight back.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Every day, consumers are let down by businesses that take their
            money and don&apos;t deliver. They refuse refunds. They don&apos;t answer
            calls. They use fine print and dark patterns to trap people. They
            count on the fact that most consumers will give up — because
            fighting a corporation feels impossible.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We believe that shouldn&apos;t be the case. When businesses break their
            promises, when they act unethically, when they exploit the
            vulnerable — there should be consequences. And consumers should
            know that others have fought and won.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">
                Document Real Cases
              </h3>
              <p className="text-sm text-slate-600">
                Every case on this site is based on publicly available court
                records, regulatory filings, and verified news reports. We
                document what happened, what action was taken, and what the
                outcome was.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">
                Track Court Orders
              </h3>
              <p className="text-sm text-slate-600">
                We track the regulatory and legal actions taken against
                companies — FTC fines, consumer court orders, class action
                settlements, criminal convictions, and more.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">
                Educate Consumers
              </h3>
              <p className="text-sm text-slate-600">
                We provide country-specific guides on how to file complaints,
                which agencies to approach, and what laws protect you. Knowledge
                is power.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">
                Cover Three Countries
              </h3>
              <p className="text-sm text-slate-600">
                We currently cover India, the United States, and the United
                Kingdom — three major markets where consumer protection is
                critical and corporate misconduct is widespread.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Who This Is For
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This portal is for the people who don&apos;t have a voice. The
            families who saved for years to buy a home and the builder
            disappeared with their money. The parents who were pressured into
            ed-tech loans they couldn&apos;t afford. The retirees who were
            mis-sold insurance they could never claim. The small business
            owners wrongly convicted based on faulty software.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            It&apos;s for everyone who has ever been told &quot;sorry, we can&apos;t help
            you&quot; by a faceless corporation. We want you to know: others
            have been in your position, they fought back, and many won.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Our Standards
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700">
                <strong>Facts-based:</strong> Every case is sourced from
                official court records, regulatory announcements, or verified
                news reports.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700">
                <strong>Independent:</strong> We are not affiliated with any
                company, government agency, or political organization.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700">
                <strong>Consumer-first:</strong> Our priority is always the
                consumer. We document what happened and what rights you have.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-slate-700">
                <strong>Not legal advice:</strong> The information on this site
                is for educational purposes. For specific legal issues, consult
                a qualified attorney in your jurisdiction.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <div className="bg-gradient-to-r from-slate-900 to-red-900 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Have a Story to Share?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              If you&apos;ve been a victim of corporate misconduct and want to share
              your story to warn others, we want to hear from you. All
              submissions are reviewed for accuracy before publication.
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Submit Your Story
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
