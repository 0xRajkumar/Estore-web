import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar/Navbar'
import LandingPage from '../components/LandingPage'

import LatestItems from '../components/LatestItems'
import Subscribe from '../components/Subscribe'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

export default function Home({data}) {

  return (
    <>
   <Navbar/>
   <LandingPage/>
   <LatestItems data={data}/>
   <Subscribe/>
   <WhyUs/>
   <Footer/>


    </>
  )
}

export async function getStaticProps() {
    
  const res = await fetch("https://fakestoreapi.com/products")
  const data =await res.json()

  return {
      props: {data}, 
    }
  
  }



