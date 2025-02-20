
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Code2, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center px-4 pt-20 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(137,137,222,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-lg p-3 hover-lift border border-white/10">
                  <Code2 className="w-full h-full text-accent" />
                </div>
                <div className="h-[2px] w-20 bg-gradient-to-r from-accent to-transparent" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Building the
                <br />
                <span className="text-7xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/50">
                  Future of Web
                </span>
              </h1>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                We transform ideas into powerful commercial applications while maintaining 
                our commitment to open source development and community growth.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group"
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5 group"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover-lift">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-white/60 text-sm">Open Source Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover-lift">
                <div className="text-2xl font-bold text-white mb-1">100+</div>
                <div className="text-white/60 text-sm">Commercial Apps</div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="relative animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-lg font-semibold text-white">Latest Release</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-white">Web Framework v2.0</div>
                      <div className="text-sm text-accent">New</div>
                    </div>
                    <div className="text-sm text-white/60">Enhanced performance and developer experience</div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-white">UI Components</div>
                      <div className="text-sm text-white/60">v1.8.0</div>
                    </div>
                    <div className="text-sm text-white/60">New components and accessibility improvements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
