import React from 'react'
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'

function RealisasiAnggaran() {
  return (
    <div className='min-h-screen font-montserrat relative'>
    <Navbar/>
    
    <HeaderHal title="Realisasi Anggaran" menu="PPID" />

    <Kontak/>

    <div className="px-20 relative z-10 py-20 bg-white space-y-16"> 
        <div className='space-y-4'>
            <div className="font-bold text-3xl text-green-primary">
                Realisasi Anggaran  
            </div>
            <div className="h-1 w-14 bg-yellow-400">
            </div>
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
  
</div>
  )
}

export default RealisasiAnggaran
