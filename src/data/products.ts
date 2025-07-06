// Product data for affiliate marketing
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  affiliateUrl: string;
  rating: number;
  reviews: number;
  tags: string[];
  featured: boolean;
  inStock: boolean;
  commission: number;
}

export const products: Product[] = [
  // Meditation & Mindfulness
  {
    id: 'himalayan-salt-lamp',
    name: 'Himalayan Salt Lamp',
    description: 'Authentic crystal for peaceful ambiance and negative ion generation',
    price: '$34.99',
    originalPrice: '$49.99',
    image: 'https://images.pexels.com/photos/3705792/pexels-photo-3705792.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meditation',
    affiliateUrl: 'https://amazon.com/dp/B001234567?ref=hippistuff',
    rating: 4.9,
    reviews: 847,
    tags: ['meditation', 'ambiance', 'crystal healing', 'home decor'],
    featured: true,
    inStock: true,
    commission: 8.5
  },
  {
    id: 'meditation-cushion',
    name: 'Organic Meditation Cushion',
    description: 'Handcrafted comfort for sacred practice with buckwheat hull filling',
    price: '$67.99',
    originalPrice: '$89.99',
    image: 'https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meditation',
    affiliateUrl: 'https://amazon.com/dp/B001234568?ref=hippistuff',
    rating: 4.8,
    reviews: 532,
    tags: ['meditation', 'cushion', 'organic', 'comfort'],
    featured: true,
    inStock: true,
    commission: 12.0
  },
  {
    id: 'sage-bundle-set',
    name: 'Sacred Sage Bundle Set',
    description: 'Ethically sourced white sage for cleansing rituals and ceremonies',
    price: '$19.99',
    originalPrice: '$29.99',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meditation',
    affiliateUrl: 'https://amazon.com/dp/B001234569?ref=hippistuff',
    rating: 4.7,
    reviews: 293,
    tags: ['sage', 'cleansing', 'ritual', 'spiritual'],
    featured: true,
    inStock: true,
    commission: 15.0
  },
  
  // Natural Beauty
  {
    id: 'organic-face-serum',
    name: 'Organic Rose Hip Face Serum',
    description: 'Pure botanical serum for radiant, naturally glowing skin',
    price: '$45.99',
    originalPrice: '$65.99',
    image: 'https://images.pexels.com/photos/4735905/pexels-photo-4735905.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'beauty',
    affiliateUrl: 'https://amazon.com/dp/B001234570?ref=hippistuff',
    rating: 4.6,
    reviews: 421,
    tags: ['organic', 'skincare', 'natural', 'anti-aging'],
    featured: false,
    inStock: true,
    commission: 10.0
  },
  {
    id: 'bamboo-toothbrush-set',
    name: 'Eco-Friendly Bamboo Toothbrush Set',
    description: 'Sustainable oral care with biodegradable bamboo handles',
    price: '$16.99',
    originalPrice: '$24.99',
    image: 'https://images.pexels.com/photos/4735905/pexels-photo-4735905.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'beauty',
    affiliateUrl: 'https://amazon.com/dp/B001234571?ref=hippistuff',
    rating: 4.4,
    reviews: 167,
    tags: ['eco-friendly', 'sustainable', 'oral care', 'bamboo'],
    featured: false,
    inStock: true,
    commission: 18.0
  },
  
  // Sustainable Living
  {
    id: 'reusable-water-bottle',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated bottle for pure hydration on all your adventures',
    price: '$32.99',
    originalPrice: '$42.99',
    image: 'https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'sustainable',
    affiliateUrl: 'https://amazon.com/dp/B001234572?ref=hippistuff',
    rating: 4.8,
    reviews: 654,
    tags: ['sustainable', 'hydration', 'zero waste', 'travel'],
    featured: false,
    inStock: true,
    commission: 14.0
  },
  {
    id: 'beeswax-food-wraps',
    name: 'Organic Beeswax Food Wraps',
    description: 'Plastic-free food storage for conscious kitchen living',
    price: '$24.99',
    originalPrice: '$34.99',
    image: 'https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'sustainable',
    affiliateUrl: 'https://amazon.com/dp/B001234573?ref=hippistuff',
    rating: 4.5,
    reviews: 298,
    tags: ['zero waste', 'kitchen', 'organic', 'reusable'],
    featured: false,
    inStock: true,
    commission: 20.0
  },
  
  // Sacred Spaces
  {
    id: 'crystal-healing-set',
    name: 'Chakra Crystal Healing Set',
    description: 'Seven sacred stones for energy balancing and spiritual alignment',
    price: '$56.99',
    originalPrice: '$79.99',
    image: 'https://images.pexels.com/photos/3951626/pexels-photo-3951626.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'sacred-spaces',
    affiliateUrl: 'https://amazon.com/dp/B001234574?ref=hippistuff',
    rating: 4.7,
    reviews: 389,
    tags: ['crystals', 'chakras', 'healing', 'meditation'],
    featured: false,
    inStock: true,
    commission: 16.0
  },
  {
    id: 'essential-oil-diffuser',
    name: 'Ultrasonic Essential Oil Diffuser',
    description: 'Transform your space with aromatic mist and peaceful lighting',
    price: '$48.99',
    originalPrice: '$68.99',
    image: 'https://images.pexels.com/photos/3951626/pexels-photo-3951626.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'sacred-spaces',
    affiliateUrl: 'https://amazon.com/dp/B001234575?ref=hippistuff',
    rating: 4.6,
    reviews: 512,
    tags: ['aromatherapy', 'essential oils', 'wellness', 'relaxation'],
    featured: false,
    inStock: true,
    commission: 11.0
  }
];

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const categories = [
  { id: 'meditation', name: 'Meditation & Mindfulness', icon: '🧘' },
  { id: 'beauty', name: 'Natural Beauty', icon: '🌸' },
  { id: 'sustainable', name: 'Sustainable Living', icon: '♻️' },
  { id: 'sacred-spaces', name: 'Sacred Spaces', icon: '🏠' }
];