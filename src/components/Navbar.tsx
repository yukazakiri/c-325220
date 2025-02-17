
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">Koamishin.org</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
            <Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
            <Button variant="ghost" className="text-white hover:bg-white/10">
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
