import Link from 'next/link';
import React from 'react'

export interface BlogTip1Props {
    id: number;
    title: string;
    description: string;
    image: string;
    active?: boolean;
}

const BlogTip1 = ({ id, title, description, image, active }: BlogTip1Props) => {
    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <img src={image} alt={title} className='w-full h-56 object-cover object-center' />
            <div className='p-4'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <p className='text-gray-500 mt-2'>{description}</p>
            </div>
            <Link href={`blog/${id}`}>
                <div 
                className='inline-block w-full px-4 py-2 bg-gray-400 text-white font-semibold text-center rounded-lg
                         hover:bg-gray-600 duration-700'
                >Details
                </div>
            </Link>
        </div>
    )
}

export default BlogTip1