import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./articles.css";
import QUIZ from "../../assets/quiz.png";
import FIORELLO from "../../assets/fiorello.png";
import ME from "../../assets/me.png";

const articlesData = [
  {
    id: 1,
    title: "Building Interactive Quiz Apps with React",
    excerpt:
      "Learn how to create engaging quiz applications using React hooks and state management.",
    image: QUIZ,
    link: "https://medium.com/@ibrahimaliyevv2/building-interactive-quiz-apps-with-react",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Mastering SCSS: Advanced Techniques for Modern Web Development",
    excerpt:
      "Explore advanced SCSS features including mixins, functions, and responsive design patterns.",
    image: FIORELLO,
    link: "https://medium.com/@ibrahimaliyevv2/mastering-scss-advanced-techniques",
    date: "2024-02-20",
  },
  {
    id: 3,
    title: "Fullstack Development Best Practices",
    excerpt:
      "A comprehensive guide to building scalable fullstack applications with modern technologies.",
    image: ME,
    link: "https://medium.com/@ibrahimaliyevv2/fullstack-development-best-practices",
    date: "2024-03-10",
  },
  {
    id: 4,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Master the art of optimizing React applications for better performance and user experience.",
    image: QUIZ,
    link: "https://medium.com/@ibrahimaliyevv2/react-performance-optimization",
    date: "2024-04-05",
  },
  {
    id: 5,
    title: "Modern CSS Grid and Flexbox",
    excerpt:
      "A deep dive into modern CSS layout techniques for creating responsive web designs.",
    image: FIORELLO,
    link: "https://medium.com/@ibrahimaliyevv2/modern-css-grid-flexbox",
    date: "2024-05-12",
  },
  {
    id: 6,
    title: "Node.js Microservices Architecture",
    excerpt:
      "Building scalable microservices with Node.js and best practices for distributed systems.",
    image: ME,
    link: "https://medium.com/@ibrahimaliyevv2/nodejs-microservices",
    date: "2024-06-18",
  },
];

const Articles = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section id="articles">
      <h5>My Writing</h5>
      <h2>Medium Articles</h2>

      <div className="container articles__container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 0.8s ease-in-out"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={true}
        >
          {articlesData.map((article) => (
            <article key={article.id} className="articles__item">
              <div className="articles__image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="articles__content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="articles__meta">
                  <span className="articles__date">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Articles;
