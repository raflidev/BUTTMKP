import React from 'react'
import Navbar from "../components/Navbar"
import bgp from "../images/ilustrasi/bgp.png"
import ilus2 from "../images/ilustrasi/2.png"

function Profile() {
  return (
    <div className='min-h-screen font-montserrat'>
      <Navbar/>

      <div className="text-white bg-cover py-32 bg-center" style={{backgroundImage: `url(${bgp})`}}>
      <div className="flex justify-center">
        <div className="w-11/12">
          <div className="flex justify-between">
            <div className="space-y-3">
              <h1 className='font-bold text-5xl'>Profile</h1>
              <h2>Tentang Kami / <span className="font-bold">Profile</span></h2>
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Profile