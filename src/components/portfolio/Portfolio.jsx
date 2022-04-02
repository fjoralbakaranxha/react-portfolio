import React from 'react'
import "./portfolio.css";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import w1 from "../../assets/w1.jpeg";
import w2 from "../../assets/w2.jpeg";


const data = [
  {
    id: 1,
    image: w1,
    title: "Title 1",
    github:"https://github.com/",
    demo: "https://dribbble.com/"
  },
  {
    id: 2,
    image: w2,
    title: "Title 2",
    github:"https://github.com/",
    demo: "https://dribbble.com/"
  },
  {
    id: 3,
    image: p3,
    title: "Title 3",
    github:"https://github.com/",
    demo: "https://dribbble.com/"
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portofolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
             return (
              <article key={id} className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portofolio__item-cta'>
          <a href={github} className='btn' target="__blank">Github</a>
          <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
          </div>
        </article>
             )
          })
        }
      </div> 
    </section>
  )
}

export default Portofolio
