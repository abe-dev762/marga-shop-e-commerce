import React from 'react'
import { Suspense } from 'react'
import Container from '@/components/Container'
import SuccessClient from '@/components/SuccessClient'


const successPage = () => {
  return (
    <Container>
      <Suspense fallback={<div>...Loading</div>}>
        <SuccessClient />
      </Suspense>
    </Container>
  );
};

export default successPage