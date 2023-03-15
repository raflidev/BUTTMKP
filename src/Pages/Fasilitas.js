import React from 'react'
import Footer from '../components/Footer'
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'
import sejarah from '../images/sejarah.png'

function Fasilitas() {
  return (
    <div className='min-h-screen font-montserrat relative'>
    <Navbar/>
    
    <HeaderHal title="Fasilitas" menu="Layanan Kami" />

    <Kontak/>

    <div className="px-20 relative z-10 py-20 bg-white space-y-16">
            <div className='space-y-4'>
                <div className="font-bold text-3xl text-green-primary">
                SOP Fasilitas
                </div>
                <div className="h-1 w-14 bg-yellow-400">
                </div>
            </div>

            <div className='flex items-center relative'>
            
                <div className='absolute top-7 left-0 w-full px-20'>
                    <div className='w-full border-b-2 border-black border-dashed h-1'></div>
                </div>

                <div className='grid grid-cols-5 w-full'>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-start flex-col">
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                                    <div className='font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full'>1</div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[3rem] w-1 border-l-2 border-green-primary border-dashed'>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className="flex flex-col space-y-3">
                                    <div className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-green-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>

                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Pengajuan Permohonan
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        Mengajukan form permohonan pada jam layanan 
                                    </div>
                                    <div className='text-center font-semibold'>
                                        Senin-Jumat 07:30-18:30
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-start flex-col">
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                                    <div className='font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full'>2</div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[3rem] w-1 border-l-2 border-green-primary border-dashed'>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className="flex flex-col space-y-3">
                                    <div className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-green-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>



                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Peninjauan
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        Penelaahan Oleh Manajemen
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-start flex-col">
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                                    <div className='font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full'>3</div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[3rem] w-1 border-l-2 border-green-primary border-dashed'>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className="flex flex-col space-y-3">
                                    <div className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-green-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>


                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                        Konfirmasi
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        Konfirmasi ketersediaan fasilitas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-start flex-col">
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                                    <div className='font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full'>4</div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[3rem] w-1 border-l-2 border-green-primary border-dashed'>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className="flex flex-col space-y-3">
                                    <div className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-green-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>



                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                        Pembayaran (E-Biling)
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        Sesuai dengan PP No 35/2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-start flex-col">
                            <div className="flex justify-center">
                                <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                                    <div className='font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full'>5</div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[3rem] w-1 border-l-2 border-green-primary border-dashed'>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <div className="flex flex-col space-y-3">
                                    <div className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-green-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>

                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                        Penggunaan Fasilitas
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        Ruang pertemuan, kelas dan/atau asrama
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 space-y-10'>
                <div className="flex justify-center space-x-5">
                    <div className="w-1/2 px-4">
                        <div className="flex flex-col justify-center h-full">
                            <div className='space-y-4'>
                                <div className="font-bold text-lg">
                                    Layanan Fasilitas
                                </div>
                                <div className="font-bold text-3xl text-green-primary">
                                    Ruangan Pertemuan
                                </div>
                                <div className="h-1 w-14 bg-yellow-400">
                                </div>
                            </div>
                            <p className='py-5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className='w-full h-[26rem] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${sejarah})`}}>

                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-center">
                    <div className="w-1/2 px-4">
                        <div className="flex flex-col justify-center h-full">
                            <div className='space-y-4'>
                                <div className="font-bold text-lg">
                                    Layanan Fasilitas
                                </div>
                                <div className="font-bold text-3xl text-green-primary">
                                    Ruangan Kelas
                                </div>
                                <div className="h-1 w-14 bg-yellow-400">
                                </div>
                            </div>
                            <p className='py-5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className='w-full h-[26rem] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${sejarah})`}}>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/2 px-4">
                        <div className="flex flex-col justify-center h-full">
                            <div className='space-y-4'>
                                <div className="font-bold text-lg">
                                    Layanan Fasilitas
                                </div>
                                <div className="font-bold text-3xl text-green-primary">
                                Asrama BUTTMKP
                                </div>
                                <div className="h-1 w-14 bg-yellow-400">
                                </div>
                            </div>
                            <p className='py-5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <div className='w-full h-[26rem] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${sejarah})`}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
      
    </div>
  )
}

export default Fasilitas
