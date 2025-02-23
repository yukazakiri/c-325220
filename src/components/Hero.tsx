
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d1d1d_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <span className="text-sm text-white/70">Trusted by 10,000+ developers worldwide</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Building the Future of
              <span className="relative whitespace-nowrap">
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-3/4 h-[0.6em] w-full fill-blue-500/20" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-transparent bg-clip-text">
                  {" "}Open Source{" "}
                </span>
              </span>
              Software
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Join our community of innovators and creators. Build extraordinary applications 
              with modern tools and frameworks, all while contributing to the open source ecosystem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: "600ms" }}>
            {[
              { value: "10K+", label: "GitHub Stars" },
              { value: "95%", label: "User Satisfaction" },
              { value: "24/7", label: "Community Support" }
            ].map((stat, index) => (
              <div key={index} className="px-8 py-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
