
import ShopNow from '../../components/ShopNow';
import Head from 'next/head'
export default function Shopitem({ data, user }) {
    return (
        <>
            <head>
                <title>Estore</title>
            </head>
            <ShopNow data={data} user={user} />
        </>
    )
}


export async function getServerSideProps(context) {

    const id = context.query.id
    const res = await fetch("https://fakestoreapi.com/products/" + id)
    const data = await res.json()



    return {
        props: { data },
    }

}