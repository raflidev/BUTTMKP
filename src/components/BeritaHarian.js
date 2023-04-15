import React from "react";
import { Link } from "react-router-dom";

// section 6
import cover1 from "../images/cover1.png";
import Pagination from "./Pagination";

const data = [
  {
    id: 1,
    title:
      "Keren! Hasil Uji Terap Durian Terpublikasi di Jurnal Terindeks Scopus Q2",
    desc: "Bekasi (7/04)- Durian merupakan salah satu buah tropis yang eksotik dengan cita rasa berkelas dunia. Peluang ekspor durian asal Indonesia sangat berpotensi terbuka akan tetapi stabilitas mutunya belum terukur dengan baik. Balai Uji Terap Teknik dan Metode Karantina Pertanian (BUTTMKP), salah satu instansi di bawah Badan Karantina Pertanian, mengembangkan teknologi perlakuan pembekuan kering untuk pengawetan buah durian utuh, hingga 30 hari penyimpanan.",
    image: cover1,
  },
  {
    id: 1,
    title: "BUTTMKP Kaji Formulasi Teknik dan Metode Pengendalian Vektor LSD",
    desc: "Lumpy Skin Diseasae (LSD) atau penyakit kulit menggumpal atau penyakit cacar ternak adalah penyakit pada ternak sapi dan kerbau yang disebabkan oleh virus family Poxyviridae. Penyakit ini disebarkan melalui vector arthropoda penghisap darah via gigitan. Pada tahun 2022, Karantina Pertanian Uji Terap (BUTTMKP) telah melakukan uji terap terkait LSD. Hasil yang didapatkan adalah vektor arthropoda penghisap darah yang potensial dalam penularan LSD di Indonesia adalah Culex sp. Terdapat risiko penularan LSD di daerah bebas, dengan ditemukannya serangga arthropoda penghisap darah sebagai vektor LSD di lokasi pengambilan sampel. Serta, terdapat habitat potensial perkembangbiakan vektor di lingkupngan instalasi karantina hewan (IKH) sehingga mengakibatkan risiko penularan LSD di daerah tertular sangat tinggi. Sebagai kelanjutan uji terap tersebut, BUTTMKP pada tahun 2023 ini melakukan uji terap dengan judul “Teknik Pengendalian Vektor LSD Berdasarkan Karakteristik Ekologi Sekitar Instalasi Karantina Hewan.” Sebagai langkah awal, pada Kamis (06/04) telah diadakan seminar proposal secara daring. Pembawa makalah pada seminar tersebut adalah Julia Rosmaya Riasari. Seminar yang berlangsung sekitar 2 jam tesebut, diikuti oleh 187 akun via aplikasi zoom.",
    image: cover1,
  },
  {
    id: 1,
    title: "Kementerian Pertanian Siapkan Strategi Hadapi Krisis Global",
    desc: "Apel pagi secara rutin kembali dilaksanakan melalui daring (10/04), dengan petugas apel Direktorat Jenderal Prasarana dan Sarana Pertanian. Melalui apel pagi diharapkan ASN Pertanian dapat lebih mawas dengan tugas masing-masing, untuk meningkatkan kinerja pembangunan pertanian.",
    image: cover1,
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "Penanaman pupuk menggunakan metode hidroponik adalah cara menanam tanaman tanpa tanah yang menggunakan larutan nutrisi untuk pertumbuhan.",
    image: cover1,
  },
  {
    id: 1,
    title: "EPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "FPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
];

function BeritaHarian() {
  // make pagination from data
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="px-20 py-20">
        <div className="flex justify-center">
          <div className="w-5/6">
            <div className="">
              <div className="space-y-2 text-center">
                <div className="font-bold">Berita</div>
                <div className="font-bold text-green-primary text-3xl pb-5">
                  Berita Terbaru Setiap Harinya
                </div>
                <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
              </div>
              <div className="pt-10">
                <div className="grid grid-cols-3 gap-8">
                  {currentPosts.map((item, index) => {
                    return (
                      <div
                        className={`${index === 0 ? "col-span-3" : ""}`}
                        key={index}
                      >
                        <div>
                          <div
                            className="h-[20rem] w-full bg-cover"
                            style={{ backgroundImage: `url(${item.image})` }}
                          ></div>
                          <div>
                            <div className="flex justify-between items-center">
                              <div className="w-5/6">
                                <h2 className="font-bold text-xl">
                                  {item.title}
                                </h2>
                              </div>
                              <div className="w-1/6 text-right">
                                <p className="font-bold">01/12/2022</p>
                              </div>
                            </div>
                            <p className="text-sm">
                              Dalam rangka penilaian pembangunan Zona Integritas
                              Menuju Wilayah Bebas dari Korupsi (WBK) dan
                              Wilayah Birokrasi Bersih...
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-10 items-center">
                  <div>
                    <Link
                      to="/detailcard"
                      className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg font-semibold bottom-10"
                    >
                      Lihat Lebih Banyak
                    </Link>
                  </div>
                  <div>
                    <Pagination
                      totalPages={data.length}
                      postPerPage={postsPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaHarian;
