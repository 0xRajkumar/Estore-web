import Home from '../components/home/Home'

export default function HomeC({data}) {
  return (
    <>
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



