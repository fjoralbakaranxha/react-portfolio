import React from 'react'
import "./portfolio.css";
import w1 from "../../assets/w1.jpeg";
import w2 from "../../assets/w2.jpeg";
import p3 from "../../assets/p3.jpg";



const data = [
  {
    id: 1,
    image: w1,
    title: "Node Passport Login",
    github:"https://github.com/fjoralbakaranxha/node_passport_login",
    demo: "https://node-passport-fjori.herokuapp.com/"
  },
  {
    id: 2,
    image: w2,
    title: "Blog Post",
    github:"https://github.com/fjoralbakaranxha/blog",
    demo: "https://blogpost-f.herokuapp.com/"
  },
  {
    id: 3,
    image: p3,
    title: "To Do List ",
    github:"https://github.com/fjoralbakaranxha/todolist-v1",
    demo: ""
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