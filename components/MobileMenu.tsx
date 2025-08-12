'use client';
import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import SideMenu from './SideMenu';


const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
    <>
        <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
            <AlignJustify className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'/>
        </button>
        <div className='md:hidden'>
            <SideMenu 
            isOpen={isSideMenuOpen}
            onClose={() => setIsSideMenuOpen(false)}/>
        </div>
    </>
  )
}

export default MobileMenu;