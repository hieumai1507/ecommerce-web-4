import React from 'react'
import herocontentimage from "../../assets/hero-content-girl.jpg"
import "./herocontent.css"

const Herocontent = () => {
  return (
    <div className='hero-content'>
      <div className='hero-content-image'>
        <img src={herocontentimage} alt="" />
      </div>
      <div className='hero-content-items'>
        <h2>World of music with</h2>
        <h1>Headphones</h1>
        <h2>Choose between top brands</h2>
      </div>
    </div>
  )
}

export default Herocontent
