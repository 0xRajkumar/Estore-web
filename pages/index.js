import Home from '../components/home/Home'
import Head from 'next/head'

export default function HomeC({data}) {

  return (
    <>
    <head>
      <title>Estore</title>
    </head>
    <Home data={data} />
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



