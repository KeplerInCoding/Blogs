import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const {page, totalPages, handlePageChange} = useContext(AppContext);
  return (
    <div className='bg-gradient-to-t from-orange-200 to-purple-200/70 backdrop-blur-sm w-screen fixed bottom-0 flex p-3 place-content-between'>
      <div className='flex gap-x-3'>
        {
          page>1 &&
          <button className='px-3 py-1 bg-gradient-to-br from-cyan-300 to-slate-50 font-bold border border-black rounded-full hover:bg-gradient-to-tl hover:from-cyan-200 hover:to-slate-50' onClick={()=>handlePageChange(page-1)}>
          Prev
        </button>
        }
        {
          page<totalPages &&
          <button className='px-3 py-1 bg-gradient-to-br from-red-500 to-slate-50 font-bold border border-black rounded-full hover:bg-gradient-to-tl hover:from-red-200 hover:to-slate-50' onClick={()=>handlePageChange(page+1)}>
          Next
        </button>
        }
      </div>

      <div className='flex items-center font-bold px-3'>
        Page {page} of {totalPages}
      </div>
    </div>
  )
}

export default Pagination