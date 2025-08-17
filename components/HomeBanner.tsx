import React from 'react';
import Title from './Title';
import Link from 'next/link';
import banner_1 from '@/images/banner/banner_1.png';
import Image from 'next/image';



const HomeBanner = () => {
    return (
    <div className='bg-navy/80 py-16 md:py-0 rounded-lg px-10 md:px-24 flex items-center justify-between'>
        <div className='space-y-5'>
            <Title className='text-white'>
                Upto 60% off on <br/>
                Selected items
            </Title>
            <Link
            className='bg-slate-800 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:bg-slate-800/75 hoverEffect'
            href={"/shop"}>
                Buy now
            </Link>
        </div>
        <div>
            <Image 
            src={banner_1} 
            alt="banner" 
            width={384} 
            height={256} 
            className="inline-flex w-96" 
            />
        </div>
    </div>
  )
}

export default HomeBanner;