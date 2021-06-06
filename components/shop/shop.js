import { useState, useEffect } from 'react'
import Item from '../Item'
import { AiOutlineSearch } from 'react-icons/ai'



export default function Shop({ data }) {

    return (
        <>
            <section className="p-4 max-w-screen-2xl mx-auto mb-20 " id="latestitem">
                <div className="my-20">
                    <h1 className=" mb-6 text-center text-4xl sm:text-3xl md:text-7xl font-Bebas antialiased underline ">$hop</h1>
                    <div className="flex relative max-w-sm items-center m-auto">
                        <input placeholder="Search..." type="text" className="focus:outline-none border-gray-900 w-full border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-300 px-2 py-2 ring-offset-2 shadow-2xl" />
                        <button className="absolute right-0 text-3xl focus:outline-none"><AiOutlineSearch /></button>
                    </div>
                </div>
                <div className=" grid grid-cols-cards justify-items-center items-start gap-4">
                    {data.map((data) => {
                        return <Item {...data} key={data.id} />
                    })}
                </div>

            </section>
        </>
    )

}