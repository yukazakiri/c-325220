
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Being part of this team has been an amazing journey of growth and innovation.",
      author: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop"
    },
    {
      quote: "The collaborative environment here brings out the best in every team member.",
      author: "Michael Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop"
    },
    {
      quote: "We're not just colleagues, we're a family of innovative problem solvers.",
      author: "Emma Davis",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          The passionate individuals behind our success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="scroll-animation">
              <Card className="p-6 hover-lift glass-effect">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                  ))}
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
