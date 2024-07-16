import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <p className="text-lg">© 2024 Ahmed Abdihakim. All Rights Reserved.</p>

        <a href="https://github.com/AhmedAbdihakim" className="text-2xl">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-abdihakim02/"
          className="text-2xl"
        >
          <FaLinkedin />
        </a>

        <div>
          <a href="#" className="px-3 py-2">
            Home
          </a>
          <a href="#about" className="px-3 py-2">
            About
          </a>
          <a href="#projects" className="px-3 py-2">
            Projects
          </a>
          <a href="#contact" className="px-3 py-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
