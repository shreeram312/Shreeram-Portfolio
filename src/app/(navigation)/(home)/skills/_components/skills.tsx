import { motion } from "framer-motion";
import Image from "next/image";

interface Tech {
  name: string;
  iconUrl: string;
}

interface SkillsProps {
  skills: Tech[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.2 },
          }}
          className="group relative"
        >
          <div className="relative w-16 h-16  rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 ">
            <Image
              src={skill.iconUrl}
              alt={skill.name}
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 rounded-xl transition-all duration-300 " />
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded-md whitespace-nowrap backdrop-blur-sm border border-purple-500/20"
          >
            {skill.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
