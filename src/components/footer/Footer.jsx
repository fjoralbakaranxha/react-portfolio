import React from 'react'
import "./footer.css";
import {AiOutlineInstagram} from "react-icons/ai";
import {SiFacebook} from "react-icons/si";

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
      <a href='https://www.instagram.com/fjoralbakaranxha/' target="__blank" rel="noreferrer"><AiOutlineInstagram className='footer__icon' /></a>
    <a href='https://www.facebook.com/profile.php?id=100008449209477' target="__blank" rel="noreferrer"><SiFacebook className='footer__icon' /></a>
      </div>
      <div className='footer__copyright'>
      <small> © 2022 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
