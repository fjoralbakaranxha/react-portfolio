import React from 'react'
import "./services.css";
import {HiCheck} from "react-icons/hi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
        <li>
        <HiCheck className='service__list-icon' />
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </li>
        <li>
        <HiCheck className='service__list-icon' />
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </li>
        <li>
        <HiCheck className='service__list-icon' />
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </li>
        <li>
        <HiCheck className='service__list-icon' />
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </li>
        </ul>
        </article>
        <article className='service'>
          
        </article>
        <article className='service'>
          
        </article>
      </div>
    </section>
  )
}

export default Services