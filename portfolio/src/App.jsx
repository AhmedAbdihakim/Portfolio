import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

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
    </div>
  );
};

export default App;
