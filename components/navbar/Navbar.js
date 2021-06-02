import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FaShoppingCart } from 'react-icons/fa'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiOutlineHeart, AiFillContacts } from 'react-icons/ai'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaBloggerB } from 'react-icons/fa'
import { GrNew } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'







function Navbar() {
  const [sidebar, setsidebar] = useState(false)

  function Burger_crose() {
    if (sidebar === false) {
      return <GiHamburgerMenu className="cursor-pointer " onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} />
    } else {
      return <AiOutlineClose className="cursor-pointer " onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} />
    }
  }

  return (
    <>
      <nav className="flex flex-row h-20 items-center md:justify-around md:px-0 px-4">
        <div className=" font-Bebas text-3xl tracking-wider">
          <h1>Estore.</h1>
        </div>

        <ul className="hidden md:flex flex-row items-center mr-4  ">
          <li><Link href="/"><a className="p-4 hover:text-red-600 transition  duration-500 ease-in-out">Home</a></Link></li>
          <li><Link href="/"><a className="p-4 hover:text-red-600 transition  duration-500 ease-in-out">Latest</a></Link></li>
          <li><Link href="/"><a className="p-4 hover:text-red-600 transition  duration-500 ease-in-out">Shop</a></Link></li>
          <li><Link href="/"><a className="p-4 hover:text-red-600 transition  duration-500 ease-in-out">Blogs</a></Link></li>
          <li><Link href="/"><a className="p-4 hover:text-red-600 transition  duration-500 ease-in-out">Contact</a></Link></li>
        </ul>

        <div className=" hidden md:flex flex-row  items-center">
          <AiOutlineHeart className="mx-4 text-4xl rounded-3xl p-1 border-gray-300 border cursor-pointer" />
          <MdAddShoppingCart className="mx-4 text-4xl rounded-3xl p-1 border-gray-300 border cursor-pointer" />
          <Link href="/"><a><button className="py-2 px-5 mx-4 text-white bg-blue-500 hover:bg-blue-600 rounded-3xl transition  duration-300 ease-in-out">Login</button></a></Link>
        </div>
        <div className="absolute right-4 text-3xl md:hidden">
          <Burger_crose />
        </div>
      </nav>


      <div className={`block md:hidden fixed top-0  h-full w-60 shadow-md bg-white transition-all duration-300 ease-in-out ${sidebar ? "left-0" : "-left-60"}`}>
        <ul>
          <li className="h-16 px-2 py-3"><Link href="/"><a className="flex h-full rounded items-center hover:text-red-600"><FaHome className="mx-1" /> Home</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/"><a className="flex h-full rounded items-center hover:text-red-600"><GrNew className="mx-1" />Latest</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/"><a className="flex h-full rounded items-center hover:text-red-600"><FaShoppingCart className="mx-1" />Shop</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/"><a className="flex h-full rounded items-center hover:text-red-600"><FaBloggerB className="mx-1" />Blog</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/"><a className="flex h-full rounded items-center hover:text-red-600"><AiFillContacts className="mx-1" />Contact</a></Link></li>
        </ul>
      </div>





      <section className="h-24 bg-indigo-700">

      </section>
    </>
  );
}

export default Navbar;
