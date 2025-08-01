import { motion } from "framer-motion";
import { experiences } from "../Data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-screen bg-gray-100 dark:bg-gray-900 px-6 py-20 flex items-center justify-center overflow-scroll scrollbar-none"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 md:mt-0 mt-20">
          My Learning Journey
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.platform} • {exp.duration}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-200">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
