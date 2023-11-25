import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='w-5/6 lg:w-3/6 p-4 m-2 rounded-lg shadow-sm bg-gradient-to-t from-slate-50 shadow-black border border-black'>
            <NavLink to={`/blog/${post.id}`}>
                <div className=' text-xl underline mb-2 font-extrabold'>{post.title}</div>
            </NavLink>
            <div className='text-sm'>By <span className=' italic'>{post.author}</span> on
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}><span className='font-bold'> {post.category}</span></NavLink> </div>
            <div className='text-violet-700 text-sm'>Posted on {post.date}</div>
            <div className='my-3'>{post.content}</div>
            <div className='text-blue-500 text-sm underline flex flex-wrap gap-x-2'>{post.tags.map((tag, index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>
            ))}</div>
        </div>
    </div>
  )
}

export default BlogDetails