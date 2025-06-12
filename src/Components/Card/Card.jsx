import React from 'react'
import "./card.css"

const Card = ({image,title,price}) => {
  return (
    <div>
      <div className='card'>
        <img src={image} alt={title}/>
        <div className='card-items'>
        <h2>{title}</h2>
        <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
