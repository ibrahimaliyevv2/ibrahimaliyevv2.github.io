import React from "react";
import "./portfolio.css";
import SOCIAL_FLOW from "../../assets/socialflow.gif";
import CHAT_FLOW from "../../assets/chatflow.gif";

const data = [
  {
    id: 1,
    image: SOCIAL_FLOW,
    label: "Featured Project",
    title: "Quiz using React JS",
    description:
      "An interactive quiz application built with React JS, featuring multiple choice questions and score tracking. This project demonstrates state management, component lifecycle, and user interaction patterns in modern web development.",
    github: "https://github.com/ibrahimaliyevv2/quiz",
    demo: "https://ibrahimaliyevv2.github.io/quiz/",
    btn1: "GitHub",
    btn2: "Live Demo",
  },
  {
    id: 2,
    image: CHAT_FLOW,
    label: "Featured Project",
    title: "Fiorello template (used SCSS)",
    description:
      "A responsive website template created using SCSS for styling, showcasing modern design principles. Features advanced CSS techniques including mixins, variables, and nested selectors for maintainable and scalable stylesheets.",
    github: "https://github.com/ibrahimaliyevv2/fiorello_frontend",
    demo: "https://ibrahimaliyevv2.github.io/fiorello_frontend/",
    btn1: "GitHub",
    btn2: "Live Demo",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container">
        {data.map(
          ({
            id,
            image,
            label,
            title,
            description,
            github,
            demo,
            btn1,
            btn2,
          }) => {
            const isEven = id % 2 === 0;
            return (
              <article
                key={id}
                className={`portfolio__item ${
                  isEven ? "portfolio__item--reverse" : ""
                }`}
              >
                <div className="portfolio__item-content">
                  <span className="portfolio__item-label">{label}</span>
                  <h3 className="portfolio__item-title">{title}</h3>
                  <div className="portfolio__item-description">
                    <p>{description}</p>
                  </div>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn1}
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn2}
                    </a>
                  </div>
                </div>
                <div className="portfolio__item-image">
                  <div className="portfolio__image-glow"></div>
                  <img src={image} alt={`Screenshot of ${title} project`} />
                  <div className="portfolio__image-caption">
                    Work ex. {title.toLowerCase().replace(/\s+/g, "")} in (46px)
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
