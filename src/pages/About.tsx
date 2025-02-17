
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Heart, Code2, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community-Driven",
      description: "We believe in the power of open source and community collaboration."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Passion for Quality",
      description: "Every line of code is crafted with attention to detail and best practices."
    },
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "Pushing boundaries with modern development approaches and technologies."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Continuous Learning",
      description: "Always learning and sharing knowledge with the community."
    }
  ];

  const stats = [
    { number: "100+", label: "Open Source Projects" },
    { number: "500+", label: "Happy Clients" },
    { number: "50K+", label: "GitHub Stars" },
    { number: "1M+", label: "Downloads" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-3xl opacity-30" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center bg-black/20 p-12 rounded-3xl backdrop-blur-xl border border-white/10">
              <div className="flex-1 space-y-6">
                <h1 className="text-6xl font-bold text-white leading-tight">
                  Building the Future of
                  <span className="text-accent"> Open Source</span>
                </h1>
                <p className="text-xl text-white/70">
                  We're a team of passionate developers creating commercial applications 
                  and making them accessible to everyone through open source.
                </p>
                <Button className="mt-4 px-8 py-6 text-lg bg-accent hover:bg-accent/90">
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide our development process and community engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift glass-effect group transition-all duration-300 hover:bg-accent/5"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/60">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-3xl opacity-30" />
            <div className="relative grid md:grid-cols-2 gap-12 items-center bg-black/20 p-12 rounded-3xl backdrop-blur-xl border border-white/10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  To revolutionize the software industry by creating powerful commercial 
                  applications that are accessible to everyone through open source. We believe 
                  in fostering innovation, collaboration, and knowledge sharing within the 
                  developer community.
                </p>
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Learn More About Our Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30" />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                  alt="Our Mission"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
