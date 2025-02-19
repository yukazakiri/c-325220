
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Code2, Blocks, Database } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 pt-20 bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 backdrop-blur-lg rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-40 right-40 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-xl rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm backdrop-blur-lg">
                Open Source Software Development
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Commercial Apps,{" "}
                <span className="text-accent">Open Source Heart</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                We create powerful commercial applications and make them available as open source solutions, 
                empowering businesses while contributing to the developer community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="space-y-2 text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm lg:text-base">Open Source Projects</div>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white">100+</div>
                <div className="text-white/60 text-sm lg:text-base">Commercial Apps</div>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white">1000+</div>
                <div className="text-white/60 text-sm lg:text-base">GitHub Stars</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative lg:block animate-fade-in" style={{ animationDelay: "600ms" }}>
            {/* Tech Stack Icons */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-lg flex items-center justify-center text-accent animate-float">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-lg flex items-center justify-center text-accent animate-float" style={{ animationDelay: "1s" }}>
                <Blocks className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-lg flex items-center justify-center text-accent animate-float" style={{ animationDelay: "2s" }}>
                <Database className="w-6 h-6" />
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
                  alt="Development Team"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
