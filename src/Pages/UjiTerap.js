import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'

function UjiTerap() {
    const data = [
        {
          id: 1,
          nama: "Kumpulan Uji Terap Karantina Tumbuhan",
          value: [
            "Penyusunan rencana dan evaluasi pelaporan",
            "Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK",
            "Pelaksaanan pemantauan daerah serba HPHK",
            "Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK",
            "Pelaksaanan pemantauan daerah serba HPHK",
            "Penyusunan rencana dan evaluasi pelaporan",
          ]
        },
        {
          id: 2,
          nama: "Kumpulan Uji Terap Karantina Hewan",
          value: [
            "Penyusunan rencana dan evaluasi pelaporan",
            "Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK",
            "Pelaksaanan pemantauan daerah serba HPHK",
            "Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK",
            "Pelaksaanan pemantauan daerah serba HPHK",
            "Penyusunan rencana dan evaluasi pelaporan",
          ]
        },
      ]
  const [active, setActive] = useState(0);
  return (
    <div className='min-h-screen font-montserrat relative'>
        <Navbar/>
        
        <HeaderHal title="Uji Terap" menu="Layanan Kami" />

        <Kontak/>
    
        <div className="px-20 relative z-10 py-20 bg-white space-y-16">
            <div className='flex items-center relative'>
            
                <div className='absolute top-7 left-0 w-full px-20'>
                    <div className='w-full border-b-2 border-black border-dashed h-1'></div>
                </div>

                <div className='grid grid-cols-5 w-full'>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-center flex-col">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Perencanaan Uji Terap
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-center flex-col">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>

                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Seminar Proposal
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-center flex-col">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>

                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Pelaksanaan Uji Terap
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-center flex-col">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>

                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='font-bold text-green-primary text-2xl w-5/6 text-center'>
                                            Seminar Hasil
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center z-20'>
                        <div className="flex justify-center flex-col">
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
                                            Uji Coba
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2'>
            {
                data.map((item, index) => {
                return (
                    <div key={index}>
                    <button onClick={() => setActive(item.id-1)} className={`${data[active].nama === item.nama ? ' text-green-primary bg-green-100 border border-b-green-primary' : 'text-gray-400 border border-b-gray-400' }  w-full  px-3 py-3 font-bold  border-transparent`}>
                        {item.nama}
                    </button>
                    </div>
                )
                }
                )
            }
            </div>

            <p className='font-medium text-xl'>
                <ul className='list-decimal space-y-2 ml-5'>
                    {
                        data[active].value.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )})
                    }
                </ul>
            </p>
        </div>

        <Footer/>
    </div>
  )
}

export default UjiTerap