
import { motion } from "framer-motion";
import { educationData } from "../Data";

const Education = () => {

  return (
    <section className="h-screen flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-8 overflow-scroll scrollbar-none">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 md:mt-8 mt-20 w-fit"
      >
        🎓 Education
      </motion.h2>

      <div className="space-y-8 md:w-[50%] w-full">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-blue-500  p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {edu.institution}
            </p>
            <span className="text-sm text-gray-500">{edu.year}</span>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              {edu.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
