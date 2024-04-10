"use client" 

// components
import ThemeToggler from './ThemeToggler'
import  Logo  from './Logo'
import  MobileNav  from './MobileNav'
import  Navbar  from './Navbar'


function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
      <Logo />
      <div className='flex items-center gap-x-6'>
{/* nav */}
<Navbar containerStyles= 'hidden xl:flex gap-x-8 items-center' linkStyles="relative hover:text-primary transition-all" underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
      <ThemeToggler />
      {/* mobile nav */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
      </div>

        </div>
      </div>
    </header>
  )
}

export default Header