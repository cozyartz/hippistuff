import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Leaf, 
  Users, 
  BookOpen, 
  MessageCircle,
  Calendar,
  Download,
  Mail,
  Menu,
  X,
  ArrowRight,
  Star,
  Recycle,
  Award,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  Video,
  Flower,
  Sun,
  TreePine,
  Droplets,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Feather,
  Mountain,
  Waves,
  ShoppingCart
} from 'lucide-react';
import { AffiliateTracker } from './utils/analytics';
import { SearchBar } from './components/SearchBar';
import { AffiliateDisclosure } from './components/AffiliateDisclosure';
import { getFeaturedProducts, searchProducts, Product } from './data/products';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const tracker = AffiliateTracker.getInstance();
    tracker.trackNewsletterSignup();
    alert('Welcome to the Hippie Digest! 🌿');
    setEmail('');
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = searchProducts(query);
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleAffiliateClick = (product: Product) => {
    const tracker = AffiliateTracker.getInstance();
    tracker.trackAffiliateClick(product.id, product.name, product.category);
    tracker.trackProductView(product.name, product.category, product.price);
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white stroke-1" />
              </div>
              <span className="text-2xl font-light bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                HippieStuff
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('content')} className="text-gray-700 hover:text-green-600 transition-colors font-light">
                Content
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors font-light">
                Sacred Shop
              </button>
              <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-green-600 transition-colors font-light">
                Community
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-green-600 transition-colors font-light">
                Learn
              </button>
              <button onClick={() => scrollToSection('newsletter')} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-md transition-all font-light">
                Join Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 stroke-1" /> : <Menu className="w-6 h-6 stroke-1" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-green-100">
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('content')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-light">
                  Content
                </button>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-light">
                  Sacred Shop
                </button>
                <button onClick={() => scrollToSection('community')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-light">
                  Community
                </button>
                <button onClick={() => scrollToSection('education')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-light">
                  Learn
                </button>
                <button onClick={() => scrollToSection('newsletter')} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-md transition-all w-full font-light">
                  Join Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-20 h-20 opacity-10">
          <TreePine className="w-full h-full text-green-600 stroke-1" />
        </div>
        <div className="absolute top-40 right-16 w-16 h-16 opacity-10">
          <Flower className="w-full h-full text-amber-600 stroke-1" />
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10">
          <Mountain className="w-full h-full text-blue-600 stroke-1" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-light bg-gradient-to-r from-green-700 via-blue-600 to-amber-700 bg-clip-text text-transparent mb-6 leading-tight">
                Peace, Love & 
                <br />
                Natural Living
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Welcome to the serene online sanctuary for modern earth-lovers, conscious souls, and mindful beings. 
              Discover sustainable wisdom, connect with kindred spirits, and nurture positive transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5 stroke-1" />
                Sacred Shop
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Users className="w-5 h-5 stroke-1" />
                Join Our Circle
              </button>
              <button 
                onClick={() => scrollToSection('content')}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-light hover:bg-green-600 hover:text-white transition-all flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5 stroke-1" />
                Explore Wisdom
              </button>
            </div>

            {/* Nature-inspired decorative elements */}
            <div className="flex justify-center items-center gap-8 opacity-30">
              <Leaf className="w-8 h-8 text-green-600 stroke-1" />
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <Sun className="w-8 h-8 text-amber-600 stroke-1" />
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <Waves className="w-8 h-8 text-blue-600 stroke-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Section */}
      <section id="content" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-green-600 stroke-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Wisdom Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover inspiring content about earth-conscious living, ancient wisdom, and mindful practices
            </p>
          </div>

          {/* Content Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {[
              { id: 'blog', label: 'Sacred Writings', icon: FileText },
              { id: 'videos', label: 'Visual Journeys', icon: Video },
              { id: 'guides', label: 'Earth Gatherings', icon: MapPin },
              { id: 'diy', label: 'Craft Wisdom', icon: Flower }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-light ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-green-100'
                }`}
              >
                <tab.icon className="w-5 h-5 stroke-1" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Sacred Art of Natural Dyeing",
                category: "Ancient Crafts",
                image: "https://images.pexels.com/photos/4321186/pexels-photo-4321186.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "River Moon",
                date: "2 days ago",
                readTime: "8 min read"
              },
              {
                title: "Living in Harmony with Earth's Rhythms",
                category: "Conscious Living",
                image: "https://images.pexels.com/photos/4099464/pexels-photo-4099464.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Forest Sage",
                date: "1 week ago",
                readTime: "12 min read"
              },
              {
                title: "Desert Gathering: A Spiritual Journey",
                category: "Sacred Journeys",
                image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Desert Walker",
                date: "3 days ago",
                readTime: "15 min read"
              },
              {
                title: "Morning Meditation with Mother Earth",
                category: "Inner Peace",
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Dawn Keeper",
                date: "5 days ago",
                readTime: "6 min read"
              },
              {
                title: "Creating Sacred Spaces in Small Dwellings",
                category: "Sacred Living",
                image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Space Weaver",
                date: "1 week ago",
                readTime: "10 min read"
              },
              {
                title: "Conscious Clothing: Thrift Store Treasures",
                category: "Mindful Fashion",
                image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Thread Spirit",
                date: "4 days ago",
                readTime: "7 min read"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group border border-green-50">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-sm font-light border border-green-100">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors border border-green-100">
                      <Heart className="w-4 h-4 text-gray-600 stroke-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-green-700 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-light">
                    <div className="flex items-center gap-2">
                      <Feather className="w-4 h-4 stroke-1" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 stroke-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-light">{item.date}</span>
                    <button className="text-green-600 font-light hover:text-green-800 transition-colors flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4 stroke-1" />
                    </button>
                  </div>
                  
                  {/* Affiliate Product Suggestions */}
                  <div className="mt-4 pt-4 border-t border-green-100">
                    <p className="text-xs text-gray-500 mb-2 font-light">🛍️ Sacred Tools for This Practice:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Organic Materials", "Sacred Tools", "Mindful Supplies"].map((product, idx) => (
                        <button 
                          key={idx}
                          className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full hover:bg-green-100 transition-colors border border-green-200"
                        >
                          {product}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-lg transition-all transform hover:scale-105">
              Explore All Wisdom
            </button>
          </div>
        </div>
      </section>

      {/* Community Platform Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-5">
          <Sun className="w-full h-full text-amber-600 stroke-1" />
        </div>
        <div className="absolute bottom-10 left-10 w-28 h-28 opacity-5">
          <TreePine className="w-full h-full text-green-600 stroke-1" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600 stroke-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Sacred Circle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Connect with kindred spirits, share your journey, and grow together in harmony
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Community Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-50">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white stroke-1" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-2">Wisdom Circles</h3>
                  <p className="text-gray-600 font-light">
                    Share insights on conscious living, earth wisdom, and spiritual growth in our nurturing forums
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-50">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-white stroke-1" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-2">Earth Gatherings</h3>
                  <p className="text-gray-600 font-light">
                    Join local ceremonies, workshops, and mindful gatherings happening in your sacred space
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-50">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-full">
                  <Award className="w-6 h-6 text-white stroke-1" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-2">Spirit Recognition</h3>
                  <p className="text-gray-600 font-light">
                    Receive sacred symbols and energy points for sharing wisdom, helping others, and staying present
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-50">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-full">
                  <Star className="w-6 h-6 text-white stroke-1" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-2">Soul Expressions</h3>
                  <p className="text-gray-600 font-light">
                    Share your creative projects, transformation stories, and artistic expressions with the tribe
                  </p>
                </div>
              </div>
            </div>

            {/* Community Testimonials */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl text-white">
                <div className="flex justify-center mb-6">
                  <Heart className="w-8 h-8 text-white stroke-1" />
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Community Love</h3>
                <p className="text-green-100 text-center font-light leading-relaxed">
                  "A sacred space where souls connect authentically. The wisdom shared here has transformed my relationship with Mother Earth and myself."
                </p>
                <div className="text-center mt-6">
                  <div className="font-light text-green-100">— Luna Starweaver</div>
                </div>
              </div>

              {/* Additional testimonials */}
              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-blue-50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white stroke-1" />
                    </div>
                    <div>
                      <div className="font-light text-gray-800">Ocean Dreamer</div>
                      <div className="text-sm text-gray-500 font-light">Sacred Circle Member</div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light italic">
                    "Found my tribe here! The gatherings and workshops have connected me with beautiful souls who share my values. Pure magic! ✨"
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-amber-50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Sun className="w-6 h-6 text-white stroke-1" />
                    </div>
                    <div>
                      <div className="font-light text-gray-800">Golden Spirit</div>
                      <div className="text-sm text-gray-500 font-light">Sacred Circle Member</div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light italic">
                    "The wisdom shared in these circles has guided my journey toward conscious living. Grateful for this peaceful sanctuary! 🌿"
                  </p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-lg transition-all transform hover:scale-105">
                Join Our Sacred Circle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-green-600 stroke-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Sacred Essentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover earth-friendly products that align with your conscious lifestyle
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Meditation & Mindfulness",
                description: "Sacred tools for inner peace",
                image: "https://images.pexels.com/photos/3775121/pexels-photo-3775121.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "47 items",
                icon: Sun
              },
              {
                title: "Natural Beauty",
                description: "Pure, earth-sourced essentials",
                image: "https://images.pexels.com/photos/4735905/pexels-photo-4735905.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "32 items",
                icon: Flower
              },
              {
                title: "Sustainable Living",
                description: "Zero-waste lifestyle essentials",
                image: "https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "28 items",
                icon: Recycle
              },
              {
                title: "Sacred Spaces",
                description: "Create your peaceful sanctuary",
                image: "https://images.pexels.com/photos/3951626/pexels-photo-3951626.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "19 items",
                icon: TreePine
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 group border border-green-100">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <category.icon className="w-5 h-5 text-green-600 stroke-1" />
                      </div>
                      <span className="text-white text-sm font-light bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-4">{category.description}</p>
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-light hover:shadow-md transition-all">
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Disclosure */}
          <AffiliateDisclosure />

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search sacred products and wisdom..."
              className="max-w-md w-full"
            />
          </div>

          {/* Search Results */}
          {showSearchResults && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-green-100 mb-8">
              <h3 className="text-2xl font-light text-gray-800 mb-6">
                Search Results for "{searchTerm}"
              </h3>
              {searchResults.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {searchResults.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.originalPrice && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-light">
                              Save {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                            <Heart className="w-4 h-4 text-gray-600 stroke-1" />
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-light text-gray-800 mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-3 font-light">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'} stroke-1`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 font-light">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-light text-green-600">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through font-light">{product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => handleAffiliateClick(product)}
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-light hover:shadow-md transition-all"
                        >
                          Add to Sacred Collection
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 font-light">No products found for "{searchTerm}"</p>
                  <p className="text-sm text-gray-400 mt-2">Try searching for meditation, natural, organic, or sustainable</p>
                </div>
              )}
            </div>
          )}

          {/* Featured Products */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-green-100">
            <h3 className="text-2xl font-light text-gray-800 mb-8 text-center">Community Favorites</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {getFeaturedProducts().map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-light">
                          Save {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600 stroke-1" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-light text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-3 font-light">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'} stroke-1`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-light">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-light text-green-600">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through font-light">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleAffiliateClick(product)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-light hover:shadow-md transition-all"
                    >
                      Add to Sacred Collection
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-amber-600 stroke-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Ancient Wisdom, Modern Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Access sacred teachings, mindful practices, and earth-conscious guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Learning Paths */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-light text-gray-800 mb-6">Sacred Learning Paths</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Earth-Conscious Living",
                    description: "Complete journey to harmonious living, mindful consumption, and earth stewardship",
                    modules: 12,
                    duration: "6 weeks",
                    level: "All Souls",
                    color: "from-green-500 to-emerald-600",
                    icon: Leaf
                  },
                  {
                    title: "Inner Peace & Meditation",
                    description: "Cultivate serenity, emotional balance, and spiritual awareness through timeless practices",
                    modules: 8,
                    duration: "4 weeks",
                    level: "All Souls",
                    color: "from-blue-500 to-indigo-600",
                    icon: Sun
                  },
                  {
                    title: "Sacred Crafts & Creation",
                    description: "Transform materials with love, express creativity, and honor the cycle of renewal",
                    modules: 15,
                    duration: "8 weeks",
                    level: "All Souls",
                    color: "from-amber-500 to-orange-600",
                    icon: Flower
                  }
                ].map((path, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-green-50">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${path.color} p-3 rounded-full group-hover:scale-110 transition-transform`}>
                        <path.icon className="w-6 h-6 text-white stroke-1" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-light text-gray-800">{path.title}</h4>
                          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-light border border-green-100">
                            {path.level}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 font-light">{path.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-light">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4 stroke-1" />
                            {path.modules} teachings
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 stroke-1" />
                            {path.duration}
                          </div>
                        </div>
                        <button className="text-green-600 font-light hover:text-green-800 transition-colors flex items-center gap-1">
                          Begin Journey
                          <ArrowRight className="w-4 h-4 stroke-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Gatherings */}
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-6">Sacred Gatherings</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Earth-Friendly Kitchen Wisdom",
                    date: "Tomorrow, 7 PM EST",
                    host: "Chef Gaia",
                    type: "Virtual Circle"
                  },
                  {
                    title: "Crystal Energy Workshop",
                    date: "Friday, 6 PM EST",
                    host: "Crystal Keeper",
                    type: "Sacred Practice"
                  },
                  {
                    title: "Natural Beauty Alchemy",
                    date: "Saturday, 3 PM EST",
                    host: "Earth Beauty",
                    type: "Craft Circle"
                  },
                  {
                    title: "Meditation for Inner Peace",
                    date: "Sunday, 5 PM EST",
                    host: "Peaceful Soul",
                    type: "Mindful Practice"
                  }
                ].map((gathering, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-blue-50">
                    <h4 className="font-light text-gray-800 mb-2">{gathering.title}</h4>
                    <div className="text-sm text-gray-500 space-y-1 font-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 stroke-1" />
                        {gathering.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Feather className="w-4 h-4 stroke-1" />
                        {gathering.host}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 stroke-1" />
                        {gathering.type}
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg text-sm font-light hover:shadow-md transition-all">
                      Join Circle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sacred Resources */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl text-white">
            <div className="flex justify-center mb-6">
              <Download className="w-8 h-8 text-white stroke-1" />
            </div>
            <h3 className="text-2xl font-light mb-6 text-center">Sacred Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Earth-Conscious Living Guide",
                  description: "100+ gentle practices for harmonious living",
                  downloads: "12.5K souls",
                  icon: CheckCircle
                },
                {
                  title: "Meditation Journey for Beginners",
                  description: "Gentle introduction to inner peace practices",
                  downloads: "8.2K souls",
                  icon: Sun
                },
                {
                  title: "Natural Home Alchemy",
                  description: "Sacred recipes for pure, loving home care",
                  downloads: "15.7K souls",
                  icon: Droplets
                }
              ].map((resource, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                  <resource.icon className="w-8 h-8 text-white mb-4 stroke-1" />
                  <h4 className="text-lg font-light mb-2">{resource.title}</h4>
                  <p className="text-green-100 text-sm mb-4 font-light">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-200 font-light">{resource.downloads}</span>
                    <button className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-light hover:bg-green-50 transition-colors">
                      <Download className="w-4 h-4 stroke-1" />
                      Receive
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-24 h-24 opacity-5">
          <Flower className="w-full h-full text-amber-600 stroke-1" />
        </div>
        <div className="absolute bottom-20 right-20 w-20 h-20 opacity-5">
          <Heart className="w-full h-full text-green-600 stroke-1" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl opacity-10"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg border border-green-100">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-white stroke-1" />
                </div>
              </div>
              
              <h2 className="text-4xl font-light text-gray-800 mb-6">
                The Hippie Digest
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Receive weekly earth wisdom, community love, conscious living inspiration, and sacred teachings 
                delivered to your heart. Join our circle of mindful souls.
              </p>

              <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your sacred email"
                    className="flex-1 px-6 py-4 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-lg font-light bg-white/90 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-light hover:shadow-lg transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    Join Circle
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500 font-light">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500 stroke-1" />
                  Pure intentions
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500 stroke-1" />
                  Leave anytime
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500 stroke-1" />
                  Weekly wisdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white stroke-1" />
                </div>
                <span className="text-2xl font-light">HippieStuff</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md font-light">
                Connecting conscious souls worldwide through authentic wisdom, 
                meaningful community, and transformative practices. Spreading peace, 
                love, and earth-conscious living one heart at a time.
              </p>
              <div className="flex space-x-4 mt-6">
                <button className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-colors">
                  <Instagram className="w-5 h-5 stroke-1" />
                </button>
                <button className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5 stroke-1" />
                </button>
                <button className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5 stroke-1" />
                </button>
                <button className="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5 stroke-1" />
                </button>
              </div>
            </div>

            {/* Sacred Links */}
            <div>
              <h4 className="text-lg font-light mb-6">Sacred Paths</h4>
              <ul className="space-y-3 text-gray-300 font-light">
                <li><button onClick={() => scrollToSection('content')} className="hover:text-green-400 transition-colors">Wisdom Library</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-green-400 transition-colors">Sacred Shop</button></li>
                <li><button onClick={() => scrollToSection('community')} className="hover:text-green-400 transition-colors">Sacred Circle</button></li>
                <li><button onClick={() => scrollToSection('education')} className="hover:text-green-400 transition-colors">Ancient Wisdom</button></li>
                <li><button onClick={() => scrollToSection('newsletter')} className="hover:text-green-400 transition-colors">Hippie Digest</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-light mb-6">Sacred Support</h4>
              <ul className="space-y-3 text-gray-300 font-light">
                <li><a href="#" className="hover:text-green-400 transition-colors">Guidance Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Connect With Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Sacred Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-center font-light">
                © 2025 HippieStuff.com. Created with 🌿 for the conscious community.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-400 font-light">
                <Leaf className="w-4 h-4 stroke-1" />
                <span>Spreading peace, love & earth wisdom worldwide</span>
                <Heart className="w-4 h-4 stroke-1" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;