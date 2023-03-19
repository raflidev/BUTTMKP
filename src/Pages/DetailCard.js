import React from 'react'
import Kontak from '../components/Kontak';
import Navbar from '../components/Navbar';

import cover1 from "../images/cover1.png";
import bgf from "../images/ilustrasi/bgf.png";

function DetailCard() {
  return (
    <div className='min-h-screen font-montserrat relative'>
        <Navbar/>   
        <div className='px-20 py-20 text-white' style={{backgroundImage: `url(${bgf})`}}>
            <div className="text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        <div className='px-20 py-6 text-lg space-y-7'>
          <div className="grid grid-cols-3 gap-10">
            {
              [...Array(10)].map((x, i) => 
              <div className="bg-white rounded-xl drop-shadow-xl">
                <div className="text-center">
                  <img src={cover1} className="w-full" alt="" />
                  <div className="py-4 space-y-4">
                    <div className="font-bold text-lg w-5/6 mx-auto">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </div>
                    <div className="text-sm w-5/6 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quo reiciendis earum unde quisquam ex error tenetur culpa maxime voluptate.</div>
                    <button className="bg-green-primary hover:bg-green-600 px-7 py-2 rounded-full text-white font-semibold">Baca Karya Tulis</button>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>

        <Kontak/>
      
    </div>
  )
}

export default DetailCard
