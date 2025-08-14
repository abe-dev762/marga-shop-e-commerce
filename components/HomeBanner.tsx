import React from 'react';
import Title from './Title';
import Link from 'next/link';
import banner_2 from '@/images/banner/banner_2.png';
import Image from 'next/image';


const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-signature/80 rounded-lg px-10 md:px-24 flex items-center justify-between'>
        <div>
            <Title>
                Upto 60% off on <br/>
                Selected items
            </Title>
            <Link
            className='bg-navy/80 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-navy/90 hoverEffect'
            href={"/shop"}>
                Buy now
            </Link>
        </div>
        <div>
            <Image 
            src={banner_2}
            alt='banner_2'
            className='hidden md:inline-flex w-96'
            />
        </div>
    </div>
  )
}

export default HomeBanner;