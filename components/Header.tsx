import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavoriteIcon from './FavoriteIcon';
import MobileMenu from './MobileMenu';
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import SignIn from './SignIn';



const header = async () => {
  const user = await currentUser();
  
  return (
    <header className='bg-white/70 py-5 z-50 sticky backdrop-blur-md'>
      <Container className='flex items-center justify-between text-lightColor'>
        <div className='flex items-center justify-strart gap-2.5 md:gap-0 w-auto md:w-1/3'>
          <MobileMenu/>
          <Logo/>
        </div>
        <HeaderMenu/>
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar/>
          <CartIcon/>
          <FavoriteIcon/>
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default header