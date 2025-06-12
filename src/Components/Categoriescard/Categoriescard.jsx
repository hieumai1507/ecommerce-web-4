import React from 'react'
import './categoriescard.css'
const Categoriescard = ({image,title}) => {
  return (
    <div>
      <div className='categories-card'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Categoriescard
