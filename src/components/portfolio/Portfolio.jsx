import React, { useEffect } from "react";
import "./portfolio.css";
import QUIZ from "../../assets/quiz.png";
import FIORELLO from "../../assets/fiorello.png";

const data = [
  {
    id: 1,
    image: QUIZ,
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
    image: FIORELLO,
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
  useEffect(() => {
    // Custom cursor functionality
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    cursor.className = 'cursor';
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      cursorFollower.style.left = `${mouseX}px`;
      cursorFollower.style.top = `${mouseY}px`;

      requestAnimationFrame(updateCursor);
    };
    updateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('[data-hover]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
      });
    });

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(el => observer.observe(el));

    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(cursorFollower);
    };
  }, []);

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
            return (
              <article
                key={id}
                className="portfolio__item"
                data-scroll
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
                      data-hover
                    >
                      {btn1}
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                    >
                      {btn2}
                    </a>
                  </div>
                </div>
                <div className="portfolio__item-image">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <img src={image} alt={`Screenshot of ${title} project`} />
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
