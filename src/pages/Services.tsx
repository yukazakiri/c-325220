
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Blocks, Database, Github, Settings, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-accent" />,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: [
        "Full-stack development with React, Vue, and Angular",
        "Progressive Web Apps (PWA) development",
        "Performance optimization and caching strategies",
        "RESTful API and GraphQL integration",
        "Automated testing and CI/CD implementation",
        "SEO optimization and analytics integration"
      ],
      techStack: ["React", "Vue.js", "Node.js", "TypeScript", "GraphQL"]
    },
    {
      icon: <Blocks className="w-12 h-12 text-accent" />,
      title: "TALL Stack Development",
      description: "Expert development using Tailwind CSS, Alpine.js, Laravel, and Livewire.",
      features: [
        "Real-time UI updates with Livewire",
        "Progressive enhancement patterns",
        "Dynamic UI components with Alpine.js",
        "Server-side rendering optimization",
        "Database query optimization",
        "Advanced caching implementation"
      ],
      techStack: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire"]
    },
    {
      icon: <Database className="w-12 h-12 text-accent" />,
      title: "VILT Stack Solutions",
      description: "Powerful applications using Vue, Inertia.js, Laravel, and Tailwind CSS.",
      features: [
        "Single-page application architecture",
        "State management with Vuex/Pinia",
        "Database optimization and indexing",
        "Security implementation and auditing",
        "API authentication and authorization",
        "Real-time features with WebSockets"
      ],
      techStack: ["Vue.js", "Inertia.js", "Laravel", "Tailwind CSS"]
    }
  ];

  const additionalServices = [
    {
      icon: <Github className="w-8 h-8 text-white" />,
      title: "Open Source Solutions",
      description: "Commercial applications available as open source for the community.",
      benefits: [
        "Access to enterprise-grade software",
        "Community-driven improvements",
        "Transparent development process",
        "Regular security updates"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Custom System Development",
      description: "Tailored solutions for specific business requirements and workflows.",
      benefits: [
        "Customized business logic",
        "Scalable architecture",
        "Integration with existing systems",
        "Detailed documentation"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology stack selection and implementation.",
      benefits: [
        "Technology stack assessment",
        "Architecture planning",
        "Performance optimization",
        "Security best practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-3xl opacity-30" />
            <div className="relative z-10 text-center p-12 rounded-3xl backdrop-blur-xl border border-white/10">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-scale-in">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 animate-fade-in">
                We specialize in creating powerful commercial applications and making them 
                accessible through open source, empowering businesses and developers alike.
              </p>
              <Button className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 animate-fade-in">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 glass-effect">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <CheckCircle2 className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-accent/10 text-white/80 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="mt-6 w-full hover:bg-white/10 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Complementary services to support your development needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift glass-effect group transition-all duration-300 hover:bg-accent/5 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-3xl opacity-30" />
            <div className="relative text-center p-12 rounded-3xl backdrop-blur-xl border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Let's discuss how we can help bring your ideas to life with our comprehensive 
                development services.
              </p>
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 group">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
