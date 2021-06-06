import Shop from '../components/shop/shop'

export default function ShopC({data}) {
    return (<>
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