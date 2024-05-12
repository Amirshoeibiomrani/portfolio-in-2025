import { AlignJustify, Sheet } from 'lucide-react';
import React from 'react'
import { SheetContent, SheetTrigger } from './ui/sheet';
import Logo from './Logo';
import Navbar from './Navbar';
import Socials from './Socials';

  const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />

      </SheetTrigger>
      <SheetContent>
        <div >
          <div>
            <Logo />
            <Navbar />
            <Socials />
            
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default  MobileNav;