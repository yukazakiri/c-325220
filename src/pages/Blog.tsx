
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with the TALL Stack",
      excerpt: "Learn how to build modern web applications using Tailwind CSS, Alpine.js, Laravel, and Livewire.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Development"
    },
    {
      title: "Why We Choose Open Source",
      excerpt: "Understanding the benefits of open source development and how it impacts the tech community.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Open Source"
    },
    {
      title: "Building with the VILT Stack",
      excerpt: "A comprehensive guide to developing applications using Vue, Inertia.js, Laravel, and Tailwind CSS.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Tutorial"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development and their potential impact.",
      author: "Sarah Wilson",
      date: "March 1, 2024",
      category: "Industry"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Insights, tutorials, and updates from our team of developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover-lift glass-effect">
                <div className="p-8">
                  <div className="text-sm text-white/60 mb-4">
                    <span className="inline-flex items-center gap-2 mr-4">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{post.title}</h3>
                  <p className="text-white/60 mb-6">{post.excerpt}</p>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-white/80 text-sm">
                    {post.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
