import Image from "next/image"
import appleLogo from '../assets/apple-logo.png'
import googleLogo from '../assets/google.webp'
import loginSideImage from '../assets/login-side.png'
import Link from "next/link"
import { useRef, useEffect } from "react"


export default function Register() {

    const emailRef = useRef()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 relative sm:flex-auto">
                <Image src={loginSideImage} fill alt="art" />
            </div>


            <div className="flex-[8] flex flex-col
            pl-5 pt-8 gap-12 pr-2 sm:pr-0">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Sign up</p>
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

                <div className="flex flex-col gap-3">
                    <input
                        ref={emailRef}
                        name="email"
                        placeholder="EMAIL"
                        type="email"
                        className="w-64 h-10 rounded-sm border
                         border-zinc-300 placeholder:text-[11px] pl-2
                         outline-none"
                    />
                    <input
                        name="username"
                        placeholder="USERNAME"
                        className="w-64 h-10 rounded-sm border
                         border-zinc-300 placeholder:text-[11px] pl-2
                         outline-none"
                    />
                    <input
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
                    >SIGN UP</button>
                    <p className="text-sm">Already a Redditor? {' '}
                        <Link href='/login' className="
                        text-blue-500 cursor-pointer font-semibold">LOG IN</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
