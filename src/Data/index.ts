import portfolioImage from "../assets/pages/image.png";

interface NavForm {
  href: string;
  label: string;
}
export const navLinks: NavForm[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
];

// education details

interface EduData {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}
export const educationData: EduData[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution:
      "Maryland Institute of Technology and Management Chorinda , Jamshedpur , Jharkhand",
    year: "2021 – 2025",
    details: [
      "Pursing Graduation Degree ",
      "Final Year Project:Student Assessment & Performance Predictor",
    ],
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Shyama Prasad Intermediate College Jamshedpur , Jharkhand",
    year: "2019 – 2021",
    details: ["JAC Board | 60%", "Stream: Science (Mathematics)"],
  },
  {
    degree: "Secondary (Class X)",
    institution: "Pallimangal High School Shantipur , Jamshedpur , Jharkhand",
    year: "2015 – 2017",
    details: ["JAC Board | 83.80%"],
  },
];

// Experience Details

interface ExpData {
  title: string;
  platform: string;
  duration: string;
  description: string;
}
export const experiences: ExpData[] = [
  {
    title: "Frontend Development (Self-Learning)",
    platform: "YouTube, FreeCodeCamp, MDN",
    duration: "2023 - Present",
    description:
      "Learned HTML, CSS, JavaScript, and React by building small projects like portfolio, to-do app, and weather app. Practiced using Tailwind CSS and GitHub.",
  },
  {
    title: "React Portfolio Project",
    platform: "Personal Project",
    duration: "2024",
    description:
      "Created a modern and responsive portfolio website using React and Tailwind CSS to showcase my projects and skills. Implemented dark mode and routing.",
  },
];

interface ProjectData {
  title: string;
  description: string;
  image: string;
  languages: string[];
  github: string;
  live: string;
}

export const projects: ProjectData[] = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio with responsive design",
    image: portfolioImage,
    languages: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/your-username/palindrome-checker",
    live: "https://your-live-demo1.vercel.app",
  },
  {
    title: "Weather Forcast Dashboard",
    description: "Track your tasks with ease using CRUD functionality.",
    image: "https://via.placeholder.com/600x400?text=Task+Tracker",
    languages: ["React", "JavaScript", "CSS" , "API"],
    github: "https://github.com/your-username/task-tracker",
    live: "https://your-live-demo2.vercel.app",
  },
  {
    title: "Simple E-Commerce UI",
    description: "Get real-time weather data using OpenWeather API.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    languages: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/your-username/weather-app",
    live: "https://your-live-demo3.vercel.app",
  },
  {
    title: "Movie Browser App",
    description: "A markdown-supported blogging platform.",
    image: "https://via.placeholder.com/600x400?text=Blog+Platform",
    languages: ["React Native", "Native Wind", "TypeScript"],
    github: "https://github.com/your-username/blog-platform",
    live: "https://your-live-demo4.vercel.app",
  },
  {
    title: "Crypto Tracker UI",
    description: "Personal portfolio with animations and dark mode.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Site",
    languages: ["React Native", "Native Wind", "TypeScript"],
    github: "https://github.com/your-username/portfolio-site",
    live: "https://your-live-demo5.vercel.app",
  },
  {
    title: "Fitness Tracker UI",
    description: "Interactive Fitness Tracker.",
    image: "https://via.placeholder.com/600x400?text=Quiz+App",
    languages: ["React Native", "Native Wind", "TypeScript"],
    github: "https://github.com/your-username/quiz-app",
    live: "https://your-live-demo6.vercel.app",
  },
];


