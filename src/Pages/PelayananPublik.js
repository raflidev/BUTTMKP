import React from "react";
import HeaderHal from "../components/HeaderHal";
import Kontak from "../components/Kontak";
import Navbar from "../components/Navbar";

function PelayananPublik() {
  return (
    <div className="min-h-screen font-montserrat relative">
      <Navbar />

      <HeaderHal title="Pelayanan Publik" menu="Tentang Kami" />

      <Kontak />

      <div className="px-20 relative z-10 py-20 bg-white space-y-16">
        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            Komitmen Bersama
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
          <p className="font-medium text-xl">
            BUTTMKP Pelayanan Publik memiliki komitmen untuk memberikan layanan
            terbaik bagi masyarakat dalam mengatasi gangguan terhadap ketahanan
            pangan dan kelestarian sumber daya alam hayati hewan dan tumbuhan
            dari serangan hama dan penyakit karantina serta organisme pengganggu
            tumbuhan karantina. Dengan didukung oleh tenaga ahli dan teknologi
            yang terus berkembang, BUTTMKP Pelayanan Publik berusaha
            memfasilitasi perdagangan dalam rangka mempertahankan dan
            meningkatkan akses pasar komoditas pertanian, serta meningkatkan
            citra dan kualitas pelayanan publik.
          </p>
        </div>

        <div className="space-y-4">
          <div className="font-bold text-3xl text-green-primary">
            Standar Pelayanan Publik
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
    </div>
  );
}

export default PelayananPublik;
