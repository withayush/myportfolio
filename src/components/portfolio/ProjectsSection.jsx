import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Particles from "../ui/Particles";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "DriftX Store",
      description: "A luxury thrift eCommerce platform with advanced filtering, user authentication, and seamless payment integration. Built with modern web technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      category: "Full-Stack",
      featured: true,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Student Placement Dashboard",
      description: "Comprehensive analytics dashboard for tracking student placements, featuring real-time data visualization and predictive analytics for career guidance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      category: "Data Visualization",
      featured: true,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Mental Health Bot",
      description: "AI-powered chatbot providing mental health support with natural language processing and sentiment analysis for personalized conversations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "NLP", "React", "Flask", "OpenAI"],
      category: "AI/ML",
      featured: true,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Admin Panel Suite",
      description: "Modular admin panel with role-based access control, advanced analytics, and customizable dashboards for various business needs.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Node.js", "Redis"],
      category: "Enterprise",
      featured: false,
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#e0e7ef', '#60a5fa', '#818cf8', '#1e293b']}
          particleCount={100}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      {/* Subtle blurred circles for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Projects</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A showcase of my journey through code, design, and innovation
          </p>
        </motion.div>
        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white/10 border border-blue-900/30 rounded-full p-2 shadow-lg backdrop-blur-lg">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Projects Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="overflow-hidden shadow-2xl hover:shadow-blue-400/30 transition-shadow duration-300 bg-white/10 backdrop-blur-lg border border-blue-900/30 rounded-2xl">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-indigo-900/30 aspect-video lg:aspect-auto flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center text-7xl text-blue-300 animate-bounce-slow">
                          🚀
                        </div>
                        {project.featured && (
                          <Badge className="absolute top-4 left-4 bg-blue-600 text-white shadow-lg border border-blue-900/30">
                            Featured
                          </Badge>
                        )}
                      </div>
                      {/* Project Content */}
                      <CardContent className="p-8 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 text-blue-200 border-blue-400/30">
                          {project.category}
                        </Badge>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-400/30 hover:bg-blue-800/40">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button className="bg-blue-600 text-white hover:bg-blue-700">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="border-blue-400/30 text-blue-200 hover:bg-blue-900/20">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
            className="rounded-full border-blue-400/30 text-blue-200 hover:bg-blue-900/20"
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
            className="rounded-full border-blue-400/30 text-blue-200 hover:bg-blue-900/20"
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 