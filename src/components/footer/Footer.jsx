import React from 'react'
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Fjoralba Karanxha</a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experiences'>Experiences</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/fjoralba-karanxha-9283a2224/' target="__blank"><BsLinkedin className='footer__logo'/></a>
    <a href='https://github.com/fjoralbakaranxha' target="__blank"><BsGithub className='footer__logo'/></a>
      </div>
      <small className='footer__copyright'>Copyright 2022</small>
    </footer>
  )
}

export default Footer