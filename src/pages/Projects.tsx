
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Code2, Users2, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution built with the TALL stack, supporting multi-vendor capabilities and real-time inventory management.",
      stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      metrics: {
        stars: "1.2k",
        forks: "234",
        users: "500+"
      },
      features: [
        "Multi-vendor support",
        "Real-time inventory",
        "Analytics dashboard",
        "Payment integration"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "CRM System",
      description: "Customer relationship management system using the VILT stack, featuring automated workflows and comprehensive reporting tools.",
      stack: ["Vue", "Inertia.js", "Laravel", "Tailwind"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      metrics: {
        stars: "856",
        forks: "156",
        users: "300+"
      },
      features: [
        "Contact management",
        "Task automation",
        "Email campaigns",
        "Performance tracking"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with real-time updates, task tracking, and team collaboration features.",
      stack: ["Laravel", "Vue", "Tailwind", "WebSockets"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      metrics: {
        stars: "943",
        forks: "187",
        users: "400+"
      },
      features: [
        "Real-time collaboration",
        "Task management",
        "Team messaging",
        "File sharing"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Inventory System",
      description: "Modern inventory management system with advanced reporting, barcode scanning, and supplier management capabilities.",
      stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      metrics: {
        stars: "734",
        forks: "143",
        users: "250+"
      },
      features: [
        "Barcode scanning",
        "Stock alerts",
        "Supplier management",
        "Advanced reporting"
      ],
      github: "#",
      demo: "#"
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
              <span className="text-white">Open Source</span>
              <br />
              <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore our collection of enterprise-grade open source projects. 
              Each project is built with modern technologies and maintained with 
              the highest standards of quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub Organization
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/60">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10k+</div>
                <div className="text-white/60">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5k+</div>
                <div className="text-white/60">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group animate-fade-in hover-lift bg-black/40"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 glass-effect">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-6">{project.description}</p>
                  
                  {/* Project Metrics */}
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-white/80">
                      <Star className="w-5 h-5 text-accent" />
                      <span>{project.metrics.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Code2 className="w-5 h-5 text-accent" />
                      <span>{project.metrics.forks} forks</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Users2 className="w-5 h-5 text-accent" />
                      <span>{project.metrics.users} users</span>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full bg-accent/10 text-white/80 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 bg-accent/10 hover:bg-accent/20 text-accent group"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-white/20 text-white hover:bg-white/10 group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent animate-pulse" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
            </div>
            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to Contribute?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Join our open source community and help us build better software together.
                We welcome contributors of all skill levels.
              </p>
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 group">
                Get Started
                <Github className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
