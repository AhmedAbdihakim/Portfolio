import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <div>
      <Navbar handleClick={handleClick} openNav={openNav} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
