import React from 'react'
import Logo from '../assets/footer-logo.png'
import Fb from '../assets/foo-fb.png'
import Tw from '../assets/foo-tw.png'
import Ig from '../assets/foo-ig.png'

const Footer = () => {
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

      const product = [
        {
          name: 'News',
        },
        {
          name: 'Pricing',
        },
        {
          name: 'Locations',
        },
        {
            name: 'Services',
        },
        {
            name: 'Countries',
        },
        {
            name: 'Blog',
        },
      ];

      const engage = [
        {
          name: 'LaslesVPN ? ',
        },
        {
          name: 'FAQ',
        },
        {
          name: 'Tutorials',
        },
        {
            name: 'About Us',
        },
        {
            name: 'Privacy Policy',
        },
        {
            name: 'Terms of Service',
        },
      ];

      const money = [
        {
          name: 'Affiliate',
        },
        {
          name: 'Become Partner',
        },
      ];

  return (
    <div id='footer' className='overflow-hidden font-rubik w-screen bg-gradient-to-b from-white via-white to-[#5DB7BE] py-[70px] px-[50px] md:px-[150px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={Logo} alt='AKUSARA PRIMA MEDICATECH' className='-ml-[35px] md:ml-0' />
                <h1 className='w-full md:w-[340px] font-normal text-[16px] mt-[22px] leading-[30px] text-[#4F5665]'>
                    Layanan dan Pelatihan Kesehatan dengan berbasis teknologi yang terus dikembangkan.
                </h1>
                <div className='flex flex-row mt-[30px]'>
                    {links.map((link, index) => (
                        <a
                            className="mr-5"
                            key={index}
                            href={link.link}
                        >
                            <img
                            alt={link.name}
                            src={link.icon}
                            />
                        </a>
                    ))}
                </div>
                <p className='text-[#0F80F2] mt-[30px] text-[16px] leading-[30px] font-normal'>
                    ??2023AKUSARAPM
                </p>
            </div>
            <div className='grid grid-cols-3 mt-14 md:mt-[108px] gap-5'>
                <div>
                    <h1 className='text-[#0B132A] font-medium mb-5 text-[18px] leading-[30px]'>
                        Product
                    </h1>
                    {product.map((item, index) => (
                        <p key={index} className='mb-[10px] text-[#4F5665] font-normal text-[16px] leading-[30px]'>
                            {item.name}
                        </p>
                    ))}
                </div>
                <div>
                    <h1 className='text-[#0B132A] font-medium mb-5 text-[18px] leading-[30px]'>
                        Engage
                    </h1>
                    {engage.map((item, index) => (
                        <p key={index} className='mb-[10px] text-[#4F5665] font-normal text-[16px] leading-[30px]'>
                            {item.name}
                        </p>
                    ))}
                </div>
                <div>
                    <h1 className='text-[#0B132A] font-medium mb-5 text-[18px] leading-[30px]'>
                        Earn Money
                    </h1>
                    {money.map((item, index) => (
                        <p key={index} className='mb-[10px] text-[#4F5665] font-normal text-[16px] leading-[30px]'>
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer