/* Run: npx tsx scripts/seed-companies.ts */

import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const companies: Record<string, string[]> = {
  IN: [
    // E-Commerce & Online Retail
    "Amazon India", "Flipkart", "Meesho", "Myntra", "Snapdeal",
    "Nykaa", "Ajio", "Tata CLiQ", "JioMart", "BigBasket",
    "Blinkit", "Zepto", "DMart Ready", "Reliance Digital", "Croma",
    "Vijay Sales", "Shoppers Stop", "Lenskart", "FirstCry", "Purplle",
    "Pepperfry", "Urban Ladder", "BoAt", "Noise", "Mamaearth",
    "Sugar Cosmetics", "Bewakoof", "Decathlon India", "IKEA India",
    "H&M India", "Zara India", "Tata Neu", "Jiocinema", "IndiaMart",

    // Pharma & Health E-Commerce
    "1mg (Tata Health)", "PharmEasy", "Netmeds", "Apollo Pharmacy Online",
    "MediBuddy", "Practo", "Apollo 24|7", "Cult.fit",

    // Ed-Tech & Education
    "BYJU'S", "WhiteHat Jr", "Unacademy", "Vedantu", "upGrad",
    "Simplilearn", "Great Learning", "Emeritus", "Physics Wallah",
    "Allen Digital", "LEAD School", "Toppr", "Doubtnut", "Testbook",
    "Extramarks", "Aakash Educational Services", "FIITJEE",
    "Career Launcher", "TIME (Triumphant Institute)", "IMS Learning Resources",

    // Food Delivery & Restaurants
    "Zomato", "Swiggy", "Dunzo", "EatSure", "Rebel Foods (Faasos/Behrouz)",
    "Box8", "Domino's India", "McDonald's India", "KFC India",
    "Pizza Hut India", "Burger King India", "Subway India",
    "Starbucks India (Tata Starbucks)", "Haldiram's",

    // Travel, Transport & Hospitality
    "MakeMyTrip", "Goibibo", "Yatra", "Cleartrip", "EaseMyTrip",
    "OYO Rooms", "Treebo Hotels", "FabHotels", "Lemon Tree Hotels",
    "Taj Hotels (IHCL)", "ITC Hotels", "Oberoi Hotels",
    "Ola Cabs", "Uber India", "Rapido", "BluSmart",
    "RedBus", "ixigo", "Abhibus", "ConfirmTkt",
    "Air India", "IndiGo (InterGlobe Aviation)", "SpiceJet", "Vistara",
    "Go First (Go Air)", "AirAsia India", "Akasa Air", "Air India Express",
    "IRCTC (Indian Railway Catering and Tourism Corporation)",

    // Telecom & Internet Service Providers
    "Reliance Jio", "Bharti Airtel", "Vodafone Idea (Vi)", "BSNL", "MTNL",
    "ACT Fibernet", "Hathway Cable", "Tata Play (formerly Tata Sky)",
    "DishTV", "JioFiber", "Airtel Xstream Fiber", "Excitel Broadband",
    "Tikona Infinet", "SITI Cable", "Den Networks",

    // Banking — Public Sector
    "State Bank of India (SBI)", "Punjab National Bank (PNB)",
    "Bank of Baroda", "Canara Bank", "Union Bank of India",
    "Bank of India", "Indian Overseas Bank", "UCO Bank",
    "Central Bank of India", "Indian Bank", "Bank of Maharashtra",
    "Punjab & Sind Bank",

    // Banking — Private Sector
    "HDFC Bank", "ICICI Bank", "Kotak Mahindra Bank", "Axis Bank",
    "IndusInd Bank", "Yes Bank", "IDBI Bank", "Federal Bank",
    "RBL Bank", "Bandhan Bank", "IDFC First Bank", "South Indian Bank",
    "Karur Vysya Bank", "City Union Bank", "Dhanlaxmi Bank",
    "CSB Bank (Catholic Syrian Bank)", "Jammu & Kashmir Bank",

    // NBFCs & Lending
    "Bajaj Finance", "Bajaj Finserv", "Tata Capital", "Muthoot Finance",
    "Manappuram Finance", "Shriram Finance", "Mahindra Finance",
    "HDFC Ltd (Housing Finance)", "LIC Housing Finance", "PNB Housing Finance",
    "L&T Finance", "Aditya Birla Finance", "Fullerton India",
    "Home First Finance", "Aavas Financiers", "IIFL Finance",
    "Hero FinCorp", "TVS Credit Services", "Cholamandalam Investment",

    // Payments & Fintech
    "Paytm (One97 Communications)", "PhonePe", "Google Pay India",
    "CRED", "MobiKwik", "BharatPe", "Razorpay", "Cashfree Payments",
    "Amazon Pay India", "FreeCharge", "Airtel Payments Bank",
    "India Post Payments Bank", "Fino Payments Bank", "Jio Payments Bank",
    "Slice", "KreditBee", "MoneyTap", "Navi Technologies", "Fi Money",
    "Jupiter (Amica Financial Technologies)", "Uni Cards", "OneCard",
    "LazyPay", "Simpl", "ZestMoney", "EarlySalary", "MoneyView",
    "Fibe (formerly EarlySalary)", "mPokket", "PaySense",

    // Insurance
    "Life Insurance Corporation of India (LIC)", "Star Health and Allied Insurance",
    "ICICI Lombard General Insurance", "HDFC Ergo General Insurance",
    "Bajaj Allianz General Insurance", "Bajaj Allianz Life Insurance",
    "New India Assurance", "SBI Life Insurance", "SBI General Insurance",
    "Max Life Insurance", "Tata AIA Life Insurance",
    "ICICI Prudential Life Insurance", "Kotak Life Insurance",
    "Aditya Birla Sun Life Insurance", "Aditya Birla Health Insurance",
    "Care Health Insurance (formerly Religare)", "Digit Insurance (Go Digit)",
    "Acko General Insurance", "Policybazaar", "Niva Bupa Health Insurance",
    "ManipalCigna Health Insurance", "United India Insurance",
    "Oriental Insurance", "National Insurance Company",

    // Real Estate & Construction
    "DLF Limited", "Godrej Properties", "Prestige Estates",
    "Lodha Group (Macrotech Developers)", "Oberoi Realty",
    "Sobha Limited", "Brigade Enterprises", "Puravankara Limited",
    "Shapoorji Pallonji Group", "Mahindra Lifespace Developers",
    "Tata Housing Development", "Amrapali Group", "Unitech Limited",
    "Jaypee Infratech (Jaiprakash Associates)", "Supertech Limited",
    "Gaurs Group", "ATS Infrastructure", "Nirala Group",
    "Mahagun Group", "Prateek Group", "Gulshan Homz", "Sikka Group",
    "Emaar India", "M3M India", "Adani Realty", "Hiranandani Group",
    "Kalpataru Group", "Rustomjee (Keystone Realtors)", "Sunteck Realty",
    "Kolte-Patil Developers", "Rohan Builders", "Kumar Properties",
    "Mantri Developers", "Salarpuria Sattva Group", "Shriram Properties",
    "Casagrand Builder", "Aparna Constructions", "Mana Projects",
    "TVS Emerald", "Alliance Group", "Radiance Realty",

    // Automobile — Cars
    "Maruti Suzuki India", "Hyundai Motor India", "Tata Motors",
    "Mahindra & Mahindra", "Kia India", "Toyota Kirloskar Motor",
    "Honda Cars India", "MG Motor India", "Skoda Auto India",
    "Volkswagen India", "Renault India", "Nissan India",
    "Citroen India (Stellantis)", "Jeep India (Stellantis)",
    "BMW India", "Mercedes-Benz India", "Audi India",
    "Volvo Car India", "Land Rover India (JLR)", "Porsche India",
    "BYD India", "Lexus India",

    // Automobile — Two-Wheelers & EV
    "Hero MotoCorp", "Bajaj Auto", "TVS Motor Company",
    "Royal Enfield (Eicher Motors)", "Honda Motorcycle & Scooter India",
    "Yamaha Motor India", "Suzuki Motorcycle India",
    "Ather Energy", "Ola Electric", "Revolt Motors",
    "Okinawa Autotech", "Ampere Vehicles (Greaves)", "Vida (Hero)",

    // Utilities & Home Services
    "Tata Power", "Adani Electricity Mumbai", "BSES Rajdhani / BSES Yamuna",
    "MSEDCL (Maharashtra)", "BESCOM (Bengaluru)", "TANGEDCO (Tamil Nadu)",
    "CESC (Kolkata)", "Torrent Power",
    "Indraprastha Gas Limited (IGL)", "Mahanagar Gas Limited (MGL)",
    "Adani Total Gas", "Gujarat Gas",
    "Urban Company", "NoBroker", "Housing.com", "99acres", "MagicBricks",
    "Square Yards", "CommonFloor", "Quikr Homes",

    // Entertainment & Media
    "BookMyShow", "Paytm Insider", "Disney+ Hotstar",
    "Netflix India", "Amazon Prime Video India", "SonyLIV",
    "ZEE5", "Voot (JioCinema)", "MX Player", "ALTBalaji",
    "Spotify India", "Gaana", "JioSaavn", "Wynk Music",

    // Stock Trading & Investment
    "Zerodha", "Groww", "Upstox", "Angel One (Angel Broking)",
    "5Paisa Capital", "ICICI Direct", "HDFC Securities",
    "Kotak Securities", "Motilal Oswal Financial Services",
    "Sharekhan (BNP Paribas)", "Paytm Money", "Kuvera",
    "Coin by Zerodha", "Smallcase", "INDmoney", "ET Money",
    "Scripbox", "Fisdom", "Niyo",

    // Logistics & Courier
    "Delhivery", "BlueDart (DHL)", "DTDC Express",
    "Ecom Express", "Xpressbees", "Shadowfax",
    "India Post", "FedEx India", "Aramex India",
    "Professional Couriers", "Gati (Allcargo)",
  ],

  US: [
    // Tech & Social Media
    "Amazon", "Apple Inc.", "Google (Alphabet Inc.)", "Facebook / Meta Platforms",
    "Microsoft Corporation", "TikTok (ByteDance)", "X (formerly Twitter)",
    "Snapchat (Snap Inc.)", "Netflix", "Spotify", "Pinterest",
    "LinkedIn (Microsoft)", "Reddit", "Discord", "Twitch (Amazon)",

    // Ride-hailing & Delivery
    "Uber Technologies", "Lyft", "DoorDash", "Grubhub (Just Eat Takeaway)",
    "Instacart", "Postmates (Uber)", "Gopuff",

    // E-Commerce & Marketplace
    "eBay", "Etsy", "Wish (ContextLogic)", "Temu (PDD Holdings)",
    "Shein", "Wayfair", "Overstock", "Chewy", "StockX", "Poshmark",

    // Travel & Hospitality
    "Airbnb", "Expedia Group", "Booking.com", "Priceline",
    "Hotels.com", "Vrbo (Expedia)", "Trivago",
    "Ticketmaster / Live Nation Entertainment",

    // Telecom & Cable
    "AT&T Inc.", "Verizon Communications", "T-Mobile US",
    "Comcast Corporation (Xfinity)", "Charter Communications (Spectrum)",
    "Cox Communications", "Lumen Technologies (CenturyLink)",
    "Frontier Communications", "Dish Network", "DirecTV",
    "Vonage (Ericsson)", "Altice USA (Optimum)",

    // Banking — Major
    "Wells Fargo & Company", "Bank of America Corporation",
    "JPMorgan Chase & Co.", "Citibank (Citigroup)",
    "Capital One Financial Corporation", "U.S. Bancorp (US Bank)",
    "PNC Financial Services", "Truist Financial Corporation",
    "TD Bank (TD Group)", "Ally Financial", "Discover Financial Services",
    "Goldman Sachs (Marcus)", "Morgan Stanley",
    "Charles Schwab Corporation", "Fifth Third Bank",
    "KeyBank (KeyCorp)", "Regions Financial Corporation",
    "M&T Bank Corporation", "Huntington Bancshares",
    "Citizens Financial Group",

    // Fintech & Payments
    "PayPal Holdings", "Venmo (PayPal)", "Cash App (Block Inc.)",
    "Robinhood Markets", "Coinbase Global", "SoFi Technologies",
    "Chime Financial", "Green Dot Corporation", "Zelle",
    "Affirm Holdings", "Klarna", "Afterpay (Block Inc.)",
    "American Express Company", "Square (Block Inc.)",

    // Credit Reporting & Debt
    "Equifax Inc.", "Experian plc", "TransUnion",
    "Navient Corporation", "Nelnet", "MOHELA",
    "Great Lakes Educational Loan Services", "Credit Karma (Intuit)",

    // Insurance — Health
    "UnitedHealthcare (UnitedHealth Group)", "Anthem / Elevance Health",
    "Aetna (CVS Health)", "Cigna Healthcare (The Cigna Group)",
    "Humana Inc.", "Blue Cross Blue Shield Association",
    "Kaiser Permanente", "Centene Corporation (Ambetter)",
    "Molina Healthcare",

    // Insurance — Auto / Home / Life
    "State Farm Insurance", "Allstate Corporation", "GEICO (Berkshire Hathaway)",
    "Progressive Corporation", "Liberty Mutual Insurance",
    "Farmers Insurance Group", "USAA", "Nationwide Mutual Insurance",
    "Travelers Companies", "American Family Insurance",
    "Erie Insurance Group", "Hartford Financial Services",
    "MetLife", "Prudential Financial", "New York Life Insurance",

    // Airlines
    "Southwest Airlines", "American Airlines Group",
    "United Airlines Holdings", "Delta Air Lines",
    "Spirit Airlines", "Frontier Airlines (Indigo Partners)",
    "JetBlue Airways", "Alaska Air Group", "Allegiant Air",
    "Hawaiian Airlines (Alaska Air)",

    // Automotive
    "Tesla Inc.", "Ford Motor Company", "General Motors (Chevrolet / GMC / Buick / Cadillac)",
    "Toyota Motor North America", "Honda Motor Co. (US)",
    "Hyundai Motor America", "Kia America",
    "Nissan Motor Corporation (US)", "Stellantis (Chrysler / Dodge / Jeep / Ram)",
    "BMW of North America", "Mercedes-Benz USA",
    "Volkswagen of America", "Subaru of America", "Mazda North America",
    "Rivian Automotive", "Lucid Motors",

    // Auto Sales & Service
    "CarMax", "Carvana", "AutoNation", "Vroom", "TrueCar",

    // Retail
    "Walmart Inc.", "Target Corporation", "Costco Wholesale",
    "The Home Depot", "Lowe's Companies", "Best Buy Co.",
    "Dollar General Corporation", "Dollar Tree / Family Dollar",
    "Walgreens Boots Alliance", "CVS Health Corporation",
    "Kroger Company", "Albertsons Companies",
    "Publishers Clearing House",

    // Cryptocurrency
    "FTX Trading Ltd. (defunct)", "Binance", "Crypto.com",
    "Gemini Trust Company", "Kraken (Payward)",

    // Health & Pharmacy
    "Express Scripts (Cigna)", "OptumRx (UnitedHealth)",
    "CVS Pharmacy", "Walgreens Pharmacy", "Rite Aid",
    "GoodRx Holdings",

    // Student Loans & Education
    "Sallie Mae (SLM Corporation)", "Navient Corporation",
    "University of Phoenix (Adtalem)", "DeVry University",
    "ITT Technical Institute (defunct)", "Corinthian Colleges (defunct)",

    // Utilities
    "Pacific Gas & Electric (PG&E)", "Southern California Edison",
    "Duke Energy Corporation", "Dominion Energy",
    "NextEra Energy (Florida Power & Light)",
    "Consolidated Edison (ConEd)", "Xcel Energy",
  ],

  UK: [
    // Banking — High Street
    "Barclays Bank", "HSBC UK", "Lloyds Banking Group",
    "NatWest Group", "Santander UK", "TSB Bank",
    "Halifax (Lloyds)", "Bank of Scotland (Lloyds)",
    "Nationwide Building Society", "Metro Bank",
    "Co-operative Bank", "Yorkshire Building Society",
    "Coventry Building Society", "Skipton Building Society",

    // Banking — Digital / Challenger
    "Starling Bank", "Monzo Bank", "Revolut", "Atom Bank",
    "Chase UK (JPMorgan)", "Zopa Bank", "Tandem Bank",
    "OakNorth Bank",

    // Finance — Lending & Motor
    "Close Brothers Group", "MotoNovo Finance (FirstRand)",
    "Black Horse Finance (Lloyds)", "Barclays Partner Finance",
    "Amigo Loans", "Provident Financial Group",
    "Oakam Ltd", "Sunny Loans (Elevate Credit)",

    // Insurance
    "Aviva plc", "Direct Line Group", "Admiral Group",
    "LV= (Liverpool Victoria)", "Zurich Insurance UK",
    "AXA UK", "RSA Insurance (Intact)", "Legal & General Group",
    "Prudential plc", "Hastings Direct", "esure Group",
    "Saga plc", "NFU Mutual", "Ecclesiastical Insurance",

    // Telecom & Broadband
    "BT Group", "EE (BT)", "Vodafone UK", "Three UK (CK Hutchison)",
    "O2 UK (Telefonica)", "Sky UK (Comcast)", "Virgin Media O2 (Liberty Global)",
    "TalkTalk Telecom", "Plusnet (BT)", "Hyperoptic",
    "Community Fibre", "Zen Internet", "Shell Energy Broadband",

    // Energy — The Big Six & Others
    "British Gas (Centrica plc)", "EDF Energy UK", "E.ON UK",
    "Scottish Power (Iberdrola)", "SSE Energy Services",
    "OVO Energy", "Octopus Energy", "Bulb Energy (Octopus, defunct brand)",
    "Shell Energy Retail", "Utilita Energy", "Utility Warehouse",
    "So Energy", "Good Energy", "Ecotricity", "Boost Energy",

    // Water Companies
    "Thames Water Utilities", "Yorkshire Water (Kelda Group)",
    "Southern Water", "Anglian Water", "Severn Trent Water",
    "United Utilities", "Northumbrian Water", "South West Water (Pennon)",
    "Wessex Water (YTL)", "Affinity Water", "South East Water",
    "Bristol Water",

    // Airlines & Travel
    "British Airways (IAG)", "Ryanair", "easyJet",
    "Jet2.com and Jet2holidays", "TUI UK",
    "Wizz Air", "Lastminute.com", "On the Beach Group",
    "Booking.com UK", "Trainline plc", "National Express",
    "Megabus (Stagecoach)", "FlixBus UK",

    // Retail — Supermarkets
    "Tesco plc", "Sainsbury's (J Sainsbury plc)", "Asda Group",
    "Morrisons (CD&R)", "Aldi UK (Aldi Süd)", "Lidl GB",
    "Marks & Spencer Group", "Waitrose & Partners (John Lewis)",
    "Co-op Food (Co-operative Group)", "Iceland Foods",

    // Retail — High Street & Online
    "John Lewis Partnership", "Argos (Sainsbury's)", "Currys plc",
    "AO World plc", "Amazon UK", "ASOS plc", "Boohoo Group",
    "Next plc", "Boots UK (Walgreens Boots Alliance)",
    "Superdrug (AS Watson)", "Primark (ABF)", "Sports Direct (Frasers Group)",
    "Very Group (Shop Direct)", "Dunelm Group",

    // Property & Estate Agents
    "Purplebricks Group", "Rightmove plc", "Zoopla (CoStar Group)",
    "Foxtons Group", "Countrywide plc (Connells)",
    "Persimmon plc", "Barratt Developments", "Taylor Wimpey plc",
    "Bellway plc", "Redrow plc", "Berkeley Group Holdings",
    "Crest Nicholson", "Vistry Group (Countryside)",

    // Automotive
    "Arnold Clark Automobiles", "Halfords Group",
    "Kwik Fit (Itochu)", "Pendragon plc (Stratstone/Evans Halshaw)",
    "Lookers plc", "Sytner Group (Penske)",
    "Cazoo (online car sales)", "cinch (Constellation Automotive)",

    // Post & Logistics
    "Post Office Ltd", "Royal Mail (International Distributions Services)",
    "Hermes / Evri", "DPD UK", "Yodel", "Amazon Logistics UK",
    "DHL UK", "FedEx UK", "UPS UK", "Parcelforce Worldwide",

    // Other Notable
    "Wonga Group (defunct)", "Norton Motorcycles",
    "Carillion plc (defunct)", "Thomas Cook Group (defunct)",
    "Greensill Capital (defunct)",
  ],
};

async function seed() {
  // Create table
  await db.execute(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      region TEXT NOT NULL,
      added_by TEXT DEFAULT 'system',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(name, region)
    )
  `);

  let total = 0;
  for (const [region, names] of Object.entries(companies)) {
    for (const name of names) {
      try {
        await db.execute({
          sql: `INSERT OR IGNORE INTO companies (name, region, added_by) VALUES (?, ?, 'system')`,
          args: [name, region],
        });
        total++;
      } catch (e) {
        console.error(`Failed to insert ${name} (${region}):`, e);
      }
    }
    console.log(`${region}: ${names.length} companies`);
  }
  console.log(`\nTotal seeded: ${total} companies`);
}

seed().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
