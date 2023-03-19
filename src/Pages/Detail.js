import React from 'react'
import Kontak from '../components/Kontak'
import Navbar from '../components/Navbar'

import bgf from "../images/ilustrasi/bgf.png"

function Detail() {
  return (
    <div className='min-h-screen font-montserrat relative'>
        <Navbar/>   
        <div className='px-20 py-20 text-white' style={{backgroundImage: `url(${bgf})`}}>
            <div className="text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

        </div>
        <div className='px-20 py-6 text-lg space-y-7'>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias unde quam. Praesentium, quasi, laborum id a enim aliquid rem reiciendis provident labore velit debitis nesciunt. Maiores quo id necessitatibus deserunt nemo delectus fuga perspiciatis optio ipsa, hic ipsam suscipit voluptates. Impedit explicabo consectetur laborum tempore fugiat deleniti eveniet nobis veritatis. Aperiam recusandae aliquam dolor. Fugit, libero. Facere ab modi doloribus vero debitis quo non vel voluptas nesciunt nostrum minima deleniti obcaecati, optio tempora exercitationem! Et quia, maiores nostrum nam eaque fugiat laborum cumque nemo eos sapiente neque quae quod incidunt illo odio soluta, quis, nisi cum maxime vel laboriosam.
            </p>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias unde quam. Praesentium, quasi, laborum id a enim aliquid rem reiciendis provident labore velit debitis nesciunt. Maiores quo id necessitatibus deserunt nemo delectus fuga perspiciatis optio ipsa, hic ipsam suscipit voluptates. Impedit explicabo consectetur laborum tempore fugiat deleniti eveniet nobis veritatis. Aperiam recusandae aliquam dolor. Fugit, libero. Facere ab modi doloribus vero debitis quo non vel voluptas nesciunt nostrum minima deleniti obcaecati, optio tempora exercitationem! Et quia, maiores nostrum nam eaque fugiat laborum cumque nemo eos sapiente neque quae quod incidunt illo odio soluta, quis, nisi cum maxime vel laboriosam.
            </p>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias unde quam. Praesentium, quasi, laborum id a enim aliquid rem reiciendis provident labore velit debitis nesciunt. Maiores quo id necessitatibus deserunt nemo delectus fuga perspiciatis optio ipsa, hic ipsam suscipit voluptates. Impedit explicabo consectetur laborum tempore fugiat deleniti eveniet nobis veritatis. Aperiam recusandae aliquam dolor. Fugit, libero. Facere ab modi doloribus vero debitis quo non vel voluptas nesciunt nostrum minima deleniti obcaecati, optio tempora exercitationem! Et quia, maiores nostrum nam eaque fugiat laborum cumque nemo eos sapiente neque quae quod incidunt illo odio soluta, quis, nisi cum maxime vel laboriosam.
            </p>
        </div>

        <Kontak/>
      
    </div>
  )
}

export default Detail
