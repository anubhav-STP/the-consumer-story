import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-sm text-white">
                TCS
              </div>
              <span className="font-bold text-lg text-white">
                The Consumer Story
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Holding corporations accountable. Empowering consumers with
              facts, court orders, and the knowledge to fight back.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              theconsumerstory.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  All Cases
                </Link>
              </li>
              <li>
                <Link href="/know-your-rights" className="hover:text-white transition-colors">
                  Know Your Rights
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-white transition-colors">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Consumer Helplines */}
          <div>
            <h3 className="font-semibold text-white mb-3">
              Consumer Helplines
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white font-medium">1800-11-4000</span>
                <span className="text-slate-400"> — National Consumer Helpline</span>
              </li>
              <li>
                <span className="text-white font-medium">ReportFraud.ftc.gov</span>
                <span className="text-slate-400"> — FTC (US)</span>
              </li>
              <li>
                <span className="text-white font-medium">0808 223 1133</span>
                <span className="text-slate-400"> — Citizens Advice (UK)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>
            The Consumer Story is an independent news portal. All cases
            reported are based on publicly available court records, regulatory
            filings, and news reports.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} theconsumerstory.com. All rights
            reserved. The information provided is for educational purposes and
            does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
