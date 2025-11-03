import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/icherisheher.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h5 className="intro">Hello, I’m</h5>
          <h1 className="name">Ibrahim Aliyev</h1>
          <h5 className="role">Frontend Developer</h5>
          <p className="tagline">
            Passionate about crafting clean, accessible, and interactive web
            experiences that make an impact.
          </p>
          <CTA />

          <div className="header__socials">
            <a
              href="https://github.com/ibrahimaliyevv2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ibrahimaliyevv2"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="header__me">
          <div className="header__me-image">
            <img src={ME} alt="Ibrahim Aliyev" />
          </div>
          <div className="header__me-glow"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
