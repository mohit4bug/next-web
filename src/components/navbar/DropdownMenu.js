import { SiFeedly } from 'react-icons/si'
import { BiChevronDown } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { HiOutlineHome } from 'react-icons/hi'
import { BiTrendingUp } from 'react-icons/bi'
import { DiGhostSmall } from 'react-icons/di'
import { AiOutlineUser } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import Image from 'next/image'
import { useState } from 'react'


export default function DropdownMenu() {

    const [filterMenuOpen, setFilterMenuOpen] = useState(false)

    return (
        <div className="border w-14 md:w-24 h-8 rounded-full flex 
        items-center justify-between px-2 relative
         gap-2 text-zinc-500 cursor-pointer " onClick={() => setFilterMenuOpen((prev) => !prev)}>
            <SiFeedly />
            <BiChevronDown size={20} />
            {
                filterMenuOpen && <div onClick={(e) => e.stopPropagation()} className='absolute text-black
            h-60 border top-8 w-56 bg-white flex
             flex-col
              items-center px-2 overflow-auto gap-3 scrollbar-hide'>

                    <div className='py-2 w-full'>
                        <input className='border w-full h-8 border-zinc-300 bg-zinc-100
                    hover:border-blue-500 hover:bg-transparent 
                    outline-none font-light text-sm
                    pl-2' placeholder='Filter' />
                    </div>

                    <p className='w-full text-[12px] 
                font-semibold text-zinc-500 uppercase'>Your communities</p>

                    {/* single Item */}
                    <span className='w-full flex items-center justify-between'>
                        <div className='flex items-center w-full gap-2'>
                            <div className='h-6 w-6 rounded-full relative'>
                                <Image src={'/reddit-nav-small.png'} fill />
                            </div>
                            <p>r/Googlepixel</p>
                        </div>
                        <CiStar size={22} />
                    </span>
                    <span className='w-full flex items-center justify-between'>
                        <div className='flex items-center w-full gap-2'>
                            <div className='h-6 w-6 rounded-full relative'>
                                <Image src={'/reddit-nav-small.png'} fill />
                            </div>
                            <p>r/Googlepixel</p>
                        </div>
                        <CiStar size={22} />
                    </span>
                    <span className='w-full flex items-center justify-between'>
                        <div className='flex items-center w-full gap-2'>
                            <div className='h-6 w-6 rounded-full relative'>
                                <Image src={'/reddit-nav-small.png'} fill />
                            </div>
                            <p>r/Googlepixel</p>
                        </div>
                        <CiStar size={22} />
                    </span>

                    <p className='w-full text-[12px] 
                font-semibold text-zinc-500 uppercase'>feeds</p>
                    <span className='w-full text-sm flex items-center gap-2'>
                        <HiOutlineHome size={20} className='text-zinc-500' />
                        Home
                    </span>
                    <span className='w-full text-sm flex items-center gap-2'>
                        <BiTrendingUp size={20} className='text-zinc-500' />
                        Popular
                    </span>
                    <span className='w-full text-sm flex items-center gap-2'>
                        <DiGhostSmall size={20} className='text-zinc-500' />
                        All
                    </span>


                    <p className='w-full text-[12px] 
                font-semibold text-zinc-500 uppercase'>Other</p>
                    <span className='w-full text-sm flex items-center gap-2'>
                        <AiOutlineUser size={20} className='text-zinc-500' />
                        User settings
                    </span>
                    <span className='w-full text-sm flex items-center gap-2 mb-4'>
                        <BsPlusLg size={20} className='text-zinc-500' />
                        Create Post
                    </span>
                </div>
            }
        </div>
    )
}
