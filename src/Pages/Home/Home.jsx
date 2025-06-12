import React from 'react'
import "./home.css"
import Hero from '../../Sections/Hero/Hero'
import trendingData from '../../Data/Trending';
import Productsection from '../../Sections/Productsection/Productsection';
import newArrivals from '../../Data/Arrivals';
import shopByCategories from '../../Data/Categories'
import CategoriesSection from '../../Sections/CategoriesSection/CategoriesSection';
import OurStory from '../../Sections/OurStory/OurStory';
import WhyChooseUs from '../../Sections/WhyChooseUs/WhyChooseUs';
import Footer from '../../Sections/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Productsection heading="Deals of the day" products={trendingData}/>
      <Productsection heading="New Arrivals" products={newArrivals}/>
      <CategoriesSection heading="Shop by Categories" products={shopByCategories}/>
      <OurStory />
      <hr />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Home
