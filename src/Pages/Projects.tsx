import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import portfolioImage from "../assets/pages/image.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio with responsive design",
    image: portfolioImage,
    languages: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/your-username/palindrome-checker",
    live: "https://your-live-demo1.vercel.app",
  },
  {
    title: "Task Tracker",
    description: "Track your tasks with ease using CRUD functionality.",
    image: "https://via.placeholder.com/600x400?text=Task+Tracker",
    languages: ["React", "JavaScript", "CSS"],
    github: "https://github.com/your-username/task-tracker",
    live: "https://your-live-demo2.vercel.app",
  },
  {
    title: "Weather App",
    description: "Get real-time weather data using OpenWeather API.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    languages: ["React", "API", "Tailwind"],
    github: "https://github.com/your-username/weather-app",
    live: "https://your-live-demo3.vercel.app",
  },
  {
    title: "Blog Platform",
    description: "A markdown-supported blogging platform.",
    image: "https://via.placeholder.com/600x400?text=Blog+Platform",
    languages: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/your-username/blog-platform",
    live: "https://your-live-demo4.vercel.app",
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio with animations and dark mode.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Site",
    languages: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio-site",
    live: "https://your-live-demo5.vercel.app",
  },
  {
    title: "Quiz App",
    description: "Interactive quiz app with real-time score tracking.",
    image: "https://via.placeholder.com/600x400?text=Quiz+App",
    languages: ["React", "JavaScript", "Bootstrap"],
    github: "https://github.com/your-username/quiz-app",
    live: "https://your-live-demo6.vercel.app",
  },
];

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
