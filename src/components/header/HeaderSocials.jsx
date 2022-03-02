import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/fjoralba-karanxha-9283a2224/' target="__blank"><BsLinkedin/></a>
    <a href='https://github.com/fjoralbakaranxha' target="__blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials