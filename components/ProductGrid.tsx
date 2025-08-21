'use client';
import React, { useState, useEffect } from 'react';
import HomeTabBar from './HomeTabBar';
import { motion, AnimatePresence } from 'motion/react';
import { client } from '@/sanity/lib/client';
import Container from './Container';
import { productType } from '@/constant/data';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';
import NoProductAvailable from './NoProductAvailable';
import { Loader2 } from 'lucide-react';


const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  

  useEffect(() => {
    const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
  }`;
  const params = { variant: selectedTab.toLocaleLowerCase() };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);


  return (
    <Container className='flex flex-col lg:px-0 my-10'>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
      {loading ? (
        <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 rounded-lg text-center bg-gray-100 mt-10 w-full'>
          <motion.div className='flex items-center space-x-2 text-navy'>
            <Loader2 className='w-5 h-5 animate-spin'/>
            <span>Loading..</span>
          </motion.div>
        </div>
      ) : products?.length ?  (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <>
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;