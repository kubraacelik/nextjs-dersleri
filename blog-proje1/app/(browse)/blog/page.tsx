"use client"
import { Blogs, BlogsType } from '@/app/constants'
import BlogTip1 from '@/components/blog/tip1'
import BlogTip2 from '@/components/blog/tip2'
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogsType[]>([])

  useEffect(() => {
    setBlogs(Blogs)
  }, [])

  return (
    <>
      <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-semibold text-center'>Tip 1</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {blogs.map((blog, index) => (
            <BlogTip1
              key={index}
              id={blog.id}
              title={blog.title}
              active={blog.active}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
      </div>

      <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-semibold text-center'>Tip 2</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {blogs.map((blog, index) => (
            <BlogTip2 blog={blog} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage