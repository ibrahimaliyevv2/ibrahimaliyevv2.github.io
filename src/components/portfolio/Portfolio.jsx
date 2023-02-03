import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/creative.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    image: IMG1,
    tile: "This is a portfolio item title.",
    github: "https://github.com",
    demo: "https://github.com"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="project" />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio