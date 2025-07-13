import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface FormDataType {
  name: string;
  email: string;
  message: string;
}

const FormValidation = () => {
  const [submitData, setSubmitData] = useState<FormDataType[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("All fields are required!");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validation()) {
      setSubmitData((prev) => [...prev, formData]);
      console.log("Submitted:", submitData);
      alert("Your form has been successfully submitted!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 inline-block">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-xl">
              I’d love to hear from you! Feel free to reach out through the form
              or using the details below.
            </p>
            <div className="flex items-center space-x-4">
              <FaLocationDot className="text-indigo-600" />
              <span>
                Address:{" "}
                <span className="text-indigo-600">Potka Jamshedpur Jharkhand, IN 832107</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-600" />
              <span>
                Email:{" "}
                <a
                  href="mailto:buddheshwar2003@gmail.com"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                >
                  buddheshwar2003@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-600" />
              <span>
                Phone:{" "}
                <a
                  href="tel:+916203459703"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                >
                  +91 70041 27767
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-indigo-600" />
              <span>
                Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/buddheshwar2003/"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                >
                  @buddheshwar2003
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-indigo-600" />
              <span>
                Github:{" "}
                <a
                  href="https://github.com/buddheshwar2003"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                >
                  @buddheshwar2003
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-indigo-600" />
              <span>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/buddheshwar._/"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                >
                  @buddheshwar._
                </a>
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormValidation;
