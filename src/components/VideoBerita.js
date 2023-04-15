import React from "react";
import { Link } from "react-router-dom";

// section 6
import cover1 from "../images/cover1.png";
import Pagination from "./Pagination";

const data = [
  {
    id: 1,
    title:
      "Senam Ceria Manuk Dadali Badan Karantina Terap Teknik Karantina Pertanian 2022",
    desc: "SobatQ Mohon bantuan untuk subscribe channel Karantina Pertanian Uji Terap, kemudian Like, Comment, dan Share video ini Terima kasih atas aksi jempolnya.",
    image: cover1,
    link: "https://www.youtube.com/embed/40A66GHwG8I",
  },
  {
    id: 2,
    title:
      "Hymne Badan Karantina Pertanian - Balai Uji Terap Teknik dan Metode Karantina Pertanian (2022)",
    desc: "SobatQ Mohon bantuan untuk subscribe channel Karantina Pertanian Uji Terap, kemudian Like, Comment, dan Share video ini Terima kasih atas aksi jempolnya",
    image: cover1,
    link: "https://www.youtube.com/embed/Q1ZLnYhZhCE",
  },
  {
    id: 1,
    title:
      "Mars Badan Karantina Pertanian - Balai Uji Terap Teknik dan Metode Karantina Pertanian 2022",
    desc: "SobatQ Mohon bantuan untuk subscribe channel Karantina Pertanian Uji Terap, kemudian Like, Comment, dan Share video ini Terima kasih atas aksi jempolnya.",
    image: cover1,
    link: "https://www.youtube.com/embed/13sTX9we15w",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
  {
    id: 1,
    title: "Penanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
    link: "https://www.youtube.com/embed/D0UnqGm_miA?controls=0",
  },
];

function VideoBerita() {
  // make pagination from data
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="bg-green-primary">
        <div className="px-20 py-20">
          <div className="flex justify-center">
            <div className="w-5/6">
              <div className="">
                <div className="space-y-2 text-center">
                  <div className="font-bold text-yellow-400">Video</div>
                  <div className="font-bold text-white text-3xl pb-5">
                    Berita Terbaru Setiap Harinya
                  </div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <div className="pt-8">
                  <div className="grid grid-cols-3 gap-8">
                    {currentPosts.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl drop-shadow-xl"
                        >
                          <div className="">
                            <div className="rounded-xl">
                              <div className="aspect-w-16 aspect-h-9 rounded-xl">
                                <iframe
                                  title="1"
                                  className="rounded-t-xl"
                                  src={item.link}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                            <div className="py-5 px-7">
                              <div className="flex-row justify-between items-center space-y-3">
                                <div className="">
                                  <h2 className="font-bold text-xl leading-tight">
                                    {item.title}
                                  </h2>
                                </div>
                                <div className="">
                                  <p className="font-medium">01/12/2022</p>
                                </div>
                                <p className="text-sm">{item.desc} </p>
                                <div className="pt-2">
                                  <Link
                                    to="/detail"
                                    className="inline-block bg-green-primary hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold text-sm"
                                  >
                                    Lihat Video
                                  </Link>
                                </div>
                              </div>
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
    </div>
  );
}

export default VideoBerita;
