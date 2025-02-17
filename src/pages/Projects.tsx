
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution built with the TALL stack.",
      stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "CRM System",
      description: "Customer relationship management system using the VILT stack.",
      stack: ["Vue", "Inertia.js", "Laravel", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with real-time updates.",
      stack: ["Laravel", "Vue", "Tailwind", "WebSockets"],
      github: "#",
      demo: "#"
    },
    {
      title: "Inventory System",
      description: "Modern inventory management system with advanced reporting.",
      stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Explore our open source projects and see how we're contributing to the developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover-lift glass-effect">
                <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                <p className="text-white/60 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-white/80 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" className="hover:bg-white/10 flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                  <Button variant="ghost" className="hover:bg-white/10 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
