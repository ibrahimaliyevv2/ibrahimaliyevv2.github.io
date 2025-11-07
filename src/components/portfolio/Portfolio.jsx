import React from "react";
import "./portfolio.css";
import SOCIAL_FLOW from "../../assets/socialflow.gif";
import CHAT_FLOW from "../../assets/chatflow.gif";

const data = [
  {
    id: 1,
    image: SOCIAL_FLOW,
    label: "Project",
    title: "SocialFlow - Social Media Application",
    imageName: "SocialFlow application",
    description:
      "A dynamic social media platform built with Next.js, empowering users to share posts, engage with content, and follow users. Features secure authentication via Clerk, image uploads with UploadThing, and an intuitive responsive interface supporting dark and light modes. Includes user profiles, likes, comments, follows, and live notifications for seamless interaction. Powered by Prisma and PostgreSQL for efficient data handling, and styled with Tailwind CSS and Shadcn UI for a modern, accessible experience.",
    github: "https://github.com/ibrahimaliyevv2/social-flow",
    demo: "https://social-flow-olive-ten.vercel.app/",
    btn1: "GitHub",
    btn2: "Live Demo",
  },
  {
    id: 2,
    image: CHAT_FLOW,
    label: "Project",
    title: "ChatFlow - Real-time Chat Application",
    imageName: "ChatFlow application",
    description:
      "A full-featured real-time chat platform built with the MERN stack, enabling instant messaging through Socket.io. Designed with a responsive interface and smooth user experience, it supports image sharing, live online status, secure authentication, and persistent message history. Utilizes modern tools like React, Tailwind CSS, and Zustand for a clean, scalable front-end and Node.js, Express, and MongoDB for a robust backend architecture.",
    github: "https://github.com/ibrahimaliyevv2/chat-flow",
    demo: "https://chat-flow-445l.onrender.com/",
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
            imageName,
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
                    Work example ({imageName})
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
