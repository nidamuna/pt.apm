import React from 'react'

const Herosection = () => {
  return (
    <div className='font-rubik bg-hero-image bg-no-repeat bg-cover w-screen h-[708px] px-[183px] py-[122px]'>
        <h1 className='text-[#0B132A] font-medium text-[60px] leading-[70px]'>
            WELCOME TO
        </h1>
        <h1 className='text-[#0B132A] font-semibold text-[64px] leading-[70px]'>
            PT. AKUSARA PRIMA MEDICATECH
        </h1>
        <p className='w-[644px] mt-[13px] text-[#4F5665] font-normal text-[16px] leading-8'>
            Perusahaan kami adalah penyedia layanan kesehatan dan pelatihan berkualitas tinggi
            terkemuka yang beroperasi di Indonesia, yang berkomitmen untuk memberikan perawatan
            terbaik  melalui pendekatan tehnology yang
            kami kembangkan.
        </p>
        <button className='mt-10 text-[20px] leading-6 font-bold bg-[#0F80F2] text-white py-[17.5px] px-[52px] rounded-[10px]'>
            More About Us
        </button>
    </div>
  )
}

export default Herosection