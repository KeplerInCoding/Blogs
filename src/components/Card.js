import React from 'react'

const Card = ({post}) => {
  return (
    <div className='w-5/6 lg:w-3/6 p-4 m-2 rounded-lg shadow-sm bg-gradient-to-t from-slate-50 shadow-black border border-black'>
        <div className=' text-xl underline mb-2 font-extrabold'>{post.title}</div>
        <div>By <span className=' italic'>{post.author}</span>on <span className='font-bold'>{post.category}</span> </div>
        <div className='text-violet-700 text-sm'>Posted on {post.date}</div>
        <div className='my-3'>{post.content}</div>
        <div className='text-blue-500 text-sm underline flex flex-wrap gap-x-2'>{post.tags.map((tag)=>(<span>{`#${tag}`}</span>))}</div>
    </div>
  )
}

export default Card