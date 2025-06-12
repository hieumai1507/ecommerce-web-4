import React from 'react'
import "./productsection.css"
import Card from '../../Components/Card/Card'

const Productsection = ({heading,products}) => {
  return (
    <div>
      <div className='product-section'>
        <h2>{heading}</h2>
        <div className='product-section-card'>
            {products.map((item,index)=>(
                <Card key={index} title={item.title} image={item.image} price={item.price}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Productsection
