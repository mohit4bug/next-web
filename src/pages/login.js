import Image from "next/image"
import appleLogo from '../assets/apple-logo.png'
import googleLogo from '../assets/google.webp'
import loginSideImage from '../assets/login-side.png'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import toast from 'react-hot-toast'
import { redditRequest } from "../../lib/axios"
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux"
import { loginStart, loginSuccess, loginFailure } from "@/redux/userSlice"



export default function Login() {

    const dispatch = useDispatch()
    const router = useRouter()
    const usernameRef = useRef()
    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // Login request
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginStart())


        const url = '/login'
        const p = new Promise(async (resolve, reject) => {
            try {
                const res = await redditRequest.post(url, inputs)
                dispatch(loginSuccess(res.data.user))
                resolve(res?.data?.message)

            } catch (error) {
                dispatch(loginFailure({ error: error.response.data.message }))
                reject(error.response.data.message)
            }
        })
        toast.promise(p, {
            success: (message) => {

                setTimeout(() => {
                    router.push('/')
                }, 2000)
                return message
            },
            error: (error) => {

                return error;
            },
        })


    }

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 relative sm:flex-auto h-full">
                <Image src={loginSideImage} fill alt="art" />
            </div>


            <div className="flex-[8] flex flex-col
            pl-5 pt-8 gap-12 pr-2 sm:pr-0">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Log in</p>
                    <p
                        className="text-[12px] text-zinc-500"
                    >By continuing, you agree to our
                        <span className="text-blue-500"> User Agreement </span>
                        and
                        <span className="text-blue-500"> Privacy Policy </span>
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div
                        className="border w-64 flex gap-8 items-center
                        justify-start px-3
                        border-zinc-300 h-10 rounded-full text-sm font-semibold
                        text-zinc-500 cursor-pointer"
                    >
                        <Image width={24} height={24} src={googleLogo} alt="google" />
                        <p className="">Continue with Google</p></div>
                    <div
                        className="border w-64 flex gap-10 items-center
                        justify-start px-3
                        border-zinc-300 h-10 rounded-full text-sm font-semibold
                        text-zinc-500 cursor-pointer"
                    >
                        <Image width={18} height={18} src={appleLogo} alt="apple" />
                        <p className="">Continue with Apple</p></div>
                </div>

                <div className="border border-zinc-100 grid
                 place-items-center w-56 h-0 relative">
                    <p className="absolute 
                    w-fit mx-auto left-[50%] top-[50%]
                    transform -translate-x-1/2 -translate-y-1/2
                     bg-white text-[12px] p-2 
                     text-zinc-500">OR</p>
                </div>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        ref={usernameRef}
                        name="username"
                        placeholder="USERNAME"
                        className="w-64 h-10 rounded-sm border
                         border-zinc-300 placeholder:text-[11px] pl-2
                         outline-none"
                    />
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        className="w-64 h-10 rounded-sm border
                         border-zinc-300 placeholder:text-[11px] pl-2
                         outline-none" />
                    <button
                        className="w-64 h-8 text-sm
                         rounded-sm bg-blue-500  
                         text-white font-semibold"
                    >LOG IN</button>
                    <p className="text-[12px]
                     text-zinc-500 cursor-pointer">Forgot your <span className="text-blue-500">
                            {' '} username {' '}
                        </span>
                        or
                        <span className="text-blue-500 cursor-pointer">
                            {' '}   password {' '}
                        </span>?
                    </p>
                    <p className="text-sm">New to Reddit-Clone? {' '}
                        <Link href='/register' className="
                        text-blue-500 cursor-pointer font-semibold">SIGN UP</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
