import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='w-full'>
        <div className='w- mt-10 flex justify-center'>
            <Link href="/book-now/city">
                <Button className='w-56 text-lg h-12 rounded-full hover:bg-gray-700'>Book Now</Button>
            </Link>
        </div>
        <div className="text-center pt-10 text-4xl">
            <h1>
                The Future Escort Directory
            </h1>
        </div>
        <div className="text-center pt-3 pb-6 text-lg">
            <h2>
                Verified reviews, exclusive videos, and more
            </h2>
        </div>
    </section>
  )
}

export default Hero