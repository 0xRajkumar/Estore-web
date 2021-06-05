import Link from 'next/link'
export default function Signup() {
    return (
        <>
            <section className="p-6">
                <div className="max-w-sm  m-auto rounded  bg-gray-100">
                   
                    <div className="py-10 w-4/5 m-auto">
                        <h1 className="text-2xl">Login now</h1>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="email" className="my-2 text-gray-600">name</label>
                            <input name="email" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3"/>
                        </div>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="email" className="my-2 text-gray-600">password</label>
                            <input name="password" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3"/>
                        </div>
                        <button className="w-full my-5 bg-blue-400 rounded  py-2 px-6 text-white hover:bg-blue-600">Submit</button>
                        <h1 className="text-center text-blue-600 hover:underline" ><Link href="/signup"><a>Don't signup, signup now</a></Link></h1>
                    </div>
                </div>
            </section>
        </>
    )
}