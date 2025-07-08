import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Particles from '../ui/Particles';
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Badge } from "@/components/ui/badge";
import { GlareCard } from "@/components/ui/glare-card";
import { Cover } from "@/components/ui/cover";

const AboutSection = () => {
  const stats = [
    { number: "20", label: "Years Old" },
    { number: "15+", label: "Projects Built" },
    { number: "3+", label: "Years Coding" },
    { number: "∞", label: "Ideas Brewing" }
  ];
  const skills = ["Full-Stack", "AI", "UI/UX", "Open Source", "React", "Node.js"];
  const socialLinks = [
    { href: "https://github.com/ayush", label: "GitHub", icon: "🌐" },
    { href: "https://linkedin.com/in/ayush", label: "LinkedIn", icon: "💼" },
  ];

  return (
    
    <section id="about" className="py-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#e0e7ef', '#60a5fa', '#64748b']}
          particleCount={120}
          particleSpread={10}
          speed={0.09}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <TypewriterEffect
            words={[
              { text: "Professional", className: "text-blue-400" },
              { text: "Developer", className: "text-slate-100" },
              { text: "|", className: "text-blue-300" },
              { text: "Creative", className: "text-blue-200" },
              { text: "Thinker", className: "text-slate-300" },
            ]}
            className="mb-3"
          />
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
            <Cover>About Me</Cover>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A brief look at my journey as a <span className="text-blue-400 font-semibold">developer</span> and <span className="text-blue-200 font-semibold">problem solver</span>.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-slate-800 text-blue-200 border-blue-400/30">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Left side - Personal story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 max-w-xl space-y-8"
          >
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-xl text-slate-100 leading-relaxed">
                I'm a <span className="font-semibold text-blue-400">20-year-old Computer Engineering student</span> from India, passionate about technology and its power to solve real-world challenges.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From my first <span className="text-blue-200 font-semibold">"Hello World"</span> to building digital solutions, my journey is one of <span className="text-blue-300 font-semibold">continuous learning</span>. I specialize in <span className="font-semibold text-blue-400">full-stack web development</span>, with growing expertise in <span className="text-blue-300 font-semibold">AI</span> and user-focused product design.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond coding, I follow design trends, contribute to <span className="text-blue-400 font-semibold">open-source</span>, and pursue ideas that make a difference.
              </p>
            </div>
            {/* Vision statement in GlareCard */}
            <GlareCard className="p-7 bg-gradient-to-br from-slate-800/80 to-blue-950/60 border border-blue-900/30 shadow-xl backdrop-blur-md">
              <blockquote className="text-lg italic text-slate-200 border-l-4 border-blue-400 pl-6">
                "I believe in the power of <span className='text-blue-400 font-semibold'>clean code</span>, <span className='text-blue-200 font-semibold'>intuitive design</span>, and <span className='text-blue-300 font-semibold'>innovative thinking</span> to create digital experiences that inspire and delight."
              </blockquote>
            </GlareCard>
            {/* Call to Action */}
            <div className="flex gap-4 mt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">Download Resume</a>
              <a href="#contact" className="px-6 py-3 rounded-lg bg-slate-700 text-blue-200 font-bold shadow hover:bg-slate-800 transition">Contact Me</a>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition" title={link.label}>
                  <span role="img" aria-label={link.label}>{link.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
          {/* Right side - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex flex-col items-center gap-10"
          >
            {/* Profile image/avatar with accent */}
            <div className="relative max-w-xs mx-auto">
              <div className="aspect-square bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 flex items-center justify-center shadow-2xl border-2 border-blue-400/20">
                <div className="text-7xl md:text-8xl text-blue-300 opacity-90">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/10">
                <span className="text-3xl md:text-4xl">✨</span>
              </div>
              {/* Highlight badge */}
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-semibold uppercase tracking-wider border border-blue-900/30">
                Featured
              </div>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-slate-800/80 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-900/30 backdrop-blur-md"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-200 font-medium text-sm md:text-base">
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