export interface Product {
  id: string;
  name: string;
  category: 'meranti' | 'timber' | 'interior' | 'hardwood' | 'construction';
  tagline: string;
  shortDesc: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: {
    density: string;
    moistureContent: string;
    durability: string;
    jankaHardness: string;
    grainPattern: string;
    origin: string;
  };
  applications: string[];
  features: string[];
  isFlagship?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'storage' | 'logs' | 'interiors' | 'furniture' | 'construction' | 'warehouse';
  image: string;
  description: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'meranti' | 'ordering' | 'delivery' | 'technical';
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'meranti-wood',
    name: 'Meranti Wood (Red & Dark Red)',
    category: 'meranti',
    tagline: 'Flagship Timber Sourced from Certified Sustainable Forests',
    shortDesc: 'Premium imported timber famous for superior workability, smooth finish, structural integrity, and exquisite reddish-brown grain.',
    description: 'RPSS Timbers is India’s premier importer and supplier of authentic Grade-A Meranti Wood. Sourced directly from sustainably managed tropical forests, Meranti is prized globally by architects, interior builders, and high-end joineries. It exhibits exceptionally consistent grain, minimum knotting, and effortless machining characteristics.',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: '580 – 770 kg/m³ (Air-Dried)',
      moistureContent: '10% - 14% (Kiln Dried)',
      durability: 'Class 2 (Moderately Durable to Durable)',
      jankaHardness: '3,800 N (850 lbf)',
      grainPattern: 'Straight to slightly interlocked, medium to coarse texture',
      origin: 'Malaysia & Southeast Asia'
    },
    applications: [
      'Door Frames & Shutter Moldings',
      'Window Frames & Architectural Joinery',
      'Luxury Furniture & Internal Paneling',
      'Structural Decking Sub-Frames',
      'Carved Wall Features & Ceiling Beams'
    ],
    features: [
      'Vacuum-Pressure Treated & Seasoned',
      'Zero Warping and High Dimensional Stability',
      'Takes Stain, Varnish & Polyurethane Exceptionally Well',
      'Termite and Borer Resistant Formulation Available',
      'Custom Planks, Sizes & Beams Available On Order'
    ],
    isFlagship: true
  },
  {
    id: 'hardwood-timber',
    name: 'Seasoned Hardwood Timber',
    category: 'hardwood',
    tagline: 'High-Density Structural Hardwood for Heavy Loads',
    shortDesc: 'Kiln-dried hardwood logs and sawn timber engineered for heavy structural loads and long-term architectural endurance.',
    description: 'Engineered for strength and durability, our selection of seasoned hardwoods provides structural support for luxury residential homes, industrial warehouses, and commercial structural timber frameworks.',
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: '750 – 950 kg/m³',
      moistureContent: '12% ± 2%',
      durability: 'Class 1 (Very Durable)',
      jankaHardness: '6,200 N',
      grainPattern: 'Dense, interlocking grain with deep natural tones',
      origin: 'India, Myanmar & Africa'
    },
    applications: [
      'Heavy Load Structural Beams',
      'Outdoor Pergolas & Garden Pavilions',
      'Industrial Flooring & Bridge Decking',
      'Heritage Restoration Structures'
    ],
    features: [
      'Superior Flexural and Shearing Strength',
      'Kiln-Seasoned to Prevent Splitting',
      'Naturally Termite Resistant',
      'Custom Sawing & Planing Available'
    ]
  },
  {
    id: 'construction-timber',
    name: 'Construction & Scaffolding Wood',
    category: 'construction',
    tagline: 'Rugged Construction Lumber & Formwork Timber',
    shortDesc: 'Calibrated construction timber, shuttering wood, runner battens, and heavy-duty structural logs for construction projects.',
    description: 'We supply high-volume construction timber for scaffolding, concrete formwork, shoring systems, and structural framing for builders and infrastructure contractors across India.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: '520 – 680 kg/m³',
      moistureContent: '14% - 18%',
      durability: 'High Load Resilience',
      jankaHardness: '3,200 N',
      grainPattern: 'Coarse structural grain',
      origin: 'India & Imported Pine/Sal'
    },
    applications: [
      'Concrete Formwork & Shuttering',
      'Scaffolding & Support Runners',
      'Temporary Site Structures',
      'Packaging & Heavy Machinery Pallets'
    ],
    features: [
      'High Bending Strength for Concrete Loads',
      'Reusable Multiple Times',
      'Standardized Cut Sizes Available in Bulk',
      'Rapid Fleet Dispatch Across India'
    ]
  },
  {
    id: 'interior-wood-panels',
    name: 'Architectural Interior Wood Panels',
    category: 'interior',
    tagline: 'Luxury Veneers, Fluted Panels & Wall Cladding',
    shortDesc: 'Designer wood paneling, fluted timber profiles, acoustical ceiling baffles, and decorative wall finishes for modern interiors.',
    description: 'Transform residential and commercial interiors with our precision-milled timber cladding and decorative wood paneling solutions. Available in natural Meranti, Oak, and custom tinted finishes.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: '550 – 720 kg/m³',
      moistureContent: '8% - 10%',
      durability: 'Interior Grade Class 1',
      jankaHardness: '4,100 N',
      grainPattern: 'Sleek linear flutes and smooth warm grain',
      origin: 'RPSS Precision Mill Facility'
    },
    applications: [
      'Feature Wall Cladding & TV Units',
      'Acoustic Ceiling Panels & Baffles',
      'Hotel Lobby Architectural Finishes',
      'Executive Boardroom Decor'
    ],
    features: [
      'Pre-sanded and ready for stain',
      'Tongue-and-groove secret fixing options',
      'Fire-retardant coating available',
      'Custom profile routing on request'
    ]
  },
  {
    id: 'furniture-grade-timber',
    name: 'Furniture-Grade Seasoned Timber',
    category: 'timber',
    tagline: 'Defect-Free Kiln-Dried Wood for Custom Joinery',
    shortDesc: 'Hand-selected, knot-free timber planks specifically cured for luxury furniture makers and artisan joiners.',
    description: 'Crafted for furniture makers who demand perfection. Our furniture-grade timber undergoes rigorous 14-day kiln drying and stress-testing to guarantee non-warping performance in all humidity conditions.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: '620 – 750 kg/m³',
      moistureContent: '8% - 10%',
      durability: 'High Stability',
      jankaHardness: '4,500 N',
      grainPattern: 'Rich textured grain with uniform tone',
      origin: 'Certified Sustainable Plantations'
    },
    applications: [
      'Dining Tables & Solid Wood Desk Tops',
      'Custom Beds & Wardrobe Carcasses',
      'Artisanal Chairs & Cabinetry',
      'Luxury Retail Fixtures'
    ],
    features: [
      'Knot-free premium grade selection',
      'Ideal for CNC carving & hand turned legs',
      'Stains evenly with zero blotching',
      'Custom thickness (25mm to 100mm)'
    ]
  },
  {
    id: 'custom-timber-orders',
    name: 'Custom Timber Milling & Orders',
    category: 'timber',
    tagline: 'Tailored Cuts, Bevels, Mouldings & Special Sizes',
    shortDesc: 'Bespoke timber sawing, planed 4-sides (S4S) finishing, custom moulding profiles, and exact dimension cutting.',
    description: 'Have specific architectural specifications? RPSS Timbers provides bespoke milling services, turning raw timber into ready-to-install profiles, large-span beams, and specialized moldings.',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      density: 'Custom based on selected wood species',
      moistureContent: 'Custom Kiln Cured (8% - 12%)',
      durability: 'Certified Grade A',
      jankaHardness: 'Varies',
      grainPattern: 'Tailored per client spec',
      origin: 'Global & Indian Mills'
    },
    applications: [
      'Heritage Restoration Castings & Columns',
      'Custom Architectural Fascias & Trim',
      'Large Span Timber Roof Trusses',
      'Specialized Export Packaging Sizes'
    ],
    features: [
      'Precision CAD-guided milling accuracy (±0.5mm)',
      'Four-side Smooth Surface Finish (S4S)',
      'Vacuum Preservative Treatment',
      'Dedicated project manager for custom orders'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Kiln-Dried Meranti Storage Yard',
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    description: 'Climate-monitored warehouse with over 10,000 cu.ft of seasoned Meranti logs ready for delivery.',
    location: 'Yamunanagar Processing Hub'
  },
  {
    id: 'g2',
    title: 'Grade-A Hardwood Timber Stacks',
    category: 'logs',
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1000&q=80',
    description: 'Selected heavy structural timber logs undergoing natural weather seasoning.',
    location: 'Central Timber Yard'
  },
  {
    id: 'g3',
    title: 'Luxury Villa Solid Meranti Door Framing',
    category: 'interiors',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom Meranti wood entryway installed in a modern luxury villa in New Delhi.',
    location: 'DLF Chattarpur, New Delhi'
  },
  {
    id: 'g4',
    title: 'Handcrafted Teak & Meranti Dining Suite',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    description: 'Solid wood dining set crafted using RPSS furniture-grade seasoned timber.',
    location: 'Artisan Workshop'
  },
  {
    id: 'g5',
    title: 'Commercial Complex Timber Formwork',
    category: 'construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    description: 'Heavy duty construction timber supporting multi-story concrete casting.',
    location: 'Gurugram Cyber City Project'
  },
  {
    id: 'g6',
    title: 'Automated Precision Sawmill',
    category: 'warehouse',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1000&q=80',
    description: 'High precision band saw machinery slicing logs into exact customer dimensions.',
    location: 'RPSS Sawmill Facility'
  },
  {
    id: 'g7',
    title: 'Architectural Fluted Wood Wall',
    category: 'interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    description: 'Acoustical fluted Meranti wood wall paneling for corporate boardroom.',
    location: 'Aerocity Corporate HQ'
  },
  {
    id: 'g8',
    title: 'Raw Imported Meranti Log Shipment',
    category: 'logs',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1000&q=80',
    description: 'Fresh batch of Grade-A certified Meranti logs arriving at dock yard.',
    location: 'Mundra Port Logistics'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Singhania',
    company: 'Singhania Luxury Homes',
    role: 'Principal Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'We sourced over 8,000 cu.ft of Meranti Wood for our villa project in Delhi. RPSS Timbers delivered consistent moisture content and zero defective planks. Their quality commitment is unmatched in the Indian market.',
    projectType: 'Luxury Residential Villa'
  },
  {
    id: 't2',
    name: 'Vikramaditya Rao',
    company: 'Rao & Sons Construction',
    role: 'Managing Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'For large commercial building contracts, timely supply of construction timber is non-negotiable. RPSS has been our trusted timber partner for 12 years. Always reliable, transparent pricing, and instant dispatch.',
    projectType: 'Commercial Towers'
  },
  {
    id: 't3',
    name: 'Meera Kapoor',
    company: 'Studio Atelier Interiors',
    role: 'Senior Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The finish and grain of RPSS Meranti wood panels brought our hotel lobby design to life. Our clients love the warm walnut tones and smooth touch. Highly recommended for premium interior projects.',
    projectType: '5-Star Boutique Hotel'
  },
  {
    id: 't4',
    name: 'Harpreet Singh Dhillon',
    company: 'Dhillon Woodcrafts',
    role: 'Master Furniture Craftsman',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Working with RPSS seasoned furniture timber is a joy. The wood machines smoothly without splintering and holds screws tight. Their custom cuts save us hours in the workshop.',
    projectType: 'Bespoke Furniture Line'
  }
];

export const MERANTI_COMPARISON = [
  {
    feature: 'Average Density',
    meranti: '580 - 770 kg/m³',
    teak: '650 - 750 kg/m³',
    sheesham: '750 - 850 kg/m³',
    pine: '450 - 550 kg/m³'
  },
  {
    feature: 'Workability & Machining',
    meranti: 'Excellent (Smooth)',
    teak: 'Good (Dulls blades)',
    sheesham: 'Fair (Hard grain)',
    pine: 'Easy (Soft)'
  },
  {
    feature: 'Moisture Resistance',
    meranti: 'High (Kiln Dried)',
    teak: 'Very High (Natural Oil)',
    sheesham: 'Moderate',
    pine: 'Low to Moderate'
  },
  {
    feature: 'Cost Efficiency',
    meranti: 'High (Best Value)',
    teak: 'Very Expensive',
    sheesham: 'Premium',
    pine: 'Economy'
  },
  {
    feature: 'Grain Consistency',
    meranti: 'Uniform Reddish Tone',
    teak: 'Varied Golden Brown',
    sheesham: 'Dark Swirling Striations',
    pine: 'Knotty Light Yellow'
  },
  {
    feature: 'Ideal Application',
    meranti: 'Doors, Frames, Interiors',
    teak: 'Outdoor & Marine',
    sheesham: 'Traditional Carved Furniture',
    pine: 'Packing & Light Framing'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Why is Meranti Wood considered the preferred choice for doors and frames?',
    answer: 'Meranti Wood possesses a straight, even grain with high resistance to expansion and contraction caused by seasonal humidity changes. When kiln-dried by RPSS to 10-12% moisture, it will not warp or twist, ensuring doors open and close smoothly for decades.',
    category: 'meranti'
  },
  {
    id: 'faq2',
    question: 'What is the minimum order quantity for custom timber orders?',
    answer: 'We cater to both commercial bulk orders and custom architectural requirements. For standard stock sizes, there is no strict minimum order. For custom milled profiles, our typical minimum batch is 50 cubic feet.',
    category: 'ordering'
  },
  {
    id: 'faq3',
    question: 'Do you supply certified termite-treated and seasoned wood?',
    answer: 'Yes! All RPSS timber undergoes controlled vacuum-pressure preservative treatment (VPT) and computer-monitored kiln drying to protect against termites, wood borers, and fungal decay.',
    category: 'technical'
  },
  {
    id: 'faq4',
    question: 'How fast can RPSS deliver timber across India?',
    answer: 'We operate dedicated logistics networks with hubs in Yamunanagar and Delhi NCR. Standard stock orders within North India are delivered in 24-48 hours. Pan-India shipments typically arrive within 3-5 business days.',
    category: 'delivery'
  },
  {
    id: 'faq5',
    question: 'Can RPSS provide custom sizes cut to my architectural drawings?',
    answer: 'Absolutely. Our automated high-precision sawmills cut timber precisely to your CAD dimensions, reducing on-site labor and material wastage for builders and interior contractors.',
    category: 'general'
  },
  {
    id: 'faq6',
    question: 'How does Meranti Wood compare to Teak in price and performance?',
    answer: 'Meranti Wood offers up to 60-70% of Teak’s structural strength at a fraction of the cost, making it the most cost-effective premium choice for interior doors, window frames, and decorative paneling.',
    category: 'meranti'
  }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Discuss your project requirements, timber species preferences, load needs, and architectural dimensions with our wood specialists.'
  },
  {
    step: '02',
    title: 'Material Selection',
    description: 'Select from Grade-A Meranti, Seasoned Hardwood, or Furniture Timber. Inspect sample grains and physical batch specifications.'
  },
  {
    step: '03',
    title: 'Transparent Quotation',
    description: 'Receive an all-inclusive itemized quotation with direct mill pricing, seasoning certification, and estimated delivery schedule.'
  },
  {
    step: '04',
    title: 'Order Confirmation & Milling',
    description: 'Our automated sawmills cut, plane, and inspect your order against strict ISO-grade quality standards.'
  },
  {
    step: '05',
    title: 'Dispatch & Delivery',
    description: 'Secure moisture-proof bundling and rapid transport straight to your construction site or workshop anywhere in India.'
  },
  {
    step: '06',
    title: 'After-Sales Support',
    description: 'Our technical team remains available for installation guidance, wood polishing recommendations, and warranty assurance.'
  }
];
