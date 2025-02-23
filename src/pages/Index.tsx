
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Select all sections to animate
    const sections = document.querySelectorAll('.scroll-animation');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(137,137,222,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10" />
        <Hero />
        <div id="features" className="scroll-animation">
          <Features />
        </div>
        <div id="team" className="scroll-animation">
          <Testimonials />
        </div>
        <div id="download" className="scroll-animation">
          <Download />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
