
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Commercial Apps, Open Source Heart
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            We create powerful commercial applications and make them available as open source solutions, empowering businesses while contributing to the developer community.
          </p>
          <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
            <Github className="w-5 h-5" />
            Explore Our Projects
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60">Open Source Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/60">Commercial Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/60">GitHub Stars</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
              alt="Development Team"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
