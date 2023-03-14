import React from 'react'
import bgp from "../images/ilustrasi/bgp.png"

function HeaderHal(props) {
  return (
    <div>
      <div className="text-white bg-cover py-32 bg-center" style={{backgroundImage: `url(${bgp})`}}>
        <div className="flex justify-center">
          <div className="w-11/12">
            <div className="flex justify-between">
              <div className="space-y-3">
                <h1 className='font-bold text-5xl'>{props.title}</h1>
                <h2>{props.menu} / <span className="font-bold">{props.title}</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHal
