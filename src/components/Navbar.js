import React from 'react'
import indonesia from "../images/icons/indonesia.png";
import search from "../images/icons/search.png";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div>
      <div id="navbar" className="">
        <div className="flex justify-center">
          <div className="w-11/12">
            <div className="flex py-5 justify-between">
              <div className=" flex items-center space-x-3">
                <img src={logo} alt="logo buttmkp" />
                <div className="font-bold">BUTTMKP</div>
              </div>
              <div className="flex space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-7 items-center font-medium">
                <div className="text-green-primary font-bold">Beranda</div>
                <div className="group flex items-center space-x-2 relative">
                  <div>Tentang Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Profil</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Visi & Misi</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Struktur Organisasi</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Tugas & Fungsi</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Pelayanan Publik</div>
                  </div>
                </div>
                <div className="group relative flex items-center space-x-2">
                  <div>Layanan Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Uji Terap</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Bimbingan Teknis</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Fasilitas</div>
                  </div>
                </div>
                <div className="group relative flex items-center space-x-2">
                  <div>PPID</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Laporan</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Rencana Strategis</div>
                    <div className='hover:bg-gray-300 px-4 py-2 cursor-pointer'>Realisasi Anggaran</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div>Inovasi Layanan</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <div>Informasi</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div>Kontak Kami</div>
              </div>
              <div className="flex items-center space-x-3">
                <img src={indonesia} alt="" />
                <div className="flex font-semibold items-center space-x-3">
                  <div>
                    Indonesia
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>

                </div>
                <img src={search} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
