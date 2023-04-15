import React from "react";
import Kontak from "../components/Kontak";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgf from "../images/ilustrasi/bgf.png";

function Detail() {
  return (
    <div className="min-h-screen font-montserrat relative">
      <Navbar />
      <div
        className="px-20 py-20 text-white"
        style={{ backgroundImage: `url(${bgf})` }}
      >
        <div className="text-3xl font-bold">
          Balai Uji Terap Teknik dan Metode Karantina Pertanian
        </div>
      </div>
      <div className="px-20 py-6 text-lg space-y-7">
        <p>
          Badan Karantina Pertanian (BKP) memiliki peran penting dalam menjaga
          ketahanan pangan di Indonesia. Salah satu tugas utama BKP adalah
          melakukan mitigasi gangguan terhadap ketahanan pangan melalui
          perlindungan kelestarian sumberdaya alam hayati hewan dan tumbuhan
          dari serangan hama dan penyakit hewan karantina (HPHK), serta
          organisme pengganggu tumbuhan karantina (OPTK). Hal ini dilakukan
          untuk memastikan bahwa komoditas pertanian yang dihasilkan Indonesia
          tidak terkontaminasi dan aman untuk dikonsumsi masyarakat. Selain itu,
          perlindungan ini juga akan memastikan bahwa produksi pertanian tidak
          terganggu dan memberikan dampak negatif pada ketahanan pangan
          nasional.
        </p>
        <p>
          Selain melakukan perlindungan terhadap sumberdaya alam hayati hewan
          dan tumbuhan, BKP juga berperan dalam memfasilitasi perdagangan
          komoditas pertanian. BKP memastikan bahwa produk pertanian yang akan
          diimpor atau diekspor memenuhi standar karantina yang telah
          ditetapkan. Standar karantina ini meliputi persyaratan mengenai
          kesehatan dan keamanan produk, serta mengenai kelayakan ekonomi. Dalam
          hal ini, BKP juga bekerja sama dengan pihak lain seperti Kementerian
          Pertanian, Kementerian Perdagangan, dan lembaga terkait lainnya untuk
          memastikan kelancaran perdagangan komoditas pertanian. Dengan
          demikian, BKP juga turut berperan dalam mempertahankan dan
          meningkatkan akses pasar komoditas pertanian Indonesia di tingkat
          internasional.
        </p>
        <p>
          Selain tugas utama tersebut, BKP juga berupaya untuk meningkatkan
          citra dan kualitas pelayanan publik yang diberikan. Hal ini dilakukan
          dengan cara meningkatkan kualitas sumber daya manusia yang dimiliki,
          serta dengan memperbaiki sistem pelayanan publik yang ada. Peningkatan
          kualitas pelayanan publik yang dilakukan oleh BKP diharapkan dapat
          memberikan kepuasan dan kepercayaan masyarakat terhadap lembaga ini.
          Dengan kepercayaan yang tinggi dari masyarakat, BKP akan lebih mudah
          dalam menjalankan tugas-tugasnya dan mendukung terwujudnya ketahanan
          pangan yang baik di Indonesia.
        </p>
      </div>

      <Kontak />
      <Footer />
    </div>
  );
}

export default Detail;
