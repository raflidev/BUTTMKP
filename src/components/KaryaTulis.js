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

function KaryaTulis() {
  // make pagination from data
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);



  return (
    <div>
      <div className="bg-green-primary" style={{ backgroundImage: `url(${bgf})` }}>
        <div className="px-20 py-20">
          <div className="flex justify-center">
            <div className="w-5/6">
              <div className="text-center">
                <div className="space-y-2">
                  <div className="text-yellow-400 font-semibold">Karya Tulis Ilmiah</div>
                  <div className="font-bold text-white text-3xl pb-5">Beragam Karya Tulis Ilmiah</div>
                  <div className="mx-auto h-1 w-16 bg-yellow-400"></div>
                </div>
                <div className="pt-10">
                  <div className="grid grid-cols-3 gap-10">
                  {
                    currentPosts.map((item, index) => {
                    return (
                      <div key={index} className="bg-white rounded-xl drop-shadow-xl">
                        <div className="text-center">
                          <img src={item.image} className="w-full" alt="" />
                          <div className="py-4 space-y-4">
                            <div className="font-bold text-lg w-5/6 mx-auto">
                              {item.title}
                            </div>
                            <div className="text-sm w-5/6 mx-auto">{item.desc}</div>
                            <button className="bg-green-primary hover:bg-green-600 px-7 py-2 rounded-full text-white font-semibold">Baca Karya Tulis</button>
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
    </div>
  )
}

export default KaryaTulis