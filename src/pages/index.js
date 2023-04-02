import { posts } from '@/assets/posts'
import Filter from '@/components/Filter'
import Share from '@/components/Share'
import PostList from '@/components/postList/PostList'
import Post from '@/components/postList/post/Post'
import Head from 'next/head'
import Image from 'next/image'


const Premium = () => {
  return (
    <div className='bg-white shadow-sm rounded-sm
    border-zinc-300 p-2 flex flex-col gap-2'>
      <div className='pl-1'>
        <p className='text-[12px] font-semibold'>Reddit Premium</p>
        <p className='text-[12px]'>The best Reddit experince, with monthly <br />Coins</p>
      </div>
      <button className='h-8 rounded-full w-full
      bg-orange-500 text-white font-semibold'>Try Now</button>
    </div>
  )
}

const CreateSuggestion = () => {
  return (
    <div className='bg-white shadow-sm rounded-sm
    border-zinc-300 gap-2'>
      <div className='h-8 w-full relative'>
        <Image src={'https://www.redditstatic.com/desktop2x/img/id-cards/banner@2x.png'} fill />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <div className='pl-1'>
          <p className='font-semibold'>r/Home</p>
          <p className='text-sm'>The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation</p>
        </div>
        <hr />
        <button className='h-8 rounded-full w-full
      bg-blue-500 text-white font-semibold'>Create Post</button>
        <button className='h-8 rounded-full w-full
      bg-white border border-blue-500 text-blue-500 font-semibold'>Create Community</button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit - Dive into anything</title>
        <meta name="description" content="reddit clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reddit.ico" />
      </Head>

      <main className='min-h-screen h-auto w-full
       bg-zinc-300 py-5 px-2 md:px-16 lg:px-36 flex flex-col md:flex-row gap-5 '>

        {/* Posts */}
        <div className='flex-[2] gap-5 flex flex-col'>
          <Share />
          <Filter />
          <PostList posts={posts} />
        </div>

        {/* Side bar */}
        <div className='flex-1 flex flex-col gap-5'>
          <Premium />
          <CreateSuggestion />
        </div>
      </main>
    </>
  )
}
