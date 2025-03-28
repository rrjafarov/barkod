import Header from '@/components/Header/Header'
import HomePageStaticInfo from '@/components/HomePageStaticInfo'
import HeroSlider from "@/components/Slider/HeroSlider"
import HomePageCountProduct from '@/components/Slider/HomePageCountProduct'
import HomePageProductsCard from '@/components/Slider/HomePageProductsCard'
import HomePageSecondaryProducts from '@/components/Slider/HomePageSecondaryProducts'
import ProductsReview from "@/components/Slider/ProductsReview"
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeroSlider />
      <HomePageStaticInfo />
      <HomePageProductsCard />
      <HomePageCountProduct />
      <HomePageSecondaryProducts />
      <ProductsReview />



    </div>
  )
}

export default HomePage