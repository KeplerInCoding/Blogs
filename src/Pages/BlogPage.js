import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';



const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const {loading, setLoading}= useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();

    }
    catch(error){
      console.log("error in blodId wali call");
      setBlog(null);
      setRelatedBlogs([]);
    }

    
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button> 
      </div>
      {
        loading ?
        (<Spinner/>) :
        blog ?
        (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedBlogs.map((post)=>(
              <div key = {post.id}>
                <BlogDetails post = {post}/>
              </div>
            ))
          }
        </div>) :
        (
          <div>
            <p>No Blog Found</p>
          </div>
        )
      }
    </div>
  )
}

export default BlogPage