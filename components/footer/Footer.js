import { AiFillFacebook, AiOutlineWhatsApp, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'


export default function Footer() {
    return (

        <footer className="text-gray-600 ">

            <div className="border-t border-gray-200">
                <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                        <div className=" sm:w-64 w-40 sm:mr-4 mr-2">
                            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600 ">Contact us :</label>
                            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-blueName-200 focus:border-blue-500 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:outline-none" />
                        </div>
                        <button className="inline-flex  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full">Button</button>
                        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">We will contact you as soon as possible</p>

                    </div>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <a className="text-gray-500 cursor-pointer hover:text-blue-600 border rounded-full p-1 border-gray-400 hover:border-blue-800">
                            <AiFillFacebook className="text-xl" />
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-blue-600 border rounded-full p-1 border-gray-400 hover:border-blue-800">
                            <AiOutlineWhatsApp className="text-xl" />
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-blue-600 border rounded-full p-1 border-gray-400 hover:border-blue-800">
                            <AiFillInstagram className="text-xl" />
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-blue-600 border rounded-full p-1 border-gray-400 hover:border-blue-800">
                            <AiFillLinkedin className="text-xl" />
                        </a>
                    </span>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className=" py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Estore —<a href="https://twitter.com/" className="text-gray-600 ml-1" target="_blank" >@Estore</a>
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">We are beyond Imagination</span>
                </div>
            </div>
        </footer>

    )
}