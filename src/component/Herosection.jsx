import React from 'react'

const Herosection = () => {
  return (
    <div id='#home' className='overflow-hidden font-rubik bg-hero-image bg-no-repeat bg-cover w-screen h-[800px] md:h-[708px] px-[50px] md:px-[183px] py-[50px] md:py-[122px]'>
        <h1 className='text-[#0B132A] font-medium text-[40px] md:text-[60px] leading-[70px]'>
            WELCOME TO
        </h1>
        <h1 className='text-[#0B132A] font-semibold text-[44px] md:text-[64px] leading-[70px]'>
            PT. AKUSARA PRIMA MEDICATECH
        </h1>
        <p className='md:w-[644px] w-full mt-[13px] text-[#4F5665] font-normal text-[16px] leading-8'>
            Perusahaan kami adalah penyedia layanan kesehatan dan pelatihan berkualitas tinggi
            terkemuka yang beroperasi di Indonesia, yang berkomitmen untuk memberikan perawatan
            terbaik  melalui pendekatan tehnology yang
            kami kembangkan.
        </p>
        <button className='md:mt-10 mt-6 text-[16px] md:text-[20px] leading-6 font-bold bg-[#0F80F2] text-white p-5 md:py-[17.5px] md:px-[52px] rounded-[10px]'>
            More About Us
        </button>
    </div>
  )
}

export default Herosection