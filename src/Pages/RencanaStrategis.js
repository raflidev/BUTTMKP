import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'

function RencanaStrategis() {
    const data = [
        {
            id: 1,
            nama: "Tahun",
        },
        {
            id: 2,
            nama: "Informasi Berkala",
        },
        {
            id: 3,
            nama: "LAKIP",
        },
        {
            id: 4,
            nama: "Laporan PPID",
        },
    ]
  const [active, setActive] = useState(0);
  return (
    <div className='min-h-screen font-montserrat relative'>
        <Navbar/>
        
        <HeaderHal title="Rencana Strategis" menu="PPID" />

        <Kontak/>

        <div className="px-20 relative z-10 py-20 bg-white space-y-16"> 
            <div className='space-y-4'>
                <div className="font-bold text-3xl text-green-primary">
                    Rencana Strategis
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

            <p className='font-medium text-xl'>
                    <ul className='list-decimal space-y-2 ml-5'>
                        <li>Penyusunan rencana dan evaluasi pelaporan</li>
                        <li>Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK</li>
                        <li>Pelaksaanan pemantauan daerah serba HPHK</li>
                        <li>Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan, penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa HPHK dan OPTK</li>
                        <li>Pelaksaanan pemantauan daerah serba HPHK</li>
                        <li>Penyusunan rencana dan evaluasi pelaporan</li>
                    </ul>
                </p>
        </div>
        <Footer/>
    </div>
  )
}

export default RencanaStrategis
