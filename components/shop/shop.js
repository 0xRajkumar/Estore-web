import { useState } from 'react'
import Item from '../Item'
import { AiOutlineSearch } from 'react-icons/ai'



export default function Shop({ data }) {
    const [search, setsearch] = useState("")
    return (
        <>
            <section className="p-4 max-w-screen-2xl mx-auto mb-20 " id="latestitem">
                <div className="my-20">
                    <h1 className=" mb-6 text-center text-4xl sm:text-3xl md:text-7xl font-Bebas antialiased underline ">$hop</h1>
                    <div className="flex relative max-w-sm items-center m-auto">
                        <input onChange={(e) => { setsearch(e.target.value) }} placeholder="Search..." type="text" className="transition-all duration-500 outline-none border-gray-900 w-full  rounded  px-2 py-4 focus:shadow shadow-2xl" />
                        <button className="absolute right-0 text-gray-500 bg-gray-200 p-4 rounded-tr rounded-br text-2xl focus:outline-none"><AiOutlineSearch /></button>
                    </div>
                </div>
                <div className=" grid grid-cols-cards justify-items-center items-start gap-4">
                    {data.filter((data) => {
                        if (search == "") {
                            return data
                        } else {
                            return data.title.toLowerCase().includes(search.toLowerCase())
                        }
                    }).map((data) => {
                        return <Item {...data} key={data.id} />
                    })}
                </div>

            </section>
        </>
    )

}