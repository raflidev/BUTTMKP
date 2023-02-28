import logo from "./images/logo.png";
import indonesia from "./images/icons/indonesia.png";
import search from "./images/icons/search.png";

// section 1
import people from "./images/people.png"


// section 4
import ilustrasi1 from "./images/ilustrasi/1.png";
import bgf from "./images/ilustrasi/bgf.png";


// section 5
import anz from "./images/bank/ANZ.png";
import btn from "./images/bank/btn.png";
import cimb from "./images/bank/cimb.png";
import maybank from "./images/bank/maybank.png";

// section 6
import cover1 from "./images/cover1.png";

// section 7
import berita1 from "./images/berita1.png";
import berita2 from "./images/berita2.png";

// section 10
import wa from "./images/icons/wa.svg"
import indonesia2 from "./images/icons/indonesia2.png";


import DataTable from 'react-data-table-component';

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
        id: 1,
        name: 'Makan Makan 2',
        desc: 'test123123',
        date: '13 Juli 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 1,
        name: 'Makan Makan 3',
        desc: 'test123123',
        date: '20 Februari 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 1,
        name: 'Makan Makan 4',
        desc: 'test123123',
        date: '14 Juli 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 1,
        name: 'Makan Makan 5',
        desc: 'test123123',
        date: '15 Juni 2022',
        status: 'Sudah Selesai',
    },
    {
        id: 1,
        name: 'Makan Makan 6',
        desc: 'test123123',
        date: '14 Mei 2022',
        status: 'Belum Selesai',
    },
]

function App() {
  return (
    <div className="min-h-screen font-montserrat">
    {/* Navbar */}
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
                <div className="flex items-center space-x-2">
                  <div>Tentang Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <div>Layanan Kami</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <div>PPID</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
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
                <button className="bg-white flex space-x-2 items-center text-green-primary rounded-full px-5 py-2 font-bold">
                  <div>Daftar Karantina</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="text-white border border-white flex space-x-2 items-center bg-green-primary rounded-full px-5 py-2 font-bold">
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
                  <iframe className="rounded-lg" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button className="flex space-x-2 items-center px-5 py-3 bg-green-primary text-sm rounded-full font-semibold text-white">
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

          <div className="">
            <div className="grid grid-cols-4 gap-14 pt-8">
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl">Alur Layanan Karantina</div>
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quidem, tenetur omnis corrupti </div>
                  <button className="px-5 py-2 bg-green-primary rounded-full font-semibold text-white">Lebih Detail</button>
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

      {/* <div className="px-20 rounded-xl">
        <div className="aspect-w-16 aspect-h-2 rounded-lg">
          <iframe src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div> */}

      {/* Section 5 */}
      <div className="px-20 py-28">
        <div className="flex justify-center">
          <div className="text-center space-y-6">
            <div className="font-semibold">Inovasi</div>
            <div className="text-green-primary font-bold text-4xl">Inovasi Layanan</div>
            <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
            <div className="space-x-6">
              <button className="font-medium text-white rounded-full px-8 py-2 bg-green-primary">Eksternal</button>
              <button className="font-medium rounded-full px-8 py-2 border border-green-primary">Internal</button>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-8">
                <img src={anz} alt="bank anz" />
                <img src={btn} alt="bank btn" />
                <img src={cimb} alt="bank cimb" />
                <img src={maybank} alt="bank maybank" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 5 */}

      {/* Section 6 */}
      <div className="bg-green-primary" style={{ backgroundImage: `url(${bgf})` }}>
        <div className="px-20 py-20">
          <div className="flex justify-center">
            <div className="w-5/6">
              <div className="text-center">
                <div className="space-y-2">
                  <div className="text-yellow-400 font-semibold">Karya Tulis Ilmiah</div>
                  <div className="font-bold text-white text-3xl pb-5">Beragam Karya Tulis Ilmiah</div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <div className="pt-10">
                  <div className="grid grid-cols-3 gap-10">
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="text-center">
                        <img src={cover1} className="w-full" alt="" />
                        <div className="py-4 space-y-4">
                          <div className="font-bold text-lg w-5/6 mx-auto">
                            Penanaman Pupuk Menggunakan Metodelogi Hidroponik
                          </div>
                          <div className="text-sm w-5/6 mx-auto">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>

                          <button className="bg-green-primary px-7 py-2 rounded-full text-white font-semibold">Baca Karya Tulis</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="text-center">
                        <img src={cover1} className="w-full" alt="" />
                        <div className="py-4 space-y-4">
                          <div className="font-bold text-lg w-5/6 mx-auto">
                            Penanaman Pupuk Menggunakan Metodelogi Hidroponik
                          </div>
                          <div className="text-sm w-5/6 mx-auto">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>

                          <button className="bg-green-primary px-7 py-2 rounded-full text-white font-semibold">Baca Karya Tulis</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="text-center">
                        <img src={cover1} className="w-full" alt="" />
                        <div className="py-4 space-y-4">
                          <div className="font-bold text-lg w-5/6 mx-auto">
                            Penanaman Pupuk Menggunakan Metodelogi Hidroponik
                          </div>
                          <div className="text-sm w-5/6 mx-auto">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>

                          <button className="bg-green-primary px-7 py-2 rounded-full text-white font-semibold">Baca Karya Tulis</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 6 */}

      {/* Section 7 */}
      <div className="px-20 py-20">
        <div className="flex justify-center">
          <div className="w-5/6">
            <div className="">
              <div className="space-y-2 text-center">
                <div className="font-bold">Berita</div>
                <div className="font-bold text-green-primary text-3xl pb-5">Berita Terbaru Setiap Harinya</div>
                <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
              </div>
              <div className="pt-10">
                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-3">
                    <div>
                      <img src={berita1} className="w-full" alt="" />
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="w-5/6">
                            <h2 className="font-bold text-xl">Penilaian Pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM) di lingkungan Kementrian Pertanian</h2>
                          </div>
                          <div className="w-1/6 text-right">
                            <p className="font-bold">01/12/2022</p>
                          </div>
                        </div>
                          <p className="text-sm">Dalam rangka penilaian pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih...</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <img src={berita2} alt="" />
                      <div className="pt-5">
                        <div className="flex-row justify-between items-center space-y-3">
                          <div className="">
                            <h2 className="font-bold">Tingkatkan Harga Jual Jahe, Pemkab Bekasi Datangkan Eksportir</h2>
                          </div>
                          <div className="">
                            <p className="text-sm">01/12/2022</p>
                          </div>
                          <p className="txt-sm">Pemerintah Kabupaten Bekasi akan mendatangkan eksportir yang bisa menjual hasil budi daya petani.</p>
                          <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Baca Berita</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <img src={berita2} alt="" />
                      <div className="pt-5">
                        <div className="flex-row justify-between items-center space-y-3">
                          <div className="">
                            <h2 className="font-bold">Tingkatkan Harga Jual Jahe, Pemkab Bekasi Datangkan Eksportir</h2>
                          </div>
                          <div className="">
                            <p className="text-sm">01/12/2022</p>
                          </div>
                          <p className="txt-sm">Pemerintah Kabupaten Bekasi akan mendatangkan eksportir yang bisa menjual hasil budi daya petani.</p>
                          <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Baca Berita</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <img src={berita2} alt="" />
                      <div className="pt-5">
                        <div className="flex-row justify-between items-center space-y-3">
                          <div className="">
                            <h2 className="font-bold">Tingkatkan Harga Jual Jahe, Pemkab Bekasi Datangkan Eksportir</h2>
                          </div>
                          <div className="">
                            <p className="text-sm">01/12/2022</p>
                          </div>
                          <p className="txt-sm">Pemerintah Kabupaten Bekasi akan mendatangkan eksportir yang bisa menjual hasil budi daya petani.</p>
                          <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Baca Berita</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* End Section 7 */}

      {/* Section 8 */}
      <div className="bg-green-primary">
        <div className="px-20 py-20">
          <div className="flex justify-center">
            <div className="w-5/6">
              <div className="">
                <div className="space-y-2 text-center">
                  <div className="font-bold text-yellow-400">Video</div>
                  <div className="font-bold text-white text-3xl pb-5">Berita Terbaru Setiap Harinya</div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <div className="pt-8">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="">
                        <div className="rounded-xl">
                          <div className="aspect-w-16 aspect-h-9 rounded-xl">
                            <iframe className="rounded-t-xl" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div> 
                        <div className="py-5 px-7">
                          <div className="flex-row justify-between items-center space-y-3">
                            <div className="">
                              <h2 className="font-bold text-xl leading-tight">Inovasi Teknologi Terapan Di Bidang Karantina Hewan dan Tumbuhan</h2>
                            </div>
                            <div className="">
                              <p className="font-medium">01/12/2022</p>
                            </div>
                            <p className="text-sm">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                            <div className="pt-2">
                              <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Lihat Video</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="">
                        <div className="rounded-xl">
                          <div className="aspect-w-16 aspect-h-9 rounded-xl">
                            <iframe className="rounded-t-xl" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div> 
                        <div className="py-5 px-7">
                          <div className="flex-row justify-between items-center space-y-3">
                            <div className="">
                              <h2 className="font-bold text-xl leading-tight">Inovasi Teknologi Terapan Di Bidang Karantina Hewan dan Tumbuhan</h2>
                            </div>
                            <div className="">
                              <p className="font-medium">01/12/2022</p>
                            </div>
                            <p className="text-sm">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                            <div className="pt-2">
                              <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Lihat Video</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl drop-shadow-xl">
                      <div className="">
                        <div className="rounded-xl">
                          <div className="aspect-w-16 aspect-h-9 rounded-xl">
                            <iframe className="rounded-t-xl" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div> 
                        <div className="py-5 px-7">
                          <div className="flex-row justify-between items-center space-y-3">
                            <div className="">
                              <h2 className="font-bold text-xl leading-tight">Inovasi Teknologi Terapan Di Bidang Karantina Hewan dan Tumbuhan</h2>
                            </div>
                            <div className="">
                              <p className="font-medium">01/12/2022</p>
                            </div>
                            <p className="text-sm">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                            <div className="pt-2">
                              <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Lihat Video</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="bg-green-primary bg-cover" style={{ backgroundImage: `url(${bgf})` }}>
        <div className="px-16 2xl:px-10 py-20 flex justify-evenly text-white">
          <div className="w-4/12 text-sm">
            <div className="">
              <div className="flex space-x-4 items-center ">
                <img src={logo} alt="" />
                <div className="font-bold">BUTTMKP</div>
              </div>
              <p className="pt-5">Balai Uji Terap Teknik dan Metode Karantina Pertanian</p>
              
              <div className="space-y-3 pt-8">
                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <p>JL Dayeuhkolot bekasi RT01/RW02 Kec. Baleendah</p>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <p>0892131232312213123</p>
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <img src={wa} alt="" srcset="" />
                    </div>
                    <p>092138823921212121</p>
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <p>092138823921212121</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="w-1/12 text-sm">
            <div>
              <div className="font-bold text-lg">Konten</div>
              <div className="space-y-3 pt-4">
                <div>Tentang</div>
                <div>Berita</div>
                <div>Alur Pelayanan</div>
                <div>Lokasi</div>
                <div>Kontak</div>
              </div>
            </div>
          </div>
          <div className="w-4/12 text-sm">
            <div className="font-bold text-lg pb-4">Statistik Pengunjung</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={indonesia2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
            </div>
          </div>
          <div className="w-2/12 text-sm">
            <div className="space-y-4">
              <div className="font-bold text-lg">Tentang</div>
              <div>
                <p className="">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
              </div>
              <div>Email</div>
              <div>
                <div className="flex">
                  <input className="px-3 py-2 rounded-l-full" type="email" name="email" id="" />
                  <button className="px-3 py-2 rounded-r-full bg-yellow-400 text-center items-center text-green-primary font-bold">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 text-sm text-white py-3">
        <div className="text-center font-bold">&copy; Copyright BUTTMKP 2020</div>
      </div>
      {/* End Section 10 */}
    </div>
  );
}

export default App;