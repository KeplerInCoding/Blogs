import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';



const BlogPage = () => {
  const newUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {loading, setLoading}= useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

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
            relatedblogs.map((post)=>(
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