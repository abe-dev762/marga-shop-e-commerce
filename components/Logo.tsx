import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'


const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
    <h2 className={cn("text-2xl text-lightOrange font-black tracking-wider uppercase hover:text-lightOrange/90",
         className)}>
    <span>M</span>shop
    </h2>
    </Link>
  )
}

export default Logo