import React from 'react'
import Carousel from '../components/Carousel'
import ProductGrid from "../components/ProductGrid"
import OfferBanner from '../components/OfferBanner'
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ProductGrid></ProductGrid>
      <OfferBanner></OfferBanner>
    </div>
  )
}

export default Home
