const Navbar = () => {
  return (
    <header className="block">
      <nav className="flex w-screen justify-center items-center p-4">
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
    </header>
  );
};

export default Navbar;
