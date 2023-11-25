import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  const {loading, posts} = useContext(AppContext);
  return (
    <div>
      {
        loading ? (<Spinner/>):
        (posts.lenght===0?(<div>NO POSTS FOUND</div>):
        (posts.map((post)=>(<BlogDetails key={post.id} post={post} />))))
      }
    </div>
  )
}

export default Blogs