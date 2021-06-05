import { data } from 'autoprefixer'
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
export default function Item({image,title,price}) {
    const [heart, setheart] = useState(false)
    function Heart() {
        if (heart === false) {
            return <AiOutlineHeart onClick={() => { if (heart === true) { setheart(false) } else { setheart(true) } }} className="absolute bottom-3 text-blue-600 text-xl  right-1" />
        } else {
            return <AiFillHeart onClick={() => { if (heart === true) { setheart(false) } else { setheart(true) } }} className="absolute bottom-3  text-blue-600 text-xl right-1" />
        }
    }

    return (
        <>
            <div className="group w-72 shadow-2xl hover:shadow  border border-gray-300 ">
                <div className="relative ">
                    <Image src={image} height="1100" width="1000" alt="product" />
                    <button className="py-2 px-4 outline-none  focus:outline-none rounded-full border border-gray-400  absolute left-0 right-0 m-auto -bottom-12 bg-white text-gray-900 hover:bg-gray-900  hover:text-white transition-all duration-500  group-hover:bottom-5  ">Purchase</button>
                </div>
                <div className="p-3 relative bg-white">

                    <h1 className="text-gray-600 text-sm" >{title}</h1>
                    <h1>${price}</h1>
                    <Heart />
                </div>
            </div>
        </>
    )
}