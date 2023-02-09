import React from 'react'

const Cardsection = () => {
  return (
    <div className='font-rubik overflow-hidden w-screen flex items-center justify-center -mt-[70px] md:-mt-[114px]'>
      <div className='grid grid-cols-3 gap-1 justify-center items-center'>
        <div className='w-[120px] md:w-[374px] h-[100px] md:h-[287px] bg-[#0F80F2] rounded-[10px] text-white flex flex-col items-center justify-center'>
            <h1 className='font-bold text-[20px] md:text-[96px] leading-8'>
              90+
            </h1>
            <span className='font-normal text-[18px] md:text-[40px] mt-1 md:mt-8'>
              Pengguna
            </span>
        </div>
        <div className='w-[120px] md:w-[374px] h-[100px] md:h-[287px] bg-[#5DB7BE] rounded-[10px] text-white flex flex-col items-center justify-center'>
          <h1 className='font-bold text-[30px] md:text-[96px] leading-8'>
            12+
          </h1>
          <span className='font-normal text-[18px] md:text-[40px] mt-1 md:mt-8'>
            Pelatihan
          </span>
        </div>
        <div className='w-[120px] md:w-[374px] h-[100px] md:h-[287px] bg-[#CBF6B0] rounded-[10px] text-black flex flex-col items-center justify-center'>
          <h1 className='font-bold text-[30px] md:text-[96px] leading-8'>
            12+
          </h1>
          <span className='font-normal text-[18px] md:text-[40px] mt-1 md:mt-8'>
            Layanan
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cardsection