import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ handleClick, openNav }) => {
  return (
    <header className="block">
      <nav className="hidden sm:flex w-screen justify-center items-center p-4">
        <ul className="flex space-x-4 ">
          <li>
            <a href="#home" className="hover:text-blue-100">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-100">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-100">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-100">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-100">
              Experience
            </a>
          </li>
          <li>
            <a href="" className="hover:text-blue-100">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div className="sm:hidden mb-8 flex p-4">
          <button onClick={handleClick}>
            {openNav ? (
              <IoCloseSharp className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
        {openNav ? (
          <nav className="flex sm:hidden w-screen h-screen justify-center">
            <ul className="flex flex-col  space-y-8 text-2xl ">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-100"
                  onClick={handleClick}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
