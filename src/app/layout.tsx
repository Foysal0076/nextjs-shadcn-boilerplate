import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'

import FaviconsLinks from '@/components/common/FaviconsLinks'
import NextThemeProvider from '@/components/common/NextThemeProvider'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navigation'

// eslint-disable-next-line no-unused-vars
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata = {
  title: 'Appsprint Lab',
  description: 'Appsprint Lab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${rubik.variable}`}>
      <FaviconsLinks />
      <body>
        <NextThemeProvider>
          <div className='flex min-h-screen flex-col justify-between pt-[3.75rem] md:pt-[4.5rem]'>
            <div>
              <Navbar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  )
}
