import Link from "next/link";
import { countryInfo } from "@/data/cases";

export const metadata = {
  title: "Know Your Rights — The Consumer Story",
  description:
    "Learn how to file consumer complaints, approach consumer courts, and hold corporations accountable in India, the United States, and the United Kingdom.",
};

export default function KnowYourRightsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-700">Know Your Rights</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Know Your Rights
      </h1>
      <p className="text-lg text-slate-600 mb-10 leading-relaxed">
        Every consumer has rights protected by law. If a business has cheated
        you, refused a refund, delivered defective products, or engaged in
        unethical practices — you have legal recourse. Here&apos;s how to fight
        back in each country.
      </p>

      {/* India */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {countryInfo.IN.flag} India
          </h2>
          <p className="text-slate-600 mb-6">
            India has a robust three-tier consumer dispute redressal system
            under the Consumer Protection Act, 2019.
          </p>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            How to File a Consumer Complaint
          </h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <h4 className="font-semibold text-slate-900">
                Step 1: Try to Resolve Directly
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Write a formal complaint to the company. Send it via email and
                registered post. Keep copies of everything. Give them 15-30 days
                to respond.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <h4 className="font-semibold text-slate-900">
                Step 2: File Online on National Consumer Helpline
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Call <strong>1800-11-4000</strong> (toll-free) or file online at{" "}
                <strong>consumerhelpline.gov.in</strong>. The helpline mediates
                between you and the company. Many complaints get resolved at
                this stage.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <h4 className="font-semibold text-slate-900">
                Step 3: File in Consumer Court (E-Daakhil)
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                If unresolved, file a case in the consumer commission. You can
                file online via <strong>edaakhil.nic.in</strong>.
              </p>
              <ul className="text-sm text-slate-600 mt-2 space-y-1 list-disc list-inside">
                <li>
                  <strong>District Commission:</strong> Claims up to Rs 50 lakhs
                </li>
                <li>
                  <strong>State Commission:</strong> Claims Rs 50 lakhs to Rs 2
                  crore
                </li>
                <li>
                  <strong>NCDRC (National Commission):</strong> Claims above Rs
                  2 crore
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <h4 className="font-semibold text-slate-900">
                Step 4: No Lawyer Required
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                You can argue your own case in consumer court. The fee is
                minimal (Rs 100-5,000 depending on claim amount). The process is
                designed to be consumer-friendly.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Key Laws Protecting You
          </h3>
          <div className="space-y-3 mb-6">
            {countryInfo.IN.laws.map((law) => (
              <div key={law.name} className="bg-white rounded-lg p-4 border border-orange-100">
                <h4 className="font-semibold text-slate-900">{law.name}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {law.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Important Agencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {countryInfo.IN.agencies.map((agency) => (
              <div key={agency.name} className="bg-white rounded-lg p-3 border border-orange-100">
                <h4 className="font-semibold text-sm text-slate-900">
                  {agency.name}
                </h4>
                <p className="text-xs text-orange-700 font-medium mt-1">
                  {agency.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* United States */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {countryInfo.US.flag} United States
          </h2>
          <p className="text-slate-600 mb-6">
            The US has multiple federal and state agencies protecting consumers,
            with strong enforcement powers and class action mechanisms.
          </p>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            How to File a Consumer Complaint
          </h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-slate-900">
                Step 1: Document Everything
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Save all receipts, emails, screenshots, and records of
                communication. Document dates, amounts, and names of
                representatives you spoke with.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-slate-900">
                Step 2: File with the Right Agency
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                <strong>General fraud/scams:</strong> ReportFraud.ftc.gov
                <br />
                <strong>Banking/credit/loans:</strong>{" "}
                consumerfinance.gov/complaint (CFPB)
                <br />
                <strong>Telecom/robocalls:</strong> consumercomplaints.fcc.gov
                <br />
                <strong>Airlines:</strong> airconsumer.dot.gov
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-slate-900">
                Step 3: Contact Your State Attorney General
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Every state has a consumer protection division. Search
                &quot;[Your State] Attorney General consumer complaint&quot; to
                find the filing page. State AGs can investigate patterns of
                complaints and take enforcement action.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-slate-900">
                Step 4: Consider Small Claims Court or Class Action
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                For individual disputes, small claims court is fast and
                affordable (limits vary by state, $5,000-$25,000). For
                widespread problems, consult a consumer protection attorney
                about class action options — many work on contingency (no
                upfront cost).
              </p>
            </div>
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Key Laws Protecting You
          </h3>
          <div className="space-y-3 mb-6">
            {countryInfo.US.laws.map((law) => (
              <div key={law.name} className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-slate-900">{law.name}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {law.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Important Agencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {countryInfo.US.agencies.map((agency) => (
              <div key={agency.name} className="bg-white rounded-lg p-3 border border-blue-100">
                <h4 className="font-semibold text-sm text-slate-900">
                  {agency.name}
                </h4>
                <p className="text-xs text-blue-700 font-medium mt-1">
                  {agency.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* United Kingdom */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {countryInfo.UK.flag} United Kingdom
          </h2>
          <p className="text-slate-600 mb-6">
            The UK has strong consumer protection through the Consumer Rights
            Act 2015, backed by ombudsman services and regulatory bodies.
          </p>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            How to File a Consumer Complaint
          </h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-slate-900">
                Step 1: Complain to the Company
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Write a formal complaint letter. Companies must have a
                complaints procedure. If you bought online, you have a 14-day
                cooling-off period to cancel for any reason.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-slate-900">
                Step 2: Contact Citizens Advice
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Call <strong>0808 223 1133</strong> or visit
                citizensadvice.org.uk. They provide free, confidential advice
                and can refer your case to Trading Standards for investigation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-slate-900">
                Step 3: Use an Ombudsman Service
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                <strong>Financial disputes:</strong> Financial Ombudsman Service
                (0800 023 4567)
                <br />
                <strong>Energy:</strong> Energy Ombudsman
                <br />
                <strong>Telecoms:</strong> CISAS or Ombudsman Services:
                Communications
                <br />
                Ombudsman decisions are binding on the company.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-slate-900">
                Step 4: Small Claims Court
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                For claims up to £10,000 (£5,000 in Scotland), use the Small
                Claims Court. You can file online at gov.uk/make-court-claim.
                The fee starts at £35. No lawyer needed.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Key Laws Protecting You
          </h3>
          <div className="space-y-3 mb-6">
            {countryInfo.UK.laws.map((law) => (
              <div key={law.name} className="bg-white rounded-lg p-4 border border-purple-100">
                <h4 className="font-semibold text-slate-900">{law.name}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {law.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-lg text-slate-900 mb-3">
            Important Agencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {countryInfo.UK.agencies.map((agency) => (
              <div key={agency.name} className="bg-white rounded-lg p-3 border border-purple-100">
                <h4 className="font-semibold text-sm text-slate-900">
                  {agency.name}
                </h4>
                <p className="text-xs text-purple-700 font-medium mt-1">
                  {agency.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            General Tips for Fighting Back
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Document Everything</h3>
              <p className="text-sm text-slate-300">
                Save all emails, screenshots, receipts, chat transcripts, and
                call recordings (where legal). Written evidence is your
                strongest weapon.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Communicate in Writing
              </h3>
              <p className="text-sm text-slate-300">
                Always follow up phone calls with an email summarizing what was
                discussed. Send complaints via registered post/email for proof
                of delivery.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Know Your Deadlines</h3>
              <p className="text-sm text-slate-300">
                Most consumer courts have limitation periods (typically 2 years
                from the date of cause of action). Don&apos;t delay — file
                promptly.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Use Social Media Wisely
              </h3>
              <p className="text-sm text-slate-300">
                Public complaints on social media often get faster responses.
                But stick to facts and avoid defamatory statements. Your goal is
                resolution, not escalation.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                Don&apos;t Accept Less Than You&apos;re Owed
              </h3>
              <p className="text-sm text-slate-300">
                Companies often offer small vouchers or partial refunds to make
                you go away. Know your rights and don&apos;t settle for less
                than what the law entitles you to.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Help Others</h3>
              <p className="text-sm text-slate-300">
                Share your experience (factually) to warn other consumers.
                Regulatory agencies use complaint patterns to identify
                companies for investigation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
