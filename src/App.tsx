import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
    </div>
  );
};

export default App;
