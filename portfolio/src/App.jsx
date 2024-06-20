import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  return (
    <div>
      <Navbar handleClick={handleClick} openNav={openNav} />
    </div>
  );
};

export default App;
