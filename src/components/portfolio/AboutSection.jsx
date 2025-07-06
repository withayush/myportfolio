import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { number: "20", label: "Years Old" },
    { number: "15+", label: "Projects Built" },
    { number: "3+", label: "Years Coding" },
    { number: "∞", label: "Ideas Brewing" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.gray.100),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a <span className="font-semibold text-black">20-year-old Computer Engineering student</span> from India, 
                driven by an insatiable curiosity for technology and its potential to solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey began with a simple "Hello World," but has evolved into crafting comprehensive digital solutions. 
                I specialize in <span className="font-semibold text-gray-800">full-stack web development</span>, with a keen interest in 
                AI integration and product design.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
                or brainstorming the next big idea that could make a difference.
              </p>
            </div>

            {/* Vision statement */}
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-none shadow-xl">
              <blockquote className="text-lg italic text-gray-700 border-l-4 border-black pl-6">
                "I believe in the power of clean code, intuitive design, and innovative thinking to create 
                digital experiences that not only function flawlessly but also inspire and delight users."
              </blockquote>
            </Card>
          </motion.div>

          {/* Right side - Stats and image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-6xl text-gray-400 opacity-60">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-2xl">✨</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 