import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'
import cover1 from "../images/cover1.png";

function Laporan() {
    const data = [
        {
          id: 1,
          nama: "Laporan Tahunan",
        },
        {
          id: 2,
          nama: "Laporan Keuangan",
        },
        {
          id: 3,
          nama: "Laporan Statistik dan Kepegawaian",
        },
        {
          id: 4,
          nama: "DIPA",
        },
    ]
  const [active, setActive] = useState(0);
  return (
    <div className='min-h-screen font-montserrat relative'>
        <Navbar/>
        
        <HeaderHal title="Laporan" menu="PPID" />

        <Kontak/>

        <div className="px-20 relative z-10 py-20 bg-white space-y-16"> 
            <div className='space-y-4'>
                <div className="font-bold text-3xl text-green-primary">
                Berbagai Macam Laporan
                </div>
                <div className="h-1 w-14 bg-yellow-400">
                </div>
            </div>

            <div className='grid grid-cols-4'>
            {
                data.map((item, index) => {
                return (
                    <div key={index}>
                    <button onClick={() => setActive(item.id-1)} className={`${data[active].nama === item.nama ? ' text-green-primary bg-green-100 border border-b-green-primary' : 'text-gray-400 border border-b-gray-400' } hover:bg-green-100 hover:text-green-primary  w-full  px-3 py-3 font-bold  border-transparent`}>
                        {item.nama}
                    </button>
                    </div>
                )
                }
                )
            }
            </div>

            <div className='grid grid-cols-3 gap-4'>
                <div className='flex justify-center'>
                    <div className='w-10/12'>
                        <div className='bg-white rounded-xl shadow-md'>
                            <div className='h-[14rem] w-full bg-cover bg-center rounded-t-xl' style={{backgroundImage: `url(${cover1})`}}>
                            </div>
                            <div className='p-6'>
                                <div className="space-y-2">
                                    <div className="">
                                        <h2 className="font-bold text-xl">Laporan Keuangan Tahunan BUTTMKP</h2>
                                    </div>
                                    <div className="">
                                        <p className="">01/12/2022</p>
                                    </div>
                                    <p className="text-sm">Dalam rangka penilaian pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih</p>
                                    <div className="pt-2">
                                        <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Baca Laporan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
      
    </div>
  )
}

export default Laporan
