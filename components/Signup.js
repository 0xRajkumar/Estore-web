import Link from 'next/link'
import { useState } from 'react'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
export default function Signup() {
    const router = useRouter()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function handleSubmit() {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            console.log(res)
            await res.user.updateProfile({
                displayName: name
            })
            alert("signup done")
            setname("")
            setemail("")
            setpassword("")
            router.push("/")
        } catch (error) {
            alert(error.message)
        }



    }



    return (
        <>
            <section className="p-6">
                <div className="max-w-sm  m-auto rounded  bg-gray-100">
                    <div className="py-10 w-4/5 m-auto">
                        <h1 className="text-2xl">Signup now</h1>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="name" className="my-2 text-gray-600">name</label>
                            <input value={name} onChange={(e) => { setname(e.target.value) }} name="name" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="email" className="my-2 text-gray-600">email</label>
                            <input value={email} onChange={(e) => { setemail(e.target.value) }} name="email" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="password" className="my-2 text-gray-600">password</label>
                            <input value={password} onChange={(e) => { setpassword(e.target.value) }} name="password" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <button onClick={handleSubmit} className="w-full my-5 bg-blue-400 rounded  py-2 px-6 text-white hover:bg-blue-600">Submit</button>
                        <h1 className="text-center text-blue-600 hover:underline" ><Link href="/login"><a>Don't Login, signup now</a></Link></h1>
                    </div>
                </div>
            </section>
        </>
    )
}