// import logo from "../images/logo.png";
import FeatherIcon from 'feather-icons-react';

// section 1
import people from "../images/people.png"


// section 4
import ilustrasi1 from "../images/ilustrasi/1.png";
import bgf from "../images/ilustrasi/bgf.png";


// section 5
import anz from "../images/bank/ANZ.png";
import btn from "../images/bank/btn.png";
import cimb from "../images/bank/cimb.png";
import maybank from "../images/bank/maybank.png";


// section 10



import DataTable from 'react-data-table-component';
import { useState } from "react";
import KaryaTulis from "../components/KaryaTulis";
import VideoBerita from "../components/VideoBerita";
import BeritaHarian from "../components/BeritaHarian";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kontak from "../components/Kontak";

const columns = [
    {
        name: 'Nama Acara',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Deskripsi Acara',
        selector: row => row.desc,
        sortable: true,
    },
    {
        name: 'Tanggal',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        name: 'Makan Makan',
        desc: 'test123123',
        date: '13 Januari 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 2,
        name: 'Makan Makan 2',
        desc: 'test123123',
        date: '13 Juli 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 3,
        name: 'Makan Makan 3',
        desc: 'test123123',
        date: '20 Februari 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 4,
        name: 'Makan Makan 4',
        desc: 'test123123',
        date: '14 Juli 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 5,
        name: 'Makan Makan 5',
        desc: 'test123123',
        date: '15 Juni 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 6,
        name: 'Makan Makan 6',
        desc: 'test123123',
        date: '14 Mei 2022',
        status: 'Belum Selesai',
    },
]

const inovasi = [
  {
    id: 1,
    tipe: 'Eksternal',
    layanan: [anz, btn, cimb, maybank]
  },
  {
    id: 2,
    tipe: 'Internal',
    layanan: [anz, maybank]
  }
]

function Home() {
  

  const [more, setMore] = useState(false);
  const [inovasilayanan, setInovasiLayanan] = useState(inovasi[0]);

  const handleMore = () => {
    setMore(!more);
  }

  return (
    <div className="min-h-screen font-montserrat relative">
      {/* Fixed */}
      <Kontak/>
      {/* End Fixed */}
      {/* Navbar */}
      <Navbar/>
      {/* End Navbar */}

      {/* Section 1 */}
      <div className="px-20 py-0 xl:py-10 2xl:pt-0 bg-green-primary text-white" id="section 1">
        <div className="flex justify-center items-center">
          <div className="space-y-4 w-4/6">
              <div className="font-bold text-lg">
                Perancangan
              </div>
              <div className="text-4xl 2xl:text-5xl font-bold">
              Pembangunan Zona Integritas
              </div>
              <div className="w-4/6">
              Balai Uji Terap Teknik dan Metode Karantina Pertanian (BUTTMKP) siap untuk melakukan langkah perubahan. Berkomitmen pada level pimpinan, pembangunan zona integritas untuk seluruh pegawai.
              </div>
              <div className="flex space-x-5 pt-10">
                <button className="bg-white border hover:border-white hover:bg-transparent hover:text-white duration-300 flex space-x-2 items-center text-green-primary rounded-full px-5 py-2 font-bold">
                  <div>Daftar Karantina</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="text-white border border-white flex space-x-2 items-center hover:bg-green-600 duration-300 bg-green-primary rounded-full px-5 py-2 font-bold">
                  <div>Info Selengkapnya</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
          </div>
          <div className="relative w-2/6">
            <img className="relative z-10 -bottom-0 lg:-bottom-10 select-none" src={people} alt="" />
            <div className="absolute right-8 top-1/4 z-0">
              <div className="w-[32rem] h-[32rem] bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="px-20 pt-10 relative z-10 bg-white">
        <div>
          <div className="font-semibold">Tentang</div>
            <div className="font-bold text-3xl text-green-primary">
            Apa Itu Balai Uji Teknik dan Metode Karantina?
            </div>
            <div className="h-1 w-10 bg-yellow-400 mt-4"></div>
            <div className=" mt-4">
              <div className="space-y-3">
                <div className="aspect-w-16 aspect-h-3 rounded-lg">
                  <iframe title="2" className="rounded-lg" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button className="flex space-x-2 items-center px-5 py-3 bg-green-primary hover:bg-green-600 duration-300 text-sm rounded-full font-semibold text-white">
                <span>
                  Lebih Detail
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* End Section 2 */}

      {/* Section 3 */}
      <div className="px-20 relative z-10 py-20 bg-white">
        <div>
          <div className="font-semibold">Detail Informasi</div>
          <div className="font-bold text-3xl text-green-primary">
          Informasi Lainnya
          </div>
          <div className="h-1 w-10 bg-yellow-400 mt-4">
          </div>

          <div className="relative">
            <div className={`bg-gradient-to-t from-white top-0 w-full h-full ${more ? 'hidden' : 'absolute'}`}>
              <div className="flex justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg font-semibold absolute bottom-10" onClick={handleMore}>Lihat Lebih Banyak</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-14 pt-8">
              <div className="z-10">
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="repeat" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div className="z-10">
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="clipboard" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div className="z-10">
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="radio" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div className="z-10">
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="book-open" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="repeat" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="battery-charging" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="battery-charging" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <FeatherIcon icon="battery-charging" className="w-16 h-16 text-green-primary" />
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white hover:bg-green-600 duration-300">Lebih Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 3 */}

      {/* Section 4 */}
      <div className="px-20">
        <div className="relative bg-green-primary rounded-xl bg-cover" style={{ backgroundImage: `url(${bgf})` }}>
        <div className="flex">
          <div className="rounded-full">
            <div className="absolute bottom-0 w-[17rem] h-[17rem] bg-yellow-400 rounded-t-full  rounded-br-full"></div>
            <img className=" relative z-10 -mt-16 -ml-10" src={ilustrasi1} alt="" />
          </div>
          <div className="w-4/6 text-white flex items-center">
            <div className="space-y-4">
              <div className="font-bold text-5xl">Laporkan!</div>
              <div className="font-semibold">Sistem Pengendalian Pemerintah (SPIP) & Sistem Informasi Pelayanan Publik (SIPP)</div>
              <div className="w-9/12">Bila anda menemukan indikasi pungutan liar petugas karantina SMS center / WhatsApp Balai Uji Terap Teknik dan Metode Karantina</div>

              <div className="flex space-x-5 font-bold pt-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                0811-1380-5646 - Klik nomor disamping untuk kirim pesan
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* End Section 4 */}

      {/* Section 5 */}
      <div className="px-20 py-28">
        <div className="flex justify-center">
          <div className="text-center space-y-6">
            <div className="font-semibold">Inovasi</div>
            <div className="text-green-primary font-bold text-4xl">Inovasi Layanan</div>
            <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
            <div className="space-x-6">
              {
                inovasi.map((item, index) => (
                  <button key={index} onClick={() => setInovasiLayanan(inovasi[item.id-1])} className={`${item.tipe === inovasilayanan.tipe ? 'bg-green-primary text-white' : '' } duration-300 hover:bg-green-600 hover:border-green-600 hover:text-white font-medium rounded-full px-8 py-2 border border-green-primary`}>{item.tipe}</button>
                ))
              }
              {/* <button className="font-medium rounded-full px-8 py-2 border border-green-primary">Internal</button> */}
            </div>
            <div>
              <div className="grid grid-cols-4 gap-8 content-center">
                {
                  inovasilayanan.layanan.map((item, index) => (
                    <img src={item} key={index} className="duration-300" alt="bank" />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 5 */}

      {/* Section 6 */}
         <KaryaTulis/>
      {/* End Section 6 */}

      {/* Section 7 */}
        <BeritaHarian/>
      {/* End Section 7 */}

      {/* Section 8 */}
        <VideoBerita/>
      {/* End Section 8 */}

      {/* section 9 */}
      <div className="px-20 py-20">
        <div className="flex justify-center">
            <div className="w-5/6">
              <div className="">
                <div className="space-y-2 text-center">
                  <div className="font-bold">Agenda</div>
                  <div className="font-bold text-green-primary text-3xl pb-5">Agenda Kegiatan</div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <DataTable
                      columns={columns}
                      data={data}
                      fixedHeader
                      fixedHeaderScrollHeight="300px"
                      
                      pagination
                      responsive
                      subHeaderWrap
                  />
              </div>
            </div>
          </div>
      </div>
      {/* End section 9 */}

      {/* Section 10 */}
      <Footer/>
      {/* End Section 10 */}
    </div>
  );
}

export default Home;