
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has transformed how we build and deploy applications. The community support is incredible.",
      author: "Alex Thompson",
      role: "Senior Software Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop"
    },
    {
      quote: "The developer experience is unmatched. Everything just works seamlessly together.",
      author: "Sarah Chen",
      role: "Full Stack Developer",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop"
    },
    {
      quote: "The best investment we've made for our development team. The ROI has been phenomenal.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Developers
            <span className="text-blue-500"> Worldwide</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing applications
            with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="scroll-animation">
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-lg text-white/80 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                    <div className="text-sm text-blue-500">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
