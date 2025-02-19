
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag, Clock, Search } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development and their potential impact on the industry.",
    author: "Sarah Wilson",
    date: "March 1, 2024",
    category: "Industry",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  };

  const categories = [
    "All Posts", "Development", "Tutorial", "Industry", "Open Source"
  ];

  const posts = [
    {
      title: "Getting Started with the TALL Stack",
      excerpt: "Learn how to build modern web applications using Tailwind CSS, Alpine.js, Laravel, and Livewire.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Why We Choose Open Source",
      excerpt: "Understanding the benefits of open source development and how it impacts the tech community.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Open Source",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Building with the VILT Stack",
      excerpt: "A comprehensive guide to developing applications using Vue, Inertia.js, Laravel, and Tailwind CSS.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Tutorial",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">Our</span>{" "}
              <span className="text-accent">Blog</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover insights, tutorials, and the latest updates from our team of developers.
              Stay informed about the newest trends in web development.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-12 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`border-white/10 text-white hover:bg-white/10 ${
                    index === 0 ? 'bg-accent text-white hover:bg-accent/90' : ''
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden group animate-fade-in hover-lift glass-effect">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px] md:h-full overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">
                      Featured
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                  </div>
                  <Button className="w-fit bg-accent hover:bg-accent/90 group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="py-20 px-4 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="overflow-hidden group animate-fade-in hover-lift glass-effect"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent animate-pulse" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
            </div>
            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter to receive the latest updates, tutorials,
                and insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <Button className="bg-white text-black hover:bg-white/90 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
