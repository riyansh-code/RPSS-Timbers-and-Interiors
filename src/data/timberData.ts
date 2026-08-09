export interface Product {
  id: string;
  name: string;
  category: 'timber' | 'plywood' | 'custom';
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
    image: '/images/ov-kd-pine.jpg',
    gallery: [
      '/images/ov-kd-pine.jpg',
      '/images/pine-logs.jpg',
      '/images/teak-grain.jpg',
      '/images/ov-teak-grain.jpg',
    ],
    specifications: {
      density: 'Species dependent',
      moistureContent: 'KD / as specified',
      durability: 'Commercial & joinery grades',
      jankaHardness: 'Species dependent',
      grainPattern: 'Natural timber grain',
      origin:
        'Germany, Australia, Russia, New Zealand, Austria, Malaysia, Brazil, Mexico & South America',
    },
    applications: [
      'Wholesale timber distribution',
      'Furniture manufacturing input',
      'Construction & joinery',
      'Plywood manufacturing input',
    ],
    features: [
      'Pine — Australian Radiata Pine | KD Pine | Sawn Timber | Industrial/Pulp Grade and other suitable grades and specifications',
      'Hardwood — Meranti, Kapur and Sal',
      'Teak — sourced from suitable international origins',
      'Other timber and allied products — based on buyer requirements',
    ],
    isFlagship: true,
  },
  {
    id: 'plywood-allied-products',
    name: 'Plywood & Allied Products',
    category: 'plywood',
    tagline: 'Plywood, Veneers, Laminated Boards & MDF',
    shortDesc: 'Plywood, veneers, laminated boards and MDF.',
    description:
      'Plywood, veneers, laminated boards, MDF and other allied wood products sourced according to buyer requirements.',
    image: '/images/ov-birch-ply.jpg',
    gallery: ['/images/ov-birch-ply.jpg'],
    specifications: {
      density: 'Grade dependent',
      moistureContent: 'As specified',
      durability: 'Commercial grade',
      jankaHardness: 'N/A',
      grainPattern: 'Veneer / panel finish',
      origin: 'International supply markets',
    },
    applications: [
      'Furniture manufacturing input',
      'Interiors',
      'Construction joinery',
      'Wholesale trade',
    ],
    features: ['Plywood', 'Veneers', 'Laminated boards', 'MDF', 'Other allied wood products'],
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
    image: '/images/ov-pine-logs.jpg',
    gallery: ['/images/ov-pine-logs.jpg', '/images/wood-planks.jpg'],
    specifications: {
      density: 'Per requirement',
      moistureContent: 'Per requirement',
      durability: 'As specified',
      jankaHardness: 'As specified',
      grainPattern: 'As specified',
      origin: 'Suitable international sources',
    },
    applications: [
      'Custom commercial imports',
      'Unlisted product requirements',
      'Specialised trade orders',
    ],
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
