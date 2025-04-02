import CategoryMenu from '@/components/CategoryMenu'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HomePageStaticInfo from '@/components/HomePageStaticInfo'
import OneClickPayment from '@/components/OneClickPayment'
// import ScroolToTop from '@/components/ScroolToTop'
import HeroSlider from "@/components/Slider/HeroSlider"
import HomePageBrands from '@/components/Slider/HomePageBrands'
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
      <HomePageBrands />
      <Footer />
      {/* <OneClickPayment /> */}
      {/* <CategoryMenu /> */}
    </div>
  )
}

export default HomePage