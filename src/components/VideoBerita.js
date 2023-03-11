import React from 'react'
import bgf from "../images/ilustrasi/bgf.png";

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
                  <div className="font-bold text-white text-3xl pb-5">Berita Terbaru Setiap Harinya</div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <div className="pt-8">
                  <div className="grid grid-cols-3 gap-8">
                  {
                    currentPosts.map((item) => {
                    return (
                      <div key={item.id} className="bg-white rounded-xl drop-shadow-xl">
                      <div className="">
                        <div className="rounded-xl">
                          <div className="aspect-w-16 aspect-h-9 rounded-xl">
                            <iframe title="1" className="rounded-t-xl" src="https://www.youtube.com/embed/D0UnqGm_miA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div> 
                        <div className="py-5 px-7">
                          <div className="flex-row justify-between items-center space-y-3">
                            <div className="">
                              <h2 className="font-bold text-xl leading-tight">Inovasi Teknologi Terapan Di Bidang Karantina Hewan dan Tumbuhan</h2>
                            </div>
                            <div className="">
                              <p className="font-medium">01/12/2022</p>
                            </div>
                            <p className="text-sm">cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                            <div className="pt-2">
                              <button className="bg-green-primary px-6 py-2 rounded-full text-white font-semibold text-sm">Lihat Video</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                    }) 
                  }
                  </div>
                  <div className='flex justify-between mt-10 items-center'>
                    <div>
                      <button className="bg-yellow-400 py-2 px-4 rounded-lg font-semibold bottom-10" >Lihat Lebih Banyak</button>
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
    </div>
  )
}

export default VideoBerita