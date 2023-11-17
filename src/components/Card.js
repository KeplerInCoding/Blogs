import React from 'react'

const Card = ({post}) => {
  return (
    <div>
        <div>{post.title}</div>
        <div>By <span>{post.author}</span>on <span>{post.category}</span> </div>
        <div>Posted on {post.date}</div>
        <div>{post.content}</div>
        <div>{post.tags.map((tag)=>(<span>{`#${tag}`}</span>))}</div>
    </div>
  )
}

export default Card