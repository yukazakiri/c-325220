
import { Card } from "@/components/ui/card";
import { Code2, Blocks, Users, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Collaborative Development",
      description: "Join a community of passionate developers working together to build amazing solutions"
    },
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Open Source First",
      description: "We believe in transparency and sharing knowledge through open source contributions"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Community Driven",
      description: "Our projects are shaped by the needs and feedback of our growing developer community"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Built by Developers,
              <br />
              <span className="text-accent">For Developers</span>
            </h2>
            <p className="text-xl text-white/60">
              Our team of passionate developers is committed to creating tools and solutions
              that empower the developer community.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="scroll-animation">
                <Card className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
