export default function Subscribe() {
    return (
        <>
            <section className="py-20">
                <div className="bg-blue-300 max-w-screen-lg w-11/12 m-auto py-12">
                    <div className="w-11/12 m-auto sm:flex flex-row items-center  justify-evenly">

                        <div className="">
                            <h1 className="text-4xl mb-4 font-medium leading-tight">Get our Latest Offers Now</h1>
                            <p className="text-xl mb-4 font-medium text-gray-700">Subscribe news letter</p>
                        </div>
                        <div className=" my-4 width">
                            <div className="flex relative ">
                                <input type="text" className=" py-2 px-6 rounded-full outline-none w-full" placeholder="Write Your email" />
                                <button className="bg-blue-500 text-white rounded-full py-2 px-5 absolute right-0 outline-none">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}