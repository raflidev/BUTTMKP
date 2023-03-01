import React from 'react'

function Pagination({totalPages, postPerPage, setCurrentPage, currentPage}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPages/postPerPage); i++){
    pages.push(i);
  }
  return (
    <div className='flex space-x-3'>
      <button className='bg-white rounded-full px-1' onClick={() => currentPage > 1 ? setCurrentPage(currentPage-1) : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className=' rounded-full bg-white'>
        {
          pages.map((page) => {
            return (
              <button key={page} onClick={() => setCurrentPage(page)} className={`py-1 px-3 ${page === currentPage ? 'px-5 bg-green-primary rounded-full text-white' : ''}`}>{page}</button>
            )
          })
        }
      </div>
      <button className='bg-white rounded-full px-1' onClick={() => currentPage < pages.length ? setCurrentPage(currentPage+1) : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Pagination