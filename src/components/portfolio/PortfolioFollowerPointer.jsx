import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion } from "framer-motion";

export const PortfolioFollowerPointer = ({ 
  title, 
  description, 
  icon, 
  className = "",
  children,
  pointerTitle = "Ayush Sharma"
}) => {
  return (
    <FollowerPointerCard
      title={pointerTitle}
      className={className}
    >
      <motion.div
        className="group relative h-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition duration-300 hover:shadow-2xl hover:border-gray-600"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {icon && (
          <div className="absolute top-4 right-4 text-3xl z-10">
            {icon}
          </div>
        )}
        
        <div className="p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
            {description}
          </p>
          
          {children && (
            <div className="mt-auto">
              {children}
            </div>
          )}
        </div>
      </motion.div>
    </FollowerPointerCard>
  );
};

// Example usage components
export const SkillFollowerCard = ({ skill, proficiency, icon }) => {
  return (
    <PortfolioFollowerPointer
      title={skill}
      description={`${proficiency}% proficiency level`}
      icon={icon}
      pointerTitle={`${skill} - ${proficiency}%`}
    >
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </PortfolioFollowerPointer>
  );
};

export const ProjectFollowerCard = ({ title, description, technologies, icon, link }) => {
  return (
    <PortfolioFollowerPointer
      title={title}
      description={description}
      icon={icon}
      pointerTitle={title}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-white text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            View Project
          </a>
        )}
      </div>
    </PortfolioFollowerPointer>
  );
};

export const ContactFollowerCard = ({ title, value, icon, link }) => {
  return (
    <PortfolioFollowerPointer
      title={title}
      description={value}
      icon={icon}
      pointerTitle={title}
    >
      {link && (
        <a
          href={link}
          className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Contact
        </a>
      )}
    </PortfolioFollowerPointer>
  );
}; 