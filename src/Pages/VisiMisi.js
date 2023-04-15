import React, { useState } from "react";
import HeaderHal from "../components/HeaderHal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kontak from "../components/Kontak";

function VisiMisi() {
  const data = [
    {
      id: 1,
      nama: "Balai Karantina Pertanian Kelas 1 Bekasi",
      visi: "Menjadi Pusat Rujukan Kelayakan Tindakan Karantina Pertanian Berbasis Standard Internasional di ASEAN Tahun 2024.",
      misi: [
        {
          id: 1,
          misi: "Meningkatkan aplikasi tindakan karantina dan keamanan hayati berbasis standard internasional, membangun kerjasama uji terap teknik dan metoda karantina pertanian serta keamanan hayati tingat nasional dan internasional.",
        },
      ],
    },
    {
      id: 2,
      nama: "Karantina Pertanian",
      visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
      misi: [
        {
          id: 1,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 2,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 3,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 4,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
      ],
    },
    {
      id: 3,
      nama: "Kementrian Pertanian",
      visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
      misi: [
        {
          id: 1,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 2,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 3,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 4,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
      ],
    },
    {
      id: 4,
      nama: "Presieden",
      visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
      misi: [
        {
          id: 1,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 2,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 3,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
        {
          id: 4,
          misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
        },
      ],
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen font-montserrat relative">
      <Navbar />

      <HeaderHal title="Visi Misi" menu="Tentang Kami" />

      <Kontak />

      <div className="px-20 relative z-10 py-20 bg-white">
        <div className="space-y-4">
          <div className="font-semibold text-xl">Visi & Misi</div>
          <div className="font-bold text-4xl text-green-primary">
            Visi & Misi BUTTMKP
          </div>
          <div className="h-1 w-14 bg-yellow-400"></div>
        </div>
        <div className="flex py-10">
          {data.map((item, index) => {
            return (
              <div key={index} className="">
                <button
                  onClick={() => setActive(item.id - 1)}
                  className={`${
                    data[active].nama === item.nama
                      ? "text-green-primary bg-green-100 border border-b-green-primary"
                      : "text-gray-400 border border-b-gray-400"
                  }  hover:bg-green-100 hover:text-green-primary  px-3 py-3 font-bold  border-transparent`}
                >
                  Visi & Misi {item.nama}
                </button>
              </div>
            );
          })}
        </div>

        <div className="space-y-10">
          <div>
            <h1 className="font-bold text-2xl text-green-primary">
              Visi {data[active].nama}{" "}
            </h1>
            <p className="mt-3 font-medium text-lg">{data[active].visi}</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl text-green-primary">
              Misi {data[active].nama}{" "}
            </h1>

            <div className="grid-cols-1 gap-4 space-y-4">
              {data[active].misi.map((item, index) => {
                return (
                  <div className="flex space-x-4" key={index}>
                    <div className="flex justify-center items-center bg-yellow-400 h-[5rem] w-[5rem] rounded-lg">
                      <div className="font-bold text-4xl text-black">
                        {item.id}
                      </div>
                    </div>
                    <p className="mt-3 font-semibold text-lg">{item.misi}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default VisiMisi;
