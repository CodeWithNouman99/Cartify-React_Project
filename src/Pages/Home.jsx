import React from 'react'
import Carousel from '../components/Carousel'
import HomeProductCard from '../components/HomeProductCard'
import Categories from '../components/Categories'
import { useState } from 'react'
import PromoBanner from '../components/Banner'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
      <Carousel></Carousel>
      <Categories selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}></Categories>
      <HomeProductCard selectedCategory={selectedCategory}></HomeProductCard>
      <PromoBanner></PromoBanner>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default Home
