import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CardSpotlight } from "@/components/ui/card-spotlight";


const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "from-white to-gray-300",
      barColor: "from-white to-gray-200",
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
      color: "from-gray-200 to-gray-400",
      barColor: "from-gray-200 to-gray-300",
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
      color: "from-gray-300 to-gray-500",
      barColor: "from-gray-300 to-gray-400",
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
    <section id="tech-stack" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <CardSpotlight className="h-full">
                <Card className="p-8 bg-gradient-to-br from-black-900/30 to-black-800/30 backdrop-blur-sm border-gray-950/30 hover:border-gray-900/50 transition-all duration-900 group h-full relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-0 rounded-lg transition-opacity duration-500`} />
                  
                  {/* Header with icon */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="text-4xl filter brightness-110">
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
                            <span className="text-2xl filter brightness-110 group-hover/tech:scale-110 transition-transform duration-300">
                              {tech.icon}
                            </span>
                            <span className="text-white font-semibold text-lg">{tech.name}</span>
                          </div>
                          <span className="text-gray-300 text-sm font-bold bg-gray-800/30 px-3 py-1 rounded-full">
                            {tech.proficiency}%
                          </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="relative">
                          <div className="w-full h-3 bg-gray-800/30 rounded-full overflow-hidden border border-gray-700/20">
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
                  <div className="mt-8 pt-6 border-t border-gray-700/20">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        {category.technologies.length} Technologies
                      </span>
                      <span className="text-white font-semibold">
                        {Math.round(category.technologies.reduce((acc, tech) => acc + tech.proficiency, 0) / category.technologies.length)}% Avg
                      </span>
                    </div>
                  </div>
                </Card>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 