"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-100 pt-1 pb-2 '> 
      <div className="flex flex-row justify-between pt-5 ml-10 mr-10 text-sm ">
        {/* hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 text-center">
            <li><a href="#">hackathons</a></li>
            <li><Link href={"tools_login"} >tools</Link></li>
            <li><a href="#">feed</a></li>
            {/* <li><a href="#">host a hackathon</a></li>
            <Link href={"/about"} 
              className=" "
            >Join us</Link> */}
          </ul>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-4 text-gray-800 font-serif ">
        <li><a href="/ " className='relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300 
           after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full'>home</a></li> 
          <li><a href="hackathons " className='relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300 
           after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full'>hackathons</a></li>
          <li><Link href={"/tools_login"} className='relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
          after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
          '>tools</Link></li>
          <li><Link href={"/feed"}
          className='relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
          after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
          '>feed</Link></li>
        </ul>

        <ul className="md:flex flex-row gap-4 text-gray-800 ">
          <li><a href="#"
          className='
          relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
          after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
          font-serif
          '>host a hackathon</a></li>
          <Link href={"/tools_login"} 
            className="border border-blue-500 bg-blue-500 pl-1 pr-1 rounded hover:bg-blue-800 hover:border-blue-900 text-white text-xs font-mono "
          >Join us</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;