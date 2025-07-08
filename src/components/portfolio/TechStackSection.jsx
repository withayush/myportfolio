import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Particles from '../ui/Particles';

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "from-blue-200 via-blue-400 to-indigo-400",
      barColor: "from-blue-400 to-indigo-400",
      icon: "🎨",
      technologies: [
        { name: "React", icon: "⚛️", proficiency: 90 },
        { name: "TypeScript", icon: "📘", proficiency: 85 },
        { name: "Tailwind CSS", icon: "🎨", proficiency: 95 },
        { name: "Next.js", icon: "▲", proficiency: 80 }
      ]
    },
    {
      title: "Backend",
      color: "from-indigo-300 via-blue-500 to-indigo-700",
      barColor: "from-blue-500 to-indigo-600",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", icon: "🟢", proficiency: 85 },
        { name: "Express", icon: "🚂", proficiency: 80 },
        { name: "MongoDB", icon: "🍃", proficiency: 75 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 70 }
      ]
    },
    {
      title: "Tools & Design",
      color: "from-indigo-200 via-blue-300 to-blue-500",
      barColor: "from-blue-300 to-indigo-400",
      icon: "🛠️",
      technologies: [
        { name: "Git", icon: "🔧", proficiency: 90 },
        { name: "Figma", icon: "🎭", proficiency: 85 },
        { name: "Docker", icon: "🐳", proficiency: 65 },
        { name: "AWS", icon: "☁️", proficiency: 60 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900">
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
            Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Stack</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (  
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <Card className="p-8 bg-white/10 backdrop-blur-lg border border-blue-900/30 shadow-2xl hover:shadow-blue-400/30 transition-all duration-500 group h-full relative overflow-hidden rounded-2xl">
                {/* Header with icon */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-4xl filter brightness-125 group-hover:text-blue-400 transition">
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                {/* Technologies list */}
                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                      className="group/tech"
                    >
                      {/* Tech header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl filter brightness-125 group-hover/tech:text-blue-400 transition">
                            {tech.icon}
                          </span>
                          <span className="text-white font-semibold text-lg">{tech.name}</span>
                        </div>
                        <span className="text-blue-200 text-sm font-bold bg-blue-900/30 px-3 py-1 rounded-full">
                          {tech.proficiency}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="w-full h-3 bg-blue-900/30 rounded-full overflow-hidden border border-blue-800/30">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.barColor} rounded-full shadow-lg relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.5, ease: "easeOut" }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Category stats */}
                <div className="mt-8 pt-6 border-t border-blue-900/30">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 text-sm">
                      {category.technologies.length} Technologies
                    </span>
                    <span className="text-white font-semibold">
                      {Math.round(category.technologies.reduce((acc, tech) => acc + tech.proficiency, 0) / category.technologies.length)}% Avg
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 