// font and styling imports
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

//import components
import Navbar from './components/navbar.js'

const helveticaNeue = localFont({
  src: [
    {
      path: '../../public/fonts/helveticaNeue/HelveticaNeueLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helveticaNeue/HelveticaNeue-Roman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helveticaNeue/HelveticaNeueMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helveticaNeue/HelveticaNeueBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})

export const metadata = {
  title: 'Rohan Desai',
  description: 'Jan 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className} style={{overflow: 'hidden'}}>
        {/* must remove overflow: hidden, in order to have longer than single page!!! */}
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
