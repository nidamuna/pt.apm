import React from 'react'
import Tim1 from '../assets/team-1.png'
import Tim2 from '../assets/team-2.png'
import Tim3 from '../assets/team-3.png'

const Team = () => {
    const tim = [
        {
          name: 'ERLINAWATI, A.Md.Kep.',
          desc: 'Advisory',
          icon: Tim1,
        },
        {
          name: 'Erwiyanti Nugraheni',
          desc: 'Direktur Keuangan',
          icon: Tim2,
        },
        {
          name: 'Dwi Agus Priyanto, A.Md.Kep.',
          desc: 'Direktur Pelatihan',
          icon: Tim3,
        },
      ];
  return (
    <div className='overflow-hidden font-rubik bg-[#F1FFE9] w-screen min-h-screen px-[50px] md:px-0 py-[42px] flex flex-col justify-center items-center'>
        <h1 className='text-[35px] font-semibold leading-[50px]'>
            Our Team
        </h1>
        <h1 className='text-[16px] leading-5 font-normal text-center'>
            Tentang team dibelakang berdirinya PT. Akusara Prima Medicatech
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[87px] mt-[55px]'>
            {tim.map((tim, index) => (
                <div key={index} className='bg-[#5DB7BE] rounded-[20px] w-[250px] md:w-[330px] h-[350px] md:h-[354px] flex flex-col justify-center items-center border-[2px] border-[#DDDDDD]'>
                    <img src={tim.icon} alt={tim.name} className='w-[160px] md:w-[189px] h-[200px] md:h-[226px]' />
                    <h1 className='font-medium text-[20px] leading-[30px] text-white mt-[17px] text-center'>
                        {tim.name}
                    </h1>
                    <h1 className='text-[#CBF6B0] font-normal text-[20px] leading-[30px]'>
                        {tim.desc}
                    </h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team