import React from 'react'
import Header from '../components/Header'
import { useNavigation, useLocation } from 'react-router-dom';

const TagPage = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
        <h2>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage