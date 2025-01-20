import { Blogs } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogDetailPageProps {
    params: {
        id: string
    }
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {

    const { id } = params;
    const blog = Blogs.find(blog => blog.id === parseInt(id as string));

    if (!blog) {
        return (
        <div className='container mx-auto'>
            <h2 className='text-center text-4xl font-semibold text-red-600 m-16'>Blog Not Found</h2>
            <Link href="/blog">
            <div className='font-semibold text-center text-3xl text-blue-700 mb-10 underline'>Back to Blog</div>
            </Link>
        </div>
    )}

    return (
        <div className='container mx-auto'>
            <div className='max-w-5xl mx-auto'>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1024}
                    height={768}
                    quality={100}
                    className='w-full h-[600px] object-contain transition-transform group-hover:scale-105 duration-700'
                />
                <h1 className='text-2xl font-bold mb-5 mt-5 duration-700 text-center transition'>{blog.title}</h1>
                <p className='text-lg text-center'>{blog.description}</p>

                <Link href="/blog">
                <div 
                className='inline-block w-full px-4 py-2 bg-gray-400 text-white font-semibold text-center rounded-lg
                         hover:bg-gray-600 duration-700 text-lg mb-5 mt-5' 
                >Details
                </div>
            </Link>
            </div>
        </div>
    )
}

export default BlogDetailPage