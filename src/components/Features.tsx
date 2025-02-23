
import { Card } from "@/components/ui/card";
import { Code2, Users, Star, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Modern Tech Stack",
      description: "Built with React, TypeScript, and modern tools for optimal development experience"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Active Community",
      description: "Join thousands of developers building and sharing amazing projects"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "Premium Support",
      description: "Get help from our team and community whenever you need it"
    }
  ];

  return (
    <div className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to Build
            <span className="text-blue-500"> Modern Apps</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive tools and resources to help you build production-ready 
            applications with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="scroll-animation">
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-500 group-hover:text-blue-400 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
