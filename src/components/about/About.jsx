import React from "react";
import "./about.css";
import ME from "../../assets/icherisheher.jpg";
import { FaUniversity } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Ibrahim Aliyev" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Education</h5>
              <small>5+ Years</small>
            </article>
            <article className="about__card">
              <RiArticleLine className="about__icon" />
              <h5>Articles</h5>
              <small>5+ Done</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Currently, Azerbaijan French University & Straousburg University Master's degree student in Data Science & AI who previously studied at Baku State University in profession named Computer Science. Aspiring to be Fullstack developer. I am eager to learn and can adapt to different environments. Writing articles on Medium platform related to Fullstack Development including Git & GitHub. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
