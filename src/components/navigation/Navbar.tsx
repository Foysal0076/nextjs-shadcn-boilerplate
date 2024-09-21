import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import { NavigationDrawerMenu } from '@/components/navigation/navigation-drawer'

export const Navbar = () => {
  return (
    <header
      className='fixed top-0 z-40 flex h-[3.75rem] w-full items-center border-b border-border/30 backdrop-blur-3xl dark:border-border md:h-[4.5rem]'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center justify-between px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='tracking-tighter'>
          <Link href='/' className='h5 text-primary-400 font-extrabold'>
            <Image
              src='/assets/images/icons/appsprint-logo.svg'
              alt='Appsprint Lab logo'
              height={36}
              width={36}
              className='object-contain dark:hidden'
            />
            <Image
              src='/assets/images/icons/appsprint-logo-dark.svg'
              alt='Appsprint Lab logo dark'
              height={36}
              width={36}
              className='hidden object-contain dark:block'
            />
          </Link>
        </div>
        <div className='flex gap-4'>
          <ThemeSwitcher />
          <div className='flex md:hidden'>
            <NavigationDrawerMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
