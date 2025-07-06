import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my journey through code, design, and innovation
          </p>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
                  <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video lg:aspect-auto">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-400">
                          🚀
                        </div>
                        {project.featured && (
                          <Badge className="absolute top-4 left-4 bg-black text-white">
                            Featured
                          </Badge>
                        )}
                      </div>

                      {/* Project Content */}
                      <CardContent className="p-8 flex flex-col justify-center">
                        <Badge variant="outline" className="w-fit mb-4 text-black border-gray-300">
                          {project.category}
                        </Badge>
                        
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button className="bg-black text-white hover:bg-gray-800">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
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
            className="rounded-full hover:bg-gray-50"
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
            className="rounded-full hover:bg-gray-50"
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 