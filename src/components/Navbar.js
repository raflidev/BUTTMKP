
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import indonesia from "../images/icons/indonesia.png";
import search from "../images/icons/search.png";
import logo from "../images/logo.png";

function Navbar() {
  const {pathname} = useLocation();
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
                <NavLink to="/" className={(navData) => (navData.isActive ? 'text-green-primary font-bold' : '')}>Beranda</NavLink>
                <div className="group flex items-center space-x-2 relative">
                  <div className={pathname === '/profil' || pathname === '/visimisi' || pathname === '/stukturorganisasi' || pathname === '/tugasfungsi' || pathname === '/pelayananpublik' ? 'text-green-primary font-bold' : ''}>Tentang Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <NavLink to="/profil" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Profil</NavLink>
                    <NavLink to="/visimisi" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Visi & Misi</NavLink>
                    <NavLink to="/stukturorganisasi" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Struktur Organisasi</NavLink>
                    <NavLink to="/tugasfungsi" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Tugas & Fungsi</NavLink>
                    <NavLink to="/pelayananpublik" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Pelayanan Publik</NavLink>
                  </div>
                </div>
                <div className="group relative flex items-center space-x-2">
                  <div className={pathname === '/ujiterap' || pathname === '/bimbinganteknis' || pathname === '/fasilitas' ? 'text-green-primary font-bold' : ''}>Layanan Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <NavLink to="/ujiterap" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Uji Terap</NavLink>
                    <NavLink to="/bimbinganteknis" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Bimbingan Teknis</NavLink>
                    <NavLink to="/fasilitas" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Fasilitas</NavLink>
                  </div>
                </div>
                <div className="group relative flex items-center space-x-2">
                  <div className={pathname === '/laporan' || pathname === '/rencanastrategis' || pathname === '/realisasianggaran' ? 'text-green-primary font-bold' : ''}>PPID</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div className='hidden absolute top-6  flex-col w-52 group-hover:flex bg-white rounded border border-black'>
                    <NavLink to="/laporan" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Laporan</NavLink>
                    <NavLink to="/rencanastrategis" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Rencana Strategis</NavLink>
                    <NavLink to="/realisasianggaran" className={(navData) => (navData.isActive ? 'text-green-primary font-bold bg-green-100 px-4 py-2 cursor-pointer' : 'hover:bg-gray-300 px-4 py-2 cursor-pointer')}>Realisasi Anggaran</NavLink>
                  </div>
                </div>
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
