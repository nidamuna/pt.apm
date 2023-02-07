import React from 'react'
import Logo from '../assets/logo.png'

const About = () => {
  return (
    <div className='font-rubik w-screen h-screen px-[122px] flex items-center justify-center bg-white'>
        <div className='grid grid-cols-2 gap-[100px] justify-start items-center'>
            <img alt='/' src={Logo} className='' />
            <div className='text-[16px] text-[#4F5665] font-normal leading-6'>
                <h1 className='w-[428px]'>
                    Perusahaan kami adalah penyedia layanan kesehatan dan pelatihan berkualitas tinggi
                    terkemuka yang beroperasi di Indonesia. Kami memiliki tim profesional kesehatan yang
                    sangat terampil dan penuh kasih sayang yang berkomitmen untuk memberikan perawatan
                    terbaik yang mungkin bagi pasien kami, melalui pendekatan tehnology yang
                    kami kembangkan yaitu Homecare Medical APPS.
                </h1>
                <h1 className='w-[428px] mt-5'>
                    Kami menawarkan beragam layanan, termasuk perawatan preventif, diagnosis dan
                    pengobatan, rehabilitasi, dan dukungan untuk kondisi kronis. Kami juga memiliki
                    komitmen yang kuat terhadap inovasi, dan terus mencari cara baru untuk meningkatkan
                    perawatan yang kami berikan.
                </h1>
                <h1 className='w-[428px] mt-5'>
                    Selain layanan kesehatan kami, kami juga menawarkan beragam program pelatihan
                    bagi profesional kesehatan. Program-program ini dirancang untuk membantu profesional
                    mengembangkan keterampilan dan pengetahuan yang diperlukan untuk memberikan
                    layanan kualitas terbaik bagi pasien mereka.
                </h1>
            </div>
        </div>
    </div>
  )
}

export default About