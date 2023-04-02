import { TfiComment } from 'react-icons/tfi'
import { VscGift } from 'react-icons/vsc'
import { TfiShare } from 'react-icons/tfi'
import { BsBookmark } from 'react-icons/bs'

export default function PostActionBar({ commentsCount }) {
    return (
        <div className='flex gap-3 text-sm
        font-semibold mt-[-5px] my-[-8px] text-zinc-500 w-full h-auto md:h-9'>

            <span className='flex items-center gap-1 cursor-pointer
            hover:bg-zinc-200 py-1 h-8 px-1'>
                <TfiComment size={18} />
                <p>{commentsCount}</p>
                <p className='hidden sm:block'>Comments</p>
            </span>
            <span className='flex items-center gap-1 cursor-pointer
            hover:bg-zinc-200 py-1 h-8 px-1'>
                <VscGift size={20} className='mb-[1px]' />
                <p className='hidden sm:block'>Award</p>
            </span>
            <span className='flex items-center gap-1 cursor-pointer
            hover:bg-zinc-200 py-1 h-8 px-1'>
                <TfiShare size={16} className='mb-[4px]' />
                <p className='hidden sm:block'>Share</p>
            </span>
            <span className='flex items-center gap-1 cursor-pointer
            hover:bg-zinc-200 py-1 h-8 px-1'>
                <BsBookmark size={16} className='mb-[1px]' />
                <p className='hidden sm:block'>Save</p>
            </span>

        </div>
    )
}
