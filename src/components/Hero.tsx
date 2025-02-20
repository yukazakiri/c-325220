
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 pt-20 bg-background overflow-hidden">
      {/* Minimal Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center space-y-12">
          {/* Logo Section */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-lg p-4 hover-lift">
              <Code2 className="w-12 h-12 text-accent" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm backdrop-blur-lg border border-accent/20">
              Open Source Software Development
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Commercial Apps,
              <br />
              <span className="text-accent bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
                Open Source Heart
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We create powerful commercial applications and make them available as open source solutions, 
              empowering businesses while contributing to the developer community.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button 
              className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5 group w-full sm:w-auto"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover-lift">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60">Open Source Projects</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover-lift">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/60">Commercial Apps</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover-lift">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/60">GitHub Stars</div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
