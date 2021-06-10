import Shop from '../../components/shop/shop'
import Head from 'next/head'
export default function ShopC({data}) {
    return (<>
     <head>
      <title>Estore</title>
    </head>
    <Shop data={data}/>
    </>)
    
}


export async function getStaticProps() {
    
    const res = await fetch("https://fakestoreapi.com/products")
    const data =await res.json()
  
    return {
        props: {data}, 
      }
    
    }