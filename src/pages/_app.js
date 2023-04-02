import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'
import { Inter_Tight } from 'next/font/google'

const font = Inter_Tight({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`select-none ${font.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
