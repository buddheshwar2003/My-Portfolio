import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-6xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-700 dark:text-white text-6xl" />,
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 overflow-scroll scrollbar-none "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-12 md:mb-24">
          My Skills
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-10 md:gap-32">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-800 dark:text-white hover:text-indigo-500 transition duration-300 cursor-pointer hover:opacity-70"
            >
              {skill.icon}
              <span className="mt-3 text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
