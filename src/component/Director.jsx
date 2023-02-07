import React from 'react'
import Direc from '../assets/direktur.png'

const Director = () => {
  return (
    <div className='w-screen h-screen px-[122px] flex items-center justify-center bg-white'>
        <div className='grid grid-cols-2 gap-[100px] justify-start items-center'>
            <img alt='/' src={Direc} className='' />
            <div className='text-[16px] text-[#4F5665] font-normal leading-6'>
                <h1 className='text-[#0B132A] w-[428px] text-[40px] leading-[50px] font-medium'>
                    Board Of
                </h1>
                <h1 className='text-[#0B132A] w-[428px] text-[48px] leading-[50px] font-semibold'>
                    Direction
                </h1>
                <h1 className='w-[428px] mt-10 text-[16px] leading-6 font-normal'>
                    Kami berkomitmen untuk menjadi penyedia
                    layanan kesehatan yang berorientasi pasien, dan
                    berusaha untuk membuat layanan kami sejauh
                    mungkin terjangkau dan terjangkau. Kami juga
                    bekerja sama erat dengan organisasi dan stakeholder
                    lain untuk memajukan kesehatan dan kesejahteraan
                    secara keseluruhan di masyarakat kami.
                </h1>
                <h1 className='w-[428px] mt-5 text-[16px] leading-6 font-normal'>
                    Presiden Direktur
                </h1>
                <h1 className='text-[20px] leading-6 italic font-bold mt-2'>
                    Toto Dinar Wijaksono, A.Md.Kep
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Director