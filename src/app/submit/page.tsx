import Link from "next/link";

export const metadata = {
  title: "Submit Your Story — The Consumer Story",
  description:
    "Share your consumer complaint story with The Consumer Story to help warn others about corporate misconduct.",
};

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700">Submit Your Story</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Submit Your Story
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

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Name (will be kept confidential)
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Country
          </label>
          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
            <option value="">Select your country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Name of the company"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Category
          </label>
          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
            <option value="">Select category</option>
            <option value="banking">Banking / Financial Fraud</option>
            <option value="ecommerce">E-Commerce / Online Shopping</option>
            <option value="telecom">Telecom / Internet</option>
            <option value="insurance">Insurance Claim Denial</option>
            <option value="realestate">Real Estate / Housing</option>
            <option value="edtech">Ed-Tech / Education</option>
            <option value="travel">Travel / Airlines / Hotels</option>
            <option value="food">Food Delivery / Safety</option>
            <option value="subscription">Subscription Traps</option>
            <option value="data">Data Privacy / Breach</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Story
          </label>
          <textarea
            rows={8}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Describe what happened. Include dates, amounts, and how the company responded to your complaint..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Have you filed a complaint with any agency or court?
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="If yes, please provide details — which agency, case/reference number, any orders passed..."
          />
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> This form is currently for display purposes.
            The submission functionality will be activated once the site goes
            live. In the meantime, if you have an urgent story to share, please
            reach out through the channels listed on the{" "}
            <Link href="/about" className="text-red-600 hover:text-red-800 underline">
              About
            </Link>{" "}
            page.
          </p>
        </div>

        <button
          type="button"
          className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
        >
          Submit Story for Review
        </button>
      </form>
    </div>
  );
}
