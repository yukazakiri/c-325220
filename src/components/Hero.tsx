
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Code2, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center px-4 pt-20 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(137,137,222,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-lg p-3 hover-lift border border-white/10">
                  <Users className="w-full h-full text-accent" />
                </div>
                <div className="h-[2px] w-20 bg-gradient-to-r from-accent to-transparent" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Innovation Through
                <br />
                <span className="text-7xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/50">
                  Collaboration
                </span>
              </h1>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                We're not just building applications; we're building a community of passionate 
                developers committed to innovation and open source excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 group">
                Join Our Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5 group">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Team Showcase */}
          <div className="relative animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-3xl" />
              <div className="relative space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Meet Our Team</h2>
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                    View All
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      name: "Sarah Johnson",
                      role: "Lead Developer",
                      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop"
                    },
                    {
                      name: "Michael Chen",
                      role: "UI/UX Designer",
                      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop"
                    }
                  ].map((member, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative mb-3 overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-medium text-white group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-white/60">{member.role}</p>
                    </div>
                  ))}
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
