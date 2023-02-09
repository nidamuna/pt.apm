import React, { useState } from 'react'
import Fb from '../assets/facebook.png'
import Tw from '../assets/twitter.png'
import Ig from '../assets/instagram.png'
import Logo from '../assets/nav-logo.png'
import Menu from '../assets/menu.png'
import Close from '../assets/close-menu.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

    const links = [
        {
          name: 'fb',
          icon: Fb,
          link: 'https://www.facebook.com/',
        },
        {
          name: 'tw',
          icon: Tw,
          link: 'https://twitter.com/',
        },
        {
          name: 'ig',
          icon: Ig,
          link: 'https://www.instagram.com/',
        },
      ];
  return (
    <div className='w-screen overflow-hidden'>
        <div className='font-rubik w-screen h-[42px] bg-[#5DB7BE] md:pr-[84px] pr-[40px] px-[9px] flex justify-end items-center '>
            <div className="flex flex-row">
                {links.map((link) => (
                    <a
                        className="mr-[15px]"
                        key={link.name}
                        href={link.link}
                    >
                        <img
                          alt={link.name}
                          src={link.icon}
                        />
                    </a>
                ))}
            </div>
        </div>

        <div className='w-screen h-auto bg-white py-[17px] md:pl-[133px] px-[40px] md:pr-[86px]'>
            
            <div className='flex flex-row items-center justify-between'>
              <img
                alt='akusara prima mediatech'
                src={Logo}
                className='md:w-[180px] w-[150px]'
              />

              <div className="lg:flex flex-row hidden justify-center items-center">
                <a href='#home' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Home
                </a>
                <a href='#about' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  About
                </a>
                <a href='#service' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Our Service
                </a>
                <a href='#team' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Team
                </a>
                <a href='#footer' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Contact
                </a>
               {/* <a href='singin' className="text-[#0B132A] text-[16px] leading-[19px] font-medium mr-[40px] last:mr-0 cursor-pointer">
                  Sing In
                </a>
                <button className='bg-[#5DB7BE] w-[150px] h-[45px] rounded-xl text-white text-[16px] leading-[19px] font-medium mr-[40px] last:mr-0 cursor-pointer'>
                    Sing Up
                </button> */}
              </div>

              <button
                onClick={handleNav}
                className={
                  nav ? 'hidden' : 'flex justify-center text-black lg:hidden mr-[24px]'
                }
              >
              <img src={Menu} alt='menu' className="h-[14px] w-[20px] flex" />
            </button>
            <div className={ nav ? 'flex flex-col fixed inset-0 w-full h-full bg-white' : 'hidden'}>
              <div className='px-2 h-[84px] w-[95%] flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                  <img src={Logo} alt='logo' className="w-[150px]" />
                </div>
                <button
                  onClick={handleNav}
                  className={
                    !nav ? 'hidden' : 'flex justify-center text-white mr-2'
                }>
                  <img src={Close} alt='close' className="h-[14px] w-[16px]" />
                </button>
              </div>
              <div className='mt-[16px] flex flex-col items-start w-full'>
                <a href='#home' 
                  onClick={() => setNav(false)}
                  className="mx-[24px] text-[16px] leading-[19px] mb-[24px] last:mb-0 max-w-[50px] cursor-pointer">
                    Home
                </a>
                <a href='#about' 
                  onClick={() => setNav(false)}
                  className="mx-[24px] text-[16px] leading-[19px] mb-[24px] last:mb-0 max-w-[150px] cursor-pointer">
                    About
                </a>
                <a href='#service' 
                  onClick={() => setNav(false)}
                  className="mx-[24px] text-[16px] leading-[19px] mb-[24px] last:mb-0 max-w-[70px] cursor-pointer">
                    Service
                </a>
                <a href='#team' 
                  onClick={() => setNav(false)}
                  className="mx-[24px] text-[16px] leading-[19px] mb-[24px] last:mb-0 max-w-[70px] cursor-pointer">
                    Team
                </a>
                <a href='#footer' 
                  onClick={() => setNav(false)}
                  className="mx-[24px] text-[16px] leading-[19px] mb-[24px] last:mb-0 cursor-pointer">
                    Contact
                </a>
              </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar