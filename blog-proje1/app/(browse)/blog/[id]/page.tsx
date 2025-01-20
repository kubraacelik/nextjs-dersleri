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
            <div className='max-w-4xl mx-auto'>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1024}
                    height={768}
                    className='w-full h-[900] object-cover transition-transform group-hover:scale-105 duration-700'
                />
            </div>
        </div>
    )
}

export default BlogDetailPage