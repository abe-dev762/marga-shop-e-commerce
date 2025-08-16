import React from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import ProductGrid from '@/components/ProductGrid';

const Home = () => {
  return (
    <Container>
      <HomeBanner/>
      <div>
        <ProductGrid/>
      </div>
    </Container>
  )
}

export default Home;