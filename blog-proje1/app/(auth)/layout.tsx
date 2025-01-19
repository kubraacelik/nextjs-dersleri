import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            <div className='min-h-screen'>
            {children}
            </div>
        </div>
    )
}

export default AuthLayout