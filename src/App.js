import logo from "./images/logo.png";
import indonesia from "./images/icons/indonesia.png";
import search from "./images/icons/search.png";

// section 1
import people from "./images/people.png"


// section 4
import ilustrasi1 from "./images/ilustrasi/1.png";


// section 5
import anz from "./images/bank/ANZ.png";
import btn from "./images/bank/btn.png";
import cimb from "./images/bank/cimb.png";
import maybank from "./images/bank/maybank.png";

// section 6
import cover1 from "./images/cover1.png";

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
              <div className="flex space-x-7 items-center font-medium">
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
      <div className="px-20 bg-green-primary text-white" id="section 1">
        <div className="flex justify-center items-center">
          <div className="space-y-4 w-4/6">
              <div className="font-bold text-lg">
                Perancangan
              </div>
              <div className="text-5xl font-bold">
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
            <img className="relative z-10 select-none" src={people} alt="" />
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
          <div className="h-1 w-10 bg-yellow-400 mt-4">
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
            <div className="grid grid-cols-4 gap-10 pt-8">
              <div>
                <div className="space-y-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
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
        <div className="relative bg-green-primary rounded-xl">
        <div className="flex">
          <div className="rounded-full">
            <div className="absolute bottom-0 w-[17rem] h-[17rem] bg-yellow-400 rounded-t-full  rounded-br-full"></div>
            <img className=" relative z-10 -mt-16 -ml-10" src={ilustrasi1} alt="" />
          </div>
          <div className="w-4/6 text-white  flex items-center">
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
      <div className="px-20 py-10">
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
      <div className="bg-green-primary">
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
    </div>
  );
}

export default App;