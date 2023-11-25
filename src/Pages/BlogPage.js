import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
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
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);


  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;
    console.log(blogId);
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error in blogId wali call");
      setBlog(null);
      setRelatedBlogs([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className='my-16'>
      <div className='flex flex-col items-center justify-center '>
        <button className='px-3 py-1 bg-gradient-to-br from-red-500 to-slate-50 font-bold border border-black rounded-full hover:bg-gradient-to-tl hover:from-red-200 hover:to-slate-50' onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2 className='text-center text-4xl m-3 text-cyan-700 font-extrabold'>Related Blogs</h2>
          {relatedblogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default BlogPage;
