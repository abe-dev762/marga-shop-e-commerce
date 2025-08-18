import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import WishListProducts from '@/components/WishListProducts';
import NoAccess from '@/components/NoAccess';

const WhistListPage = async () => {
  const user = await currentUser();

  return (
    <>
    {user ? (
        <WishListProducts />
    ) : (
        <NoAccess 
        details='Please log in to view your wishlist items'
        />
    )}
    </>
  )
}

export default WhistListPage;