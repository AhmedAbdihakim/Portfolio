import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <div>
      <Navbar handleClick={handleClick} openNav={openNav} />
      <Home />
    </div>
  );
};

export default App;
