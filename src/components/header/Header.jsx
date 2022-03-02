import React from 'react'
import "./header.css";
import CTA from "./CTA"
import fjori from "../../assets/fjori.jpeg";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello, I am</h5>
      <h2>Fjoralba Karanxha</h2>
      <h5 className='text-light'>Junior Software Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className='me__image'>
      <img src={fjori} alt='' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header