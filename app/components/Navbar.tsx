'use client';
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import {useState} from 'react'
import { AiOutlineMenu} from 'react-icons/ai'

const User = "Nhan"
const NavLinks = () => {
  return (
<div>
  <ul className="hidden sm:flex">
    <li className="ml-6">
      <Link
        href="/About"
        className="px-4 py-2 rounded-md text-xl transition-all duration-300 text-white
                   hover:bg-clip-text hover:text-transparent 
                   hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-600"
      >
        About
      </Link>
    </li>

    <li className="ml-6">
      <Link
        href="/Blog"
        className="px-4 py-2 rounded-md text-xl transition-all duration-300 text-white
                   hover:bg-clip-text hover:text-transparent 
                   hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-600"
      >
        Blog
      </Link>
    </li>

    <li className="ml-6">
      <Link
        href="/Contact"
        className="px-4 py-2 rounded-md text-xl transition-all duration-300 text-white
                   hover:bg-clip-text hover:text-transparent 
                   hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-600"
      >
        Contact
      </Link>
    </li>

    <li className="ml-6">
      <Link
        href="/DailyLife"
        className="px-4 py-2 rounded-md text-xl transition-all duration-300 text-white
                   hover:bg-clip-text hover:text-transparent 
                   hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-600"
      >
        Daily life
      </Link>
    </li>

    <li className="ml-6">
      <Link
        href="/Services"
        className="px-4 py-2 rounded-md text-xl transition-all duration-300 text-white
                   hover:bg-clip-text hover:text-transparent 
                   hover:bg-gradient-to-b hover:from-neutral-200 hover:to-neutral-600"
      >
        Services
      </Link>
    </li>
  </ul>
</div>

  );
};

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full h-16 sm:h-24 shadow-xl font-merriweather">
      <div className ="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" className="text-white text-4xl font-bold font-handlee hidden sm:flex">
          Welcome, {User}
        </Link>
        <div><NavLinks/></div>
        <div onClick={toggleNavbar} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu
            size={40}
            
          />
        </div>
      </div>
      {/* mobile menu */}


      {/* Open menu */}
      
      <div className = {
      `
        fixed top-0 right-0 w-[65%] sm:hidden h-screen p-10 bg-[#171717]
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `
      }>
        
        
        <div onClick={toggleNavbar} className="absolute top-6 right-6 cursor-pointer">
          <AiOutlineMenu size={40} />
        </div>
        <div className="mt-20">
          <ul className="flex flex-col space-y-6 text-white text-xl">
            <li><Link href="/About" onClick={toggleNavbar}>About</Link></li>
            <li><Link href="/Blog" onClick={toggleNavbar}>Blog</Link></li>
            <li><Link href="/Contact" onClick={toggleNavbar}>Contact</Link></li>
            <li><Link href="/Services" onClick={toggleNavbar}>Services</Link></li>
            <li><Link href="/daily-life" onClick={toggleNavbar}>Daily life</Link></li>

          </ul>
          <div className="absolute bottom-6 right-6">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}








// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <>
//     <nav className="fixed w-full h-24 shadow-xl font-merriweather text-white ">
//       <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
//         <Link href="/">
//           <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={75}
//             height={75}
//             className="cursor-pointer"
//           />
//         </Link>
//         <NavLinks/>
//         <div className="md:hidden">
//           <button onClick = {toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
//         </div>
//         <div className="hidden md:flex">
          
//         </div>
        
//       </div>
//     </nav>
//     {isOpen &&  (
//       <div className="flex flex-col items-center basis-full flex-col items-center">
//         <NavLinks />
//       </div>
//     )}
//     </>
//   )
// };