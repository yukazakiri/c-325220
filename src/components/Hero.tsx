
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Code2, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-background overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Content Container */}
        <div className="text-center space-y-16">
          {/* Logo & Badge */}
          <div className="flex flex-col items-center space-y-6 animate-fade-in">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-lg p-4 hover-lift border border-white/10">
                <Code2 className="w-full h-full text-accent" />
              </div>
              <div className="absolute -top-2 -right-2 bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20">
                <span className="text-sm font-medium text-white flex items-center gap-1">
                  <Star className="w-3 h-3 text-accent" fill="currentColor" />
                  New
                </span>
              </div>
            </div>
            
            <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>

          {/* Main Heading */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Crafting Digital
              <br />
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-accent via-purple-500 to-blue-500">
                  Experiences
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-blue-500 blur-2xl opacity-20" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into extraordinary web experiences with our innovative 
              development approach and commitment to open source excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button 
              className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5 group"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
            {[
              { number: "50+", label: "Open Source Projects" },
              { number: "100+", label: "Commercial Apps" },
              { number: "10K+", label: "Github Stars" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Lines */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
