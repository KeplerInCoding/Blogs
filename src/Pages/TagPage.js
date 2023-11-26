import React from 'react'
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);
  return (
    <div>
      <Header/>
      <div className='my-16'>
      <div className='mt-16 flex flex-col items-center justify-center w-screen'>
        <button className='px-3 py-1 bg-gradient-to-br from-red-500 to-slate-50 font-bold border border-black rounded-full hover:bg-gradient-to-tl hover:from-red-200 hover:to-slate-50' onClick={() => navigation(-1)}>
          Back
        </button>
        <h2 className='text-center text-3xl m-3 text-cyan-700 font-extrabold'>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default TagPage