
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Code2, Blocks, Database, Github, Settings, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <Blocks className="w-6 h-6 text-white" />,
      title: "TALL Stack Development",
      description: "Expert development using Tailwind CSS, Alpine.js, Laravel, and Livewire."
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "VILT Stack Solutions",
      description: "Powerful applications using Vue, Inertia.js, Laravel, and Tailwind CSS."
    },
    {
      icon: <Github className="w-6 h-6 text-white" />,
      title: "Open Source Solutions",
      description: "Commercial applications available as open source for the community."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Custom System Development",
      description: "Tailored solutions for specific business requirements and workflows."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology stack selection and implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We offer comprehensive web development services, specializing in modern stacks 
              and open source solutions for businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-lift glass-effect">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
