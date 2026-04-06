export interface Case {
  slug: string;
  title: string;
  company: string;
  country: "India" | "United States" | "United Kingdom";
  countryCode: "IN" | "US" | "UK";
  category: string;
  year: string;
  amount: string;
  agency: string;
  status: "Settled" | "Pending" | "Convicted" | "Order Issued" | "Completed" | "Ongoing";
  summary: string;
  fullStory: string;
  courtOrder: string;
  outcome: string;
  consumerImpact: string;
  featured?: boolean;
}

export const cases: Case[] = [
  // ============================================================
  // UNITED STATES CASES
  // ============================================================
  {
    slug: "wells-fargo-fake-accounts",
    title: "Wells Fargo Opens 3.5 Million Fake Accounts Without Customer Consent",
    company: "Wells Fargo",
    country: "United States",
    countryCode: "US",
    category: "Banking Fraud",
    year: "2016-2022",
    amount: "$3.7 Billion",
    agency: "CFPB, OCC",
    status: "Settled",
    summary:
      "Wells Fargo employees opened approximately 3.5 million unauthorized bank and credit card accounts in customers' names to meet aggressive sales targets, charging fees on accounts customers never requested.",
    fullStory: `Wells Fargo, one of America's largest banks, was caught in one of the most egregious consumer fraud scandals in modern banking history. Between 2011 and 2016, bank employees — under intense pressure to meet unrealistic sales quotas — opened approximately 3.5 million deposit and credit card accounts without customers' knowledge or consent.

Customers were charged fees on accounts they never opened. Some had their credit scores damaged. Others discovered unauthorized accounts only when they received unexpected debit cards or were hit with overdraft fees on accounts they didn't know existed.

The fraud was systemic. Employees forged signatures, created fake email addresses, and moved customer funds between accounts to hit cross-selling targets. Whistleblowers who tried to report the misconduct were fired. The bank's "eight is great" sales culture — pushing employees to sell eight products per customer — created a toxic environment where fraud became the only way to survive.

Over 5,300 employees were fired for their involvement, but critics noted that senior executives who designed and enforced the sales targets faced little accountability initially. CEO John Stumpf eventually resigned in October 2016 and was personally fined $17.5 million by the OCC. The bank clawed back $69 million in compensation from Stumpf and former head of community banking Carrie Tolstedt.`,
    courtOrder:
      "In December 2022, the CFPB issued a consent order requiring Wells Fargo to pay $3.7 billion — including $2 billion in consumer redress and a $1.7 billion civil penalty. The Federal Reserve imposed an unprecedented asset cap on the bank in 2018, limiting its growth until it could demonstrate improved governance. The asset cap remained in place as of early 2025.",
    outcome:
      "$3.7 billion total penalties. $2 billion in direct consumer redress. Federal Reserve asset cap still in place. CEO resigned and personally fined.",
    consumerImpact:
      "Millions of customers received refunds for unauthorized fees. The scandal led to significant banking reform discussions and strengthened CFPB oversight of major financial institutions.",
    featured: true,
  },
  {
    slug: "epic-games-fortnite-dark-patterns",
    title: "Epic Games Fined $520 Million for Tricking Children Into Purchases",
    company: "Epic Games",
    country: "United States",
    countryCode: "US",
    category: "Children's Privacy / Dark Patterns",
    year: "2022",
    amount: "$520 Million",
    agency: "FTC",
    status: "Settled",
    summary:
      "Epic Games used dark patterns to trick Fortnite players, including children, into making unwanted purchases and violated children's privacy laws (COPPA).",
    fullStory: `The FTC alleged that Epic Games, maker of the wildly popular game Fortnite, employed manipulative "dark pattern" design techniques to trick players — many of whom were children — into making unintended purchases. The game's interface was deliberately designed so that common, innocent actions like pressing a button to wake the game from sleep mode could trigger purchases.

Players, including minors, were charged for items they didn't want. When parents disputed these unauthorized charges with their credit card companies, Epic locked the entire accounts — effectively holding their purchased content hostage unless they agreed to drop the dispute.

Additionally, Epic violated the Children's Online Privacy Protection Act (COPPA) by collecting personal information from children under 13 without parental consent. The company enabled live voice and text chat for children and teens by default, exposing them to harassment, bullying, and contact from strangers.

Internal documents showed that Epic employees had raised concerns about the confusing purchase flow, but the company did not make meaningful changes because the existing design was profitable.`,
    courtOrder:
      "In December 2022, the FTC announced a $520 million settlement — $275 million in COPPA penalties (the largest ever at the time) and $245 million in refunds to consumers who were charged through dark patterns.",
    outcome:
      "$520 million total. $275 million COPPA penalty. $245 million in consumer refunds distributed.",
    consumerImpact:
      "Refunds were distributed to affected consumers. The case set a precedent for holding game companies accountable for manipulative design targeting children.",
    featured: true,
  },
  {
    slug: "facebook-meta-cambridge-analytica",
    title: "Facebook Hit With Record $5 Billion Fine Over Cambridge Analytica Privacy Breach",
    company: "Facebook (Meta)",
    country: "United States",
    countryCode: "US",
    category: "Data Privacy",
    year: "2019",
    amount: "$5 Billion",
    agency: "FTC",
    status: "Settled",
    summary:
      "Facebook violated a 2012 consent decree by allowing Cambridge Analytica to harvest data of 87 million users without consent, resulting in the largest privacy fine in FTC history.",
    fullStory: `In 2018, it was revealed that Cambridge Analytica, a British political consulting firm, had harvested the personal data of up to 87 million Facebook users without their knowledge or consent. The data was collected through a personality quiz app, and Facebook's lax policies allowed the app developer to access not just the quiz-takers' data but also the data of all their friends.

This data was allegedly used to build psychological profiles of voters and target them with political advertising during the 2016 U.S. presidential election and the Brexit campaign.

The FTC found that Facebook had violated a 2012 consent decree that specifically required the company to get users' consent before sharing their data beyond their privacy settings. Despite this binding agreement, Facebook failed to vet third-party app developers, misrepresented the degree of access third parties had to user data, and did not adequately monitor compliance with its own policies.

The breach exposed the fundamental tension between Facebook's business model — which depends on collecting and monetizing user data — and user privacy expectations.`,
    courtOrder:
      "The FTC imposed a $5 billion civil penalty — the largest privacy-related fine in history. Facebook was also required to restructure its privacy program, establish an independent privacy committee on its board of directors, and submit to regular third-party assessments of its privacy practices.",
    outcome:
      "$5 billion penalty. Mandatory privacy restructuring. Independent board-level privacy oversight required.",
    consumerImpact:
      "The case raised global awareness about data privacy and led to increased scrutiny of tech companies' data practices. It contributed to momentum for privacy legislation worldwide.",
  },
  {
    slug: "equifax-data-breach",
    title: "Equifax Data Breach Exposes 147 Million Americans' Personal Information",
    company: "Equifax",
    country: "United States",
    countryCode: "US",
    category: "Data Breach",
    year: "2017-2019",
    amount: "$700 Million",
    agency: "FTC, CFPB, State AGs",
    status: "Settled",
    summary:
      "Equifax failed to patch a known security vulnerability, leading to a massive data breach exposing Social Security numbers, birth dates, and addresses of 147 million Americans.",
    fullStory: `In September 2017, Equifax — one of the three major credit reporting agencies — disclosed that hackers had exploited a known vulnerability in its web application software (Apache Struts) to steal the personal information of approximately 147 million Americans. The stolen data included Social Security numbers, birth dates, addresses, and in some cases, driver's license numbers and credit card numbers.

What made the breach particularly outrageous was that a patch for the vulnerability had been available for two months before the breach occurred, but Equifax failed to apply it. The company's security practices were found to be grossly inadequate — it was essentially entrusted with the most sensitive financial data of half the American population but failed to implement basic cybersecurity measures.

Making matters worse, Equifax executives sold nearly $1.8 million in company stock after the breach was discovered internally but before it was disclosed to the public. The company also bungled its response, initially directing consumers to a website that was itself riddled with security flaws.

Consumers had no choice in Equifax collecting their data — the credit reporting system operates without consumer consent — making the breach a particularly stark example of corporate negligence affecting people who had no direct relationship with the company.`,
    courtOrder:
      "In July 2019, Equifax agreed to a settlement of up to $700 million — $425 million for a consumer restitution fund, $175 million to states, and a $100 million CFPB penalty. Consumers could claim up to $20,000 for documented losses or receive free credit monitoring.",
    outcome:
      "$700 million total settlement. $425 million consumer restitution. Free credit monitoring for affected consumers.",
    consumerImpact:
      "The breach affected nearly half of all Americans. It led to widespread identity theft concerns and contributed to stronger data breach notification laws and cybersecurity regulations.",
  },
  {
    slug: "volkswagen-dieselgate",
    title: "Volkswagen's $30 Billion Emissions Fraud: Dieselgate Scandal",
    company: "Volkswagen",
    country: "United States",
    countryCode: "US",
    category: "Consumer & Environmental Fraud",
    year: "2015-2017",
    amount: "$30+ Billion",
    agency: "DOJ, EPA, FTC, State AGs",
    status: "Completed",
    summary:
      "Volkswagen installed 'defeat devices' in 11 million diesel vehicles worldwide that cheated emissions tests while emitting up to 40x legal pollution limits during normal driving.",
    fullStory: `In September 2015, the U.S. Environmental Protection Agency revealed that Volkswagen had installed sophisticated "defeat device" software in approximately 11 million diesel vehicles worldwide — about 500,000 in the United States. The software detected when the car was undergoing emissions testing and activated full pollution controls. During normal driving, the controls were deactivated, and the vehicles emitted nitrogen oxides (NOx) at up to 40 times the legal limit.

VW had marketed these vehicles as "clean diesel" — environmentally friendly alternatives that offered both performance and low emissions. Consumers who paid premium prices specifically because of the environmental claims had been deliberately deceived.

The fraud was not the work of a few rogue engineers. Investigations revealed that the defeat device program had been authorized by senior management and involved dozens of employees across multiple departments over nearly a decade. Internal emails showed that employees raised concerns but were overruled by management prioritizing cost savings over compliance.

The scandal's impact extended beyond financial fraud — the excess emissions were estimated to have caused thousands of premature deaths globally due to increased air pollution.

Several VW executives were criminally charged. Former CEO Martin Winterkorn was indicted in the U.S. (though Germany declined to extradite him). Engineer James Liang was sentenced to 40 months in prison. Manager Oliver Schmidt was sentenced to 7 years.`,
    courtOrder:
      "VW agreed to over $30 billion in global settlements. In the U.S.: a $14.7 billion consumer settlement (vehicle buybacks at pre-scandal value plus $5,100-$10,000 per owner), a $2.8 billion criminal fine, and a $1.5 billion FTC settlement for deceptive advertising. Multiple executives were criminally charged and convicted.",
    outcome:
      "$30+ billion globally. Vehicle buybacks. Criminal convictions of executives. Largest auto industry scandal in history.",
    consumerImpact:
      "500,000 U.S. car owners received buybacks or fixes plus compensation. The scandal accelerated the global shift toward electric vehicles and strengthened emissions testing worldwide.",
    featured: true,
  },
  {
    slug: "amazon-prime-dark-patterns",
    title: "FTC Sues Amazon Over Prime Subscription Dark Patterns",
    company: "Amazon",
    country: "United States",
    countryCode: "US",
    category: "Subscription Traps",
    year: "2023",
    amount: "Pending",
    agency: "FTC",
    status: "Pending",
    summary:
      "The FTC sued Amazon alleging it used manipulative design to enroll consumers into Prime subscriptions without clear consent and made cancellation intentionally difficult.",
    fullStory: `In June 2023, the FTC filed a lawsuit against Amazon alleging the company used deceptive design practices — known as "dark patterns" — to trick millions of consumers into enrolling in Amazon Prime subscriptions and then deliberately made the cancellation process extremely confusing and burdensome.

According to the FTC, Amazon's sign-up process was designed to push consumers toward Prime enrollment through strategically placed prompts during the checkout flow. Many consumers were enrolled without clearly understanding they were signing up for a paid recurring subscription.

The cancellation process was even more problematic. Internally, Amazon referred to its cancellation flow as "Iliad" — a reference to Homer's epic poem about a long, arduous journey. The process required consumers to navigate through multiple pages of offers, warnings, and confusing options before they could actually cancel. Each page was designed to convince the user to keep their subscription, with the actual cancellation option made deliberately hard to find.

Internal documents revealed that Amazon employees had raised concerns about these practices, and the company had resisted simplifying the cancellation process because it would increase the rate of cancellations. When the FTC began its investigation, Amazon allegedly took steps to delay the investigation and frustrate the regulatory process.`,
    courtOrder:
      "Litigation was filed in June 2023 in U.S. District Court for the Western District of Washington. Amazon contested jurisdiction and sought to dismiss. The case was proceeding through litigation as of early 2025.",
    outcome:
      "Pending litigation. The case could result in significant penalties and forced changes to Amazon's subscription practices.",
    consumerImpact:
      "The case highlights the growing problem of subscription traps across the tech industry and could set important precedent for how companies design sign-up and cancellation flows.",
  },
  {
    slug: "vonage-subscription-trap",
    title: "Vonage Ordered to Pay $100 Million for Trapping Customers in Subscriptions",
    company: "Vonage",
    country: "United States",
    countryCode: "US",
    category: "Subscription Traps",
    year: "2022",
    amount: "$100 Million",
    agency: "FTC",
    status: "Settled",
    summary:
      "Vonage made it extremely difficult for customers to cancel service, charged hidden fees, and continued billing customers after they attempted to cancel.",
    fullStory: `The FTC alleged that Vonage, a major Voice over Internet Protocol (VoIP) provider, deliberately erected barriers to prevent customers from canceling their service. The company hid its cancellation process, making it nearly impossible to cancel online. Customers who tried to cancel by phone were subjected to long hold times and aggressive retention tactics.

Even when customers managed to navigate the cancellation obstacle course, Vonage continued to charge them. The company also imposed early termination fees that were not clearly disclosed at the time of sign-up.

Consumers reported spending hours trying to cancel, being transferred between departments, having their cancellation requests "lost," and discovering continued charges on their credit card statements months after they believed they had canceled.

The case was one of several FTC actions targeting "negative option" practices where companies make it easy to sign up but deliberately difficult to cancel.`,
    courtOrder:
      "In November 2022, the FTC ordered Vonage to pay $100 million. The company was required to simplify its cancellation process, stop charging customers without consent, and provide refunds to affected consumers.",
    outcome:
      "$100 million penalty and consumer refunds. Mandatory cancellation process simplification.",
    consumerImpact:
      "The case contributed to the FTC's broader crackdown on subscription traps, ultimately leading to the 'Click-to-Cancel' rule finalized in October 2024.",
  },
  {
    slug: "navient-student-loans",
    title: "Navient's $1.85 Billion Settlement for Student Loan Servicing Abuse",
    company: "Navient",
    country: "United States",
    countryCode: "US",
    category: "Predatory Lending",
    year: "2022",
    amount: "$1.85 Billion",
    agency: "CFPB, State AGs",
    status: "Settled",
    summary:
      "Navient steered struggling student loan borrowers into costly forbearance instead of affordable repayment plans, causing them to pay far more than necessary.",
    fullStory: `Navient Corporation, one of the largest student loan servicers in the United States, was accused of systematically failing the borrowers it was supposed to help. The CFPB and multiple state attorneys general alleged that Navient engaged in years of abusive practices affecting millions of student loan borrowers.

Instead of helping struggling borrowers enroll in income-driven repayment plans — which could have significantly reduced their monthly payments — Navient steered them into forbearance. While forbearance temporarily pauses payments, interest continues to accrue, dramatically increasing the total amount owed. For Navient, forbearance was easier and cheaper to process than income-driven repayment, which required more staff time.

The result was devastating for borrowers. Many saw their loan balances balloon even as they thought they were receiving help. Some borrowers who should have qualified for loan forgiveness programs were never informed of their options. Others had their payments processed incorrectly, leading to late fees and damaged credit scores.

The case highlighted how the student loan servicing industry's profit incentives were fundamentally misaligned with borrowers' interests — servicers were paid the same regardless of whether they provided good or bad service, and cutting corners saved them money while costing borrowers thousands.`,
    courtOrder:
      "In the 2022 state AG settlement, Navient agreed to pay $1.85 billion — including $1.7 billion in private student loan cancellation for approximately 66,000 borrowers and $95 million in restitution payments. The CFPB's separate federal case resulted in a consent order with $120 million in restitution.",
    outcome:
      "$1.85 billion settlement. $1.7 billion in loan cancellation. $95 million in direct restitution. 66,000 borrowers received loan forgiveness.",
    consumerImpact:
      "Tens of thousands of borrowers received loan cancellation and refunds. The case contributed to broader reforms in student loan servicing and forgiveness programs.",
  },
  {
    slug: "google-location-tracking",
    title: "Google Pays $391.5 Million for Secretly Tracking Users' Locations",
    company: "Google",
    country: "United States",
    countryCode: "US",
    category: "Data Privacy",
    year: "2022",
    amount: "$391.5 Million",
    agency: "40 State AGs",
    status: "Settled",
    summary:
      "Google continued tracking users' locations even after they turned off 'Location History,' because a separate hidden setting still collected the data.",
    fullStory: `A coalition of 40 state attorneys general alleged that Google deceived consumers about its location tracking practices. Users who disabled "Location History" in their Google account settings reasonably believed they had turned off location tracking. However, Google continued to collect location data through a separate setting called "Web & App Activity" — and the company did not clearly disclose this.

The investigation was triggered by a 2018 Associated Press investigation that revealed Google's Android phones and many Google apps store location data even when users explicitly turn off the "Location History" feature. Google's own support pages had stated that "with Location History off, the places you go are no longer stored" — a claim the AGs found to be misleading.

Location data is among the most sensitive types of personal information. It can reveal where people live, work, worship, seek medical care, attend protests, and maintain personal relationships. Google used this data to sell targeted advertising — a business worth over $200 billion annually.

The case demonstrated how tech companies can use confusing settings and buried options to continue collecting valuable data even when users believe they have opted out.`,
    courtOrder:
      "In November 2022, Google agreed to a $391.5 million settlement — the largest multi-state attorney general privacy settlement at the time. Google was required to improve its disclosures about location tracking, show additional information to users when they turn location-related settings on and off, and provide a dedicated webpage with comprehensive information about the data it collects.",
    outcome:
      "$391.5 million settlement. Mandatory improved privacy disclosures. Enhanced user controls.",
    consumerImpact:
      "The settlement forced Google to be more transparent about its data collection practices and gave users clearer information about what data is being collected and how to control it.",
  },
  {
    slug: "southwest-airlines-meltdown",
    title: "Southwest Airlines Hit With Record $140 Million Penalty for Holiday Meltdown",
    company: "Southwest Airlines",
    country: "United States",
    countryCode: "US",
    category: "Airlines",
    year: "2022-2023",
    amount: "$140 Million + $600 Million refunds",
    agency: "DOT",
    status: "Settled",
    summary:
      "Southwest's catastrophic operational failure during December 2022 stranded 2 million passengers with 17,000 canceled flights, earning the largest airline penalty in DOT history.",
    fullStory: `During the December 2022 holiday season, Southwest Airlines experienced a catastrophic operational meltdown that lasted 10 days and resulted in the cancellation of nearly 17,000 flights. Approximately 2 million passengers were stranded, many in unfamiliar cities with no luggage, no hotel rooms, and no way to reach their destinations.

While a winter storm initially disrupted operations across the airline industry, other carriers recovered within a day or two. Southwest's outdated scheduling technology and crew management systems completely collapsed, creating a cascading failure that the airline could not resolve for over a week.

Passengers described harrowing experiences: sleeping on airport floors, waiting hours to reach customer service, being unable to rebook flights, losing luggage for weeks, missing family celebrations and weddings, and incurring thousands of dollars in unexpected expenses for hotels, rental cars, and last-minute flights on other airlines.

The DOT investigation found that Southwest's problems were not just caused by the weather but by years of underinvestment in technology and infrastructure. The airline had been warned about the vulnerabilities in its scheduling systems but had not made the necessary upgrades.

Southwest's customer service also failed spectacularly during the crisis — phone lines were overwhelmed, the website crashed, and passengers at airports received contradictory and unhelpful information.`,
    courtOrder:
      "The DOT imposed a $140 million civil penalty — the largest airline penalty in DOT history. In addition to the penalty, Southwest paid over $600 million in refunds, reimbursements, and travel vouchers directly to affected passengers.",
    outcome:
      "$140 million DOT penalty (record). $600+ million in direct consumer refunds and reimbursements. Total cost to Southwest exceeded $1 billion.",
    consumerImpact:
      "The case led to DOT proposing new rules requiring automatic refunds for canceled flights and banning airlines from hiding fees. It demonstrated the real-world consequences of corporate underinvestment in essential systems.",
  },
  {
    slug: "ftx-crypto-fraud",
    title: "FTX Founder Sentenced to 25 Years for $8 Billion Crypto Fraud",
    company: "FTX",
    country: "United States",
    countryCode: "US",
    category: "Crypto/Fintech Fraud",
    year: "2022-2024",
    amount: "$8 Billion",
    agency: "DOJ, SEC, CFTC",
    status: "Convicted",
    summary:
      "FTX, one of the world's largest crypto exchanges, collapsed after $8 billion in customer funds were secretly transferred to founder Sam Bankman-Fried's hedge fund.",
    fullStory: `In November 2022, FTX — one of the world's largest cryptocurrency exchanges — collapsed in spectacular fashion, revealing that approximately $8 billion in customer funds had been misappropriated. Founder Sam Bankman-Fried (SBF) had secretly transferred customer deposits to his hedge fund, Alameda Research, where the money was used for speculative investments, political donations, luxury real estate purchases, and personal expenses.

FTX had presented itself as the responsible, trustworthy face of cryptocurrency. SBF was a frequent presence in Washington, D.C., lobbying for crypto regulation while privately running what prosecutors described as "one of the biggest financial frauds in American history." He cultivated an image as an altruistic billionaire committed to "effective altruism" while secretly stealing billions from customers.

When questions about FTX's financial health surfaced in November 2022, the exchange experienced a bank run and quickly became insolvent. Customers who tried to withdraw their funds found they could not — the money was gone. Many lost their life savings.

The collapse also triggered a broader crypto market downturn, wiping out billions in value across the industry and devastating retail investors who had trusted the platform with their money.`,
    courtOrder:
      "Sam Bankman-Fried was convicted on all 7 counts including wire fraud, conspiracy, and money laundering in November 2023. He was sentenced to 25 years in federal prison in March 2024. The FTX bankruptcy estate recovered substantial assets and began distributing funds to creditors.",
    outcome:
      "25-year prison sentence for founder. 7 criminal convictions. Bankruptcy proceedings recovering assets for creditor distribution.",
    consumerImpact:
      "Millions of customers lost access to billions in funds. The case accelerated calls for comprehensive cryptocurrency regulation and demonstrated the risks of unregulated financial platforms.",
    featured: true,
  },
  {
    slug: "dish-network-robocalls",
    title: "Dish Network Fined $280 Million for Millions of Illegal Robocalls",
    company: "Dish Network",
    country: "United States",
    countryCode: "US",
    category: "Robocalls / Do Not Call Violations",
    year: "2017",
    amount: "$280 Million",
    agency: "DOJ, FTC",
    status: "Completed",
    summary:
      "Dish Network and its telemarketers made millions of illegal robocalls to numbers on the Do Not Call Registry to sell satellite TV subscriptions.",
    fullStory: `The DOJ and FTC alleged that Dish Network and its telemarketing contractors conducted a massive campaign of illegal telephone solicitations. The company and its agents made millions of calls to phone numbers on the National Do Not Call Registry, called consumers who had specifically asked not to be contacted, and used pre-recorded messages without consent.

The calls were not just annoying — they violated federal law. The Telephone Consumer Protection Act (TCPA) and FTC Telemarketing Sales Rule specifically prohibit calling numbers on the Do Not Call Registry and using robocalls without prior express consent.

Dish argued that it was not responsible for the calls made by its independent contractors. But the court found that Dish had authorized and was aware of the calling practices, and could not shield itself from liability by outsourcing the illegal conduct to third parties.

The case was significant because it established that companies cannot escape liability for illegal telemarketing simply by hiring outside firms to make the calls.`,
    courtOrder:
      "The court imposed a judgment of $280 million — one of the largest penalties ever for Do Not Call / TCPA violations. The judgment was upheld on appeal.",
    outcome:
      "$280 million judgment. Companies cannot escape telemarketing liability through third-party contractors.",
    consumerImpact:
      "The ruling strengthened enforcement against robocalls and established important precedent about corporate accountability for outsourced telemarketing.",
  },
  {
    slug: "kia-hyundai-theft-defect",
    title: "Kia and Hyundai Pay $200 Million for Cars That Could Be Stolen With a USB Cable",
    company: "Kia / Hyundai",
    country: "United States",
    countryCode: "US",
    category: "Product Defect",
    year: "2022-2024",
    amount: "$200 Million",
    agency: "Class Action, NHTSA",
    status: "Settled",
    summary:
      "9 million Kia and Hyundai vehicles lacked basic anti-theft technology, leading to a viral theft trend and skyrocketing car thefts nationwide.",
    fullStory: `Approximately 9 million Kia and Hyundai vehicles manufactured between 2011 and 2022 were sold without engine immobilizer anti-theft technology — a basic security feature standard in virtually all other modern vehicles. The omission was a cost-cutting measure.

In 2022, a viral TikTok trend dubbed the "Kia Boys" demonstrated how these vehicles could be stolen using nothing more than a USB cable and a screwdriver. The videos went viral, and thefts of Kia and Hyundai vehicles skyrocketed nationwide. Some cities reported increases of over 800% in thefts of these specific vehicles.

Vehicle owners — many of whom were unaware their cars lacked basic security features — faced devastating consequences. Cars were stolen, crashed, and totaled. Insurance rates skyrocketed. Some owners found their vehicles uninsurable. Others were stuck with car payments on stolen vehicles.

Multiple cities, including New York City, Chicago, and St. Louis, filed separate lawsuits against the automakers, arguing that the theft epidemic was straining police resources and endangering public safety.

The automakers initially responded slowly, offering only a steering wheel lock as a remedy. It wasn't until sustained public pressure and regulatory attention that they developed a software update to address the vulnerability.`,
    courtOrder:
      "In 2024, a national class action settlement of $200 million was approved. Kia and Hyundai were required to provide free anti-theft software updates, reimburse owners for stolen vehicles, and compensate for increased insurance costs and other losses.",
    outcome:
      "$200 million class action settlement. Free software updates. Reimbursement for theft-related losses. Multiple city lawsuits also filed.",
    consumerImpact:
      "Millions of vehicle owners received free security upgrades. The case highlighted how cost-cutting decisions can have devastating consequences for consumers and communities.",
  },
  {
    slug: "t-mobile-data-breaches",
    title: "T-Mobile Hit With $350 Million Settlement After Exposing 76 Million Customers' Data",
    company: "T-Mobile",
    country: "United States",
    countryCode: "US",
    category: "Data Breach",
    year: "2021-2024",
    amount: "$350+ Million",
    agency: "FCC, Class Action",
    status: "Settled",
    summary:
      "A series of massive data breaches at T-Mobile exposed names, Social Security numbers, and driver's license information of over 76 million customers.",
    fullStory: `T-Mobile suffered a devastating series of data breaches between 2021 and 2023, with the 2021 breach being the most severe — affecting 76.6 million current, former, and prospective customers. The stolen data included names, Social Security numbers, driver's license information, dates of birth, and other sensitive personal information.

What made T-Mobile's situation particularly egregious was the pattern. This wasn't an isolated incident — T-Mobile experienced multiple major breaches in quick succession (2021, 2022, and 2023), suggesting systemic failures in the company's cybersecurity infrastructure.

Affected customers faced the risk of identity theft, fraudulent accounts being opened in their names, and years of credit monitoring requirements. Many consumers expressed frustration that a major telecommunications company trusted with vast amounts of personal data repeatedly failed to protect it.

The FCC investigation found that T-Mobile's security practices were inadequate relative to the sensitivity and volume of data it maintained.`,
    courtOrder:
      "The FCC imposed a $31.5 million penalty in 2024 — half as a fine and half required to be invested in cybersecurity improvements. A class action settlement of $350 million was approved in 2022. T-Mobile also committed to spending $150 million on cybersecurity upgrades.",
    outcome:
      "$350 million class action settlement. $31.5 million FCC penalty. $150 million mandatory cybersecurity investment.",
    consumerImpact:
      "Affected customers received payments from the class action settlement and free identity theft protection. The case underscored the need for stronger data security standards in the telecom industry.",
  },
  {
    slug: "publishers-clearing-house",
    title: "Publishers Clearing House Pays $18.5 Million for Deceiving Elderly Consumers",
    company: "Publishers Clearing House",
    country: "United States",
    countryCode: "US",
    category: "Deceptive Practices",
    year: "2023",
    amount: "$18.5 Million",
    agency: "FTC",
    status: "Settled",
    summary:
      "PCH used dark patterns to deceive consumers — particularly older adults — into believing that purchasing products would increase their chances of winning sweepstakes prizes.",
    fullStory: `The FTC alleged that Publishers Clearing House (PCH) used deceptive online design to mislead consumers — particularly older adults — into making purchases they didn't need. PCH's websites and emails created the strong impression that buying products would improve the consumer's chances of winning sweepstakes prizes, even though no purchase was necessary to enter.

The deceptive design was specifically targeted at vulnerable populations. Order pages prominently displayed sweepstakes entry information alongside product ordering, making it difficult to distinguish between entering the sweepstakes and making a purchase. "Buy now" buttons were presented more prominently than "free entry" options.

Older Americans were disproportionately affected, with some spending thousands of dollars on products they didn't want in the belief that it would help them win. The FTC found that PCH's practices constituted unfair and deceptive business practices.`,
    courtOrder:
      "In 2023, PCH agreed to pay $18.5 million for consumer redress. The company was required to clearly and prominently disclose that no purchase is necessary to enter sweepstakes and to stop using dark patterns that blur the line between purchases and sweepstakes entries.",
    outcome:
      "$18.5 million in consumer refunds. Required clear disclosure that no purchase necessary.",
    consumerImpact:
      "Refunds distributed to affected consumers. The case highlighted the vulnerability of elderly consumers to deceptive online practices.",
  },

  // ============================================================
  // INDIA CASES
  // ============================================================
  {
    slug: "byjus-refund-crisis",
    title: "BYJU'S Refuses Refunds to Thousands of Parents, Faces Consumer Court Orders",
    company: "BYJU'S (Think & Learn)",
    country: "India",
    countryCode: "IN",
    category: "Ed-Tech Fraud",
    year: "2021-2024",
    amount: "Multiple Orders",
    agency: "Consumer Courts, NCPCR, MCA",
    status: "Ongoing",
    summary:
      "India's largest ed-tech company aggressively sold expensive courses to low-income families, refused refunds, and used predatory lending practices through partner NBFCs.",
    fullStory: `BYJU'S, once India's most valuable startup (valued at $22 billion), became the subject of thousands of consumer complaints across India. The company's aggressive sales tactics targeted low-income and rural families, convincing them to sign up for expensive courses costing Rs 50,000 to Rs 1,50,000 or more — often through EMI (equated monthly installment) arrangements with partner non-banking financial companies (NBFCs).

Sales representatives made house visits to families, demonstrated the product to children, and pressured parents to sign up on the spot. Many parents were not fully informed about the loan agreements they were signing — in some cases, loans were activated on their phones while they believed they were just viewing a demo.

When parents tried to cancel within the cooling-off period or requested refunds due to unsatisfactory service, BYJU'S either ignored requests, made the refund process deliberately difficult, or outright refused. Many families — some earning less than Rs 15,000 per month — found themselves trapped in EMI payments for courses their children weren't using.

The National Commission for Protection of Child Rights (NCPCR) received numerous complaints and issued notices to BYJU'S. Multiple consumer forum cases were filed across India, with several courts ordering refunds with compensation. The company's financial troubles worsened in 2023-2024, making refunds even more difficult to obtain.`,
    courtOrder:
      "Multiple District and State Consumer Commissions across India ordered BYJU'S to refund consumers. The NCPCR issued notices regarding aggressive marketing to children. In several cases, courts awarded compensation beyond the refund amount for mental harassment and unfair trade practices.",
    outcome:
      "Multiple court orders for refunds. NCPCR intervention. Company faced severe financial crisis. BYJU'S valuation crashed from $22 billion to near zero.",
    consumerImpact:
      "Thousands of low-income Indian families were trapped in loans for ed-tech products they couldn't use. The case exposed the predatory nature of India's ed-tech sales practices and led to calls for regulation of the sector.",
    featured: true,
  },
  {
    slug: "whitehat-jr-misleading-ads",
    title: "WhiteHat Jr Sued for Fake Success Stories and Misleading Advertisements",
    company: "WhiteHat Jr (BYJU'S subsidiary)",
    country: "India",
    countryCode: "IN",
    category: "Ed-Tech Fraud",
    year: "2020-2022",
    amount: "Rs 20 Crore+ (defamation suit filed against critic)",
    agency: "Consumer Forums, ASCI",
    status: "Ongoing",
    summary:
      "WhiteHat Jr used fabricated success stories of child prodigies and fake advertisements to sell expensive coding courses to parents of young children.",
    fullStory: `WhiteHat Jr, a coding education platform for children aged 6-18 (acquired by BYJU'S for $300 million), came under intense scrutiny for using fabricated success stories in its advertising. The company ran advertisements featuring a child named "Wolf Gupta" who had supposedly built an app and received a job offer from Google — a story that was entirely made up.

The company's aggressive advertising claimed that children as young as 6 could learn to code, build apps, and land jobs at tech companies. These claims were misleading and created unrealistic expectations among parents, many of whom spent Rs 1-3 lakhs on course packages.

When tech professional Pradeep Poonia publicly criticized WhiteHat Jr's misleading advertisements and business practices on social media and YouTube, the company filed a Rs 20 crore defamation suit against him and aggressively used legal notices and takedown requests to silence criticism. This legal bullying of a whistleblower drew widespread condemnation.

The Advertising Standards Council of India (ASCI) found multiple WhiteHat Jr advertisements to be misleading and ordered them to be modified or withdrawn. Numerous parents filed complaints about the quality of education, aggressive sales tactics, and difficulty obtaining refunds.`,
    courtOrder:
      "ASCI ordered WhiteHat Jr to withdraw multiple misleading advertisements. The Rs 20 crore defamation suit against Pradeep Poonia was widely criticized as a SLAPP suit. Multiple consumer forum complaints resulted in refund orders.",
    outcome:
      "Misleading ads ordered withdrawn by ASCI. Whistleblower faced Rs 20 crore defamation suit. Multiple consumer forum refund orders.",
    consumerImpact:
      "Thousands of parents spent lakhs on courses that didn't deliver on promises. The case highlighted the lack of regulation in India's ed-tech sector and the use of legal threats to silence consumer advocates.",
  },
  {
    slug: "amrapali-group-real-estate",
    title: "Amrapali Group: 42,000 Homebuyers Cheated of Rs 3,000+ Crore",
    company: "Amrapali Group",
    country: "India",
    countryCode: "IN",
    category: "Real Estate Fraud",
    year: "2019",
    amount: "Rs 3,000+ Crore",
    agency: "Supreme Court of India",
    status: "Order Issued",
    summary:
      "Real estate giant Amrapali collected thousands of crores from homebuyers but diverted funds to shell companies, leaving 42,000 families without homes they had paid for.",
    fullStory: `The Amrapali Group, a major real estate developer in the National Capital Region (NCR), perpetrated one of India's largest real estate frauds. Over 42,000 homebuyers had booked apartments in various Amrapali projects across Noida and Greater Noida, paying substantial amounts — in many cases, their life savings.

Instead of using the buyers' money to complete construction, the company's directors — Anil Kumar Sharma, Shiv Priya, and Ajay Kumar — siphoned off over Rs 3,000 crore to 652 shell companies, personal accounts, and unrelated ventures. Projects that were promised for delivery in 2014-2016 remained incomplete, with many buyers having paid 90-100% of the apartment cost.

Families who had taken home loans were paying EMIs on apartments that didn't exist while also paying rent elsewhere. Many had used their retirement savings or borrowed from relatives. The financial and emotional toll was devastating.

The case went all the way to the Supreme Court of India, which conducted a forensic audit through NBCC (National Buildings Construction Corporation). The audit revealed the massive diversion of funds and the complete hollowing out of the company.

The Supreme Court's involvement was extraordinary — it took the rare step of canceling the company's RERA registration, attaching the personal properties of the directors, and directing a government agency (NBCC) to complete the pending projects.`,
    courtOrder:
      "In July 2019, the Supreme Court of India delivered a landmark judgment: it cancelled Amrapali Group's RERA registration, directed NBCC to complete all pending housing projects, ordered the attachment of personal properties of directors, and initiated criminal proceedings against the promoters. The directors were arrested and jailed. The court also directed the Noida/Greater Noida authorities to provide necessary clearances to fast-track construction.",
    outcome:
      "Directors arrested and jailed. NBCC directed to complete 42,000+ apartments. Personal assets of directors attached. Landmark Supreme Court judgment.",
    consumerImpact:
      "The Supreme Court judgment was a landmark for homebuyer rights in India. It established that builders cannot divert homebuyers' funds and set a precedent for government intervention in completing stalled projects. NBCC continues to work on completing the projects.",
    featured: true,
  },
  {
    slug: "unitech-real-estate-fraud",
    title: "Unitech Directors Jailed for Cheating 30,000 Homebuyers",
    company: "Unitech Limited",
    country: "India",
    countryCode: "IN",
    category: "Real Estate Fraud",
    year: "2017-2020",
    amount: "Rs 2,000+ Crore",
    agency: "Supreme Court, NCDRC, ED",
    status: "Order Issued",
    summary:
      "Real estate developer Unitech collected money from 30,000+ homebuyers for apartments across multiple projects but failed to deliver, diverting funds to other businesses.",
    fullStory: `Unitech Limited, once one of India's largest real estate developers, collected thousands of crores from over 30,000 homebuyers across dozens of projects in the NCR region but failed to deliver the promised apartments. The company's promoters, Sanjay Chandra and Ajay Chandra, were accused of diverting homebuyers' funds to unrelated businesses and personal use.

Homebuyers who had invested their life savings waited years beyond promised delivery dates. Many were paying both home loan EMIs and rent, creating crippling financial burdens. Repeated promises of delivery dates came and went without any progress on construction.

The scale of the fraud was staggering — projects across Noida, Greater Noida, and Gurgaon were stalled, affecting families across income levels. Many buyers had pooled money from family members or taken loans they could barely afford, based on the promise of owning their first home.

The Supreme Court intervened, noting that the company's management had "virtually made it a policy to take money from homebuyers and then not deliver." The court took the extraordinary step of removing the existing management and appointing a new board.`,
    courtOrder:
      "The Supreme Court ordered the arrest of Unitech's promoters Sanjay Chandra and Ajay Chandra, who were sent to jail. The court directed the formation of a new board of management to complete the projects. The Enforcement Directorate attached properties worth hundreds of crores. NCDRC and various state commissions ordered refunds with interest in numerous individual cases.",
    outcome:
      "Promoters jailed. New board appointed by Supreme Court. ED attached properties. Multiple refund orders by consumer commissions.",
    consumerImpact:
      "The case, along with Amrapali, led to the strengthening of RERA (Real Estate Regulation Act) enforcement and established that real estate promoters face criminal consequences for cheating homebuyers.",
  },
  {
    slug: "ola-uber-surge-pricing",
    title: "Consumer Courts Order Ola and Uber to Compensate for Surge Pricing Exploitation",
    company: "Ola / Uber India",
    country: "India",
    countryCode: "IN",
    category: "Ride-hailing / Overcharging",
    year: "2016-2023",
    amount: "Multiple Orders",
    agency: "District Consumer Forums",
    status: "Ongoing",
    summary:
      "Multiple consumer courts ordered Ola and Uber to compensate riders for excessive surge pricing, ride cancellations, and overcharging through opaque pricing algorithms.",
    fullStory: `Ride-hailing giants Ola and Uber have faced numerous consumer complaints and court cases across India for surge pricing exploitation, arbitrary ride cancellations, overcharging, and poor grievance redressal.

Consumers have reported being charged 3-5x normal fares during rain, festivals, or peak hours with no transparency about how surge prices are calculated. In many cases, the fare shown at booking differed significantly from the final charge. Drivers frequently cancelled rides, especially for short distances, leaving passengers stranded.

In one notable case, the Chandigarh District Consumer Forum ordered Uber to pay Rs 5,000 in compensation to a customer who was overcharged. In another case, a Hyderabad consumer forum ordered Ola to refund a customer and pay compensation for a ride that was charged at more than double the estimated fare.

The Central Consumer Protection Authority (CCPA) issued notices to both companies regarding their pricing practices. Multiple PIL (Public Interest Litigation) petitions were filed in various High Courts seeking regulation of surge pricing by cab aggregators.

Consumers have also complained about the difficulty of reaching customer service, automated responses that don't address complaints, and the lack of a human point of contact for dispute resolution.`,
    courtOrder:
      "Multiple District Consumer Forums across India (Chandigarh, Hyderabad, Bengaluru, Mumbai) have ordered Ola and Uber to compensate consumers for overcharging and deficient service. The CCPA issued notices regarding unfair pricing practices.",
    outcome:
      "Multiple compensation orders. CCPA notices. Ongoing regulatory scrutiny of surge pricing practices.",
    consumerImpact:
      "While individual compensation amounts are small, the collective cases have created pressure for transparency in ride-hailing pricing and prompted regulatory discussions about capping surge pricing.",
  },
  {
    slug: "air-india-passenger-rights",
    title: "Air India Ordered to Pay Rs 1 Lakh for Denied Boarding and Rude Behavior",
    company: "Air India",
    country: "India",
    countryCode: "IN",
    category: "Airlines",
    year: "2019-2023",
    amount: "Rs 1 Lakh+ (multiple cases)",
    agency: "NCDRC, State Consumer Commissions",
    status: "Order Issued",
    summary:
      "Air India faced multiple consumer court orders for denied boarding, flight cancellations without notice, lost luggage, and rude behavior toward passengers.",
    fullStory: `Air India, India's national carrier, has been the subject of numerous consumer court cases for persistent deficiency in service. Cases range from denied boarding despite confirmed tickets, unexplained flight cancellations, lost and damaged luggage, and rude behavior by airline staff.

In a landmark case, the NCDRC ordered Air India to pay compensation of Rs 1 lakh to a passenger who was denied boarding on a confirmed ticket. In another case, a consumer forum in Delhi ordered Air India to pay Rs 75,000 to a family whose luggage was lost on an international flight, causing significant inconvenience and distress.

A particularly egregious case involved Air India cancelling a flight without adequate notice, leaving passengers stranded at an airport for over 24 hours without food, accommodation, or rebooking assistance. The consumer commission found this to be a gross deficiency in service and awarded compensation.

These cases are significant because they demonstrate that even government-owned entities are not immune to consumer protection law, and passengers have enforceable rights when airlines fail to deliver on their commitments.`,
    courtOrder:
      "NCDRC and various State Consumer Commissions have issued multiple orders against Air India for denied boarding, lost luggage, and cancellations. Compensation amounts range from Rs 25,000 to Rs 5 lakhs depending on the severity of the case.",
    outcome:
      "Multiple compensation orders across consumer commissions nationwide. Precedent set for airline accountability.",
    consumerImpact:
      "These cases established important precedents for air passenger rights in India and encouraged more consumers to seek redress through consumer forums for airline-related grievances.",
  },
  {
    slug: "ldafinance-insurance-claim-denial",
    title: "Insurance Companies Ordered to Pay Lakhs for Wrongful Claim Denials",
    company: "Various Insurance Companies",
    country: "India",
    countryCode: "IN",
    category: "Insurance Fraud",
    year: "2018-2024",
    amount: "Multiple Orders (Rs 5-50 Lakhs)",
    agency: "NCDRC, State Consumer Commissions, IRDAI",
    status: "Ongoing",
    summary:
      "Insurance companies across India systematically deny legitimate health and life insurance claims using technical loopholes, forcing families to fight in consumer courts.",
    fullStory: `Insurance claim denial is one of the most common consumer grievances in India. Companies routinely reject health insurance claims citing "pre-existing conditions" (even when the condition wasn't pre-existing), "non-disclosure" (of conditions the policyholder wasn't aware of), or technicalities in policy terms that were never explained at the time of sale.

In a notable NCDRC case, a health insurer denied a claim for cancer treatment worth Rs 15 lakhs, citing non-disclosure of a minor condition. The NCDRC found that the condition was unrelated and the denial was unjustified, ordering the insurer to pay the claim amount plus Rs 2 lakhs in compensation and Rs 1 lakh in litigation costs.

In another significant case, a life insurance company denied a death claim to the family of a deceased policyholder, citing alleged misrepresentation in the application. The consumer commission found that the insurer's agent had filled out the form and the policyholder could not have known about the medical condition. The commission ordered the insurer to pay the full death benefit plus interest and compensation.

IRDAI (Insurance Regulatory and Development Authority of India) data shows that thousands of insurance complaints are filed annually, with health insurance claims being the most disputed category. Many families are forced to fight years-long battles in consumer courts while dealing with medical emergencies or the loss of a family member.`,
    courtOrder:
      "NCDRC and State Commissions have issued hundreds of orders against insurance companies for wrongful claim denials. In several landmark cases, courts have held that insurers cannot deny claims based on technicalities not explained to the policyholder at the time of sale, and that the benefit of doubt should go to the consumer.",
    outcome:
      "Multiple orders directing insurers to pay claims with interest and compensation. Landmark judgments establishing consumer-friendly interpretation of insurance policies.",
    consumerImpact:
      "Consumer court judgments have created important precedents protecting policyholders from unjust claim denials. However, the process remains slow and many families are forced into lengthy legal battles during medical emergencies.",
  },
  {
    slug: "flipkart-product-swap",
    title: "Consumer Courts Order Flipkart to Compensate for Delivering Fake and Wrong Products",
    company: "Flipkart",
    country: "India",
    countryCode: "IN",
    category: "E-Commerce Fraud",
    year: "2019-2024",
    amount: "Multiple Orders",
    agency: "District Consumer Forums, CCPA",
    status: "Ongoing",
    summary:
      "Flipkart has faced numerous consumer court orders for delivering fake products, wrong items, and refusing refunds, with consumers receiving soap bars instead of phones.",
    fullStory: `Flipkart, India's largest homegrown e-commerce platform, has been the subject of hundreds of consumer complaints and court cases for delivering counterfeit products, wrong items, and empty boxes — followed by denial of refunds.

In one widely reported case, a consumer in Delhi ordered a mobile phone worth Rs 15,000 and received a bar of soap instead. When the consumer complained, Flipkart's automated systems rejected the return request. It was only after the consumer approached a consumer forum that Flipkart was ordered to refund the amount and pay compensation.

Similar cases have been reported across India — consumers ordering electronics and receiving stones, ordering branded clothing and receiving cheap knockoffs, or receiving used/refurbished products marketed as new. The common thread is that Flipkart's automated complaint resolution systems often deny legitimate complaints, and reaching a human customer service agent is nearly impossible.

The Central Consumer Protection Authority (CCPA) has taken cognizance of these issues and directed e-commerce platforms to strengthen their grievance redressal mechanisms and ensure accountability for third-party sellers on their platforms.

Many consumers, especially in smaller cities, lack the knowledge or resources to approach consumer forums, meaning the reported cases represent only a fraction of the actual problem.`,
    courtOrder:
      "Multiple District Consumer Forums have ordered Flipkart to refund consumers and pay compensation ranging from Rs 5,000 to Rs 50,000 for delivering wrong/fake products. CCPA has issued notices regarding consumer protection compliance.",
    outcome:
      "Multiple compensation orders. CCPA notices for platform accountability. Ongoing scrutiny of seller verification practices.",
    consumerImpact:
      "While individual cases result in refunds and compensation, the systemic issue of counterfeit and wrong product deliveries continues, particularly affecting consumers in tier 2 and tier 3 cities.",
  },
  {
    slug: "telecom-overcharging-india",
    title: "Telecom Companies Ordered to Refund for Unauthorized VAS Charges and Data Deductions",
    company: "Jio, Airtel, Vodafone-Idea",
    country: "India",
    countryCode: "IN",
    category: "Telecom Overcharging",
    year: "2017-2024",
    amount: "Multiple Orders",
    agency: "Consumer Forums, TRAI",
    status: "Ongoing",
    summary:
      "Indian telecom companies have been repeatedly ordered to refund customers for unauthorized value-added service (VAS) charges, data deductions, and misleading plan descriptions.",
    fullStory: `India's major telecom operators — including Jio, Airtel, and Vodafone-Idea — have faced extensive consumer complaints about unauthorized charges. The most common grievances include:

1. **Unauthorized VAS (Value Added Services):** Consumers are subscribed to paid services (horoscopes, cricket scores, jokes) without their knowledge or consent, with charges deducted from their prepaid balance or added to postpaid bills.

2. **Data deduction without usage:** Consumers report significant data consumption even when they haven't used the internet, suggesting background data usage by operator-installed apps or inaccurate metering.

3. **Misleading plan descriptions:** Plans advertised as "unlimited" come with fair usage policies that severely limit actual usage. Plans advertised at one price have hidden taxes and charges that make the actual cost significantly higher.

4. **Difficulty in porting/cancellation:** Companies make it deliberately difficult to port to another operator or cancel services, with multiple obstacles and delays.

TRAI (Telecom Regulatory Authority of India) has issued multiple directions to operators regarding VAS consent requirements and billing transparency, but enforcement remains inconsistent.

Consumer forums across India have handled thousands of such cases, typically ordering refunds of Rs 1,000-10,000 per case. While individual amounts are small, the collective impact across millions of subscribers is enormous.`,
    courtOrder:
      "Consumer forums across India have issued orders requiring telecom companies to refund unauthorized VAS charges and compensate consumers. TRAI has issued regulations requiring explicit double opt-in consent for value-added services.",
    outcome:
      "Multiple refund orders. TRAI regulations on VAS consent. Ongoing enforcement challenges.",
    consumerImpact:
      "While regulations have improved, unauthorized charges remain a persistent problem. Consumers in rural areas, who rely heavily on prepaid plans and have limited internet literacy, are disproportionately affected.",
  },
  {
    slug: "oyo-rooms-complaints",
    title: "OYO Rooms Faces Consumer Court Orders for Cancelled Bookings and Misleading Listings",
    company: "OYO Rooms",
    country: "India",
    countryCode: "IN",
    category: "Travel / Hospitality",
    year: "2019-2024",
    amount: "Multiple Orders",
    agency: "Consumer Forums",
    status: "Ongoing",
    summary:
      "Budget hotel aggregator OYO has faced numerous consumer cases for last-minute booking cancellations, rooms not matching descriptions, refund denials, and misleading pricing.",
    fullStory: `OYO Rooms, India's largest budget hotel aggregator, has been the subject of persistent consumer complaints about its service quality and business practices. The most common issues include:

**Last-minute cancellations:** Consumers arrive at hotels only to find their booking has been cancelled by OYO or the hotel, leaving them stranded — often in unfamiliar cities, late at night, with families. OYO's refund process in such cases is slow and often inadequate to cover the cost of finding alternative accommodation at short notice.

**Misleading listings:** Room photos and descriptions on the OYO app frequently don't match reality. Consumers booking based on pictures of clean, modern rooms arrive to find poorly maintained, unhygienic accommodations with broken amenities.

**Hidden charges:** Hotels add charges not mentioned in the OYO listing, including charges for extra guests, early check-in/late check-out, and "amenity fees." When consumers complain to OYO, the company often disclaims responsibility, blaming the hotel partner.

**Refund difficulties:** Consumers report extreme difficulty in obtaining refunds, with customer service directing them through endless loops of automated responses, chatbots, and unfulfilled promises of callbacks.

Several consumer forums have ordered OYO to compensate customers for these deficiencies, but the company's high complaint volume suggests systemic issues rather than isolated incidents.`,
    courtOrder:
      "District Consumer Forums in Delhi, Bengaluru, Mumbai, and other cities have ordered OYO to refund customers and pay compensation for cancelled bookings, misleading listings, and deficient service.",
    outcome:
      "Multiple compensation orders. Ongoing consumer complaints. Regulatory attention to aggregator accountability.",
    consumerImpact:
      "Budget travelers, who often have limited alternatives and financial cushion, are disproportionately affected. The cases highlight the accountability gap in platform/aggregator business models where companies disclaim responsibility for partner-provided services.",
  },
  {
    slug: "zomato-food-safety",
    title: "Consumer Court Orders Zomato to Pay for Delivering Contaminated and Wrong Food Orders",
    company: "Zomato",
    country: "India",
    countryCode: "IN",
    category: "Food Delivery",
    year: "2020-2024",
    amount: "Multiple Orders",
    agency: "Consumer Forums, FSSAI",
    status: "Ongoing",
    summary:
      "Food delivery giant Zomato has faced consumer court orders for delivering contaminated food, wrong orders, and refusing compensation when customers fell ill.",
    fullStory: `Zomato, one of India's largest food delivery platforms, has faced growing consumer complaints about food safety and service quality. Cases include delivery of contaminated food causing food poisoning, delivery of wrong orders with no effective redressal, and significant delays rendering food inedible.

In a notable case in Hyderabad, a consumer fell ill after eating food delivered through Zomato that contained foreign objects. When the consumer sought compensation, Zomato initially offered only a small coupon as redress. The consumer approached the consumer forum, which ordered Zomato to pay compensation for medical expenses and mental distress.

In another case, a consumer in Delhi received a non-vegetarian dish instead of the vegetarian food ordered, which was particularly distressing given the consumer's religious dietary restrictions. The consumer forum found Zomato liable for deficiency in service.

The pattern across these cases is consistent: when things go wrong, Zomato's automated customer service offers minimal redress (usually app credits or small refunds) that doesn't adequately compensate for the harm caused. Consumers who escalate find it nearly impossible to reach a decision-maker.

FSSAI (Food Safety and Standards Authority of India) has issued guidelines for food delivery platforms regarding food safety responsibility, but enforcement remains a challenge.`,
    courtOrder:
      "Multiple District Consumer Forums have ordered Zomato to compensate consumers for contaminated food, wrong orders, and deficient service. FSSAI has issued food safety guidelines for delivery platforms.",
    outcome:
      "Multiple compensation orders. FSSAI guidelines issued. Ongoing accountability challenges for platform-mediated food delivery.",
    consumerImpact:
      "The cases highlight the gap in food safety accountability in platform-mediated delivery, where platforms, restaurants, and delivery partners each disclaim responsibility when things go wrong.",
  },
  {
    slug: "makemytrip-refund-covid",
    title: "MakeMyTrip Ordered to Refund Customers After Withholding COVID Cancellation Refunds",
    company: "MakeMyTrip",
    country: "India",
    countryCode: "IN",
    category: "Travel",
    year: "2020-2022",
    amount: "Multiple Orders",
    agency: "Consumer Forums, NCDRC",
    status: "Order Issued",
    summary:
      "MakeMyTrip withheld refunds for COVID-cancelled bookings, offered only credits/vouchers, and charged cancellation fees for flights cancelled by airlines — not by consumers.",
    fullStory: `During the COVID-19 pandemic, MakeMyTrip — India's largest online travel agency — faced massive backlash for its refund practices. When the government imposed lockdowns and airlines cancelled flights, consumers expected refunds for bookings they could no longer use.

Instead, MakeMyTrip offered vouchers and credits with expiry dates rather than actual refunds. Consumers who insisted on cash refunds faced endless delays, with some waiting over a year. In many cases, MakeMyTrip charged cancellation fees even when the cancellation was caused by the airline or government restrictions — not by the consumer.

The problem wasn't limited to flights. Hotel bookings made through MakeMyTrip were also affected, with the company blaming hotel partners for refund delays while the hotels blamed MakeMyTrip.

Consumers reported spending hours on hold with customer service, receiving contradictory information, and having their complaint tickets closed without resolution. Many consumers who couldn't afford the lost money — students who had saved for trips, families who had booked for medical travel — were left without recourse.

The NCDRC and various state consumer commissions took up multiple cases and established that consumers are entitled to full refunds for services cancelled due to force majeure events, not just credits or vouchers.`,
    courtOrder:
      "NCDRC and State Consumer Commissions ordered MakeMyTrip to process full refunds for pandemic-cancelled bookings. Courts ruled that offering only vouchers/credits when cancellation is not the consumer's fault is a deficiency in service.",
    outcome:
      "Multiple refund orders. Precedent set that force majeure cancellations entitle consumers to full refunds, not just vouchers.",
    consumerImpact:
      "The cases established important precedent for consumer rights during extraordinary events and clarified that travel platforms cannot retain consumer money when services are cancelled due to circumstances beyond the consumer's control.",
  },
  {
    slug: "bank-hidden-charges-india",
    title: "Banks Ordered to Refund Unauthorized Charges: SMS Fees, Minimum Balance Penalties",
    company: "Various Indian Banks (SBI, HDFC, ICICI, etc.)",
    country: "India",
    countryCode: "IN",
    category: "Banking / Hidden Charges",
    year: "2017-2024",
    amount: "Multiple Orders",
    agency: "Consumer Forums, RBI",
    status: "Ongoing",
    summary:
      "Indian banks have been ordered by consumer courts to refund unauthorized charges including minimum balance penalties, SMS alert fees, and account maintenance charges imposed without clear consent.",
    fullStory: `Indian banks — both public and private — have faced a wave of consumer complaints about hidden and unauthorized charges. The most common grievances include:

**Minimum balance penalties:** Banks impose steep penalties when savings accounts fall below a minimum balance threshold, even for accounts that were opened with zero-balance promises (especially Jan Dhan accounts). In many cases, the penalties consumed the entire balance and even pushed accounts into negative territory.

**SMS alert charges:** Banks unilaterally imposed quarterly SMS alert charges of Rs 15-20 per quarter without obtaining explicit consumer consent. While individual amounts are small, across millions of accounts, these charges generated enormous revenue.

**Account maintenance charges:** Banks imposed annual maintenance charges on accounts that were originally opened without such conditions, changing terms unilaterally.

**ATM charges:** Excessive charges for using other banks' ATMs, often beyond RBI's prescribed limits.

The RBI has intervened multiple times, directing banks to ensure transparent communication of charges and obtaining explicit consent before imposing new fees. However, compliance has been inconsistent.

Consumer courts have ordered banks to refund unauthorized charges in numerous cases, establishing that banks cannot unilaterally change terms and impose charges without informed consent.`,
    courtOrder:
      "Multiple consumer forums have ordered banks to refund unauthorized charges. RBI has issued circulars mandating transparent fee disclosure and explicit consent requirements. In a significant case, a consumer forum ordered SBI to refund minimum balance penalties and pay compensation for imposing charges on a Jan Dhan account.",
    outcome:
      "Multiple refund orders. RBI regulatory intervention. Ongoing enforcement of transparent fee practices.",
    consumerImpact:
      "While RBI guidelines have improved transparency, unauthorized bank charges remain a persistent issue, particularly affecting low-income account holders who are less likely to check statements or challenge charges.",
  },
  {
    slug: "jaypee-infratech-homebuyers",
    title: "Jaypee Infratech Leaves 20,000+ Homebuyers Stranded, Enters Insolvency",
    company: "Jaypee Infratech (Jaiprakash Associates)",
    country: "India",
    countryCode: "IN",
    category: "Real Estate Fraud",
    year: "2017-2024",
    amount: "Rs 2,000+ Crore",
    agency: "Supreme Court, NCLT",
    status: "Ongoing",
    summary:
      "Jaypee Infratech collected money from over 20,000 homebuyers for its Wish Town project in Noida but failed to deliver for years, forcing Supreme Court intervention and insolvency proceedings.",
    fullStory: `Jaypee Infratech Limited, a subsidiary of the Jaiprakash Associates group, launched its ambitious "Wish Town" project in Noida promising thousands of apartments to eager homebuyers. Over 20,000 families invested their life savings, took home loans, and waited for their dream homes.

Years passed. Delivery dates came and went. Construction stalled. The company had collected thousands of crores from buyers but the money appeared to have been diverted to other group companies and projects rather than being used to complete the homes buyers had paid for.

Families found themselves in a nightmare — paying EMIs on homes that didn't exist while also paying rent. Many had taken loans they could barely afford, convinced by promises of timely delivery. The financial and emotional toll was immense, with families reporting stress, broken relationships, and health problems caused by the uncertainty.

The case became one of the most closely watched insolvency proceedings in India. Homebuyers were initially treated as unsecured creditors under the Insolvency and Bankruptcy Code, meaning they would be last in line for any recovery. This prompted a landmark amendment to the IBC recognizing homebuyers as financial creditors — giving them a seat at the table in resolution proceedings.

After multiple rounds of bidding and legal challenges, the Suraksha Group was approved as the resolution applicant, with a mandate to complete the stalled projects. The Supreme Court monitored the proceedings closely, ensuring homebuyer interests were protected.`,
    courtOrder:
      "The NCLT admitted the insolvency application in 2017. The Supreme Court closely monitored proceedings and protected homebuyer interests. A landmark IBC amendment recognized homebuyers as financial creditors. The Suraksha Group's resolution plan was approved to complete pending projects. Homebuyers were given the option of receiving possession or refund with interest.",
    outcome:
      "Insolvency resolution approved under Suraksha Group. Homebuyers recognized as financial creditors (landmark IBC amendment). Construction resumption ongoing.",
    consumerImpact:
      "The case led to the landmark amendment of the IBC recognizing homebuyers as financial creditors — a seismic shift that improved protections for real estate buyers across India. It set the precedent for how stalled real estate projects are handled through insolvency.",
  },
  {
    slug: "dlf-belaire-unfair-contracts",
    title: "DLF Penalized Rs 630 Crore for Abuse of Dominant Position Against Homebuyers",
    company: "DLF Limited",
    country: "India",
    countryCode: "IN",
    category: "Real Estate / Unfair Contracts",
    year: "2011-2016",
    amount: "Rs 630 Crore (CCI penalty)",
    agency: "CCI, NCDRC",
    status: "Order Issued",
    summary:
      "India's largest real estate developer DLF was penalized Rs 630 crore by the Competition Commission for abuse of dominant position and ordered by NCDRC to compensate buyers for unfair one-sided contract terms.",
    fullStory: `DLF Limited, India's largest real estate developer, faced landmark legal action from homebuyers of its Belaire project in Gurgaon (now Gurugram). The Belaire Owners' Association challenged DLF's buyer agreements, which contained grossly unfair and one-sided terms.

The buyer agreements gave DLF the right to change building plans unilaterally, impose penalties on buyers for delayed payments while providing no equivalent penalty for DLF's own delays, and included clauses that essentially stripped buyers of all meaningful rights while giving the developer complete control.

Buyers who had invested crores of rupees found themselves bound by contracts that treated them as supplicants rather than customers. When they tried to hold DLF accountable for construction delays, quality issues, and unilateral plan changes, the company pointed to the fine print of its own one-sided agreements.

The Competition Commission of India (CCI) took up the matter and found that DLF had abused its dominant position in the Gurgaon real estate market. The CCI imposed a penalty of Rs 630 crore — one of the largest competition law penalties in Indian history.

Separately, the NCDRC held that DLF's buyer agreements contained unfair trade practices and one-sided clauses, ordering compensation and refunds for affected buyers. The case became a landmark in establishing that even the biggest developers cannot impose unconscionable terms on homebuyers.`,
    courtOrder:
      "The CCI imposed a penalty of Rs 630 crore on DLF for abuse of dominant position in 2011 (upheld in subsequent appeals with modifications). The NCDRC directed DLF to pay compensation and refund excess charges to Belaire buyers. The case set crucial precedents for real estate consumer protection.",
    outcome:
      "Rs 630 crore CCI penalty. NCDRC compensation orders. Landmark precedent against unfair builder agreements. Contributed to the enactment of RERA.",
    consumerImpact:
      "The case was instrumental in the push for RERA (Real Estate Regulation Act, 2016) and established that one-sided builder-buyer agreements constitute unfair trade practices. It empowered homebuyers across India to challenge exploitative contract terms.",
  },
  {
    slug: "amazon-india-counterfeit",
    title: "Amazon India Held Liable for Counterfeit Products Sold by Marketplace Sellers",
    company: "Amazon India",
    country: "India",
    countryCode: "IN",
    category: "E-Commerce Fraud",
    year: "2019-2024",
    amount: "Multiple Orders",
    agency: "Consumer Forums, CCPA",
    status: "Ongoing",
    summary:
      "Consumer courts rejected Amazon's defense that it is 'just a marketplace' and held it liable for counterfeit and wrong products delivered to consumers by sellers on its platform.",
    fullStory: `Amazon India, operating as Amazon Seller Services Pvt Ltd, has faced numerous consumer complaints about counterfeit, used, and wrong products being sold by marketplace sellers on its platform. Cases range from fake branded perfumes and electronics to used laptops sold as new.

In a significant case before the Delhi District Consumer Forum, a consumer ordered a branded perfume from Amazon and received a counterfeit product. Amazon defended itself by arguing it was merely a marketplace platform connecting buyers and sellers, and therefore not liable for the quality of products sold by third-party sellers.

The consumer forum rejected this defense, holding that Amazon — as the platform that facilitated the transaction, processed the payment, and in many cases handled delivery through its logistics network — could not disclaim responsibility for the products sold through its platform. The forum directed Amazon to provide a refund and pay compensation.

Similar rulings have been passed by consumer forums across India, consistently establishing that e-commerce marketplace platforms bear responsibility for ensuring the authenticity and quality of products sold through them.

The Consumer Protection (E-Commerce) Rules, 2020 strengthened this position by requiring marketplace platforms to ensure sellers display accurate product information, maintain proper grievance redressal mechanisms, and take responsibility for the consumer experience.

Many consumers, especially in smaller cities, remain unaware of these protections and accept losses without challenging them — suggesting the reported cases represent only a fraction of the actual problem.`,
    courtOrder:
      "Multiple District Consumer Forums held Amazon liable alongside sellers for counterfeit and defective products. The Consumer Protection (E-Commerce) Rules, 2020 placed explicit accountability on marketplace platforms. CCPA issued guidelines on e-commerce consumer protection.",
    outcome:
      "Multiple compensation orders rejecting the 'marketplace defense.' E-Commerce Rules strengthened platform accountability. Ongoing regulatory scrutiny.",
    consumerImpact:
      "The rulings established that e-commerce platforms cannot hide behind the 'marketplace' label to avoid responsibility, strengthening protections for online shoppers across India.",
  },
  {
    slug: "airtel-payments-bank-aadhaar",
    title: "Airtel Payments Bank Suspended for Opening Accounts Without Customer Consent Using Aadhaar",
    company: "Airtel / Airtel Payments Bank",
    country: "India",
    countryCode: "IN",
    category: "Banking / Data Privacy",
    year: "2017-2018",
    amount: "Suspension + Refunds",
    agency: "UIDAI, RBI",
    status: "Completed",
    summary:
      "Airtel Payments Bank was found to have opened bank accounts for millions of users without explicit consent using their Aadhaar details, and diverted LPG subsidies into these unauthorized accounts.",
    fullStory: `In one of India's most significant data privacy violations, Airtel and its subsidiary Airtel Payments Bank were found to have opened bank accounts for millions of mobile subscribers without their explicit consent. The company used Aadhaar (India's biometric identity) data collected during SIM verification to create payments bank accounts without informing customers.

What made the violation particularly egregious was that government LPG (cooking gas) subsidies meant for customers' regular bank accounts were diverted to these unauthorized Airtel Payments Bank accounts. Customers who were entitled to receive LPG subsidies directly in their chosen bank accounts suddenly found the money going to Airtel accounts they never knew they had.

This affected millions of consumers, many of whom were from low-income backgrounds and depended on the LPG subsidy as an essential part of their household budget. They had no idea their Aadhaar had been linked to an Airtel bank account or that their subsidies were being redirected.

UIDAI (Unique Identification Authority of India) took swift action, temporarily suspending Airtel Payments Bank's eKYC license — effectively barring it from using Aadhaar for customer verification. The RBI also investigated the matter.

The incident raised fundamental questions about consent, data privacy, and the potential for misuse of Aadhaar-linked data by private companies. It was one of the cases that fueled the broader debate around the need for a comprehensive data protection law in India.`,
    courtOrder:
      "UIDAI suspended Airtel Payments Bank's eKYC license in December 2017. Airtel was directed to refund all diverted LPG subsidies to affected consumers. The eKYC license was eventually restored after Airtel implemented compliance measures and obtained proper consent mechanisms.",
    outcome:
      "eKYC license suspended. LPG subsidies refunded. Stricter KYC norms implemented for payments banks industry-wide.",
    consumerImpact:
      "The case exposed the risks of Aadhaar data misuse by private companies and contributed to the strengthening of consent requirements for financial services. It was a catalyst for India's data protection legislation discussions.",
  },

  // ============================================================
  // UNITED KINGDOM CASES
  // ============================================================
  {
    slug: "ppi-mis-selling-scandal",
    title: "UK Banks Forced to Pay £38 Billion for PPI Mis-selling — Largest Consumer Scandal in UK History",
    company: "Lloyds, Barclays, RBS, HSBC, and others",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Banking / Insurance Fraud",
    year: "2011-2019",
    amount: "£38 Billion",
    agency: "FCA, Financial Ombudsman Service",
    status: "Completed",
    summary:
      "UK banks mis-sold Payment Protection Insurance to millions of customers who didn't need it, couldn't use it, or didn't know they had it — resulting in £38 billion in compensation.",
    fullStory: `The Payment Protection Insurance (PPI) scandal is the largest consumer mis-selling scandal in UK financial history. Over two decades, UK banks and financial institutions sold PPI policies alongside mortgages, credit cards, and personal loans. PPI was supposed to cover repayments if the borrower became ill, lost their job, or had an accident.

However, the policies were routinely mis-sold on a massive scale:

- **Sold to people who couldn't claim:** PPI was sold to self-employed workers, retirees, and people with pre-existing health conditions who would never be eligible to make a claim.
- **Added without consent:** Many customers didn't even know PPI had been added to their loan or credit card.
- **Pressure sales:** Bank staff were incentivized to sell PPI with every loan product and pressured customers into purchasing it, sometimes implying it was mandatory.
- **Excessive commissions:** Commissions of 50-90% of the premium were common, meaning most of the money customers paid went to the bank, not toward insurance coverage.

When the scandal was exposed, the Financial Conduct Authority (FCA) required banks to contact all customers who might have been mis-sold PPI. The Financial Ombudsman Service (FOS) was overwhelmed with complaints — at its peak, PPI complaints accounted for over 75% of all complaints received.

The deadline for PPI claims was set as August 29, 2019, after a massive public awareness campaign. By the time it closed, banks had paid out approximately £38 billion in compensation — the largest consumer redress exercise in UK history.`,
    courtOrder:
      "The FCA mandated a comprehensive redress program. Banks were required to proactively review all PPI sales and compensate customers who were mis-sold. The Financial Ombudsman Service upheld millions of complaints. The PPI claims deadline was set for August 29, 2019.",
    outcome:
      "£38 billion in total compensation. Millions of customers received refunds. The largest consumer redress exercise in UK history.",
    consumerImpact:
      "The PPI scandal fundamentally changed financial regulation in the UK. It led to stricter conduct rules, greater FCA enforcement powers, and increased awareness of consumer rights in financial services.",
    featured: true,
  },
  {
    slug: "volkswagen-uk-dieselgate",
    title: "Volkswagen Settles £193 Million UK Dieselgate Class Action",
    company: "Volkswagen",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Consumer & Environmental Fraud",
    year: "2015-2022",
    amount: "£193 Million",
    agency: "High Court Class Action",
    status: "Settled",
    summary:
      "91,000 UK Volkswagen diesel vehicle owners received compensation after the company was found to have installed emissions-cheating defeat devices in their cars.",
    fullStory: `The Volkswagen emissions scandal, known globally as "Dieselgate," also affected approximately 1.2 million vehicles in the UK. A class action lawsuit was brought on behalf of affected UK car owners who had purchased Volkswagen, Audi, SEAT, and Skoda diesel vehicles fitted with defeat devices.

UK consumers had purchased these vehicles based on VW's marketing of "clean diesel" technology. They paid premium prices for cars that were advertised as being environmentally friendly and fuel-efficient. In reality, the vehicles were emitting nitrogen oxides at levels far exceeding legal limits during normal driving.

The UK litigation was one of the largest class actions in English legal history. Initially, VW denied liability and fought the case aggressively. However, in May 2022, VW agreed to settle for £193 million, covering approximately 91,000 claimants.

Many claimants expressed disappointment with the settlement amount, noting that each owner received only about £2,100 — far less than the per-claimant amounts in the US settlement. However, the differences reflected the different legal frameworks and that UK law provides for more limited damages than US consumer protection law.`,
    courtOrder:
      "The High Court of England and Wales approved the £193 million settlement in 2022. Approximately 91,000 UK vehicle owners received compensation averaging about £2,100 each.",
    outcome:
      "£193 million settlement. 91,000 UK owners compensated. One of the largest class actions in English legal history.",
    consumerImpact:
      "While individual payments were modest, the case demonstrated that UK consumers can pursue large-scale class actions and hold multinational corporations accountable for fraud.",
  },
  {
    slug: "british-gas-overcharging",
    title: "British Gas Fined for Overcharging Vulnerable Customers on Prepayment Meters",
    company: "British Gas (Centrica)",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Energy / Utilities",
    year: "2023",
    amount: "£9.5 Million",
    agency: "Ofgem",
    status: "Settled",
    summary:
      "British Gas was fined after its debt collection agents forcibly installed prepayment meters in the homes of vulnerable customers, including elderly and disabled people, during a cost-of-living crisis.",
    fullStory: `In 2023, an undercover investigation by The Times revealed that debt collection agents working for British Gas were forcibly installing prepayment meters in the homes of vulnerable customers — including elderly people, those with disabilities, and families with young children — often against their will.

Prepayment meters require customers to pay for energy in advance, meaning if they run out of credit, their gas and electricity are cut off. The forced installation of these meters in vulnerable households during one of the worst cost-of-living crises in UK history was described as "inhumane."

The investigation showed debt collectors breaking into homes, sometimes with the assistance of magistrate warrants obtained without adequate checks on whether the household contained vulnerable people. Agents were recorded expressing discomfort with what they were being asked to do.

The scandal led to immediate action by Ofgem, the energy regulator, which imposed a temporary ban on the forced installation of prepayment meters. British Gas and other energy suppliers were required to review all prepayment meter installations and ensure vulnerable customers were protected.

The case became a symbol of the broader cost-of-living crisis in the UK and the way energy companies treated their most vulnerable customers.`,
    courtOrder:
      "Ofgem fined British Gas £9.5 million and imposed a temporary industry-wide ban on forced prepayment meter installations. Companies were required to review existing prepayment customers and establish vulnerability checks.",
    outcome:
      "£9.5 million fine. Industry-wide ban on forced prepayment meter installations. Mandatory vulnerability assessments.",
    consumerImpact:
      "The case led to significant reforms in how energy companies treat vulnerable customers and highlighted the human cost of the energy crisis. The ban on forced installations protected thousands of vulnerable households.",
  },
  {
    slug: "car-finance-mis-selling-uk",
    title: "UK Car Finance Mis-selling Scandal: £300 Million and Counting",
    company: "Close Brothers, FirstRand (MotoNovo), and others",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Auto Finance Fraud",
    year: "2024-2025",
    amount: "£300 Million+ (potentially billions)",
    agency: "FCA, Court of Appeal",
    status: "Ongoing",
    summary:
      "The UK Court of Appeal ruled that car dealers received secret commissions from finance companies, potentially affecting millions of car buyers and creating liability of up to £30 billion.",
    fullStory: `In October 2024, the UK Court of Appeal delivered a bombshell ruling in the case of Johnson v FirstRand Bank that sent shockwaves through the motor finance industry. The court found that car dealerships had been receiving secret commissions from finance companies when arranging car loans for customers — without disclosing these commissions to the buyers.

Under these arrangements, car dealers had the ability to set the interest rate on customer loans, with higher rates meaning bigger commissions for the dealer. This created a direct conflict of interest: dealers were incentivized to put customers on more expensive finance deals, and customers were never told about these hidden payments.

The ruling potentially affects millions of UK consumers who purchased cars using dealer-arranged finance over the past several decades. The FCA estimated that up to 40% of car finance agreements may have involved undisclosed commissions.

Financial analysts estimated the total industry liability could reach £30 billion — comparable to the PPI scandal. Major lenders including Close Brothers and MotoNovo Finance set aside hundreds of millions in provisions. Close Brothers' share price dropped by over 50% following the ruling.

The Supreme Court agreed to hear an appeal in April 2025, with a final ruling expected to have massive implications for the entire car finance industry and the millions of consumers who may be owed compensation.`,
    courtOrder:
      "The Court of Appeal ruled in October 2024 that undisclosed commission arrangements in car finance constituted a breach of duty. The FCA paused the deadline for complaints while the Supreme Court considers the appeal. Major lenders have set aside hundreds of millions in provisions.",
    outcome:
      "Court of Appeal ruled against lenders. Supreme Court appeal pending (2025). £300 million+ already provisioned. Potential industry-wide liability of £30 billion.",
    consumerImpact:
      "Millions of UK car buyers may be entitled to compensation for secret commissions paid to dealerships. The case could become the next PPI-scale redress exercise.",
    featured: true,
  },
  {
    slug: "wonga-payday-loans",
    title: "Wonga Collapses After £220 Million Compensation Bill for Predatory Payday Loans",
    company: "Wonga",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Predatory Lending",
    year: "2014-2018",
    amount: "£220 Million",
    agency: "FCA, Financial Ombudsman",
    status: "Completed",
    summary:
      "Payday lender Wonga collapsed after being forced to pay £220 million in compensation for lending to people who could never afford to repay, charging interest rates of up to 5,853% APR.",
    fullStory: `Wonga, once the UK's largest payday lender, became a symbol of predatory lending practices. The company offered short-term loans with annual percentage rates (APR) that reached a staggering 5,853%. A £200 loan could easily become a £600 debt within weeks.

The company specifically targeted vulnerable borrowers — people with poor credit, low incomes, and urgent financial needs. Its marketing was aggressive and even featured puppet characters in TV advertisements that the FCA later forced them to withdraw for trivializing the risks of high-cost credit.

Wonga's lending practices were found to be fundamentally irresponsible:

- **Inadequate affordability checks:** The company lent to people who clearly could not afford to repay, including people on benefits and those already in debt spirals.
- **Fake legal threats:** In 2014, the FCA found that Wonga had sent fake legal letters to customers in arrears, pretending to be from law firms that didn't exist, threatening legal action to intimidate them into paying.
- **Rollovers and escalating debt:** Borrowers who couldn't repay were encouraged to roll over their loans, with interest compounding rapidly.

The FCA ordered Wonga to pay compensation to over 45,000 customers who had been sent fake legal letters. Combined with wider compensation claims and the FCA's cap on payday lending costs (introduced in 2015), Wonga's business model became unviable. The company entered administration in August 2018, and the compensation program eventually paid out approximately £220 million to affected consumers.`,
    courtOrder:
      "The FCA required Wonga to pay redress for fake legal letters and irresponsible lending. The introduction of the FCA's price cap on payday loans effectively ended the high-cost lending model. Wonga entered administration in 2018. The compensation program paid approximately £220 million.",
    outcome:
      "Company collapsed. £220 million in compensation. FCA payday lending cap introduced. 45,000+ customers compensated for fake legal threats.",
    consumerImpact:
      "The Wonga case led directly to the FCA's price cap on payday loans, which dramatically reduced the cost of high-cost short-term credit across the UK and drove many predatory lenders out of the market.",
  },
  {
    slug: "ryanair-refund-practices",
    title: "Ryanair Forced to Pay Millions in Refunds After Systematic Refund Obstruction",
    company: "Ryanair",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Airlines",
    year: "2020-2022",
    amount: "£100+ Million in refunds",
    agency: "CMA, CAA",
    status: "Settled",
    summary:
      "Ryanair systematically obstructed passenger refunds for cancelled flights during COVID-19, offering only vouchers and making the cash refund process deliberately difficult.",
    fullStory: `During the COVID-19 pandemic, Ryanair cancelled thousands of flights but systematically obstructed consumers' legal right to cash refunds. Under EU and UK law (retained EU Regulation 261/2004), passengers are entitled to a full cash refund within 7 days when an airline cancels a flight.

Instead, Ryanair pushed consumers toward accepting vouchers. The refund request process was made deliberately difficult — consumers had to navigate through multiple pages of voucher offers before finding the cash refund option, and then faced waits of months to receive their money.

The Civil Aviation Authority (CAA) and the Competition and Markets Authority (CMA) received thousands of complaints from UK consumers. The CMA launched an investigation into Ryanair's refund practices.

Many consumers reported waiting 6-12 months for refunds, being given incorrect information about their rights, and having their refund requests rejected or ignored. For consumers who needed the money — many of whom had lost jobs during the pandemic — the delays caused genuine hardship.

Under pressure from regulators, Ryanair eventually processed the backlog of refunds, but the case highlighted the power imbalance between airlines and individual consumers, and the need for stronger enforcement of existing passenger rights.`,
    courtOrder:
      "The CMA and CAA pressured Ryanair to process all outstanding refunds and improve its refund process. The airline was required to comply with the 7-day refund timeline for future cancellations.",
    outcome:
      "£100+ million in refunds eventually processed. Improved refund procedures mandated. Regulatory scrutiny of airline refund practices.",
    consumerImpact:
      "The case contributed to stronger enforcement of airline passenger rights in the UK and increased regulatory focus on ensuring airlines provide timely refunds for cancelled flights.",
  },
  {
    slug: "tesco-clubcard-pricing",
    title: "CMA Investigates Tesco Over Misleading Clubcard 'Savings' Claims",
    company: "Tesco",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Retail / Deceptive Pricing",
    year: "2024",
    amount: "Investigation",
    agency: "CMA",
    status: "Ongoing",
    summary:
      "The CMA investigated whether Tesco's Clubcard pricing creates a misleading impression of savings by inflating non-Clubcard prices to make discounts appear larger than they really are.",
    fullStory: `The Competition and Markets Authority (CMA) opened an investigation into Tesco's Clubcard pricing practices following consumer complaints and media investigations suggesting that the UK's largest supermarket may be creating a misleading impression of savings.

Tesco's Clubcard scheme offers lower prices to loyalty card holders, with shelf labels showing both the "regular" price and the lower "Clubcard price." Consumer groups alleged that Tesco had been inflating the regular prices to make the Clubcard savings appear more generous, and that the "regular" prices were not genuine reference prices.

For example, a product might be shown with a "regular" price of £3.50 and a Clubcard price of £2.00, suggesting a saving of £1.50. But if the product had historically been sold at £2.50 or was available elsewhere for £2.00, the £3.50 "regular" price was artificially inflated and the "saving" was misleading.

This practice affects millions of UK shoppers and raises fundamental questions about loyalty scheme pricing across the retail sector. Consumer groups argued that such practices particularly disadvantage vulnerable consumers who may not have smartphones to use digital loyalty cards or may not understand the pricing mechanics.

Similar concerns have been raised about loyalty pricing at other major UK supermarkets including Sainsbury's and Boots.`,
    courtOrder:
      "The CMA launched a formal investigation in 2024 into whether Tesco's Clubcard pricing practices breach consumer protection law by creating misleading impressions of savings.",
    outcome:
      "Investigation ongoing. The outcome could have significant implications for loyalty scheme pricing across UK retail.",
    consumerImpact:
      "The investigation highlights growing concerns about whether loyalty scheme pricing genuinely benefits consumers or creates an illusion of savings while potentially increasing prices overall.",
  },
  {
    slug: "thames-water-sewage",
    title: "Thames Water Fined for Dumping Raw Sewage While Paying Billions in Dividends",
    company: "Thames Water",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Utilities / Environmental",
    year: "2017-2024",
    amount: "£20+ Million in fines",
    agency: "Ofwat, Environment Agency",
    status: "Ongoing",
    summary:
      "Thames Water has been repeatedly fined for illegally dumping raw sewage into rivers and waterways while paying billions in dividends to shareholders and loading up on debt.",
    fullStory: `Thames Water, the UK's largest water company serving 15 million customers in London and the Thames Valley, has become a symbol of corporate failure in the privatized utility sector. The company has been repeatedly fined for illegally discharging raw sewage into rivers, streams, and waterways — a practice that pollutes the environment, poses public health risks, and violates environmental law.

Between 2017 and 2024, Thames Water was fined over £20 million by the Environment Agency for various sewage discharge offenses. In one case, the company was fined £2.3 million for discharging 1.4 billion litres of raw sewage into the River Thames.

What made the situation particularly outrageous was the financial context. Since privatization in 1989, Thames Water's various owners had extracted approximately £7.2 billion in dividends while loading the company with £14 billion in debt. Instead of investing in infrastructure to prevent sewage overflows, the company had prioritized shareholder returns.

By 2024, Thames Water was on the verge of financial collapse, with insufficient funds to invest in the infrastructure upgrades needed to stop sewage discharges. This raised the prospect that UK taxpayers and bill-payers would be forced to bail out a company whose shareholders had already extracted billions.

Customer bills continued to rise even as service deteriorated, and customers had no choice of provider since Thames Water is a regional monopoly.`,
    courtOrder:
      "The Environment Agency has pursued multiple prosecutions resulting in over £20 million in fines. Ofwat has opened investigations into Thames Water's management and financial practices. The company faces potential special administration (effective nationalization).",
    outcome:
      "£20+ million in fines. Potential special administration. Ongoing investigations by Ofwat and Environment Agency.",
    consumerImpact:
      "15 million customers face rising bills for deteriorating service with no alternative provider. The case has sparked a national debate about whether water privatization has failed UK consumers.",
  },
  {
    slug: "post-office-horizon-scandal",
    title: "Post Office Horizon Scandal: Hundreds of Innocent Sub-postmasters Wrongly Convicted",
    company: "Post Office Ltd / Fujitsu",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Wrongful Prosecution / IT Fraud",
    year: "1999-2024",
    amount: "£1+ Billion (compensation ongoing)",
    agency: "High Court, Court of Appeal, Public Inquiry",
    status: "Ongoing",
    summary:
      "Over 900 sub-postmasters were wrongly prosecuted based on a faulty Fujitsu IT system, with many imprisoned, bankrupted, and some taking their own lives — the UK's worst miscarriage of justice.",
    fullStory: `The Post Office Horizon scandal is widely described as the most widespread miscarriage of justice in British legal history. Between 1999 and 2015, the Post Office prosecuted over 900 sub-postmasters — the independent operators who run local post office branches — for theft, fraud, and false accounting, based on data from the Horizon IT system supplied by Fujitsu.

The Horizon system contained serious software bugs that created phantom shortfalls in branch accounts, making it appear that money was missing when it wasn't. Sub-postmasters were told the system was reliable and that they were the only ones experiencing problems. Many were pressured into pleading guilty, repaying shortfalls from their own savings, or accepting dismissal.

The consequences were devastating:
- **Prison:** Dozens of sub-postmasters were imprisoned for crimes they didn't commit.
- **Bankruptcy:** Many were forced to repay "shortfalls" of tens of thousands of pounds from personal funds, losing their businesses, homes, and savings.
- **Families destroyed:** Marriages broke down, families were stigmatized in their communities, and relationships were irreparably damaged.
- **Lives lost:** At least four sub-postmasters took their own lives. Others died before their names were cleared.

Throughout, the Post Office maintained that Horizon was reliable, even as internal documents later revealed that both the Post Office and Fujitsu knew of bugs in the system. The Post Office continued to prosecute despite mounting evidence that the system was flawed.

A group litigation brought by 555 claimants resulted in a landmark 2019 High Court judgment finding that Horizon contained bugs, errors, and defects. In 2024, following a massively popular ITV drama that brought the scandal to national attention, the UK government passed the Post Office (Horizon System) Offences Act 2024 to quash all convictions.

A public inquiry chaired by Sir Wyn Williams continues to investigate what happened and who was responsible.`,
    courtOrder:
      "The High Court's 2019 judgment found Horizon was not reliable. The Court of Appeal quashed initial convictions in 2021. The Post Office (Horizon System) Offences Act 2024 quashed all Horizon-related convictions. A public inquiry is ongoing. The government has committed over £1 billion to compensation.",
    outcome:
      "900+ convictions quashed by legislation. £1+ billion compensation commitment. Public inquiry ongoing. Considered the UK's worst miscarriage of justice.",
    consumerImpact:
      "The scandal exposed catastrophic failures in corporate governance, IT system oversight, and the justice system. It led to fundamental reforms in how the Post Office operates and renewed calls for corporate criminal liability.",
    featured: true,
  },
  {
    slug: "energy-supplier-failures-uk",
    title: "29 UK Energy Suppliers Collapse, Leaving Millions of Customers in Chaos",
    company: "Bulb, Avro Energy, Green Supplier, and 26 others",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Energy / Utilities",
    year: "2021-2022",
    amount: "£2.7 Billion (cost to bill-payers)",
    agency: "Ofgem",
    status: "Completed",
    summary:
      "29 energy suppliers collapsed during the 2021-2022 energy crisis after Ofgem's lax regulation allowed undercapitalized companies to operate, with the £2.7 billion bailout cost passed to all energy bill-payers.",
    fullStory: `Between 2021 and 2022, 29 UK energy suppliers collapsed in quick succession as wholesale gas prices surged. The companies — including Bulb Energy (the UK's 7th largest supplier with 1.7 million customers), Avro Energy, People's Energy, and many others — had been operating with inadequate financial reserves, failed to hedge against price rises, and were unable to absorb the cost increases.

The collapses affected approximately 4 million customers who were transferred to other suppliers, often at significantly higher tariffs. Customers who had credit balances with failed suppliers lost some or all of their money. Direct debit payments went missing. Smart meters stopped working.

The root cause was years of lax regulation by Ofgem, which had allowed dozens of thinly capitalized companies to enter the energy market without adequate financial checks. Many of these companies offered unsustainably low prices to attract customers, failed to hedge their energy purchases, and had no financial buffer when prices rose.

The cost of the supplier failures — including the Bulb Energy bailout and Supplier of Last Resort (SoLR) costs — was estimated at £2.7 billion, which was passed directly onto all UK energy bill-payers through their bills. This meant that responsible consumers who had chosen stable suppliers were forced to pay for the failures of companies they had no relationship with.

Ofgem subsequently tightened its licensing requirements and financial stress tests for energy suppliers, but critics argued these reforms came years too late.`,
    courtOrder:
      "Ofgem implemented new financial resilience requirements for energy suppliers. The National Audit Office criticized Ofgem for failing to prevent the crisis. Bulb Energy was placed into special administration at a cost of £6.5 billion to the taxpayer before being sold to Octopus Energy.",
    outcome:
      "29 suppliers collapsed. 4 million customers affected. £2.7 billion cost passed to bill-payers. Stricter regulation introduced.",
    consumerImpact:
      "Millions of customers were disrupted and forced onto higher tariffs. All UK energy bill-payers bore the cost of the supplier failures through higher bills. The crisis exposed fundamental failures in energy market regulation.",
  },
  {
    slug: "hbos-reading-fraud",
    title: "HBOS Bankers Jailed for Pushing Small Businesses Into Ruin to Strip Their Assets",
    company: "HBOS (Lloyds Banking Group)",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Banking Fraud",
    year: "2003-2017",
    amount: "£100+ Million",
    agency: "Thames Valley Police, FCA",
    status: "Convicted",
    summary:
      "A fraud ring within HBOS deliberately pushed small business customers into financial distress, then steered them to a corrupt consultancy that stripped their assets. Six people were jailed for a combined 47 years.",
    fullStory: `A fraud ring operating within the HBOS Impaired Assets team at the Reading branch perpetrated one of the most brazen banking frauds in UK history. Banker Lynden Scourfield and his associates deliberately pushed small business customers into financial distress, then steered them to a "turnaround" consultancy called Quayside Corporate Services, run by associate David Mills.

Rather than helping the businesses recover, Quayside stripped their assets and charged exorbitant fees. The proceeds funded lavish lifestyles — luxury holidays, prostitutes, and expensive properties. Meanwhile, the small business owners lost everything: their businesses, their homes, their savings, and in some cases, their health and relationships.

The victims were ordinary people who had built businesses over decades. When they approached HBOS for help during difficult times, they trusted the bank to act in their interest. Instead, the bank's own employees conspired to destroy them for personal gain.

What made the scandal even worse was Lloyds Banking Group's response after the fraud was exposed. Victims accused Lloyds of being slow to compensate, dismissive of their suffering, and more interested in protecting its reputation than making things right. The Dame Linda Dobbs review into Lloyds' handling of the matter was completed in 2023 but faced controversy over delayed publication.`,
    courtOrder:
      "Six individuals were convicted in 2017 and sentenced to a combined 47 years in prison. Lynden Scourfield received 11 years and 3 months. David Mills received 15 years. Lloyds established a compensation scheme initially valued at around £100 million, later expanded after criticism that it was inadequate.",
    outcome:
      "Six convicted with 47 years combined prison time. £100+ million compensation scheme. Severe reputational damage to Lloyds Banking Group.",
    consumerImpact:
      "Dozens of small business owners lost their livelihoods, homes, and health. The case exposed how banks can abuse their position of trust over vulnerable business customers and highlighted the inadequacy of bank-run compensation schemes.",
  },
  {
    slug: "tsb-it-migration-disaster",
    title: "TSB IT Meltdown Locks 1.9 Million Customers Out of Accounts, Fined £48.65 Million",
    company: "TSB Bank",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Banking / IT Failure",
    year: "2018-2022",
    amount: "£48.65 Million fine + £366 Million costs",
    agency: "FCA",
    status: "Settled",
    summary:
      "TSB's catastrophic IT migration locked up to 1.9 million customers out of their bank accounts for weeks, with some seeing other people's account details. Fraudsters exploited the chaos.",
    fullStory: `In April 2018, TSB attempted to migrate 1.3 billion customer records from Lloyds Banking Group's IT platform to a new system built by its parent company, Spanish bank Sabadell. The migration went catastrophically wrong.

Up to 1.9 million customers were locked out of their accounts for weeks. Some customers reported logging in and seeing other people's account details and balances — a serious data protection breach. The bank's mobile app and online banking were effectively non-functional for an extended period.

Fraudsters quickly exploited the chaos. With TSB's systems in disarray and its fraud detection capabilities compromised, criminals targeted TSB customers with phishing attacks and unauthorized transactions. The bank's ability to detect and prevent fraud was severely degraded.

Customers who relied on online and mobile banking to manage their finances, pay bills, and receive wages were left unable to access their money. Some missed mortgage payments, were unable to pay for essentials, and suffered significant financial distress.

TSB's customer service was overwhelmed. Branch staff had limited visibility into accounts. Phone lines were jammed. The situation persisted for months, with some customers reporting ongoing problems well into the summer.

The independent review led by law firm Slaughter and May found that TSB had not adequately tested the new system and had failed to have proper contingency plans in place.`,
    courtOrder:
      "The FCA fined TSB £48.65 million in 2022 for operational risk management and governance failures relating to the IT migration. TSB paid approximately £366 million in total costs related to the incident, including customer redress, fraud losses, and remediation.",
    outcome:
      "£48.65 million FCA fine. £366 million total costs. CEO resigned. One of the largest fines for operational failures in UK banking.",
    consumerImpact:
      "1.9 million customers were affected by the outage. The case demonstrated the risks of IT system migrations and led to increased FCA scrutiny of operational resilience in the banking sector.",
  },
  {
    slug: "british-airways-data-breach",
    title: "British Airways Fined £20 Million After Hackers Steal 420,000 Customers' Payment Details",
    company: "British Airways",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Data Breach",
    year: "2018-2020",
    amount: "£20 Million",
    agency: "ICO (Information Commissioner's Office)",
    status: "Settled",
    summary:
      "Hackers accessed personal and financial details of 420,000 BA customers through a skimming attack on the website and app, resulting in a major GDPR fine.",
    fullStory: `Between June and September 2018, hackers exploited vulnerabilities in the British Airways website and mobile app to skim the personal and financial details of approximately 420,000 customers and staff. The attack involved injecting malicious code into the BA website that intercepted customer data as it was entered — including names, addresses, payment card numbers, and CVV codes.

The stolen data was sufficient for criminals to make fraudulent transactions on victims' accounts. Many customers only discovered the breach when they noticed unauthorized charges on their bank statements.

The ICO investigation found that BA had failed to implement adequate security measures to protect its website and app. The attackers had exploited known vulnerabilities that could have been prevented with standard security practices.

The ICO initially proposed a record fine of £183 million — the first major fine under the UK's implementation of GDPR. However, after BA made representations and the ICO considered the economic impact of COVID-19 on the airline industry, the final fine was reduced to £20 million.

BA also settled a group litigation claim brought by affected customers, with confidential terms estimated at tens of millions of pounds in additional compensation.

The significant reduction from the proposed fine drew criticism from privacy advocates who argued it undermined the deterrent effect of GDPR enforcement.`,
    courtOrder:
      "The ICO imposed a fine of £20 million in October 2020 (reduced from an initial proposal of £183 million). BA also settled a group litigation claim with affected customers on confidential terms.",
    outcome:
      "£20 million ICO fine. Confidential group litigation settlement. Significant reduction from initial £183 million proposed fine drew criticism.",
    consumerImpact:
      "420,000 customers had their financial data compromised. The case was one of the first major GDPR enforcement actions in the UK and highlighted the importance of website security for consumer data protection.",
  },
  {
    slug: "norton-motorcycles-pension-fraud",
    title: "Norton Motorcycles CEO Stole £14 Million from Employee Pension Funds",
    company: "Norton Motorcycles",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Pension Fraud",
    year: "2020-2021",
    amount: "£14 Million",
    agency: "Pensions Ombudsman, Insolvency Service",
    status: "Order Issued",
    summary:
      "Norton Motorcycles CEO Stuart Garner misappropriated £14 million from employee pension funds, investing the money in his own businesses instead of securing workers' retirement savings.",
    fullStory: `Stuart Garner, the CEO of Norton Motorcycles, one of Britain's most iconic motorcycle brands, was found to have misappropriated approximately £14 million from employee pension funds. Instead of investing the money for the benefit of the 228 pension scheme members, Garner directed the funds into his own business ventures.

The pension scheme members — ordinary workers who had entrusted their retirement savings to the company pension scheme — faced devastating losses. Many were close to retirement and had limited ability to rebuild their pension pots.

The fraud came to light when Norton Motorcycles went into administration in January 2020. The administrators discovered that the pension funds had been improperly invested in Garner's businesses rather than in appropriate pension investments.

The Pensions Ombudsman conducted a thorough investigation and found Garner personally liable for the losses. The Ombudsman's determination made clear that Garner had breached his duties as a trustee of the pension scheme.

The case highlighted the vulnerability of small company pension schemes and the devastating impact when those in positions of trust abuse their responsibilities. For the 228 affected members, their retirement security was compromised by one individual's misconduct.

TVS Motor Company, an Indian motorcycle manufacturer, subsequently acquired Norton's brand and assets, but the pension fund losses remained a separate matter.`,
    courtOrder:
      "The Pensions Ombudsman ruled in 2021 that Stuart Garner was personally liable and ordered him to restore the misappropriated funds. The Insolvency Service investigated Garner's conduct as a company director.",
    outcome:
      "Garner found personally liable for £14 million. Pensions Ombudsman order issued. Norton acquired by TVS Motor Company. Recovery for victims uncertain.",
    consumerImpact:
      "228 pension scheme members faced losses to their retirement savings. The case exposed gaps in pension scheme oversight for small companies and contributed to calls for stronger pension trustee regulation.",
  },
  {
    slug: "vodafone-overcharging-uk",
    title: "Vodafone Fined £4.6 Million for Overcharging Pay-As-You-Go Customers",
    company: "Vodafone UK",
    country: "United Kingdom",
    countryCode: "UK",
    category: "Telecom Overcharging",
    year: "2016",
    amount: "£4.6 Million",
    agency: "Ofcom",
    status: "Settled",
    summary:
      "Vodafone failed to credit over 10,000 pay-as-you-go customers' accounts correctly and mishandled thousands of complaints, earning Ofcom's largest fine at the time.",
    fullStory: `In 2016, Ofcom fined Vodafone £4.6 million — its largest fine at the time — for two serious breaches of consumer protection rules.

The first breach involved Vodafone's failure to credit the accounts of 10,452 pay-as-you-go customers after they had topped up their phones. These customers paid for credit that was never applied to their accounts, effectively losing money. The problem stemmed from errors in Vodafone's system when it migrated customers to a new billing platform.

The second breach related to Vodafone's handling of customer complaints. Ofcom's investigation found that Vodafone's customer service processes had "serious and sustained shortcomings." The company failed to act quickly enough to identify and fix billing problems, leaving customers out of pocket and unable to get proper resolution.

Vodafone's complaint handling was found to be inadequate across the board. Customers who tried to get their issues resolved faced long waits, were passed between departments, and in many cases were simply told the issue had been fixed when it hadn't.

Ofcom's investigation revealed that the problems were systemic rather than isolated — they affected thousands of customers over an extended period and reflected fundamental failures in Vodafone's systems and customer service culture.`,
    courtOrder:
      "Ofcom imposed a fine of £4.6 million and required Vodafone to implement a comprehensive improvement plan for its billing systems and customer service processes.",
    outcome:
      "£4.6 million fine (Ofcom's largest at the time). Mandatory system and service improvements. Significant reputational damage.",
    consumerImpact:
      "Over 10,000 customers were directly affected by the billing failure. The case led to increased Ofcom scrutiny of telecom billing practices and complaint handling standards across the industry.",
  },
];

// Sorted order: biggest impact first, India-heavy
const sortedOrder: string[] = [
  // India biggest impact
  "amrapali-group-real-estate",
  "byjus-refund-crisis",
  "unitech-real-estate-fraud",
  "dlf-belaire-unfair-contracts",
  "jaypee-infratech-homebuyers",
  // Global biggest impact
  "post-office-horizon-scandal",
  "ppi-mis-selling-scandal",
  "wells-fargo-fake-accounts",
  "volkswagen-dieselgate",
  "ftx-crypto-fraud",
  // India continued
  "whitehat-jr-misleading-ads",
  "ldafinance-insurance-claim-denial",
  "flipkart-product-swap",
  "airtel-payments-bank-aadhaar",
  "amazon-india-counterfeit",
  "makemytrip-refund-covid",
  "oyo-rooms-complaints",
  "ola-uber-surge-pricing",
  // Big international
  "facebook-meta-cambridge-analytica",
  "equifax-data-breach",
  "epic-games-fortnite-dark-patterns",
  "car-finance-mis-selling-uk",
  "energy-supplier-failures-uk",
  // India continued
  "telecom-overcharging-india",
  "zomato-food-safety",
  "bank-hidden-charges-india",
  "air-india-passenger-rights",
  // International continued
  "wonga-payday-loans",
  "british-gas-overcharging",
  "navient-student-loans",
  "google-location-tracking",
  "southwest-airlines-meltdown",
  "hbos-reading-fraud",
  "amazon-prime-dark-patterns",
  "vonage-subscription-trap",
  "dish-network-robocalls",
  "kia-hyundai-theft-defect",
  "t-mobile-data-breaches",
  "thames-water-sewage",
  "tsb-it-migration-disaster",
  "ryanair-refund-practices",
  "publishers-clearing-house",
  "volkswagen-uk-dieselgate",
  "british-airways-data-breach",
  "norton-motorcycles-pension-fraud",
  "vodafone-overcharging-uk",
  "tesco-clubcard-pricing",
];

function getSortedCases(): Case[] {
  const orderMap = new Map(sortedOrder.map((slug, i) => [slug, i]));
  return [...cases].sort((a, b) => {
    const aOrder = orderMap.get(a.slug) ?? 999;
    const bOrder = orderMap.get(b.slug) ?? 999;
    return aOrder - bOrder;
  });
}

export const sortedCases = getSortedCases();

export function getCasesByCountry(countryCode: "IN" | "US" | "UK"): Case[] {
  return sortedCases.filter((c) => c.countryCode === countryCode);
}

export function getFeaturedCases(): Case[] {
  return sortedCases.filter((c) => c.featured);
}

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(cases.map((c) => c.category))].sort();
}

export function getCasesByCategory(category: string): Case[] {
  return sortedCases.filter((c) => c.category === category);
}

export function searchCases(query: string): Case[] {
  const q = query.toLowerCase();
  return sortedCases.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q)
  );
}

export const countryInfo = {
  IN: {
    name: "India",
    flag: "🇮🇳",
    agencies: [
      { name: "National Consumer Helpline", contact: "1800-11-4000 (Toll Free)", url: "https://consumerhelpline.gov.in" },
      { name: "NCDRC (National Consumer Disputes Redressal Commission)", contact: "011-23386054", url: "https://ncdrc.nic.in" },
      { name: "CCPA (Central Consumer Protection Authority)", contact: "Via National Consumer Helpline", url: "https://consumeraffairs.nic.in" },
      { name: "IRDAI (Insurance Regulator)", contact: "155255", url: "https://igms.irda.gov.in" },
      { name: "RBI Ombudsman (Banking)", contact: "14448", url: "https://cms.rbi.org.in" },
      { name: "TRAI (Telecom Regulator)", contact: "1800-11-8700", url: "https://trai.gov.in" },
    ],
    laws: [
      { name: "Consumer Protection Act, 2019", description: "Comprehensive consumer protection law establishing three-tier consumer commission system (District, State, National). Covers unfair trade practices, defective goods, deficient services, and misleading advertisements." },
      { name: "RERA (Real Estate Regulation Act), 2016", description: "Protects homebuyers by requiring builders to register projects, maintain separate escrow accounts, and deliver on time. Establishes RERA authorities for dispute resolution." },
      { name: "Information Technology Act, 2000", description: "Covers cyber fraud, data protection, and e-commerce consumer issues." },
    ],
  },
  US: {
    name: "United States",
    flag: "🇺🇸",
    agencies: [
      { name: "FTC (Federal Trade Commission)", contact: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov" },
      { name: "CFPB (Consumer Financial Protection Bureau)", contact: "consumerfinance.gov/complaint", url: "https://www.consumerfinance.gov/complaint/" },
      { name: "FCC (Federal Communications Commission)", contact: "consumercomplaints.fcc.gov", url: "https://consumercomplaints.fcc.gov" },
      { name: "DOT (Airline Complaints)", contact: "airconsumer.dot.gov", url: "https://airconsumer.dot.gov" },
      { name: "SEC (Securities Fraud)", contact: "sec.gov/tcr", url: "https://www.sec.gov/tcr" },
      { name: "State Attorney General", contact: "Search: [Your State] Attorney General consumer complaint", url: "" },
    ],
    laws: [
      { name: "FTC Act (Section 5)", description: "Prohibits unfair or deceptive acts or practices in commerce. The FTC's broadest enforcement authority." },
      { name: "Fair Credit Reporting Act (FCRA)", description: "Ensures accuracy of credit reports. Gives consumers the right to dispute errors." },
      { name: "COPPA (Children's Online Privacy Protection Act)", description: "Requires parental consent to collect data from children under 13." },
      { name: "FTC Click-to-Cancel Rule (2024)", description: "Requires sellers to make cancellation as easy as sign-up." },
    ],
  },
  UK: {
    name: "United Kingdom",
    flag: "🇬🇧",
    agencies: [
      { name: "Citizens Advice Bureau", contact: "0808 223 1133", url: "https://www.citizensadvice.org.uk" },
      { name: "Financial Ombudsman Service", contact: "0800 023 4567", url: "https://www.financial-ombudsman.org.uk" },
      { name: "CMA (Competition and Markets Authority)", contact: "Via Citizens Advice", url: "https://www.gov.uk/government/organisations/competition-and-markets-authority" },
      { name: "FCA (Financial Conduct Authority)", contact: "0800 111 6768", url: "https://www.fca.org.uk" },
      { name: "Ofgem (Energy Regulator)", contact: "Via Citizens Advice", url: "https://www.ofgem.gov.uk" },
      { name: "Trading Standards", contact: "Via Citizens Advice", url: "https://www.tradingstandards.uk" },
    ],
    laws: [
      { name: "Consumer Rights Act 2015", description: "Comprehensive consumer protection covering goods, services, and digital content. Establishes rights to refunds, repairs, and replacements." },
      { name: "Consumer Contracts Regulations 2013", description: "Provides 14-day cooling-off period for online and distance purchases." },
      { name: "Financial Services and Markets Act 2000", description: "Establishes FCA's authority to regulate financial services and protect consumers." },
    ],
  },
};
