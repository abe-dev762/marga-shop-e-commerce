import React from 'react';
import { getDealProducts } from '@/sanity/queries';
import type { Product } from '@/sanity.types';
import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';

const normalizeProduct = (raw: any): Product => {
    const categories = Array.isArray(raw.categories) && raw.categories.length ?
    raw.categories
    .filter((c: string | null): c is string => typeof c === "string")
    .map((ref: string, i: number) => ({
        _ref: ref,
        _type: "reference" as const,
        _key: `${raw._id}-cat-${i}`,
    }))
    : undefined;

    return {
        ...raw,
        categories,
    } as Product;
};


const DealPage = async () => {
  const products = await getDealProducts();

  return (
    <div className="py-10 bg-deal-bg">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wide">
          Hot Deals of the Week
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {products?.map((p) => {
            const product = normalizeProduct(p);
            return <ProductCard key={product._id} product={product}/>
          })}
        </div>
      </Container>
    </div>
  );
};

export default DealPage;