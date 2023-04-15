import React from "react";
import Footer from "../components/Footer";
import HeaderHal from "../components/HeaderHal";
import Kontak from "../components/Kontak";
import Navbar from "../components/Navbar";

function BimbinganTeknis() {
  return (
    <div className="min-h-screen font-montserrat relative">
      <Navbar />

      <HeaderHal title="Bimbingan Teknis" menu="Layanan Kami" />

      <Kontak />

      <div className="px-20 relative z-10 py-20 bg-white space-y-16">
        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            SOP Bimtek
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
        </div>

        <div className="flex items-center relative">
          <div className="absolute top-7 left-0 w-full px-20">
            <div className="w-full border-b-2 border-black border-dashed h-1"></div>
          </div>

          <div className="grid grid-cols-5 w-full">
            <div className="flex justify-center z-20">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                    <div className="font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full">
                      1
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[3rem] w-1 border-l-2 border-green-primary border-dashed"></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-10 h-10 text-green-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <div className="font-bold text-green-primary text-2xl w-5/6 text-center">
                        Perencanaan Bimtek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center z-20">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                    <div className="font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full">
                      2
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[3rem] w-1 border-l-2 border-green-primary border-dashed"></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-10 h-10 text-green-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <div className="font-bold text-green-primary text-2xl w-5/6 text-center">
                        Penelaahan Perencanaan Bimtek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center z-20">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                    <div className="font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full">
                      3
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[3rem] w-1 border-l-2 border-green-primary border-dashed"></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-10 h-10 text-green-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <div className="font-bold text-green-primary text-2xl w-5/6 text-center">
                        Konfirmasi Perencanaan Bimtek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center z-20">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                    <div className="font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full">
                      4
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[3rem] w-1 border-l-2 border-green-primary border-dashed"></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-10 h-10 text-green-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <div className="font-bold text-green-primary text-2xl w-5/6 text-center">
                        Pembayaran Fasilitas & Administrasi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center z-20">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div className="flex justify-center items-center bg-yellow-200 h-[5rem] w-[5rem] rounded-full">
                    <div className="font-bold text-4xl text-white bg-yellow-400  h-[4rem] w-[4rem] flex justify-center items-center rounded-full">
                      5
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-[3rem] w-1 border-l-2 border-green-primary border-dashed"></div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-10 h-10 text-green-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <div className="font-bold text-green-primary text-2xl w-5/6 text-center">
                        Pelaksanaan Bimtek
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            Pelaksanaan Bimtek
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
          <p className="font-medium text-xl">
            <ul className="list-decimal space-y-2 ml-5">
              <li>Penyusunan rencana dan evaluasi pelaporan</li>
              <li>
                Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan,
                penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa
                HPHK dan OPTK
              </li>
              <li>Pelaksaanan pemantauan daerah serba HPHK</li>
              <li>
                Pelaksanaan pemeriksaan, pengasingan, pengamatan, perlakuan,
                penahanan, Penolakan, Pemusnahan, dan Pembesan Media Pembawa
                HPHK dan OPTK
              </li>
              <li>Pelaksaanan pemantauan daerah serba HPHK</li>
              <li>Penyusunan rencana dan evaluasi pelaporan</li>
            </ul>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BimbinganTeknis;
