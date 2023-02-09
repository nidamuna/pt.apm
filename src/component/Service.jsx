import React, { useEffect, useRef, useState } from 'react'
import Tutor from '../assets/tutor.png'
import Arrow from '../assets/arrow.png'
import Arrowtr from '../assets/arrow-tr.png'

const Service = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prevState) => prevState - 1);
        }
      };
    
      const moveNext = () => {
        if (
          carousel.current !== null &&
          carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
          setCurrentIndex((prevState) => prevState + 1);
        }
      };

      useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
          carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
      }, [currentIndex]);
    
      useEffect(() => {
        maxScrollWidth.current = carousel.current
          ? carousel.current.scrollWidth - carousel.current.offsetWidth
          : 0;
      }, []);

      const isDisabled = (direction) => {
        if (direction === 'prev') {
          return currentIndex <= 0;
        }
    
        if (direction === 'next' && carousel.current !== null) {
          return (
            carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
          );
        }
    
        return false;
      };

    const service = [
        {
          name: 'BTCLS',
          icon: Tutor,
        },
        {
          name: 'ACLS FN',
          icon: Tutor,
        },
        {
          name: 'ACLS AHA',
          icon: Tutor,
        },
        {
            name: 'BONELS',
            icon: Tutor,
        },
      ];
  return (
    <div id='service' className='font-rubik overflow-hidden bg-[#D3E8EF] w-screen min-h-screen md:h-auto flex flex-col justify-center items-center px-[50px] md:px-[112px] py-[35px]'>
        <h1 className='w-full text-center text-[#0B132A] font-semibold text-[35px] leading-[50px]'>
            Our Service
        </h1>
        <span className='w-full md:w-[555px] text-[16px] leading-5 font-normal text-[#4F5665] text-center mt-3 mb-[58px]'>
            Sebagai salah satu provider pengembangan
            dan pelatihan sumber daya
            manusia di bidang kesehatan kami
            memiliki beragam pilihan pendidikan
            dan pelatihan diantaranya :
        </span>
        <div 
            ref={carousel}
            className='w-full flex snap-x gap-6 scroll-p-5 snap-mandatory snap-a overflow-x-scroll no-scrollbar pb-14 justify-center items-center'>
              <div className='snap-center snap-always shrink-0'>
                <div className='shrink-0 w-[22px] h-[229px] rounded-[10px] bg-white/0 flex flex-col justify-center items-center mr-6 last:mr-0'>
                  jj
                </div>
              </div>
            {service.map((service, index) => (
                <div key={index} className='snap-center snap-always shrink-0'>
                    <div className='shrink-0 w-[228px] md:w-[281px] h-[229px] rounded-[10px] border-[2px] border-[#dddddd] bg-white flex flex-col justify-center items-center mr-6 last:mr-0'>
                        <img src={service.icon} alt={service.name} className='w-[74px]'/>
                        <h1 className='mt-[9px] text-[#0B132A] text-[24px] leading-[30px] font-bold'>
                            Pelatihan
                        </h1>
                        <h1 className='text-[#0B132A] text-[18px] leading-[30px] font-medium'>
                            {service.name}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full flex justify-end'>
          <button disabled={isDisabled('prev')}>
            <img 
              onClick={movePrev} 
              src={isDisabled('prev') ? Arrow : Arrowtr} 
              alt='prev' 
              className={isDisabled('prev') ? 'w-[60px] mr-5 cursor-not-allowed' : 'rotate-180 mr-5'} 
            />
          </button>
          <button disabled={isDisabled('next')}>
            <img 
              onClick={moveNext} 
              src={isDisabled('next') ? Arrow : Arrowtr} 
              alt='next' 
              className={isDisabled('next') ? 'rotate-180 cursor-not-allowed' :'w-[60px]'} 
            />
          </button>
        </div>
    </div>
  )
}

export default Service