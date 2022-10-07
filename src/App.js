import logo from "./images/logo.png";
import indonesia from "./images/icons/indonesia.png";
import search from "./images/icons/search.png";

// section 1
import people from "./images/people.png"

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
              Balai Uji Terap Teknik dan Metode Karantina siap untuk melakukan langkah perubahan. Karenaaa Balai uji.....
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
    </div>
  );
}

export default App;
