import React from 'react'

function Kontak() {
  return (
    <div>
      <div className="fixed text-white z-40 bottom-10 right-10">
        <div className="flex items-center space-x-4">
          <div>
            <button className="bg-green-primary font-semibold px-7 py-2.5 rounded-full flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
              <span>
                Hubungi Kami
              </span>
            </button>
          </div>
          <div>
            <div className="p-2 rounded-full bg-green-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontak;