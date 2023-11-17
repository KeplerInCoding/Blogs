import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const [page, totalPages, handlePageChange] = useContext(AppContext);
  return (
    <div>
      <div>
        {
          page>1 &&
          <button onClick={()=>{handlePageChange(page-1)}}>
          Prev
        </button>
        }
        {
          page<totalPages &&
          <button onClick={()=>{handlePageChange(page+1)}}>
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