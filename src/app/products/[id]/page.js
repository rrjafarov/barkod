import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ProductsDetailPage from '@/components/ProductsDetailPage'
import Thumbnail from '@/components/Slider/Thumbnail'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        {/* <Thumbnail /> */}
        <ProductsDetailPage />
        <Footer />
    </div>
  )
}

export default page