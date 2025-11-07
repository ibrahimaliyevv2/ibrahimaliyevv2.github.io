import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./articles.css";
import MEDIUM from "../../assets/medium.png";

const articlesData = [
  {
    id: 1,
    title: "Understanding Git and GitHub (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/git-v%C9%99-github-anlay%C4%B1%C5%9Flar%C4%B1-a4a2e4c808f0",
    date: "2022-09-28",
  },
  {
    id: 2,
    title: "Command Line Interface (CLI) commands (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/clicommands-a8baa156520e",
    date: "2022-10-01",
  },
  {
    id: 3,
    title: "What is Git Bash and how to install it? (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/setgitbash-6972b880e6be",
    date: "2022-10-02",
  },
  {
    id: 4,
    title:
      "Initial operations with GitHub account and Git Bash (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/gitbash-main-operations-42aef0d23f05",
    date: "2022-10-09",
  },
  {
    id: 5,
    title:
      "How can we add a file to our repository on GitHub? (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/upload-files-to-github-a419f9699f3c",
    date: "2022-10-29",
  },
  {
    id: 6,
    title:
      "How to add a collaborator, rename, and delete a repository on our GitHub account (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/github-repository-settings-6e8f8153315a",
    date: "2022-11-05",
  },
  {
    id: 7,
    title: "JavaScript Rest and Spread operators (in Azerbaijani)",
    link: "https://medium.com/@ibrahimaliyevv/javascript-array-massiv-metodlar%C4%B1-d5c876f20b78",
    date: "2025-10-24",
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
          {articlesData
            .slice()
            .reverse()
            .map((article) => (
              <article key={article.id} className="articles__item">
                <div className="articles__image">
                  <img src={MEDIUM} alt={article.title} />
                </div>
                <div className="articles__content">
                  <h3>{article.title}</h3>
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
