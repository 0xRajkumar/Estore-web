import WishList from '../components/WishList'
import Head from 'next/head'
export default function wishListC({ data }) {
  return (
<>
<head>
      <title>Estore</title>
    </head>
<WishList data={data}/>
</>
  )
}

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()

    return {
        props: { data },
    }

}