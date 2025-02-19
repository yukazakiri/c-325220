
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Blocks, Database, Github, Settings, Users, ArrowRight, CheckCircle2, Monitor, Lock, Zap } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Code2 className="w-16 h-16 text-accent" />,
      title: "Web Application Development",
      subtitle: "Modern & Scalable Solutions",
      description: "Enterprise-grade web applications built with cutting-edge technologies.",
      features: [
        "Full-stack development with React, Vue, and Angular",
        "Progressive Web Apps (PWA) development",
        "Performance optimization and caching strategies",
        "RESTful API and GraphQL integration"
      ],
      benefits: [
        { icon: <Monitor className="w-5 h-5 text-accent" />, text: "Responsive Design" },
        { icon: <Lock className="w-5 h-5 text-accent" />, text: "Security First" },
        { icon: <Zap className="w-5 h-5 text-accent" />, text: "High Performance" }
      ]
    },
    {
      icon: <Blocks className="w-16 h-16 text-accent" />,
      title: "TALL Stack Development",
      subtitle: "Rapid & Efficient Development",
      description: "Lightning-fast applications using the modern TALL stack.",
      features: [
        "Real-time UI updates with Livewire",
        "Progressive enhancement patterns",
        "Dynamic UI components with Alpine.js",
        "Server-side rendering optimization"
      ],
      benefits: [
        { icon: <Monitor className="w-5 h-5 text-accent" />, text: "Modern UI" },
        { icon: <Lock className="w-5 h-5 text-accent" />, text: "Secure Stack" },
        { icon: <Zap className="w-5 h-5 text-accent" />, text: "Fast Development" }
      ]
    },
    {
      icon: <Database className="w-16 h-16 text-accent" />,
      title: "VILT Stack Solutions",
      subtitle: "Seamless & Interactive",
      description: "Feature-rich applications with the versatile VILT stack.",
      features: [
        "Single-page application architecture",
        "State management with Vuex/Pinia",
        "Database optimization and indexing",
        "Real-time features with WebSockets"
      ],
      benefits: [
        { icon: <Monitor className="w-5 h-5 text-accent" />, text: "SPA Experience" },
        { icon: <Lock className="w-5 h-5 text-accent" />, text: "Data Security" },
        { icon: <Zap className="w-5 h-5 text-accent" />, text: "Real-time Updates" }
      ]
    }
  ];

  const specializations = [
    {
      icon: <Github className="w-10 h-10 text-accent" />,
      title: "Open Source Solutions",
      description: "Enterprise solutions made accessible through open source."
    },
    {
      icon: <Settings className="w-10 h-10 text-accent" />,
      title: "System Integration",
      description: "Seamless integration with your existing infrastructure."
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology selection and implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-7xl font-bold tracking-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-accent">Digital Vision</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We craft exceptional digital experiences through innovative development 
              solutions and cutting-edge technologies.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden group animate-fade-in hover-lift bg-black/40"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-accent mb-4">{service.subtitle}</p>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  
                  {/* Benefits */}
                  <div className="flex gap-4 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/80">
                        {benefit.icon}
                        <span className="text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-accent/10 hover:bg-accent/20 text-accent group"
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

      {/* Specializations Section */}
      <div className="py-20 px-4 relative bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                <div className="relative p-8 rounded-xl border border-white/10 hover:border-accent/20 transition-colors">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-white/60">{spec.description}</p>
                </div>
              </div>
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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Let's collaborate to bring your vision to life with our expertise
                and cutting-edge technologies.
              </p>
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 group">
                Start Your Journey
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
