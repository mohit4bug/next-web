import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'
import { Inter_Tight } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const font = Inter_Tight({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/login' || router.pathname === '/register'
  const [showNavbar, setShowNavbar] = useState(!isLoginPage)

  useEffect(() => {
    setShowNavbar(!isLoginPage)
  }, [isLoginPage])

  return (
    <Provider store={store}>
      <div className={`select-none ${font.className}`}>
        {showNavbar && <Navbar />}
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
