import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";
import TextPressure from "../../components/ui/TextPressure.jsx/TextPressure/TextPressure";
import Particles from '../ui/Particles';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    
    <GlareCard 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-none border-none"
      tiltEnable={false} // Disable tilt effect while keeping glare
    >
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary animated orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-white/8 to-gray-400/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-500/8 to-white/4 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary floating elements */}
        {/* <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/2 rounded-full blur-2xl"
          // animate={{
          //   y: [0, 0, 0],
          //   opacity: [0.1, 0.3, 0.1],
          //   scale: [1, 1.05, 1],
          // }}
          // transition={{
          //   duration: 15,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          //   delay: 2
          // }}
        /> */}
        {/* <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gray-400/3 rounded-full blur-2xl"
          // animate={{
          //   y: [0, 15, 0],
          //   opacity: [0.2, 0.4, 0.2],
          //   scale: [1, 0.95, 1],
          // }}
          // transition={{
          //   duration: 18,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          //   delay: 1
          // }}
        /> */}
        
        
        
        
        {/* Particle effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/15 rounded-full"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-1 h-1 bg-white/20 rounded-full"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gray-300/20 rounded-full"
          animate={{
            x: [0, 90, 0],
            y: [0, -30, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
       

        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <span className="text-gray-300 text-lg font-medium tracking-wider">
            HELLO, I'M
          </span>
        </motion.div>

         {/* Animated Hello! TextPressure effect */}
         <div style={{ position: 'relative', height: '300px', marginBottom: '2rem' }}>
          <TextPressure
            text="AYUSH!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          A passionate <span className="text-white font-semibold">Computer Engineering Student</span> crafting 
          digital experiences through code, design, and innovation.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Eye className="mr-2" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white cursor-pointer"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-white to-transparent" />
    </GlareCard>
  );
};

export default HeroSection;