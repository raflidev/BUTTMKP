import React from "react";
import wa from "../images/icons/wa.svg";
import indonesia2 from "../images/icons/indonesia2.png";
import logo from "../images/logo.png";
import bgf from "../images/ilustrasi/bgf.png";

import b1 from "../images/negara/1.png";
import b2 from "../images/negara/2.png";
import b3 from "../images/negara/3.png";
import b4 from "../images/negara/4.png";
import b5 from "../images/negara/5.png";
import b6 from "../images/negara/6.png";
import b7 from "../images/negara/7.png";
import b8 from "../images/negara/8.png";
import b9 from "../images/negara/9.png";

function Footer() {
  return (
    <div>
      <div
        className="bg-green-primary bg-cover"
        style={{ backgroundImage: `url(${bgf})` }}
      >
        <div className="px-16 2xl:px-10 py-20 flex justify-evenly text-white">
          <div className="w-4/12 text-sm">
            <div className="">
              <div className="flex space-x-4 items-center ">
                <img src={logo} alt="" />
                <div className="font-bold">BUTTMKP</div>
              </div>
              <p className="pt-5">
                Balai Uji Terap Teknik dan Metode Karantina Pertanian
              </p>

              <div className="space-y-3 pt-8">
                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <p>
                      Jl. Raya Kampung Utan - Setu, Desa Mekar Wangi
                      Kec.Cikarang Barat Kab.Bekasi 177520, Jawa Barat
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <p>(021) 82618923</p>
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <img src={wa} alt="" srcSet="" />
                    </div>
                    <p>+6281113805646 </p>
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <p>info@buttmkp.org</p>
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
                <img className="w-6 h-4" src={b1} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b2} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b3} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b4} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b5} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b6} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b7} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b8} alt="" />
                <div>Visitor: 28.900</div>
              </div>
              <div className="flex space-x-3 items-center">
                <img className="w-6 h-4" src={b9} alt="" />
                <div>Visitor: 28.900</div>
              </div>
            </div>
          </div>
          <div className="w-2/12 text-sm">
            <div className="space-y-4">
              <div className="font-bold text-lg">Tentang</div>
              <div>
                <p className="">
                  Badan Karantina Pertanian akan meningkatkan peran guna
                  melakukan mitigasi gangguan terhadap pangan melalui
                  perlindungan kelestarian sumberdaya alam hayati{" "}
                </p>
              </div>
              <div>Email</div>
              <div>
                <div className="flex">
                  <input
                    className="px-3 py-2 rounded-l-full"
                    type="email"
                    name="email"
                    id=""
                  />
                  <button className="px-3 py-2 rounded-r-full bg-yellow-400 text-center items-center text-green-primary font-bold">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 text-sm text-white py-3">
        <div className="text-center font-bold">
          &copy; Copyright BUTTMKP 2020
        </div>
      </div>
    </div>
  );
}

export default Footer;
