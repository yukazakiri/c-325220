
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Heart, Code2, GraduationCap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community-Driven",
      description: "We believe in the power of open source and community collaboration."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Passion for Quality",
      description: "Every line of code is crafted with attention to detail and best practices."
    },
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "Pushing boundaries with modern development approaches and technologies."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Continuous Learning",
      description: "Always learning and sharing knowledge with the community."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We are a team of passionate developers dedicated to creating high-quality commercial 
              applications while contributing to the open-source community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover-lift glass-effect">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-white/60">
                To create powerful commercial applications that solve real business problems while 
                making them available as open source solutions, fostering innovation and collaboration 
                in the developer community.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?q=80&w=1470&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
