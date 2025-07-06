import { motion } from "framer-motion";

import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden bg-slate-50">
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </motion.div>
      
    </div>
  );
};

export default Index; 