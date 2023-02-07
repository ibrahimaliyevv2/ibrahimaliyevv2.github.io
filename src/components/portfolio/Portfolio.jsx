import React from 'react'
import './portfolio.css'
import QUIZ from '../../assets/quiz.png'
import FIORELLO from '../../assets/fiorello.png'
import COFEE_BACK from '../../assets/cofee_back.png'
import SOCIAL_BACK from '../../assets/social_back.png'
import SOCIAL_FRONT from '../../assets/social_front.png'
import TICTACTOE from '../../assets/tictactoe.png'
import SAMPLES from '../../assets/samples.png'
import API from '../../assets/api.png'
import COLA from '../../assets/cola.png'
import MAXIM from '../../assets/maxim.png'
import DAY from '../../assets/day.png'
import PUSTOK_BACK from '../../assets/pustok_back.png'


const data = [
  {
    id: 1,
    image: QUIZ,
    title: "Quiz using React JS",
    github: "https://github.com/ibrahimaliyevv2/quiz",
    demo: "https://ibrahimaliyevv2.github.io/quiz/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 2,
    image: FIORELLO,
    title: "Fiorello template (used SCSS)",
    github: "https://github.com/ibrahimaliyevv2/fiorello_frontend",
    demo: "https://ibrahimaliyevv2.github.io/fiorello_frontend/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 3,
    image: COFEE_BACK,
    title: "Cofeeshop server-side .NET MVC",
    github: "https://github.com/ibrahimaliyevv2/cofee_project",
    demo: "https://github.com/ibrahimaliyevv2/cofee_project",
    btn1:"GitHub",
    btn2:"No Demo"
  },
  {
    id: 4,
    image: SOCIAL_BACK,
    title: "Social media server-side .NET API",
    github: "https://github.com/ibrahimaliyevv2/social_media_back",
    demo: "https://github.com/ibrahimaliyevv2/social_media_back",
    btn1:"GitHub",
    btn2:"No Demo"
  },
  {
    id: 5,
    image: SOCIAL_FRONT,
    title: "Social media client-side React",
    github: "https://github.com/ibrahimaliyevv2/social_media",
    demo: "https://ibrahimaliyevv2.github.io/social_media/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 6,
    image: TICTACTOE,
    title: "Tic Tac Toe Game (Minimax AI)",
    github: "https://github.com/ibrahimaliyevv2/tictactoe_minimax_js",
    demo: "https://ibrahimaliyevv2.github.io/tictactoe_minimax_js/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 7,
    image: SAMPLES,
    title: "Frontend mini projects",
    github: "https://ibrahimaliyevv2.github.io/samples/",
    demo:"https://ibrahimaliyevv2.github.io/samples/",
    btn1:"Go to samples",
    btn2:"No Demo"
  },
  {
    id: 8,
    image: API,
    title: "Fetching API, load data in cards",
    github: "https://github.com/ibrahimaliyevv2/wishlist_try",
    demo: "https://ibrahimaliyevv2.github.io/wishlist_try",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 9,
    image: COLA,
    title: "Coca-cola sample",
    github: "https://github.com/ibrahimaliyevv2/coca_cola",
    demo: "https://ibrahimaliyevv2.github.io/coca_cola/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 10,
    image: MAXIM,
    title: "Maxim template client-side",
    github: "https://github.com/ibrahimaliyevv2/maxim_frontend",
    demo: "https://ibrahimaliyevv2.github.io/maxim_frontend/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 11,
    image: DAY,
    title: "Day template client-side",
    github: "https://github.com/ibrahimaliyevv2/day_frontend",
    demo: "https://ibrahimaliyevv2.github.io/day_frontend/",
    btn1:"GitHub",
    btn2:"Live Demo"
  },
  {
    id: 12,
    image: PUSTOK_BACK,
    title: "Pustok server-side .NET MVC",
    github: "https://github.com/ibrahimaliyevv2/pustok_back",
    demo: "https://github.com/ibrahimaliyevv2/pustok_back",
    btn1:"GitHub",
    btn2:"No Demo"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, btn1, btn2 }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="project" />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">{btn1}</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">{btn2}</a>
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