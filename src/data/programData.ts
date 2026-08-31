export type ProgramFeature = {
  title: string;
  description: string;
};

export type ProgramStat = {
  value: string;
  label: string;
  icon: 'users' | 'store' | 'support' | 'shield';
};

export type PlanCard = {
  amount: string;
  planType: string;
  image: string;
  daily: string;
  monthly: string;
  prize: string;
  installmentLabel: string;
  installmentValue: string;
  badge?: string;
  description?: string;
  details?: string[];
};

export type ProgramData = {
  slug: string;
  title: string;
  urduTitle: string;
  category: string;
  shortDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  secondaryImage: string;
  accent: string;
  accentSoft: string;
  featureCards: ProgramFeature[];
  aboutHeading: string;
  aboutText: string[];
  featureList: string[];
  benefits: ProgramFeature[];
  audience: string[];
  stats: ProgramStat[];
  gallery?: string[];
  planCards?: PlanCard[];
};

export const programData: ProgramData[] = [
  {
    slug: 'shop-saving',
    title: 'Shopping Saving',
    urduTitle: 'شاپنگ سیونگ',
    category: 'Shopping',
    shortDescription: 'Smart savings on everyday essentials, lifestyle purchases, and trusted partner offers.',
    heroBadge: '01',
    heroTitle: 'Shopping Saving',
    heroDescription: 'Shop smart, save more and enjoy exclusive opportunities through our member-focused shopping saving program.',
    image: 'https://i.pinimg.com/1200x/dd/ba/95/ddba951d66f00304c81fe2cd50557c6f.jpg',
    secondaryImage: 'https://i.pinimg.com/1200x/f5/d7/3e/f5d73e49d24249e33d3b01f08248f1ed.jpg',
    accent: '#DFA42D',
    accentSoft: '#DFA42D/10',
    featureCards: [
      { title: 'Exclusive Discounts', description: 'Special member discounts and cashback' },
      { title: 'Daily Essentials', description: 'Groceries, clothing, electronics & more' },
      { title: 'Trusted Platform', description: '100% trusted and secure shopping experience' },
    ],
    aboutHeading: 'Turn Everyday Shopping Into Everyday Savings.',
    aboutText: [
      'Shopping Saving Program is designed to help members save more on their everyday purchases. From groceries and fashion to electronics and home essentials, enjoy access to exclusive discounts, cashback offers, and special deals from our trusted partners.',
      'Our goal is simple — make your everyday shopping easier, smarter, and more rewarding while helping you get more value from every purchase.',
    ],
    featureList: ['Exclusive member discounts', 'Cashback & special offers', 'Trusted partner stores', 'Secure shopping experience'],
    benefits: [
      { title: 'Exclusive Discounts', description: 'Get special member-only discounts across a wide range of products and services.' },
      { title: 'Cashback Rewards', description: 'Earn valuable cashback and get more back from your everyday purchases.' },
      { title: 'Wide Variety', description: 'Explore thousands of products across multiple shopping categories.' },
      { title: 'Special Offers', description: 'Enjoy seasonal, festival and limited-time offers available to members.' },
      { title: 'Trusted Brands', description: 'Shop confidently with trusted brands and verified partner sellers.' },
      { title: 'Safe & Secure', description: 'Enjoy a simple, secure and hassle-free shopping experience.' },
    ],
    audience: ['Anyone who wants to save more while shopping.', 'Individuals and families looking for better value.', 'Members who want simple and hassle-free savings.', 'Anyone ready to make everyday shopping more rewarding.'],
    stats: [
      { value: '1000+', label: 'Products', icon: 'users' },
      { value: '500+', label: 'Partner Stores', icon: 'store' },
      { value: '24/7', label: 'Support', icon: 'support' },
      { value: '100%', label: 'Secure', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/736x/33/9a/c4/339ac4ef25670d8a12b47ae544b662e3.jpg',
      'https://i.pinimg.com/736x/1c/50/97/1c509773e2bda9e5df3a558c829765d1.jpg',
      'https://i.pinimg.com/736x/1e/eb/81/1eeb81c08b351aa1618f5d29085d774d.jpg',
      'https://i.pinimg.com/736x/30/85/44/308544ba5b67966c918d4edaf520782c.jpg',
      'https://i.pinimg.com/736x/d1/fc/a6/d1fca63800337aae202376cbbb372d59.jpg',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
      'https://i.pinimg.com/736x/71/61/2e/71612eef186b81cf4540dd47c2a55693.jpg',
      'https://i.pinimg.com/736x/0f/cc/1f/0fcc1ff431f0f99b58c3734639c4f76f.jpg',
      'https://i.pinimg.com/736x/26/c4/39/26c4395f6cf01cb04a08a5a4cff56004.jpg',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://i.pinimg.com/736x/f8/f1/87/f8f1878fbb6e419fa421e0712a731a6a.jpg',
    ],
  },
  {
    slug: 'wholesale-saving',
    title: 'Wholesale Saving',
    urduTitle: 'ہول سیل سیونگ',
    category: 'Daily Essentials',
    shortDescription: 'Bulk purchase savings for families, retailers, and local businesses with better prices and faster growth.',
    heroBadge: '02',
    heroTitle: 'Wholesale Saving',
    heroDescription: 'Unlock bulk buying benefits and enjoy high-value savings on daily essentials, inventory, and business necessities.',
    image: 'https://i.pinimg.com/1200x/e2/73/a1/e273a1dd025aff9d4da47e1cc2a9aea7.jpg',
    secondaryImage: 'https://i.pinimg.com/1200x/c1/fe/45/c1fe457692bc6738cf615ae1bb9984de.jpg',
    accent: '#2563eb',
    accentSoft: '#dbeafe',
    featureCards: [
      { title: 'Bulk Pricing', description: 'Lower cost per unit on larger orders' },
      { title: 'Business Growth', description: 'Ideal for resellers and everyday stock-ups' },
      { title: 'Fast Access', description: 'Quick access to essentials and bulk goods' },
    ],
    aboutHeading: 'Smarter Bulk Buying for Better Value.',
    aboutText: [
      'Wholesale Saving gives members access to larger volume discounts and better pricing structures that reduce everyday costs. It is ideal for families, retailers, and entrepreneurs who buy in quantity.',
      'Instead of paying retail prices repeatedly, members can secure better value, stock up confidently, and improve their purchasing power without sacrificing quality.',
    ],
    featureList: ['Lower cost on bulk purchases', 'Better value across essential categories', 'Perfect for families and businesses', 'Reliable, high-volume purchasing support'],
    benefits: [
      { title: 'Lower Unit Cost', description: 'Save more when buying larger quantities across essential items.' },
      { title: 'Business Support', description: 'Strong pricing opportunities for resellers and store owners.' },
      { title: 'Stock Up Smart', description: 'Keep your household or business well supplied without overspending.' },
      { title: 'Flexible Buying', description: 'Choose quantities that match your real requirements and budget.' },
      { title: 'Trusted Supply', description: 'Work with dependable sellers and quality products.' },
      { title: 'Better Cash Flow', description: 'Lower purchase cost helps improve money management and growth.' },
    ],
    audience: ['Families buying in larger quantities.', 'Retailers and wholesalers looking for better margins.', 'Small businesses managing repeat purchases.', 'Anyone wanting strong savings on bulk essentials.'],
    stats: [
      { value: '30%', label: 'Bulk Savings', icon: 'store' },
      { value: '500+', label: 'Bulk Items', icon: 'users' },
      { value: '24/7', label: 'Order Support', icon: 'support' },
      { value: '100%', label: 'Verified Supply', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/1200x/79/47/f3/7947f3860fe9e0c5d2f2e3de39f0c146.jpg',
      'https://i.pinimg.com/736x/ed/3e/2f/ed3e2f936a0ca29ebc4132f21f650712.jpg',
      'https://i.pinimg.com/736x/1c/fa/30/1cfa300de2996d2de4d3204dd0f31617.jpg',
      'https://i.pinimg.com/736x/1d/7e/b1/1d7eb10959e3ea564e57c6920abd9bbe.jpg',
      'https://i.pinimg.com/736x/c1/8a/53/c18a532fdbc0f030934ee9ba8c208dc5.jpg',
      'https://i.pinimg.com/1200x/aa/b6/7e/aab67ee22f84fa401e100ce50d26b00b.jpg',
      'https://i.pinimg.com/736x/2f/d3/5c/2fd35c95d0122fed51a8dc193c816033.jpg',
      'https://i.pinimg.com/736x/d4/ae/ae/d4aeae90e806e3b8236e43f11e46ba51.jpg',
    ],
  },
  {
    slug: 'petrol-diesel-saving',
    title: 'Petrol & Diesel Saving',
    urduTitle: 'پٹرول و ڈیزل سیونگ',
    category: 'Vehicles',
    shortDescription: 'Reduce fuel expenses with smart savings designed for drivers, commuters, and business fleets.',
    heroBadge: '03',
    heroTitle: 'Petrol & Diesel Saving',
    heroDescription: 'Make fuel costs more manageable with value-driven savings that support daily travel and business mobility.',
    image: 'https://i.pinimg.com/1200x/8b/07/a6/8b07a673cc9b0bd1feb8c7011afa7852.jpg',
    secondaryImage: 'https://i.pinimg.com/736x/6f/71/1e/6f711e362807c16a7f10c54edab4517e.jpg',
    accent: '#f97316',
    accentSoft: '#ffedd5',
    featureCards: [
      { title: 'Fuel Value', description: 'Savings on recurring fuel purchases' },
      { title: 'Daily Travel', description: 'Support for work, commute, and family use' },
      { title: 'Fleet Friendly', description: 'Helpful for frequent drivers and businesses' },
    ],
    aboutHeading: 'Drive More, Spend Less on Fuel.',
    aboutText: [
      'Petrol & Diesel Saving is tailored for people who depend on fuel every day. Whether you are commuting to work, running family errands, or managing transport for your business, this program helps you reduce recurring fuel expenses.',
      'The purpose is to make transportation more affordable and efficient while giving members smarter access to savings that directly reduce their daily operating costs.',
    ],
    featureList: ['Savings on fuel purchases', 'Helpful for personal and business travel', 'Smart value for regular commuters', 'Long-term cost reduction'],
    benefits: [
      { title: 'Lower Fuel Cost', description: 'Reduce your daily fuel spend with member-focused value options.' },
      { title: 'Frequent Driver Support', description: 'Ideal for people with daily travel needs and transport responsibilities.' },
      { title: 'Business Advantage', description: 'Lower fleet and transport costs for growing operations.' },
      { title: 'Reliable Access', description: 'Convenient savings through trusted fueling networks.' },
      { title: 'Travel Stability', description: 'Keep your travel budget under control throughout the month.' },
      { title: 'Easy Everyday Use', description: 'Practical support for the routes and routines you depend on.' },
    ],
    audience: ['Daily commuters and drivers.', 'Car owners wanting more control over travel costs.', 'Business owners managing fuel usage.', 'Families planning better monthly budgets.'],
    stats: [
      { value: '20%', label: 'Fuel Savings', icon: 'store' },
      { value: '365', label: 'Fuel Days', icon: 'users' },
      { value: '24/7', label: 'Support', icon: 'support' },
      { value: '100%', label: 'Trusted Value', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/1200x/95/2c/e2/952ce2416530eee61a15331155f02a63.jpg',
      'https://i.pinimg.com/1200x/88/c0/a5/88c0a5dfdbc10bf9fb7243bf0ed35e89.jpg',
      'https://i.pinimg.com/736x/0d/46/80/0d4680d2b004ce8956775ed79723c469.jpg',
      'https://i.pinimg.com/1200x/11/9a/a9/119aa9f5e4779bd1cbd99d05f5373f97.jpg',
    ],
  },
  {
    slug: 'motorcycle-scooty-saving',
    title: 'Motorcycle & Scooty Saving',
    urduTitle: 'موٹر سائیکل و اسکوٹی سیونگ',
    category: 'Vehicles',
    shortDescription: 'Affordable two-wheeler savings that help riders buy smarter and travel more confidently.',
    heroBadge: '04',
    heroTitle: 'Motorcycle & Scooty Saving',
    heroDescription: 'Make your two-wheeler lifestyle more affordable with savings built for riders, commuters, and families.',
    image: '/vs8.png',
    secondaryImage: 'https://i.pinimg.com/1200x/28/23/38/28233813a9ccf9ee0a8acfc9b89d686b.jpg',
    accent: '#9333ea',
    accentSoft: '#f3e8ff',
    featureCards: [
      { title: 'Rider Savings', description: 'Better value for new and used bikes' },
      { title: 'Daily Commute', description: 'Support for faster urban mobility' },
      { title: 'Smart Ownership', description: 'Low-cost access to essential transport' },
    ],
    aboutHeading: 'Freedom on Two Wheels, Savings in Every Mile.',
    aboutText: [
      'Motorcycle & Scooty Saving helps riders make more informed choices when buying or using their two-wheeler. It is designed to support families, students, and workers who rely on affordability and speed for everyday movement.',
      'From purchase assistance to ownership value, the program brings practical savings that make riding more accessible and financially comfortable.',
    ],
    featureList: ['Savings on two-wheelers', 'Support for new or used rides', 'Affordable mobility for daily commuting', 'Value for households and riders'],
    benefits: [
      { title: 'Smart Purchase', description: 'Access better value options when buying motorcycles or scooters.' },
      { title: 'Daily Mobility', description: 'Keep travel affordable and efficient for work and family life.' },
      { title: 'Better Budgeting', description: 'Reduce transport costs with a program built around practicality.' },
      { title: 'Easy Ownership', description: 'Support for riders seeking low-stress, high-value solutions.' },
      { title: 'Flexible Options', description: 'Ideal for new purchases, used models, and rider upgrades.' },
      { title: 'Reliable Support', description: 'Enjoy guidance and value-driven choices throughout the journey.' },
    ],
    audience: ['Students and workers needing faster daily travel.', 'Families wanting economical transport.', 'First-time buyers looking for good value.', 'Riders seeking better ownership support.'],
    stats: [
      { value: '15%', label: 'Bike Savings', icon: 'store' },
      { value: '1000+', label: 'Riders', icon: 'users' },
      { value: '24/7', label: 'Guidance', icon: 'support' },
      { value: '100%', label: 'Trusted Deal', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/736x/e4/f4/7c/e4f47c1ffb2bf14402ab9d302d3a6aee.jpg',
      'https://i.pinimg.com/736x/c8/33/f0/c833f05590b328156bf707c8447eea81.jpg',
      'https://i.pinimg.com/1200x/75/06/48/750648da4ecca79d29ecb1dc69588a4d.jpg',
      'https://i.pinimg.com/1200x/7a/98/63/7a986305a131c2cb5a67a53f92c65751.jpg',
    ],
  },
  {
    slug: 'car-saving',
    title: 'Car Saving',
    urduTitle: 'کار سیونگ',
    category: 'Vehicles',
    shortDescription: 'A smart car purchase and ownership program focused on value, trust, and long-term savings.',
    heroBadge: '05',
    heroTitle: 'Car Saving',
    heroDescription: 'Save more on your next car decision with a program designed for value-minded drivers and growing families.',
    image: '/img1.png',
    secondaryImage: '/img3.png',
    accent: '#4f46e5',
    accentSoft: '#e0e7ff',
    featureCards: [
      { title: 'Smart Purchase', description: 'Better value when buying your next car' },
      { title: 'Family Mobility', description: 'Support for safer and smoother journeys' },
      { title: 'Long-Term Value', description: 'A practical route to smarter ownership' },
    ],
    aboutHeading: 'Drive Smarter with Better Car Value.',
    aboutText: [
      'Car Saving is crafted for drivers who want greater value from their next vehicle purchase. Whether you are buying a new or used car, this program helps you explore better opportunities and long-term savings.',
      'It is built around practical decisions, trust, and financial comfort so families and professionals can move forward without overspending on mobility.',
    ],
    featureList: ['Value-based car buying', 'New and used car support', 'Family and business mobility', 'Better long-term ownership planning'],
    benefits: [
      { title: 'Better Purchase Value', description: 'Help you make smarter, more affordable vehicle choices.' },
      { title: 'Long-Term Savings', description: 'Reduce the cost impact of ownership over time.' },
      { title: 'Family Mobility', description: 'Support secure and comfortable transport for growing households.' },
      { title: 'Brand Confidence', description: 'Explore trusted options with an eye on reliability and quality.' },
      { title: 'Budget Clarity', description: 'Plan your automotive investment with greater control.' },
      { title: 'Ownership Support', description: 'Make the journey from purchase to use easier and smoother.' },
    ],
    audience: ['Families upgrading or buying a vehicle.', 'Professionals seeking better mobility decisions.', 'Drivers looking for value in new or used cars.', 'Anyone planning a smarter automotive investment.'],
    stats: [
      { value: '18%', label: 'Car Savings', icon: 'store' },
      { value: '1000+', label: 'Vehicle Leads', icon: 'users' },
      { value: '24/7', label: 'Support', icon: 'support' },
      { value: '100%', label: 'Reliable', icon: 'shield' },
    ],
    gallery: [
      '/img6.png',
      '/img10.png',
      'https://i.pinimg.com/1200x/9c/b5/ca/9cb5caa9745602825448c10fd168bc97.jpg',
      'https://i.pinimg.com/736x/f9/62/35/f96235e58469a0d9b0b89856fd5b8876.jpg',
    ],
    planCards: [
      {
        amount: '30 لاکھ',
        planType: 'Car Plan',
        image: 'https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Solid-White-720x466.jpg',
        daily: 'Daily PKR 50',
        monthly: 'Monthly PKR 1,500',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 36,000',
        badge: 'Starter',
        description: 'Ideal for a first-time car plan with a comfortable daily contribution.',
        details: [
          'Daily contribution: PKR 50',
          'Monthly contribution: PKR 1,500',
          'Prize: Car or Cash',
          'After winning: PKR 36,000 monthly installment',
        ],
      },
      {
        amount: '60 لاکھ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/736x/5f/42/43/5f424348f1569ddaf343df21dbd8bc86.jpg',
        daily: 'Daily PKR 100',
        monthly: 'Monthly PKR 3,000',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 72,000',
        badge: 'Popular',
        description: 'A balanced car plan with stronger value for regular contributors.',
        details: [
          'Daily contribution: PKR 100',
          'Monthly contribution: PKR 3,000',
          'Prize: Car or Cash',
          'After winning: PKR 72,000 monthly installment',
        ],
      },
      {
        amount: '90 لاکھ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/1200x/81/73/0b/81730bff101689976c9669f3b9e509fc.jpg',
        daily: 'Daily PKR 150',
        monthly: 'Monthly PKR 4,500',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 108,000',
        badge: 'Growth',
        description: 'A stronger step for drivers planning a more premium vehicle goal.',
        details: [
          'Daily contribution: PKR 150',
          'Monthly contribution: PKR 4,500',
          'Prize: Car or Cash',
          'After winning: PKR 108,000 monthly installment',
        ],
      },
      {
        amount: '1.20 کروڑ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/736x/d9/c8/a1/d9c8a1df4c5ca448bbc53f3c65bd0f8d.jpg',
        daily: 'Daily PKR 200',
        monthly: 'Monthly PKR 6,000',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 144,000',
        badge: 'Premium',
        description: 'Premium savings choice designed for a higher-value car goal.',
        details: [
          'Daily contribution: PKR 200',
          'Monthly contribution: PKR 6,000',
          'Prize: Car or Cash',
          'After winning: PKR 144,000 monthly installment',
        ],
      },
      {
        amount: '1.50 کروڑ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/736x/b4/a1/da/b4a1da4ab9640750cd6c932b2a94f743.jpg',
        daily: 'Daily PKR 250',
        monthly: 'Monthly PKR 7,500',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 180,000',
        badge: 'Elite',
        description: 'A high-value membership plan for premium everyday mobility goals.',
        details: [
          'Daily contribution: PKR 250',
          'Monthly contribution: PKR 7,500',
          'Prize: Car or Cash',
          'After winning: PKR 180,000 monthly installment',
        ],
      },
      {
        amount: '1.80 کروڑ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/736x/ec/58/c9/ec58c9f7bf812ca37e3c9e6dfa84a2e5.jpg',
        daily: 'Daily PKR 300',
        monthly: 'Monthly PKR 9,000',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 288,000',
        badge: 'Luxury',
        description: 'A luxury-level plan built for larger car ambitions and stronger value.',
        details: [
          'Daily contribution: PKR 300',
          'Monthly contribution: PKR 9,000',
          'Prize: Car or Cash',
          'After winning: PKR 288,000 monthly installment',
        ],
      },
      {
        amount: '2.10 کروڑ',
        planType: 'Car Plan',
        image: 'https://i.pinimg.com/736x/3e/f6/69/3ef6690b4a46a52199c2024dd429feed.jpg',
        daily: 'Daily PKR 350',
        monthly: 'Monthly PKR 10,500',
        prize: 'Prize Car or Cash',
        installmentLabel: 'Monthly Installment After Winning',
        installmentValue: 'PKR 420,000',
        badge: 'Signature',
        description: 'A premium long-range car plan for drivers aiming for a higher-value vehicle goal.',
        details: [
          'Daily contribution: PKR 350',
          'Monthly contribution: PKR 10,500',
          'Prize: Car or Cash',
          'After winning: PKR 420,000 monthly installment',
        ],
      },
    ],
  },
  {
    slug: 'property-saving',
    title: 'Property Saving',
    urduTitle: 'پراپرٹی سیونگ',
    category: 'Property',
    shortDescription: 'A powerful property program designed for savings, long-term value, and smart real estate decisions.',
    heroBadge: '06',
    heroTitle: 'Property Saving',
    heroDescription: 'Create long-term wealth through informed property decisions, better buying options, and smarter value planning.',
    image: 'https://i.pinimg.com/736x/e4/0d/f9/e40df9938d5459f19b938a080363e6c5.jpg',
    secondaryImage: 'https://i.pinimg.com/1200x/68/1a/48/681a4882798399d14ca36f2ea85abb8d.jpg',
    accent: '#14b8a6',
    accentSoft: '#ccfbf1',
    featureCards: [
      { title: 'Property Value', description: 'Smart access to better real estate opportunities' },
      { title: 'Investment Growth', description: 'Long-term wealth and asset planning' },
      { title: 'Trust & Security', description: 'Reliable guidance for important decisions' },
    ],
    aboutHeading: 'Build Long-Term Security Through Property Value.',
    aboutText: [
      'Property Saving is created for those who want to make strategic real estate purchases or investments with greater confidence. It supports individuals and families seeking better opportunities in property ownership and financial security.',
      'Whether you are buying, selling, or planning an investment, the focus remains on creating smarter value and stronger long-term outcomes for your future.',
    ],
    featureList: ['Property buying and selling support', 'Long-term wealth building', 'Secure investment planning', 'Smarter real estate decisions'],
    benefits: [
      { title: 'Better Investment Choices', description: 'Explore property opportunities with stronger planning and better value.' },
      { title: 'Long-Term Wealth', description: 'Create stability through durable assets and measured decisions.' },
      { title: 'Smart Market Access', description: 'Work with opportunities that align with your financial goals.' },
      { title: 'Secure Planning', description: 'Move forward with more confidence in every real estate step.' },
      { title: 'Family Future', description: 'Build better long-term security for your loved ones.' },
      { title: 'Trustworthy Guidance', description: 'Get structured help when property decisions matter most.' },
    ],
    audience: ['Buyers looking for better property opportunities.', 'Investors focused on future growth.', 'Families planning long-term wealth.', 'Sellers and owners seeking smarter value decisions.'],
    stats: [
      { value: '25%', label: 'Property Value', icon: 'store' },
      { value: '500+', label: 'Opportunities', icon: 'users' },
      { value: '24/7', label: 'Consultation', icon: 'support' },
      { value: '100%', label: 'Secure', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/1200x/97/41/61/974161ada4f6782b21c171a8bba137d3.jpg',
      'https://i.pinimg.com/736x/3f/a2/7c/3fa27cee4da70f53b06a80622a731c6e.jpg',
      'https://i.pinimg.com/1200x/b6/27/4d/b6274dd7f7fbe202c57c3acbb8fa7c30.jpg',
      'https://i.pinimg.com/736x/09/ef/44/09ef443d057fa88ab71c77a3c5230cbe.jpg',
    ],
  },
  {
    slug: 'crop-saving',
    title: 'Crop Saving',
    urduTitle: 'فصل سیونگ',
    category: 'Agriculture',
    shortDescription: 'Support for smarter agriculture, better crop planning, and stronger yields for growers and farming families.',
    heroBadge: '07',
    heroTitle: 'Crop Saving',
    heroDescription: 'Help farmers and growers protect value, improve production decisions, and build more resilient agricultural futures.',
    image: 'https://i.pinimg.com/736x/5f/15/9a/5f159a4afb90c38ae765e352c317ca39.jpg',
    secondaryImage: 'https://i.pinimg.com/736x/ba/a1/2d/baa12d4c87882e75c6c494ad55e7b82b.jpg',
    accent: '#f59e0b',
    accentSoft: '#fef3c7',
    featureCards: [
      { title: 'Farm Value', description: 'Better planning for crop purchases and sales' },
      { title: 'Agri Growth', description: 'Support for sustainable yields and better returns' },
      { title: 'Family Impact', description: 'A stronger future for farming communities' },
    ],
    aboutHeading: 'Grow Smarter, Protect More.',
    aboutText: [
      'Crop Saving supports agricultural buyers and sellers with smarter crop planning, better opportunities, and stronger value outcomes. Whether you are farming directly or involved in crop trading, the program is designed to reduce uncertainty and improve returns.',
      'We focus on helping growers make practical, informed decisions that protect production value and create a more stable future for agricultural households and communities.',
    ],
    featureList: ['Better crop buying and selling support', 'Higher planning efficiency', 'Value-focused agricultural decisions', 'Support for rural families'],
    benefits: [
      { title: 'Better Planning', description: 'Make more informed crop-related decisions with stronger timing and strategy.' },
      { title: 'Reduced Risk', description: 'Enhance stability in a market that can change quickly and unpredictably.' },
      { title: 'Improved Returns', description: 'Focus on value-maximizing decisions that support farm futures.' },
      { title: 'Family Support', description: 'Build stronger outcomes for growers and farming households.' },
      { title: 'Sustainable Growth', description: 'Encourage efficient, practical cultivation and trade decisions.' },
      { title: 'Trusted Process', description: 'Work with a model built around clarity, fairness, and consistency.' },
    ],
    audience: ['Farmers and growers planning better crop value.', 'Buyers and traders looking for smarter crop opportunities.', 'Agricultural families seeking stronger financial security.', 'Anyone involved in sustainable farming decisions.'],
    stats: [
      { value: '30%', label: 'Crop Gains', icon: 'store' },
      { value: '1000+', label: 'Farmers', icon: 'users' },
      { value: '24/7', label: 'Support', icon: 'support' },
      { value: '100%', label: 'Reliable', icon: 'shield' },
    ],
    gallery: [
      'https://i.pinimg.com/736x/44/66/45/4466452ab5a60da4025985df2f360dd0.jpg',
      'https://i.pinimg.com/736x/4b/82/24/4b8224992ef4973d9add44bc2d67cc9e.jpg',
      'https://i.pinimg.com/736x/da/66/9f/da669f9fef393784e24df0a330eeba7f.jpg',
      'https://i.pinimg.com/736x/03/85/00/038500b50b183e676194d3f9a67488ad.jpg',
    ],
  },
  {
    slug: 'self-service-saving',
    title: 'Self-Service Saving',
    urduTitle: 'سیلف سروس سیونگ',
    category: 'Self Service',
    shortDescription: 'A flexible, member-first savings model that makes buying and selling simpler, smarter, and more transparent.',
    heroBadge: '08',
    heroTitle: 'Self-Service Saving',
    heroDescription: 'Take control of your buying and selling experience with a modern, transparent savings program built around personal freedom.',
    image: 'https://i.pinimg.com/736x/6f/cf/26/6fcf2654d2a8fc5e44b0b5c9f23f2cd3.jpg',
    secondaryImage: 'https://i.pinimg.com/736x/34/1f/5e/341f5e5d4f06c2d9f74a965ff1034a5d.jpg',
    accent: '#e11d48',
    accentSoft: '#ffe4e6',
    featureCards: [
      { title: 'Self-Control', description: 'Manage your own buying and selling choices' },
      { title: 'Flexible Value', description: 'More freedom to act when it suits you' },
      { title: 'Simple Access', description: 'A clear, user-driven experience from start to finish' },
    ],
    aboutHeading: 'Buy and Sell with Confidence, on Your Terms.',
    aboutText: [
      'Self-Service Saving gives members the flexibility to manage their purchases and sales independently, while still benefiting from a reliable and secure savings experience. It is a practical program for people who want more control and simplicity.',
      'Rather than depending on complex processes, members can move at their own pace, make smarter decisions, and enjoy transparency in every step of the experience.',
    ],
    featureList: ['Flexible buying and selling', 'User-driven savings experience', 'Transparent and secure process', 'Greater personal control'],
    benefits: [
      { title: 'Personal Control', description: 'Choose how and when to buy or sell with clarity and confidence.' },
      { title: 'Flexible Access', description: 'Enjoy a model designed to fit modern needs and personal routines.' },
      { title: 'Simpler Process', description: 'Reduce friction and make everyday transactions easier to manage.' },
      { title: 'Greater Transparency', description: 'Know what you are getting and why it adds value.' },
      { title: 'Better Efficiency', description: 'Spend less time navigating complexity and more time acting.' },
      { title: 'Modern Experience', description: 'A smooth digital-first approach for smarter self-service decisions.' },
    ],
    audience: ['Individuals who want personal control over purchases.', 'People who prefer simple and flexible self-service models.', 'Members looking for transparency and independence.', 'Anyone wanting a modern, member-first way to buy and sell.'],
    stats: [
      { value: '24/7', label: 'Self Access', icon: 'support' },
      { value: '100%', label: 'Transparent', icon: 'shield' },
      { value: '1000+', label: 'Members', icon: 'users' },
      { value: '1 Click', label: 'Ease', icon: 'store' },
    ],
    gallery: [
      'https://i.pinimg.com/736x/27/e6/05/27e60533d314340b8ada18669667558a.jpg',
      'https://i.pinimg.com/1200x/7b/36/d2/7b36d2d11bb1b28b97030e55d8041bb0.jpg',
      'https://i.pinimg.com/736x/a7/42/32/a74232488e8c7133aa7809a277da94d8.jpg',
      'https://i.pinimg.com/1200x/3a/a8/58/3aa8584270130d152731d0210b87cbee.jpg',
    ],
  },
];

export const getProgramBySlug = (slug: string) =>
  programData.find((program) => program.slug === slug) ?? programData[0];
