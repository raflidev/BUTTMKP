import React from 'react'
import Footer from '../components/Footer'
import HeaderHal from '../components/HeaderHal'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'
import struktur from '../images/struktur.png'

function StukturOrganisasi() {
  return (
    <div className='min-h-screen font-montserrat relative'>
      <Navbar/>
      
      <HeaderHal title="Stuktur Organisasi" menu="Tentang Kami" />

      <Kontak/>

      <div className="px-20 relative z-10 py-20 bg-white space-y-16">
        <div className='space-y-4'>
          <div className="font-bold text-3xl text-green-primary">
          Struktur Organisasi BUTTMKP
          </div>
          <div className="h-1 w-14 bg-yellow-400">
          </div>
          <div className='flex justify-center'>
            <img src={struktur} alt="" srcset="" />
          </div>
        </div>

      </div>

      <Footer/>
      
    </div>
  )
}

export default StukturOrganisasi
