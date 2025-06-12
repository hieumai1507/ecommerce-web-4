import React from 'react'
import "./herocontentcard.css"

const Herocontentcard = () => {
    const herocarddata=[
        {
            title:"Smart Watch",
            image:"https://pakistanstore.pk/wp-content/uploads/2020/08/Smart-Watches-450x450.png"
        },
        {
            title:"Microphones",
            image:"https://pakistanstore.pk/wp-content/uploads/2020/08/microphones-450x450.png"
        },
        {
            title:"Cameras",
            image:"https://pakistanstore.pk/wp-content/uploads/2020/08/Security-Cameras-450x450.png"
        },
        {
            title:"Ring & LED Lights",
            image:"https://pakistanstore.pk/wp-content/uploads/2020/08/Ring-Lights-450x450.png"
        },
        {
            title:"Air Mouse",
            image:"https://pakistanstore.pk/wp-content/uploads/2020/08/air-mouse-450x450.png"
        },
        {
            title:"Charger",
            image:"https://pakistanstore.pk/wp-content/uploads/2022/07/Charger-450x450.png"
        },
    ]
  return (
    <div>
      <div className='herocard-section'>
        {herocarddata.map((item, index)=>(
            <div className='herocards-items'>
                <img src={item.image}/>
                <h3>{item.title}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Herocontentcard
