import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut , UserButton} from '@clerk/nextjs'
import { Button } from '../ui/button'
import Image from 'next/image'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className = "w-full border-b">

        <div className = "wrapper flex  items-center justify-between">
            <Link href = '/' className='w-130 gap-3 flex flex-row items-center justify-center'>
            <Image src="/assets/images/logo.jpg" width = {88} height = {88} alt="" className = "rounded-full" />
            <h3 className='w-[130px] font-bold'>Event Fusion</h3>
            </Link>

            <SignedIn>
                <nav className = "md:flex-between hidden w-full max-w-xs">
                <NavItem />
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-4">
                <SignedIn>
                    <UserButton afterSignOutUrl = "/" />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className = "rounded-full" size="lg">
                        <Link href = "/sign-in">
                        Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>

    </header>
  )
}

export default Header