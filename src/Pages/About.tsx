// components/About.jsx
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUser } from "react-icons/fa";
import profileImage from "../assets/img/myImage.png"; // Replace with your image path
import { TbDownload } from "react-icons/tb";
import FormValidatition from "../Components/FormValidatition";
const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20 overflow-scroll scrollbar-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading and Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-2xl w-64 h-64 object-cover mx-auto"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Buddheshwar</span>, a passionate{" "}
              <span className="font-semibold">frontend developer</span> who loves crafting elegant and user-focused web applications using{" "}
              <span className="text-indigo-600 dark:text-indigo-400">React, React Native, Tailwind, and JavaScript</span>.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <FaCode className="text-indigo-500 mt-1" />
                <span><strong>Projects:</strong> Currently working on a Weather app with TypeScript.</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <FaLaptopCode className="text-indigo-500 mt-1" />
                <span><strong>Goal:</strong> Join a product team and contribute meaningful solutions.</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <FaUser className="text-indigo-500 mt-1" />
                <span><strong>Fun Fact:</strong> I enjoy exploring tech trends, reading about AI, and building side projects.</span>
              </li>
            </ul>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/17DsWlPinN4FpZfsjUm8BmbJtnh32pEIb/view?usp=sharing"
              className="inline-flex items-center mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
              target="_blank"
            >
              <TbDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <FormValidatition />
      </motion.div>
    </section>
  );
};

export default About;
