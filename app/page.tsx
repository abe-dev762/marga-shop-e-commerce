import React from 'react';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';


const Home = () => {
  return (
    <Container className='bg-shop_light_pink font-main'>
      <h2 className='text-xl font-semibold text-signature'>Home</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quia voluptas sequi velit, harum itaque non.
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  )
}

export default Home;