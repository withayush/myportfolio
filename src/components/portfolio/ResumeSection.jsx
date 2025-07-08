import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Award, GraduationCap, Briefcase } from "lucide-react";
import resumeImage from "../../assets/Ayush Sharma-11051-01.png";
import Particles from "../ui/Particles";

const ResumeSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      title: "Education",
      content: "Computer Engineering Student",
      detail: "Currently pursuing B.Tech with focus on Software Development"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      title: "Experience",
      content: "3+ Years Coding",
      detail: "Full-stack development with modern technologies"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-300" />,
      title: "Projects",
      content: "15+ Completed",
      detail: "Including eCommerce platforms, dashboards, and AI applications"
    }
  ];

  return (
    <section id="resume" className="py-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900">
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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Resume</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and achievements
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Resume image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-blue-900/30 bg-white/10 backdrop-blur-lg">
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
                    className="flex items-start space-x-4 p-4 bg-white/10 border border-blue-900/30 rounded-xl hover:shadow-blue-400/20 transition-shadow duration-300 backdrop-blur-lg"
                  >
                    <div className="mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {highlight.content}
                      </h4>
                      <p className="text-blue-100">
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
                    className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
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
                className="text-sm text-blue-100 bg-white/10 border border-blue-900/30 p-4 rounded-xl backdrop-blur-lg"
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