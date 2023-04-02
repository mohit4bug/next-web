import { BsRocketFill } from 'react-icons/bs'
import { BsFire } from 'react-icons/bs'
import { TiStarburstOutline } from 'react-icons/ti'
import { CgAlignTop } from 'react-icons/cg'

export default function Filter() {
    return (
        <div className="h-14 bg-white shadow-sm border-zinc-300 flex
        items-center px-2 gap-3 rounded-sm py-2 sm:justify-start justify-center">

            {/* bg-zinc-100 on select and color blue */}
            <span className="flex items-center w-fit cursor-pointer
             bg-zinc-100 hover:bg-zinc-200 h-full 
             rounded-full gap-2 px-2 text-blue-500">
                <BsRocketFill size={18} />
                <p className="font-semibold hidden sm:block">Best</p>
            </span>

            <span className="flex items-center w-fit cursor-pointer
              hover:bg-zinc-200 h-full 
             rounded-full gap-2 px-2 text-zinc-500">
                <BsFire size={18} />
                <p className="font-semibold hidden sm:block">Hot</p>
            </span>

            <span className="flex items-center w-fit cursor-pointer
              hover:bg-zinc-200 h-full 
             rounded-full gap-2 px-2 text-zinc-500">
                <TiStarburstOutline size={18} />
                <p className="font-semibold hidden sm:block">New</p>
            </span>

            <span className="flex items-center w-fit cursor-pointer
              hover:bg-zinc-200 h-full 
             rounded-full gap-2 px-2 text-zinc-500">
                <CgAlignTop size={18} />
                <p className="font-semibold hidden sm:block">Top</p>
            </span>

        </div>
    )
}
