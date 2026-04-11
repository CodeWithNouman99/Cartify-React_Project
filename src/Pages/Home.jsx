import React from 'react'
import Carousel from '../components/Carousel'
// import ProductGrid from "../components/ProductGrid"
import OfferBanner from '../components/OfferBanner'
import CategoriesSection from '../components/CategoriesSection'
// import NewArrivals from '../components/NewArrivals'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <CategoriesSection></CategoriesSection>
      {/* <ProductGrid></ProductGrid> */}
      <OfferBanner></OfferBanner>
      {/* <NewArrivals></NewArrivals> */}
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default Home
