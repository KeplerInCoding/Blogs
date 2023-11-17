import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const {page, totalPages, handlePageChange} = useContext(AppContext);
  return (
    <div className=' bg-gradient-to-t from-orange-200 to-purple-200 w-screen fixed bottom-0 flex p-3 place-content-between'>
      <div className=''>
        {
          page>1 &&
          <button onClick={()=>handlePageChange(page-1)}>
          Prev
        </button>
        }
        {
          page<totalPages &&
          <button onClick={()=>handlePageChange(page+1)}>
          Next
        </button>
        }
      </div>

      <div>
        Page {page} of {totalPages}
      </div>
    </div>
  )
}

export default Pagination