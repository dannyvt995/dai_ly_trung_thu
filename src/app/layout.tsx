import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/lenis.css'
import '@/styles/config.css'
import Navbar from '@/components/Navbar'
import './tailwindcss.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'Nhà phân phối bánh trung thu 2024',
  description: 'Nhà phân phối bánh trung thu 2024 tại Sài gòn - Chiếu khấu tốt'
}
import { CounterStoreProvider } from '@/providers/counter-store-provider'
import Footer from '@/components/Footer'
import Widget from '@/components/Widget'
import GoogleMap from '@/components/commons/GoogleMap'
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <CounterStoreProvider>
          <>
            {/* <div className='fixed top-0 left-0 w-full h-screen bg-breadCrumb z-[-10]'></div> */}
            <Navbar />
            {children}
            <Footer />
            <Widget />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </>
        </CounterStoreProvider>
      </body>
    </html>
  )
}
