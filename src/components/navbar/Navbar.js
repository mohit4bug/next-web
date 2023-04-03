import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { IoSearchOutline } from 'react-icons/io5'
import { RxCrossCircled } from 'react-icons/rx'
import { BiUser } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import MenuModal from "./MenuModal"
import DropdownMenu from "./DropdownMenu"
import Link from "next/link"

export default function Navbar() {


    const [search, setSearch] = useState('')
    const searchRef = useRef()
    const [menuOpen, setMenuOpen] = useState(false)

    const menuRef = useRef(null)

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])


    return (
        <nav className="border border-zinc-300 h-12
        flex items-center justify-between px-4 sticky top-0 
        bg-white z-10">

            <div className="relative h-full w-24 hidden md:block">
                <Image fill src={'/reddit-nav-logo.png'}
                    className="object-contain" alt="logo" />
            </div>
            <div className="relative h-full w-[2.2rem] block md:hidden">
                <Image fill src={'/reddit-nav-small.png'}
                    className="object-contain" alt="logo" />
            </div>

            <DropdownMenu />

            <div className="flex border border-zinc-300
            items-center px-2 gap-2 h-10 w-3/6 rounded-full
            hover:border-blue-600 overflow-hidden bg-zinc-100">
                <IoSearchOutline size={25} className="
                text-zinc-500"/>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none outline-none 
                    h-full w-full font-light text-[15px] 
                    bg-transparent"
                    ref={searchRef}
                    placeholder="Search Reddit"
                />
                {
                    search.length > 0 &&
                    <RxCrossCircled
                        size={25}
                        className="text-zinc-500"
                        onClick={() => {
                            setSearch('')
                            searchRef.current.focus()
                        }}
                    />
                }
            </div>

            <div className="flex items-center gap-4">
                <Link href='/login'> <button className="hidden md:block h-8 rounded-full w-28 
                bg-blue-500 text-white font-semibold text-[15px]">Log In</button></Link>
                <span className="flex items-center gap-1
                cursor-pointer relative" onClick={() => setMenuOpen((prev) => !prev)}>
                    <BiUser size={20}
                        className="text-zinc-500"
                    />
                    <BiChevronDown size={20} className="text-zinc-500" />

                    {menuOpen && < MenuModal menuRef={menuRef} />}
                </span>
            </div>
        </nav>
    )
}
