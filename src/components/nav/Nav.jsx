import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/#");

  useEffect(() => {
    const updateActiveNav = () => {
      const hash = window.location.hash || "#";
      const active = hash === "#" ? "/#" : hash;
      setActiveNav(active);
    };

    updateActiveNav();

    window.addEventListener('hashchange', updateActiveNav);

    return () => {
      window.removeEventListener('hashchange', updateActiveNav);
    };
  }, []);
  return (
    <nav>
      <a
        href="/#"
        className={activeNav === "/#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
