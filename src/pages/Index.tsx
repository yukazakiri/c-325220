
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

    const sections = document.querySelectorAll('.scroll-animation');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,94,247,0.07),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(142,53,247,0.05),transparent_50%)]" />
      <div className="relative">
        <Navbar />
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
