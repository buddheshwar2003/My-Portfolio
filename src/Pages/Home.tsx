import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/img/myImage.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="w-full h-screen bg-gray-100 dark:bg-gray-900 flex flex-col px-4 md:pt-20 pb-16 overflow-scroll scrollbar-none">
      <div className="flex flex-col md:flex-row items-center justify-between max-container pt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:max-w-[50%] text-center md:text-left flex flex-col gap-3"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              Buddheshwar
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate <strong>Frontend Developer</strong> crafting
            beautiful and responsive websites and apps. I build projects using{" "}
            <span className="text-blue-500">
              React, React Native, Tailwind CSS, TypeScript
            </span>{" "}
            and more.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 mb-6">
            <div id="linkedin">
              <a
                href="https://www.linkedin.com/in/buddheshwar2003/"
                target="_blank"
              >
                <FaLinkedin className="text-blue-600 text-5xl transition-all duration-200 cursor-pointer hover:text-blue-800" />
              </a>
            </div>

            <div id="github">
              <a href="https://github.com/buddheshwar2003" target="_blank">
                <FaGithub className="text-gray-800 dark:text-white text-5xl transition-all duration-200 cursor-pointer" />
              </a>
            </div>
            <div id="instagram">
              <a
                href="https://www.instagram.com/buddheshwar._/"
                target="_blank"
              >
                <FaInstagram className="text-pink-500 text-5xl hover:text-pink-700 transition-all duration-200 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/17DsWlPinN4FpZfsjUm8BmbJtnh32pEIb/view?usp=sharing"
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600  hover:text-white rounded-xl transition-all duration-300"
              target="_blank"
            >
              Download CV
            </a>
          </div>
          
        </motion.div>

        {/* Right Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center relative pt-8 md:pt-0"
        >
          <div className="relative z-10">
            <img
              src={profileImage}
              alt="Profile illustration of Buddheshwar"
              className="w-[300px] md:w-[450px] object-cover rounded-xl relative z-10"
            />
            {/* for Glow the back of Image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[340px] md:w-[450px] h-[340px] md:h-[450px] 
                    rounded-full z-0 
                    opacity-40 bg-blue-700 blur-3xl dark:opacity-30"
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
