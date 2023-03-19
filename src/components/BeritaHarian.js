import React from 'react'

// section 6
import cover1 from "../images/cover1.png";
import Pagination from './Pagination';

const data = [
  {
    id: 1,
    title: "APenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "BPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "CPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "DPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
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
  {
    id: 1,
    title: "GPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "HPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "IPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "JPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "KPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "LPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "MPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "NPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
    desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ",
    image: cover1,
  },
  {
    id: 1,
    title: "oPenanaman Pupuk Menggunakan Metodelogi Hidroponik",
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
                <div className="font-bold text-green-primary text-3xl pb-5">Berita Terbaru Setiap Harinya</div>
                <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
              </div>
              <div className="pt-10">
                <div className="grid grid-cols-3 gap-8">
                {
                    currentPosts.map((item, index) => {
                    return (
                      <div className={`${index === 0 ? 'col-span-3' : ''}`} key={index}>
                        <div>
                          <div className='h-[20rem] w-full bg-cover' style={{backgroundImage: `url(${item.image})`}}>
                          </div>
                          <div>
                            <div className="flex justify-between items-center">
                              <div className="w-5/6">
                                <h2 className="font-bold text-xl">{item.title}</h2>
                              </div>
                              <div className="w-1/6 text-right">
                                <p className="font-bold">01/12/2022</p>
                              </div>
                            </div>
                              <p className="text-sm">Dalam rangka penilaian pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih...</p>
                          </div>
                        </div>
                      </div>
                    )
                    }) 
                  }
                </div>
                <div className='flex justify-between mt-10 items-center'>
                    <div>
                      <button className="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg font-semibold bottom-10" >Lihat Lebih Banyak</button>
                    </div>
                    <div>
                      <Pagination totalPages={data.length} postPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeritaHarian