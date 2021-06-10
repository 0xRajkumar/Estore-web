import { useState, useEffect } from 'react';
import Link from 'next/link';
import {auth} from '../../firebase'
import { FaShoppingCart } from 'react-icons/fa'

import { AiOutlineHeart ,AiOutlineContacts } from 'react-icons/ai'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome } from 'react-icons/fa'
import { GrNew } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { BiLogIn } from 'react-icons/bi'

import { useContext } from 'react'
import { wishContext } from '../../WishContext'







function Navbar({user}) {
  const { wish, setwish } = useContext(wishContext)
  const wishlength = wish.length

  const [sidebar, setsidebar] = useState(false)
  const [Navbar, setNavbar] = useState(false);


  function Burger_crose() {
    if (sidebar === false) {
      return <GiHamburgerMenu className="cursor-pointer " onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} />
    } else {
      return <AiOutlineClose className="cursor-pointer " onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} />
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 24) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  return (
    <>
      <nav className={`z-10 flex sticky top-0 flex-row h-20 items-center md:justify-around md:px-0 px-4  border-b border-white transition  duration-500 ease-in-out ${Navbar ? " bg-white shadow" : "bg-gray-200"}`}>
        <div className=" font-Bebas text-3xl tracking-wider">
          <h1>Estore.</h1>
        </div>

        <ul className="hidden md:flex flex-row items-center mr-4  ">
          <li className="px-4"><Link href="/"><a className=" hover:text-blue-600 transition  duration-500 ease-in-out">Home</a></Link></li>
          <li className="px-4"><Link href="/#latestitem"><a className=" hover:text-blue-600 transition  duration-500 ease-in-out">Latest</a></Link></li>
          <li className="px-4"><Link href="/shop"><a className=" hover:text-blue-600 transition  duration-500 ease-in-out">Shop</a></Link></li>
          <li className="px-4"><Link href="#contact"><a className=" hover:text-blue-600 transition  duration-500 ease-in-out">Contact</a></Link></li>
        </ul>

        <div className=" hidden md:flex flex-row  items-center">
          <div className="relative">
            <Link href="/wishlist"><a>
            <span className="absolute right-1 font-xl  rounded-full px-2 bg-blue-500 text-white z-50">{wishlength}</span>
              <AiOutlineHeart className="mx-4 text-4xl rounded-3xl p-1 border-gray-300 border cursor-pointer" />
            </a></Link>
          </div>
          {/* <MdAddShoppingCart className="mx-4 text-4xl rounded-3xl p-1 border-gray-300 border cursor-pointer" /> */}
          <Link  href={user ? "/" : "/login"}><a onClick={() => { auth.signOut() }}><button className="py-2 px-5 mx-4 text-white bg-blue-500 hover:bg-blue-600 rounded-3xl transition outline-none  duration-300 ease-in-out focus:outline-none">{user?"Logout":"Login"}</button></a></Link>
        </div>
        <div className="absolute right-4 text-3xl md:hidden">
          <Burger_crose />
        </div>
      </nav>


      <div className={` z-10 md:hidden fixed top-20  h-full w-60 shadow-md bg-white transition-all duration-300 ease-in-out ${sidebar ? "left-0" : "-left-60"}`}>
        <ul>
          <li className="h-16 px-2 py-3"><Link href="/" ><a onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><FaHome className="mx-1" /> Home</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/#latestitem" ><a onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><GrNew className="mx-1" />Latest</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/shop" ><a onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><FaShoppingCart className="mx-1" />Shop</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="#contact" ><a onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><AiOutlineContacts className="mx-1" />Contact</a></Link></li>
          <li className="h-16 px-2 py-3"><Link href="/wishlist" ><a onClick={() => { if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><MdPlaylistAddCheck className="mx-1" />WishList<span className="rounded-full bg-blue-500 text-white px-2">{wishlength}</span></a></Link></li>
          <li className="h-16 px-2 py-3"><Link  href={user ? "/" : "/login"} ><a onClick={() => {auth.signOut(); if (sidebar === false) { setsidebar(true) } else { setsidebar(false) } }} className="flex h-full rounded items-center hover:text-blue-600"><BiLogIn className="mx-1" />{user?"Logout":"Login"}</a></Link></li>
        </ul>
      </div>




    </>
  );
}

export default Navbar;
