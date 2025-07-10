import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from "../Data";

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My Projects
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
                >
                  View Live Demo
                </a>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-center ">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-around items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-8 py-2 border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white rounded-xl transition-all duration-300"
                >
                  <FiExternalLink /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
