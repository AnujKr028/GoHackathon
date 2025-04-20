"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/AuthContext'; 
import { signOut } from "firebase/auth"; 
import { auth } from '@/firbase-config'; 

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const getProfilePicture = (email) => { 
    if(!email) return null ; 
    const name = email.charAt(0).toUpperCase(); 
    return `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }



  
  };

  return (
    <div className='bg-gray-100 pt-1 pb-2'> 
      <div className="flex flex-row justify-between pt-5 ml-10 mr-10 text-sm">

        {/* hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 text-center text-gray-800 font-mono">
            <li><a href="/">home</a></li>
            <li><a href="/hackathons">hackathons</a></li>
            <li><Link href='/tools_login' >hall of fame</Link></li>
            <li><a href="/feed">feed</a></li>
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
            '>hall of fame</Link></li>
          <li><Link href={"/feed"}
            className='relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
            after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
            '>feed</Link></li>
        </ul>

        {/* Authenticated user menu + host/joinus */}
        <ul className="md:flex flex-row gap-4 text-gray-800 items-center">
          {user ? (
            <>
             <li>
                <a href="/hosthackathonform" className='
                  relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
                  after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
                  font-serif
                '>host a hackathon</a>
              </li>
              <li>
                <img   src={getProfilePicture(user.email)}  alt="Profile" title={user.email} className="w-8 h-8 rounded-full" />
              </li>
              <li>
                <button onClick={handleLogout} className="text-xs border border-red-500 bg-red-500 pl-1 pr-1 rounded hover:bg-red-800 hover:border-red-900 text-white">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/hosthackathonform" className='
                  relative pb-1 after:block after:w-0 after:h-0.5 after:bg-blue-300
                  after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-200 hover:after:w-full
                  font-serif
                '>host a hackathon</a>
              </li>
              <Link href={"/joinus"} 
                className="border border-blue-500 bg-blue-500 pl-1 pr-1 rounded hover:bg-blue-800 hover:border-blue-900 text-white text-xs font-mono "
              >Join us</Link>
            </>
          )}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
