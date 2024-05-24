import React from 'react'
import Head from '../Components/Header/Header2'
import UpperFooter from '../Components/Footer/UpperFooter'
import LowerFooter from '../Components/Footer/LowerFooter'
import AboutSec from '../Components/AboutSection/AboutSec'
function About() {
  return (
    <div>
        <Head/>
        <AboutSec/>
        {/* <UpperFooter/> */}
        <LowerFooter/>
    </div>
  )
}

export default About