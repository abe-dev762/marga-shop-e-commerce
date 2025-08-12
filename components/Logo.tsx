import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'


const Logo = ({ 
  className, 
  spanStyle, }: { 
  className?: string;
  spanStyle?: string; }) => {
  return (
    <Link href={"/"} className='inline-flex'>
    <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop-light-green group",
         className)}>
    <span className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanStyle)}>M</span>shop
    </h2>
    </Link>
  )
}

export default Logo;