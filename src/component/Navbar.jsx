import React from 'react'
import Fb from '../assets/facebook.png'
import Tw from '../assets/twitter.png'
import Ig from '../assets/instagram.png'
import Logo from '../assets/nav-logo.png'

const Navbar = () => {
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
    <>
        <div className='w-screen h-[42px] bg-[#5DB7BE] pr-[84px] px-[9px] flex justify-end items-center '>
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
        <div className='w-screen h-auto bg-white py-[17px] pl-[133px] pr-[86px]'>
            
             <div className='flex flex-row items-center justify-between'>
              <img
                alt='akusara prima mediatech'
                src={Logo}
            />
              <div className="lg:flex flex-row hidden justify-center items-center">
                <a href='about' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  About
                </a>
                <a href='features' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Features
                </a>
                <a href='pages' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Pages
                </a>
                <a href='testimonial' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Testimonial
                </a>
                <a href='help' className="text-[#4F5665] text-[16px] leading-[19px] font-normal mr-[40px] last:mr-0 cursor-pointer">
                  Help
                </a>
                <a href='singin' className="text-[#0B132A] text-[16px] leading-[19px] font-medium mr-[40px] last:mr-0 cursor-pointer">
                  Sing In
                </a>
                <button className='bg-[#5DB7BE] w-[150px] h-[45px] rounded-xl text-white text-[16px] leading-[19px] font-medium mr-[40px] last:mr-0 cursor-pointer'>
                    Sing Up
                </button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar