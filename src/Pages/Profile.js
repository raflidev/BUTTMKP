import React from 'react'
import Navbar from "../components/Navbar"
import bgf from "../images/ilustrasi/bgf.png"
import sejarah from "../images/sejarah.png"
import Footer from '../components/Footer'
import wab from "../images/icons/wab.svg"
import HeaderHal from '../components/HeaderHal'

function Profile() {
  return (
    <div className='min-h-screen font-montserrat'>
      <Navbar/>

      <HeaderHal title="Profile" menu="Tentang Kami" />

      <div className="px-20 relative z-10 py-20 bg-white">
        <div className='space-y-4'>
          <div className="font-semibold text-xl">Sejarah</div>
          <div className="font-bold text-4xl text-green-primary">
            Sejarah Balai Karantina Pertanian Bekasi Terbentuk
          </div>
          <div className="h-1 w-14 bg-yellow-400">
          </div>
        </div>

        <div className='space-y-5 mt-5'>
          <div>
            <img className='w-full rounded-xl' src={sejarah} alt="" />
          </div>
          <div className='space-y-5'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

      </div>

      <div className="text-white py-32 bg-center" style={{backgroundImage: `url(${bgf})`}}>
        <div className=' space-y-4 text-center'>
          <div className="font-semibold text-xl text-yellow-400">Perkembangan</div>
          <div className="font-bold text-4xl text-white">
            Perkembangan BUTTMKP Dari Waktu ke Waktu
          </div>
          <div className="h-1 w-16 bg-yellow-400 mx-auto">
          </div>

          <div className="flex justify-center pt-10">
            <div className="w-10/12">
              <div className='grid grid-cols-2 gap-8'>
                <div className="relative flex justify-center">
                  <div className="w-11/12">
                    <div className='bg-white w-full rounded-xl text-left'>
                      <div className='h-[15rem] bg-cover rounded-t-xl' style={{backgroundImage: `url(${sejarah})`}}></div>
                      <div className='text-xl font-bold p-5 space-y-5 text-black'>
                        <div className='text-green-primary'>1990-1995</div>
                        <div>BUTTMKP Membangun Tempat Pertamanya</div>
                        <div className='font-normal text-lg'>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -top-5 left-0'>
                    <div className="flex justify-center items-center bg-yellow-400 h-[5rem] w-[5rem] rounded-full">
                      <div className='font-bold text-4xl text-green-primary'>1</div>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="w-11/12">
                    <div className='bg-white w-full rounded-xl text-left'>
                      <div className='h-[15rem] bg-cover rounded-t-xl' style={{backgroundImage: `url(${sejarah})`}}></div>
                      <div className='text-xl font-bold p-5 space-y-5 text-black'>
                        <div className='text-green-primary'>1990-1995</div>
                        <div>BUTTMKP Membangun Tempat Pertamanya</div>
                        <div className='font-normal text-lg'>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -top-5 left-0'>
                    <div className="flex justify-center items-center bg-yellow-400 h-[5rem] w-[5rem] rounded-full">
                      <div className='font-bold text-4xl text-green-primary'>1</div>
                    </div>
                  </div>
                </div>
                

                <div className="relative flex justify-center">
                  <div className="w-11/12">
                    <div className='bg-white w-full rounded-xl text-left'>
                      <div className='h-[15rem] bg-cover rounded-t-xl' style={{backgroundImage: `url(${sejarah})`}}></div>
                      <div className='text-xl font-bold p-5 space-y-5 text-black'>
                        <div className='text-green-primary'>1990-1995</div>
                        <div>BUTTMKP Membangun Tempat Pertamanya</div>
                        <div className='font-normal text-lg'>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -top-5 left-0'>
                    <div className="flex justify-center items-center bg-yellow-400 h-[5rem] w-[5rem] rounded-full">
                      <div className='font-bold text-4xl text-green-primary'>1</div>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="w-11/12">
                    <div className='bg-white w-full rounded-xl text-left'>
                      <div className='h-[15rem] bg-cover rounded-t-xl' style={{backgroundImage: `url(${sejarah})`}}></div>
                      <div className='text-xl font-bold p-5 space-y-5 text-black'>
                        <div className='text-green-primary'>1990-1995</div>
                        <div>BUTTMKP Membangun Tempat Pertamanya</div>
                        <div className='font-normal text-lg'>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -top-5 left-0'>
                    <div className="flex justify-center items-center bg-yellow-400 h-[5rem] w-[5rem] rounded-full">
                      <div className='font-bold text-4xl text-green-primary'>1</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='py-10'>
        <div className=' space-y-4 text-center'>  
          <div className="font-semibold text-xl text-black">Lokasi</div>
          <div className="font-bold text-4xl text-green-primary">
            Lokasi Balai Karantina Pertanian Bekasi 
          </div>
          <div className="h-1 w-16 bg-yellow-400 mx-auto">
          </div>
        </div>
        <div className='pt-10'>
          <div className="flex justify-center">
            <div className="w-11/12">
            <iframe
            className='w-5/6 mx-auto h-96'
            loading="lazy"
            title='maps'
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M
              &q=BUTTMKP">
            </iframe>
            </div>
          </div>
        </div>

        <div className='text-center font-medium my-4'>Jl. Raya Ps. Setu No.10, Mekarwangi, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17320</div>
        <div className='flex justify-center space-x-6'>
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
                <img src={wab} alt="" srcSet="" />
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

      <Footer/>
    </div>
  )
}

export default Profile
