import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <>
            <section className="bg-gray-200">
                <div className="max-w-screen-lg w-11/12  m-auto sm:flex  py-20 sm:py-4">
                    <div className="w-9/12 sm:w-1/2   pl-3 md:pl-0  m-auto ">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3  font-Bebas">We are beyond emagination.</h1>
                        <p className=" text-xs sm:text-sm mb-6 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. ccusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime blanditiis laudantium  </p>
                        <Link href="/shop"><a>

                            <button className="py-2 focus:outline-none px-6 font-lg  rounded-full text-white bg-blue-500 hover:bg-black transition  duration-300 ease-in-out outline-none">Shop</button>
                        </a></Link>
                    </div>
                    <div className="sm:w-1/2 hidden sm:block ">
                        <Image src="/hero.png" alt="hero-image" width="400" height="560" />
                    </div>
                </div>
            </section>
        </>
    )
}