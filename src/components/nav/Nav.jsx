import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import { GiSkills } from "react-icons/gi";
import { PiArticleMediumFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/#");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveNav = () => {
      const hash = window.location.hash || "#";
      const active = hash === "#" ? "/#" : hash;
      setActiveNav(active);
    };

    updateActiveNav();

    window.addEventListener("hashchange", updateActiveNav);

    return () => {
      window.removeEventListener("hashchange", updateActiveNav);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={isMobileMenuOpen ? "nav-mobile-open" : ""}>
        <a
          href="/#"
          className={activeNav === "/#" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <AiOutlineHome />
          <span className="nav-text">Home</span>
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <AiOutlineUser />
          <span className="nav-text">About</span>
        </a>
        <a
          href="#experience"
          className={activeNav === "#experience" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <BiBook />
          <span className="nav-text">Experience</span>
        </a>
        <a
          href="#portfolio"
          className={activeNav === "#portfolio" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <RiServiceLine />
          <span className="nav-text">Portfolio</span>
        </a>
        <a
          href="#skills"
          className={activeNav === "#skills" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <GiSkills />
          <span className="nav-text">Skills</span>
        </a>
        <a
          href="#articles"
          className={activeNav === "#articles" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <PiArticleMediumFill />
          <span className="nav-text">Articles</span>
        </a>
        <a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={closeMobileMenu}
        >
          <BiMessageSquareDetail />
          <span className="nav-text">Contact</span>
        </a>
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <HiMenu />
      </button>
    </>
  );
};

export default Nav;
