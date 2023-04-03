import Image from "next/image"
import { RxImage } from 'react-icons/rx'
import { IoIosLink } from 'react-icons/io'

export default function Share() {
    return (
        <div className="h-14 bg-white shadow-sm border-zinc-300 flex
        items-center px-2 gap-3 rounded-sm">
            <div className="relative min-h-[32px] min-w-[32px] rounded-full">
                <Image src={'/reddit-nav-small.png'} fill className="object-cover" alt="profile" />
            </div>


            <div className="flex border border-zinc-300
            items-center px-2 gap-2 h-10 w-full
            hover:border-blue-600 overflow-hidden rounded-md bg-zinc-100">
                <input
                    className="border-none outline-none 
                    h-full w-full font-light text-[15px] 
                    bg-transparent"
                    placeholder="Create Post"
                />
            </div>
            <RxImage size={25} className="text-zinc-500
            hover:bg-zinc-300 w-8 h-8 p-1 rounded-sm cursor-pointer" />
            <IoIosLink size={25} className="text-zinc-500
            hover:bg-zinc-300 w-8 h-8 p-1 rounded-sm cursor-pointer" />

        </div>
    )
}
