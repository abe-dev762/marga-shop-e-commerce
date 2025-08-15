import React from 'react';
import Title from './Title';
import Link from 'next/link';
import { banner_1 } from '@/images';
import Image from 'next/image';



const HomeBanner = () => {
    //test
    console.log("HomeBanner mounted")
  

    return (
    <div className='py-16 md:py-0 rounded-lg px-10 md:px-24 flex items-center justify-between'>
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
            <Image src={banner_1} alt="banner" width={384} height={256} className="hidden md:inline-flex w-96" />

        </div>
    </div>
  )
}

export default HomeBanner;