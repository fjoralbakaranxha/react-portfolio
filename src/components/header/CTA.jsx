import React from 'react'
import CV from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className='cta'>
    <a href="../../assets/CV.pdf" download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
