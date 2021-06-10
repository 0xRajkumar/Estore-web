import Item from './Item'
import { wishContext } from '../WishContext'
import { useContext, useEffect, useState } from 'react'
export default function WishList({ data }) {
    const [show, setshow] = useState(true)
    const { wish } = useContext(wishContext)
    const wishlistdata = [...wish]

    const wishlist = data.filter(element => wishlistdata.includes(element.id));
    console.log(wishlistdata.length)
    useEffect(() => {
        if (wishlistdata.length === 0) {
            setshow(true)
        } else {
            setshow(false)
        }
    }, [wishlistdata.length])

    return (
        <>


            <section className="p-4 max-w-screen-2xl mx-auto mb-20 " id="latestitem">
                <div className="my-16">
                    <h1 className=" mb-6 text-center text-4xl sm:text-3xl md:text-7xl font-Bebas antialiased underline tracking-wide ">WIshList</h1>

                </div>
                <div className={`${show ? "block" : "hidden"}`}>
                    <h1 className="sm:text-6xl text-5xl font-black font-Bebas text-gray-300">Your wishlist is </h1>
                    <h2 className="sm:text-9xl text-7xl font-black font-Bebas text-gray-300">CURRENTLY</h2>
                    <h3 className="sm:text-9xl text-7xl font-black font-Bebas text-gray-300">EMPTY</h3>
                </div>
                <div className=" grid grid-cols-cards justify-items-center items-start gap-4">
                    {
                        wishlist.map((wishdata) => {
                            return <Item {...wishdata} key={wishdata.id} />

                        })
                    }
                </div>

            </section>
        </>


    )
}