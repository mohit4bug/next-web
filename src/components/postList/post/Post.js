import Image from 'next/image'
import { RxThickArrowUp } from 'react-icons/rx'
import { RxThickArrowDown } from 'react-icons/rx'

import { TbArrowBigDownFilled } from 'react-icons/tb'
import { TbArrowBigUpFilled } from 'react-icons/tb'
import PostActionBar from './PostActionBar'


export default function Post({ post }) {


    return (
        <div className="bg-white shadow-sm border border-zinc-300
        rounded-sm hover:border-zinc-400 p-2 pr-0 flex gap-2">

            {/* Left */}
            <div className="flex flex-col gap-1">
                <RxThickArrowUp size={25} className='text-zinc-500' />
                <p className='font-semibold text-sm'>{post?.likes}</p>
                <RxThickArrowDown size={25} className='text-zinc-500' />
            </div>


            {/* Right */}
            <div className='w-full flex flex-col gap-2'>

                {/* Top */}
                <div className='h-auto flex
                text-sm w-full flex-wrap sm:flex-nowrap items-center'>

                    <span className='h-8 w-8 relative'>
                        <Image src={post?.profileImage} fill className='rounded-full' alt='profile' />
                    </span>
                    <p className='font-semibold'>&nbsp; {post?.communityName}</p>
                    <p className='text-zinc-500'>&nbsp; Posted by</p>
                    <p className='text-zinc-500'>&nbsp;{post?.author}</p>
                    <p className='text-zinc-500'>&nbsp;{post?.postedTime}</p>
                </div>

                {/* Title */}
                <div>
                    <p className='font-semibold
                    text-xl pr-5'>{post?.title}</p>
                </div>

                {/* Paragraph (optional) */}
                {
                    post?.content &&
                    <div className='py-4 pr-5'>
                        <p>{post?.content}</p>
                    </div>
                }

                {/* Post Image */}
                {
                    post?.postImage && <div className='relative h-96 w-full'>
                        <Image src={post?.postImage}
                            fill className='object-cover' alt='post' />
                    </div>
                }

                {/* Post action bar */}
                <PostActionBar commentsCount={post?.commentsCount} />


            </div>

        </div>
    )
}
