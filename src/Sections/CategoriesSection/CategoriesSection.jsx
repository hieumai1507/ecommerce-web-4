import React from 'react'
import Categoriescard from '../../Components/Categoriescard/Categoriescard'
import './categoriessection.css'

const CategoriesSection = ({ heading, products }) => {
    const bgcolors = ["#f9dcd9", "#e1e1e1", "#c8dbe9", "#f9f8d9", "#d5efe3", "#f2e1d6", "#f7e9ec", "#d1e0c9", "#c3d9f7", "#e7cfcf", "#d9f9f2", "#faf0cd"];

    return (
        <div className='categories-section-class'>
            <h2 className='category-heading'>{heading}</h2>
            <div className='categories-section-cards'>
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: bgcolors[index % bgcolors.length] }}
                    >
                        <Categoriescard title={item.title} image={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default CategoriesSection;
