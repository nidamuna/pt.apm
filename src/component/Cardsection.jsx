import React from 'react'

const Cardsection = () => {
  return (
    <div className='w-screen flex items-center justify-center -mt-[114px]'>
      <div className='grid grid-cols-3 gap-1 justify-center items-center'>
        <div className='w-[374px] h-[287px] bg-[#0F80F2] rounded-[10px] text-white flex flex-col items-center justify-center'>
            <h1 className='font-bold text-[96px] leading-8'>
              90+
            </h1>
            <span className='font-normal text-[40px] mt-8'>
              Pengguna
            </span>
        </div>
        <div className='w-[374px] h-[287px] bg-[#5DB7BE] rounded-[10px] text-white flex flex-col items-center justify-center'>
          <h1 className='font-bold text-[96px] leading-8'>
            12+
          </h1>
          <span className='font-normal text-[40px] mt-8'>
            Pelatihan
          </span>
        </div>
        <div className='w-[374px] h-[287px] bg-[#CBF6B0] rounded-[10px] text-black flex flex-col items-center justify-center'>
          <h1 className='font-bold text-[96px] leading-8'>
            12+
          </h1>
          <span className='font-normal text-[40px] mt-8'>
            Layanan
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cardsection