import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <p className="text-lg">© 2024 Ahmed Abdihakim. All Rights Reserved.</p>
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
