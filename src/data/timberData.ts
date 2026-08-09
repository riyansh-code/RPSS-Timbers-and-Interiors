export interface Product {
  id: string;
  name: string;
  category: 'timber' | 'plywood' | 'agricultural' | 'custom';
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
  category: 'general' | 'sourcing' | 'suppliers' | 'buyers' | 'technical';
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'timber-wood-products',
    name: 'Timber & Wood Products',
    category: 'timber',
    tagline: 'Pine, Hardwood, Teak & Allied Timber',
    shortDesc: 'Pine, hardwood, teak and allied timber products.',
    description:
      'Pine, hardwood, teak and allied timber products. Specs and origins are matched to genuine Indian buyer requirements.',
    image:
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: {
      density: 'Species dependent',
      moistureContent: 'KD / as specified',
      durability: 'Commercial & joinery grades',
      jankaHardness: 'Species dependent',
      grainPattern: 'Natural timber grain',
      origin: 'Germany, Austria, Russia, New Zealand, Australia, Malaysia, Brazil, Mexico & South America',
    },
    applications: [
      'Wholesale timber distribution',
      'Furniture manufacturing',
      'Construction & joinery',
      'Plywood manufacturing input',
    ],
    features: [
      'Pine — rough sawn, KD and other suitable grades',
      'Hardwood — Meranti, Kapur and Sal',
      'Teak — suitable international origins',
      'Other timber and allied products on request',
    ],
    isFlagship: true,
  },
  {
    id: 'plywood-wood-products',
    name: 'Plywood & Wood Products',
    category: 'plywood',
    tagline: 'Plywood, Veneers, Laminated Boards & MDF',
    shortDesc: 'Plywood, veneers, laminated boards and MDF.',
    description:
      'Plywood, veneers, laminated boards, MDF and other allied wood products sourced according to buyer requirements.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: {
      density: 'Grade dependent',
      moistureContent: 'As specified',
      durability: 'Commercial grade',
      jankaHardness: 'N/A',
      grainPattern: 'Veneer / panel finish',
      origin: 'International supply markets',
    },
    applications: ['Furniture manufacturing', 'Interiors', 'Construction joinery', 'Wholesale trade'],
    features: ['Plywood', 'Veneers', 'Laminated boards', 'MDF', 'Other allied wood products'],
  },
  {
    id: 'agricultural-products',
    name: 'Agricultural Products',
    category: 'agricultural',
    tagline: 'Selected Agricultural & Food-Related Products',
    shortDesc:
      'Selected agricultural and food-related products according to buyer requirements.',
    description:
      'Selected agricultural and food-related products, including nuts and other products where genuine buyer demand exists.',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: {
      density: 'Market grade',
      moistureContent: 'Market compliant',
      durability: 'Export quality',
      jankaHardness: 'N/A',
      grainPattern: 'N/A',
      origin: 'Australia & international origins',
    },
    applications: ['Wholesale import', 'Buyer-specific demand', 'Food-related trade channels'],
    features: ['Selected agricultural products', 'Nuts and related products', 'Buyer-led sourcing'],
  },
  {
    id: 'buyer-specific-sourcing',
    name: 'Buyer-Specific Sourcing',
    category: 'custom',
    tagline: 'Explore Products Beyond the Listed Categories',
    shortDesc:
      'Products outside the listed categories can also be explored where there is a genuine requirement.',
    description:
      'If a buyer has a product requirement that is not listed on the website, RPSS can explore suitable international sources.',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    ],
    specifications: {
      density: 'Per requirement',
      moistureContent: 'Per requirement',
      durability: 'As specified',
      jankaHardness: 'As specified',
      grainPattern: 'As specified',
      origin: 'Suitable international sources',
    },
    applications: ['Custom commercial imports', 'Unlisted product requirements', 'Specialised trade orders'],
    features: [
      'Not limited to listed categories',
      'Guided by genuine buyer demand',
      'International source exploration',
    ],
  },
];

export const MERANTI_COMPARISON = [
  { property: 'Workability', meranti: 'Excellent', teak: 'Good', sal: 'Moderate' },
  { property: 'Durability', meranti: 'High', teak: 'Very High', sal: 'High' },
  { property: 'Finish Quality', meranti: 'Premium', teak: 'Premium', sal: 'Good' },
];

export const GALLERY_DATA: GalleryItem[] = [];
export const TESTIMONIALS_DATA: Testimonial[] = [];
export const TESTIMONIALS = TESTIMONIALS_DATA;
export const FAQ_DATA: FAQItem[] = [];
export const FAQS = FAQ_DATA;
