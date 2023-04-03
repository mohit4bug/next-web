import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'
import { Inter_Tight } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from 'react-query'
import { persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const font = Inter_Tight({
  subsets: ['latin']
})



export default function App({ Component, pageProps }) {

  const router = useRouter()
  const queryClient = new QueryClient()

  const isLoginPage = router.pathname === '/login'
    || router.pathname === '/register' ||
    router.pathname === '/verify'

  const [showNavbar, setShowNavbar] = useState(!isLoginPage)

  useEffect(() => {
    setShowNavbar(!isLoginPage)
  }, [isLoginPage])

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className={`select-none ${font.className}`}>
            {showNavbar && <Navbar />}
            <Component {...pageProps} />
          </div>
        </PersistGate>
        <Toaster />
      </Provider>
    </QueryClientProvider>
  )
}
