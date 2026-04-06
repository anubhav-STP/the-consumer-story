export const companiesByCountry: Record<string, string[]> = {
  IN: [
    // E-Commerce & Retail
    "Amazon India", "Flipkart", "Meesho", "Myntra", "Snapdeal", "Nykaa",
    "Ajio", "Tata CLiQ", "JioMart", "BigBasket", "Blinkit", "Zepto",
    "DMart", "Reliance Retail", "Croma", "Vijay Sales", "Shoppers Stop",
    "Lenskart", "FirstCry", "Purplle", "1mg", "Pharmeasy", "Netmeds",
    "Pepperfry", "Urban Ladder", "BoAt", "Noise", "Mamaearth",

    // Ed-Tech
    "BYJU'S", "WhiteHat Jr", "Unacademy", "Vedantu", "upGrad",
    "Simplilearn", "Great Learning", "Emeritus", "Physics Wallah",
    "Allen Digital", "LEAD School", "Toppr", "Doubtnut", "Testbook",

    // Food & Delivery
    "Zomato", "Swiggy", "Dunzo", "Domino's India", "McDonald's India",
    "EatSure", "Rebel Foods", "Box8",

    // Travel & Transport
    "MakeMyTrip", "Goibibo", "Yatra", "Cleartrip", "EaseMyTrip",
    "OYO Rooms", "Treebo", "FabHotels", "Ola", "Uber India", "Rapido",
    "RedBus", "ixigo", "Air India", "IndiGo", "SpiceJet", "Vistara",
    "Go First", "AirAsia India", "Akasa Air", "IRCTC",

    // Telecom & Internet
    "Jio", "Airtel", "Vi (Vodafone Idea)", "BSNL", "MTNL",
    "ACT Fibernet", "Hathway", "Tata Play", "DishTV", "JioFiber",
    "Airtel Xstream",

    // Banking & Finance
    "SBI", "HDFC Bank", "ICICI Bank", "Kotak Mahindra Bank",
    "Axis Bank", "Punjab National Bank", "Bank of Baroda",
    "Canara Bank", "Union Bank of India", "IndusInd Bank",
    "Yes Bank", "IDBI Bank", "Federal Bank", "RBL Bank",
    "Bank of India", "Indian Overseas Bank", "UCO Bank",
    "Bajaj Finance", "Bajaj Finserv", "Tata Capital",
    "Muthoot Finance", "Manappuram Finance", "Shriram Finance",
    "HDFC Ltd", "LIC Housing Finance", "PNB Housing Finance",

    // Payments & Fintech
    "Paytm", "PhonePe", "Google Pay India", "CRED", "MobiKwik",
    "BharatPe", "Razorpay", "Cashfree", "Amazon Pay", "FreeCharge",
    "Airtel Payments Bank", "India Post Payments Bank", "Fino Payments Bank",
    "Slice", "KreditBee", "MoneyTap", "Navi", "Fi", "Jupiter",

    // Insurance
    "LIC of India", "Star Health", "ICICI Lombard", "HDFC Ergo",
    "Bajaj Allianz", "New India Assurance", "SBI Life",
    "Max Life Insurance", "Tata AIA", "ICICI Prudential Life",
    "Kotak Life Insurance", "Aditya Birla Health", "Care Health Insurance",
    "Digit Insurance", "Acko Insurance", "Policybazaar",

    // Real Estate
    "DLF", "Godrej Properties", "Prestige Group", "Lodha Group",
    "Oberoi Realty", "Sobha Limited", "Brigade Group", "Puravankara",
    "Shapoorji Pallonji", "Mahindra Lifespaces", "Tata Housing",
    "Amrapali Group", "Unitech", "Jaypee Infratech", "Supertech",
    "Gaurs Group", "ATS Group", "Nirala Group", "Mahagun",
    "Prateek Group", "Gulshan Homz", "Sikka Group",
    "Emaar India", "M3M", "Adani Realty",

    // Auto
    "Maruti Suzuki", "Hyundai India", "Tata Motors", "Mahindra & Mahindra",
    "Kia India", "Toyota India", "Honda Cars India", "MG Motor India",
    "Skoda India", "Volkswagen India", "Renault India", "Nissan India",
    "Citroen India", "Jeep India", "BMW India", "Mercedes-Benz India",
    "Audi India", "Ather Energy", "Ola Electric", "TVS Motor",
    "Bajaj Auto", "Hero MotoCorp", "Royal Enfield", "Honda 2-Wheelers",

    // Utilities & Services
    "Tata Power", "Adani Electricity", "BSES", "MSEDCL",
    "Indraprastha Gas", "Mahanagar Gas", "Urban Company",
    "NoBroker", "Housing.com", "99acres", "MagicBricks",
    "Practo", "Apollo 24|7", "BookMyShow", "Paytm Insider",

    // Trading & Investment
    "Zerodha", "Groww", "Upstox", "Angel One", "5Paisa",
    "ICICI Direct", "HDFC Securities", "Kotak Securities",
    "Motilal Oswal", "Sharekhan", "Coin by Zerodha",
  ],
  US: [
    // Tech & Social
    "Amazon", "Apple", "Google", "Facebook / Meta", "Microsoft",
    "TikTok / ByteDance", "Twitter / X", "Snapchat", "Netflix", "Spotify",
    "Uber", "Lyft", "DoorDash", "Grubhub", "Instacart",
    "Airbnb", "eBay", "Etsy", "Wish", "Temu", "Shein",

    // Telecom
    "AT&T", "Verizon", "T-Mobile", "Comcast / Xfinity", "Spectrum / Charter",
    "Cox Communications", "CenturyLink", "Frontier", "Dish Network",
    "DirecTV", "Vonage",

    // Banking & Finance
    "Wells Fargo", "Bank of America", "JPMorgan Chase", "Citibank",
    "Capital One", "US Bank", "PNC Bank", "Truist", "TD Bank",
    "Ally Bank", "Discover", "Goldman Sachs (Marcus)",
    "American Express", "PayPal", "Venmo", "Cash App / Block",
    "Robinhood", "Coinbase", "SoFi", "Chime",

    // Credit & Debt
    "Equifax", "Experian", "TransUnion", "Navient", "Nelnet",
    "Great Lakes", "FedLoan Servicing", "Credit Karma",

    // Insurance
    "UnitedHealthcare", "Anthem / Elevance", "Aetna / CVS Health",
    "Cigna", "Humana", "Blue Cross Blue Shield", "Kaiser Permanente",
    "State Farm", "Allstate", "GEICO", "Progressive",
    "Liberty Mutual", "Farmers Insurance", "USAA",

    // Airlines & Travel
    "Southwest Airlines", "American Airlines", "United Airlines",
    "Delta Air Lines", "Spirit Airlines", "Frontier Airlines",
    "JetBlue", "Alaska Airlines", "Expedia", "Booking.com",
    "Priceline", "Hotels.com", "Vrbo", "Ticketmaster / Live Nation",

    // Auto
    "Tesla", "Ford", "General Motors / Chevrolet", "Toyota USA",
    "Honda USA", "Hyundai USA", "Kia USA", "Nissan USA",
    "Stellantis / Chrysler / Dodge / Jeep", "BMW USA",
    "Mercedes-Benz USA", "Volkswagen USA", "Subaru", "Mazda",
    "CarMax", "Carvana", "AutoNation",

    // Retail
    "Walmart", "Target", "Costco", "Home Depot", "Lowe's",
    "Best Buy", "Wayfair", "Overstock", "Dollar General",
    "Publishers Clearing House",

    // Crypto
    "FTX (defunct)", "Binance", "Crypto.com",

    // Health & Pharma
    "CVS Health", "Walgreens", "Express Scripts", "OptumRx",
  ],
  UK: [
    // Banking
    "Barclays", "HSBC", "Lloyds Bank", "NatWest", "Santander UK",
    "TSB", "Halifax", "Nationwide", "Metro Bank", "Starling Bank",
    "Monzo", "Revolut", "Co-operative Bank", "Yorkshire Bank",
    "Close Brothers", "MotoNovo Finance",

    // Insurance
    "Aviva", "Direct Line", "Admiral", "LV=", "Zurich UK",
    "AXA UK", "RSA", "Legal & General", "Prudential",

    // Telecom
    "BT", "EE", "Vodafone UK", "Three", "O2",
    "Sky", "Virgin Media", "TalkTalk", "Plusnet",

    // Energy
    "British Gas / Centrica", "EDF Energy", "E.ON UK", "Scottish Power",
    "SSE", "OVO Energy", "Octopus Energy", "Bulb (defunct)",
    "Shell Energy", "Utilita", "Thames Water", "Yorkshire Water",
    "Southern Water", "Anglian Water", "Severn Trent",

    // Airlines & Travel
    "British Airways", "Ryanair", "easyJet", "Jet2", "TUI",
    "Wizz Air", "Lastminute.com", "On the Beach",
    "Booking.com UK", "Trainline",

    // Retail
    "Tesco", "Sainsbury's", "ASDA", "Morrisons", "Aldi UK",
    "Lidl UK", "Marks & Spencer", "John Lewis", "Argos",
    "Currys", "AO.com", "Amazon UK", "ASOS", "Boohoo",
    "Next", "Boots", "Superdrug",

    // Property
    "Purplebricks", "Rightmove", "Zoopla", "Persimmon Homes",
    "Barratt Homes", "Taylor Wimpey", "Bellway",

    // Auto
    "Arnold Clark", "Halfords", "Kwik Fit",

    // Other
    "Post Office", "Royal Mail", "Wonga (defunct)", "Amigo Loans",
    "Norton Motorcycles",
  ],
};
