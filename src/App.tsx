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
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold text-gray-900">
                HippieStuff
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('content')} className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Content
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Shop
              </button>
              <button onClick={() => scrollToSection('community')} className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Community
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Learn
              </button>
              <button onClick={() => scrollToSection('newsletter')} className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all font-medium shadow-sm">
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
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('content')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Content
                </button>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Shop
                </button>
                <button onClick={() => scrollToSection('community')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Community
                </button>
                <button onClick={() => scrollToSection('education')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Learn
                </button>
                <button onClick={() => scrollToSection('newsletter')} className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all w-full font-medium">
                  Join Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-50 to-white">
        {/* Modern geometric decoration */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-60 blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                <Leaf className="w-4 h-4" />
                Modern Conscious Living
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Elevate Your
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                Conscious Lifestyle
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover premium sustainable products, mindful practices, and connect with a community 
              that shares your values. Transform your daily routine into purposeful living.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Shop Now
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join Community
              </button>
            </div>

            {/* Modern stats/social proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">1M+</div>
                <div className="text-sm text-gray-600 font-medium">Products Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Section */}
      <section id="content" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                <BookOpen className="w-4 h-4" />
                Latest Content
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wisdom & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover inspiring content about sustainable living, mindfulness, and conscious choices
            </p>
          </div>

          {/* Content Tabs */}
          <div className="flex flex-wrap justify-center mb-16 gap-2">
            {[
              { id: 'blog', label: 'Articles', icon: FileText },
              { id: 'videos', label: 'Videos', icon: Video },
              { id: 'guides', label: 'Guides', icon: MapPin },
              { id: 'diy', label: 'DIY Projects', icon: Flower }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Art of Sustainable Living",
                category: "Lifestyle",
                image: "https://images.pexels.com/photos/4321186/pexels-photo-4321186.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Emma Green",
                date: "2 days ago",
                readTime: "8 min read"
              },
              {
                title: "Mindful Daily Routines",
                category: "Wellness",
                image: "https://images.pexels.com/photos/4099464/pexels-photo-4099464.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Alex Chen",
                date: "1 week ago",
                readTime: "12 min read"
              },
              {
                title: "Zero Waste Kitchen Essentials",
                category: "Sustainability",
                image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Sarah Miller",
                date: "3 days ago",
                readTime: "15 min read"
              },
              {
                title: "Meditation for Beginners",
                category: "Mindfulness",
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Maya Patel",
                date: "5 days ago",
                readTime: "6 min read"
              },
              {
                title: "Creating Peaceful Spaces at Home",
                category: "Home Design",
                image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "David Kim",
                date: "1 week ago",
                readTime: "10 min read"
              },
              {
                title: "Sustainable Fashion Guide",
                category: "Fashion",
                image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600",
                author: "Lisa Wang",
                date: "4 days ago",
                readTime: "7 min read"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/95 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors shadow-sm">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <Feather className="w-3 h-3" />
                      </div>
                      {item.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors flex items-center gap-1 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Community Platform Section */}
      <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                <Users className="w-4 h-4" />
                Community
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with like-minded individuals, share experiences, and grow together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Community Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="bg-blue-500 p-3 rounded-lg shadow-sm">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discussion Forums</h3>
                  <p className="text-gray-600">
                    Share insights and connect with our community through engaging discussions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="bg-emerald-500 p-3 rounded-lg shadow-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Events & Workshops</h3>
                  <p className="text-gray-600">
                    Participate in virtual and local events focused on sustainable living
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="bg-amber-500 p-3 rounded-lg shadow-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rewards Program</h3>
                  <p className="text-gray-600">
                    Earn points and recognition for contributing to our community
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="bg-purple-500 p-3 rounded-lg shadow-sm">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Story</h3>
                  <p className="text-gray-600">
                    Showcase your sustainable lifestyle journey and inspire others
                  </p>
                </div>
              </div>
            </div>

            {/* Community Testimonials */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-2xl text-white">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-center">What Our Members Say</h3>
                <p className="text-emerald-100 text-center leading-relaxed text-lg">
                  "This community has completely changed how I approach sustainable living. The support and knowledge sharing is incredible!"
                </p>
                <div className="text-center mt-6">
                  <div className="font-medium text-emerald-100">— Sarah Johnson</div>
                  <div className="text-sm text-emerald-200">Community Member since 2023</div>
                </div>
              </div>

              {/* Additional testimonials */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Mike Chen</div>
                      <div className="text-sm text-gray-500">Active Member</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The workshops and community events have been game-changing. I've learned so much about sustainable living!"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Sun className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Emma Rodriguez</div>
                      <div className="text-sm text-gray-500">Long-time Member</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "This community has been instrumental in my sustainable living journey. The support is amazing!"
                  </p>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                <ShoppingCart className="w-4 h-4" />
                Sustainable Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eco-Friendly Essentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover premium sustainable products that align with your conscious lifestyle
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Wellness & Mindfulness",
                description: "Tools for mental well-being",
                image: "https://images.pexels.com/photos/3775121/pexels-photo-3775121.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "47 items",
                icon: Sun
              },
              {
                title: "Natural Beauty",
                description: "Clean, organic beauty products",
                image: "https://images.pexels.com/photos/4735905/pexels-photo-4735905.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "32 items",
                icon: Flower
              },
              {
                title: "Sustainable Living",
                description: "Eco-friendly home essentials",
                image: "https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "28 items",
                icon: Recycle
              },
              {
                title: "Home & Decor",
                description: "Sustainable home decoration",
                image: "https://images.pexels.com/photos/3951626/pexels-photo-3951626.jpeg?auto=compress&cs=tinysrgb&w=600",
                count: "19 items",
                icon: TreePine
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                        <category.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        {category.count}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-sm">
                    Browse Collection
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Disclosure */}
          <AffiliateDisclosure />

          {/* Search Bar */}
          <div className="mb-12 flex justify-center">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search sustainable products..."
              className="max-w-lg w-full"
            />
          </div>

          {/* Search Results */}
          {showSearchResults && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Search Results for "{searchTerm}"
              </h3>
              {searchResults.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                  {searchResults.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.originalPrice && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                              Save {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <button className="bg-white/95 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors shadow-sm">
                            <Heart className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => handleAffiliateClick(product)}
                          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-sm"
                        >
                          Add to Cart
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
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Featured Products</h3>
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
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                <BookOpen className="w-4 h-4" />
                Learning Resources
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn & Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access expert courses, workshops, and resources for sustainable living
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Learning Paths */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Learning Paths</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Sustainable Living Basics",
                    description: "Complete guide to eco-friendly living, mindful consumption, and environmental stewardship",
                    modules: 12,
                    duration: "6 weeks",
                    level: "Beginner",
                    color: "from-emerald-500 to-teal-600",
                    icon: Leaf
                  },
                  {
                    title: "Mindfulness & Wellness",
                    description: "Develop mental clarity, emotional balance, and overall well-being through proven practices",
                    modules: 8,
                    duration: "4 weeks",
                    level: "All Levels",
                    color: "from-blue-500 to-indigo-600",
                    icon: Sun
                  },
                  {
                    title: "DIY & Upcycling",
                    description: "Learn creative ways to repurpose materials and create beautiful, sustainable items",
                    modules: 15,
                    duration: "8 weeks",
                    level: "Intermediate",
                    color: "from-amber-500 to-orange-600",
                    icon: Flower
                  }
                ].map((path, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${path.color} p-3 rounded-xl group-hover:scale-105 transition-transform shadow-sm`}>
                        <path.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{path.title}</h4>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                            {path.level}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{path.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {path.modules} lessons
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {path.duration}
                          </div>
                        </div>
                        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1 group/btn">
                          Start Learning
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Sustainable Cooking Workshop",
                    date: "Tomorrow, 7 PM EST",
                    host: "Chef Maria",
                    type: "Virtual Workshop"
                  },
                  {
                    title: "Mindfulness Meditation",
                    date: "Friday, 6 PM EST",
                    host: "Dr. Sarah Lee",
                    type: "Wellness Session"
                  },
                  {
                    title: "DIY Natural Skincare",
                    date: "Saturday, 3 PM EST",
                    host: "Emma Green",
                    type: "DIY Workshop"
                  },
                  {
                    title: "Zero Waste Living Tips",
                    date: "Sunday, 5 PM EST",
                    host: "Alex Chen",
                    type: "Educational Session"
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Feather className="w-4 h-4" />
                        {event.host}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {event.type}
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Free Resources */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-2xl text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-3 rounded-xl">
                <Download className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Free Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Sustainable Living Guide",
                  description: "100+ practical tips for eco-friendly living",
                  downloads: "12.5K downloads",
                  icon: CheckCircle
                },
                {
                  title: "Mindfulness Starter Kit",
                  description: "Essential practices for daily mindfulness",
                  downloads: "8.2K downloads",
                  icon: Sun
                },
                {
                  title: "DIY Natural Cleaning Guide",
                  description: "Safe, effective recipes for home cleaning",
                  downloads: "15.7K downloads",
                  icon: Droplets
                }
              ].map((resource, index) => (
                <div key={index} className="bg-white/15 backdrop-blur-sm p-6 rounded-xl hover:bg-white/25 transition-all">
                  <resource.icon className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                  <p className="text-emerald-100 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-200">{resource.downloads}</span>
                    <button className="flex items-center gap-2 bg-white text-emerald-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors shadow-sm">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-12 rounded-3xl border border-emerald-100">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get weekly tips, exclusive content, and updates about sustainable living 
              delivered straight to your inbox. Join our community of conscious consumers.
            </p>

            <form onSubmit={handleNewsletterSignup} className="max-w-lg mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-lg bg-white shadow-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                No spam ever
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Unsubscribe anytime
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Weekly updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-semibold">HippieStuff</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Your trusted partner for sustainable living. We connect conscious consumers 
                with premium eco-friendly products and educational resources for a better world.
              </p>
              <div className="flex space-x-4 mt-6">
                <button className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('content')} className="hover:text-emerald-400 transition-colors">Articles</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-emerald-400 transition-colors">Shop</button></li>
                <li><button onClick={() => scrollToSection('community')} className="hover:text-emerald-400 transition-colors">Community</button></li>
                <li><button onClick={() => scrollToSection('education')} className="hover:text-emerald-400 transition-colors">Learn</button></li>
                <li><button onClick={() => scrollToSection('newsletter')} className="hover:text-emerald-400 transition-colors">Newsletter</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-center">
                © 2025 HippieStuff.com. Empowering sustainable living worldwide.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-400">
                <Leaf className="w-4 h-4" />
                <span>Building a better tomorrow, today</span>
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;