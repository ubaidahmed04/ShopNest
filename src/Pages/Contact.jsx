import React from 'react'
import Head from '../Components/Header/Header2'
import LowerFooter from '../Components/Footer/LowerFooter'
import ContactSec from '../Components/Contact/ContactSec'
function Contact() {
  return (
    <div className=''>
         <Head/>
        <ContactSec/>
        
    <span className='mt-80'>
        <LowerFooter/>
    </span>
    </div>
  )
}

export default Contact