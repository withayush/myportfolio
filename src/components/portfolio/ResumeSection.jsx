import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Award, GraduationCap, Briefcase } from "lucide-react";
import resumeImage from "../../assets/Ayush Sharma-11051-01.png";

const ResumeSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      content: "Computer Engineering Student",
      detail: "Currently pursuing B.Tech with focus on Software Development"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Experience",
      content: "3+ Years Coding",
      detail: "Full-stack development with modern technologies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Projects",
      content: "15+ Completed",
      detail: "Including eCommerce platforms, dashboards, and AI applications"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,theme(colors.gray.50)_49%,theme(colors.gray.50)_51%,transparent_52%)] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and achievements
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Resume image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
                <img
                  src={resumeImage}
                  alt="Ayush Sharma Resume"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right side - Content and actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-black mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-1">
                        {highlight.content}
                      </h4>
                      <p className="text-gray-600">
                        {highlight.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href={resumeImage} download target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2" />
                    Download JPG
                  </Button>
                </a>
                {/* If you have a PDF, add a button here */}
              </motion.div>

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl"
              >
                <p>
                  <strong>Last Updated:</strong> December 2024 <br />
                  <strong>Format:</strong> JPG <br />
                  <strong>File Size:</strong> ~1 MB
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection; 