import { CiDark } from 'react-icons/ci'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { SlLogin } from 'react-icons/sl'
import Link from 'next/link'


export default function MenuModal({ menuRef }) {

    return (
        <div
            ref={menuRef}
            className="h-fit py-2 flex flex-col
        absolute top-5 right-0 w-52 bg-white
        shadow-sm border border-zinc-100 gap-2" onClick={(e) => {
                e.stopPropagation();

            }}
        >

            <div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <CiDark size={25}
                        className="w-6" />
                    <p className='text-sm'>Dark Mode</p>
                </span>
                <span></span>
            </div>
            <div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <IoHelpCircleOutline size={22}
                        className="w-6" />
                    <p className='text-sm'>Help Center</p>
                </span>
                <span></span>
            </div>
            <div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <AiOutlineInfoCircle size={20}
                        className="w-6" />
                    <p className='text-sm'>More</p>
                </span>
                <span></span>
            </div>
            <div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <IoDocumentTextOutline size={20}
                        className="w-6" />
                    <p className='text-sm'>Terms & Policies</p>
                </span>
                <span></span>
            </div>
            <div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <HiOutlineSpeakerWave size={20}
                        className="w-6" />
                    <p className='text-sm'>Advertise on Reddit</p>
                </span>
                <span></span>
            </div>
            <hr className='w-[90%] h-0 my-[-6px] p-0 self-center' />
            <Link href='/register'><div
                className="h-8
                px-2 flex items-center hover:bg-blue-500
                 hover:text-white">
                <span className="flex items-center gap-2">
                    <SlLogin size={16}
                        className="w-6" />
                    <p className='text-sm'>Log In / Sign Up</p>
                </span>
                <span></span>
            </div></Link>
        </div>
    )
}
