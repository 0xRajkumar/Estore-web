import { useState } from 'react'
import Link from 'next/link'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
export default function Signup() {
    const router = useRouter()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function handleSubmit() {
        if (!email || !password) {
            toast.error('Please fill all detail', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            
            try {
                const res = await auth.signInWithEmailAndPassword(email, password)
                toast.success(`${res.user.displayName} Login successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                router.push('/')
            } catch (error) {
                toast.error('Please Login carefully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }

    }


    return (
        <>
            <section className="p-6">
                <div className="max-w-sm  m-auto rounded  bg-gray-100">

                    <div className="py-10 w-4/5 m-auto">
                        <h1 className="text-2xl">Login now</h1>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="email" className="my-2 text-gray-600">Email</label>
                            <input value={email} onChange={(e) => { setemail(e.target.value) }} name="email" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <div className="w-full flex flex-col my-5 ">
                            <label htmlFor="email" className="my-2 text-gray-600">Password</label>
                            <input value={password} onChange={(e) => { setpassword(e.target.value) }} name="password" type="text" className=" py-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3" />
                        </div>
                        <button onClick={handleSubmit} className="focus:outline-none w-full my-5 bg-blue-400 rounded  py-2 px-6 text-white hover:bg-blue-600">Submit</button>
                        <h1 className="text-center text-blue-600 hover:underline" ><Link href="/signup"><a>Don't signup, signup now</a></Link></h1>
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