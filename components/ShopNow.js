import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ImCross } from 'react-icons/im'
export default function ShopNow({ data, user }) {
    const router = useRouter()
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [code, setcode] = useState("")
    const [country, setcountry] = useState("")
    
    const [price, setprice] = useState(1)

    function handleinputs() {
        if (!address || !city || !code || !country) {
            toast.error('Please fill all detail carefully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            if (!user) {
                toast.error('Please Login', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {

                setaddress("")
                setcode("")
                setcode("")
                setcountry("")
                toast.success('Ordered placed successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/shop")
            }
        }
    }








    const [placeOrder, setplaceOrder] = useState(false)
    function handleplaceorder() {
        if (!user) {
            toast.error('Please Login', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {

            if (placeOrder === false) {
                setplaceOrder(true)
            } else {
                setplaceOrder(false)
            }
        }
    }
    function handleplaceorderwhenon() {
        if (placeOrder === true) {
            setplaceOrder(false)
        }
    }

    return (
        <>
            <section className="">
                <div onClick={handleplaceorderwhenon} >

                    <h1 className="text-gray-800  font-bold text-center text-6xl  tracking-wider underline my-10 font-Bebas">SHOP NOW</h1>
                    <div onClick={handleplaceorderwhenon} className="max-w-screen-xl w-5/6 mx-auto py-5">
                        <div className="flex flex-row flex-wrap">
                            <div className="w-2/6 min-w-400 m-auto">
                                <Image src={data.image} width="900" height="1000" />
                            </div>

                            <div className="w-4/6  m-auto    ">
                                <div className="md:w-5/6 m-auto ">

                                    <h1 className="font-semibold text-xl  mt-5">{data.title}</h1>
                                    <p className="text-gray-600 text-xl font-semibold my-4">${data.price}</p>
                                    <div className="flex items-center  my-10">
                                        <h1 className="font-semibold text-xl">Qty: <br /></h1>
                                        {/* <AiOutlineMinus onClick={() => { if (price >= 1 && placeOrder !== true) { setprice(price - 1) } }} className="mx-2 text-gray-600 border rounded  bg-gray-200 shadow-xl p-1 active:shadow-none cursor-pointer text-3xl  ease-in-out focus:outline-none " /> */}
                                        <input type="text" value={price} onChange={(e) => { setprice(e.target.value) }} className="mx-2 rounded py-1 w-12 shadow-inner transition-all duration-300 ease-in-out focus:outline-none focus:border-gray-900 bg-gray-100  outline-none " />
                                        {/* <AiOutlinePlus onClick={() => { setprice(price + 1) }} className="mx-2 text-gray-600 border rounded  bg-gray-200 shadow-xl p-1 active:shadow-none cursor-pointer text-3xl  ease-in-out focus:outline-none " /> */}
                                    </div>
                                    <h1 className="text-2xl font-semibold">Total Price : ${data.price * price}</h1>
                                    <button onClick={handleplaceorder} className="rounded border-2 bg-blue-400 border-blue-400 text-white px-3 py-1 text-2xl focus:outline-none my-8 hover:bg-blue-500 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transform-all duration-200 ease-linear">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`fixed  top-0 h-full w-72  z-50 bg-white  shadow-xl transition-all duration-700 ease-linear  ${placeOrder ? "-right-0" : "-right-full"}`}>
                    <div className="w-11/12 m-auto mt-4">
                        <div className="flex flex-row justify-between">

                            <h1 className="text-4xl  font-thin">Placeorder</h1>
                            <ImCross onClick={handleplaceorder} className="cursor-pointer" />
                        </div>
                        <div className="w-full flex flex-col my-px ">
                            <label htmlFor="name" className="my-2 text-gray-600">Address</label>
                            <input value={address} onChange={(e) => { setaddress(e.target.value) }} name="name" type="text" className=" py-2 border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-px ">
                            <label htmlFor="name" className="my-2 text-gray-600">City</label>
                            <input value={city} onChange={(e) => { setcity(e.target.value) }} name="name" type="text" className=" py-2 border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-px ">
                            <label htmlFor="name" className="my-2 text-gray-600">Postal Code</label>
                            <input value={code} onChange={(e) => { setcode(e.target.value) }} name="name" type="text" className=" py-2 border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-px ">
                            <label htmlFor="name" className="my-2 text-gray-600">Country</label>
                            <input value={country} onChange={(e) => { setcountry(e.target.value) }} name="name" type="text" className=" py-2 border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-px ">
                            <label htmlFor="name" className="my-2 text-gray-600 ">Price</label>
                            <h1>${data.price * price}</h1>
                            {/* <input value={data.price * price} type="text" readOnly className=" py-2   focus:outline-none   rounded px-3" /> */}
                        </div><button onClick={handleinputs} className="w-full my-1 bg-blue-400 rounded  py-2 px-6 text-white hover:bg-blue-600">Submit</button>

                    </div>

                </div>
            </section>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    )
}
