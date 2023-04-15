import React from "react";
import HeaderHal from "../components/HeaderHal";
import Kontak from "../components/Kontak";
import Navbar from "../components/Navbar";

function TugasDanFungsi() {
  return (
    <div className="min-h-screen font-montserrat relative">
      <Navbar />

      <HeaderHal title="Stuktur Organisasi" menu="Tentang Kami" />

      <Kontak />

      <div className="px-20 relative z-10 py-20 bg-white space-y-16">
        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            Tugas BKP KLS 1 Bekasi
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
          <p className="font-medium text-xl">
            Tugas dan Fungsi BUTTMKP sesuai Permentan Nomor 47 Tahun 2020
            Tentang Organisasi Dan Tata Kerja Unit Pelaksana Teknis Lingkup
            Badan Karantina Pertanian BUTTMKP mempunyai tugas melaksanakan uji
            terap dan diseminasi penerapan teknik dan metode perkarantinaan
            pertanian sesuai standar internasional.
          </p>
        </div>

        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            Tugas BKP KLS 1 Bekasi
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
          <p className="font-medium text-xl">
            <ul className="list-decimal space-y-2 ml-5">
              <li>Penyusunan rencana kerja, program dan anggaran</li>
              <li>
                Pelaksanaan kerjasama dalam rangka uji terap dan diseminasi
                penerapan teknik dan metode karantina hewan, karantina tumbuhan
                dan pengawasan keamanan hayat
              </li>
              <li>
                Pelaksanaan uji terap teknik dan metode karantina hewan,
                karantina tumbuhan dan pengawasan keamanan hayati sesuai standar
                internasional; 2020, No. 1761
              </li>
              <li>
                Pelaksanaan bimbingan teknis penerapan teknik dan metode
                karantina hewan, karantina tumbuhan dan pengawasan keamanan
                hayati sesuai standar internasional
              </li>
              <li>
                Pengelolaan sistem informasi dan dokumentasi hasil uji terap
                teknik dan metode karantina hewan, karantina tumbuhan dan
                pengawasan keamanan hayati
              </li>
              <li>Pelaksanaan urusan tata usaha dan rumah tangga BUTTMKP</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TugasDanFungsi;
