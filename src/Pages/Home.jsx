import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import Brand from '../Components/Brand/Brand'
import Categories from '../Components/Categories/Categories'
import Sale from '../Components/Sale/Sale'
import YoungCategory from '../Components/Categories/YoungCategory'
import UpperFooter from '../Components/Footer/UpperFooter'
import LowerFooter from '../Components/Footer/LowerFooter'
import CardProduct from '../Components/Categories/Card'
import Head from '../Components/Header/Header2'
// import CardProduct from '../Components/Categories/CardProduct'

function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Head/>
        <HeroSection/>
         <Brand/>
        <Sale/>
        <CardProduct/>
        <YoungCategory/>
        <UpperFooter/>
        <LowerFooter/> 
        
    </div>
  )
}

export default Home