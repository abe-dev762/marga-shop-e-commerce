'use client';
import Link from 'next/link';
import React from 'react';
import { productType } from '@/constant/data';

interface HomeTabBarProps {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTabSelect}: HomeTabBarProps) => {
  return (
    <div className='flex items-center flex-wrap gap-5 justify-between'>
      <div className='flex items-center gap-1.5 font-semibold text-sm'>
        <div className='flex items-center gap-1.5 md:gap-3'>
            {productType?.map((item) => (
                <button
                key={item?.title}
                className={`border border-signature/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-signature hover:border-signature hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-signature border-signature text-white" : "bg-signature/10"}`}
                onClick={() => onTabSelect(item?.title)}
                >
                    {item?.title}
                </button>
            ))}
         </div>
      </div>
        <Link
        className='border border-darkColor px-4 py-1 rounded-full hover:bg-signature hover:text-white hover:border-signature hoverEffect'
        href={"/shop"}
        >
          See all
        </Link>
    </div>
  )
}

export default HomeTabBar