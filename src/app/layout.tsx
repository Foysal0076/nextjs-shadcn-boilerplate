import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'

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
  title: 'Next.js + Tailwind + shadcn Starter',
  description:
    'A starter template to build amazing static websites with Next.js, Tailwind CSS, and shadcn',
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
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
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
