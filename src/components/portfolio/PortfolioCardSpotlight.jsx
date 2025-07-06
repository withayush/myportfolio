import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";

export const PortfolioCardSpotlight = ({ 
  title, 
  description, 
  icon, 
  className = "",
  children 
}) => {
  return (
    <CardSpotlight className={`h-80 w-full max-w-sm ${className}`}>
      <div className="relative z-20 h-full flex flex-col">
        {icon && (
          <div className="text-4xl mb-4">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed flex-1">
          {description}
        </p>
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </CardSpotlight>
  );
};

// Example usage components
export const SkillCard = ({ skill, proficiency, icon }) => {
  return (
    <PortfolioCardSpotlight
      title={skill}
      description={`${proficiency}% proficiency level`}
      icon={icon}
    >
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </PortfolioCardSpotlight>
  );
};

export const ProjectCard = ({ title, description, technologies, icon }) => {
  return (
    <PortfolioCardSpotlight
      title={title}
      description={description}
      icon={icon}
    >
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-700 text-white text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </PortfolioCardSpotlight>
  );
};

export const ContactCard = ({ title, value, icon, link }) => {
  return (
    <PortfolioCardSpotlight
      title={title}
      description={value}
      icon={icon}
    >
      {link && (
        <a
          href={link}
          className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Contact
        </a>
      )}
    </PortfolioCardSpotlight>
  );
}; 