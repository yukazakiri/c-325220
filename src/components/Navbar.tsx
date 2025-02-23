
import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-accent transition-colors"
          >
            Koamishin.org
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('features')}
              className="relative px-4 py-2 text-white/80 hover:text-white group"
            >
              <span>Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="relative px-4 py-2 text-white/80 hover:text-white group"
            >
              <span>Team</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </button>
            <Link 
              to="/projects" 
              className="relative px-4 py-2 text-white/80 hover:text-white group"
            >
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link 
              to="/blog" 
              className="relative px-4 py-2 text-white/80 hover:text-white group"
            >
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Button variant="outline" className="ml-4 border-white/10 text-white hover:bg-white/10">
              <Github className="w-5 h-5 mr-2" />
              Open Source
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block w-full px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Team
            </button>
            <Link 
              to="/projects" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-white/10 text-white hover:bg-white/10"
            >
              <Github className="w-5 h-5 mr-2" />
              Open Source
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
