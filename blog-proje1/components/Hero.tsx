import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <img
                    src="/picture.jpg"
                    alt=""
                    className="h-64 sm:h-72 md:h-80 lg:h-96 opacity-80 hover:opacity-100 transition duration-700" />
            </div>
        </>
    )
}

export default Hero