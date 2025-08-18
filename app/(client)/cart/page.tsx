'use client';
import React from 'react';
import EmptyCart from '@/components/EmptyCart';
import NoAccess from '@/components/NoAccess';
import Container from '@/components/Container';
import PriceFormatter from '@/components/PriceFormatter';
import QuantityButton from '@/components/QuantityButton';
import Title from '@/components/Title';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger
 } from '@/components/ui/tooltip';
 import { client } from '@/sanity/lib/client';
 import { Address } from '@/sanity.types';
 import { urlFor } from '@/sanity/lib/image';
 import toast from 'react-hot-toast';
 import { useState, useEffect } from 'react';
import useStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';



const CartPage = () => {
    const {
        deleteCartProduct,
        getTotalPrice,
        getItemCount,
        getSubTotalPrice,
        resetCart,
    } = useStore();
     const [loading, setLoading] = useState(false);
  const groupedItems = useStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);


  const fetchAddresses = async () => {
    setLoading(true);
    try {
        const query = `*[_type == "address"] | order(publishedAt desc)`;
        const data = await client.fetch(query);
        setAddresses(data);
        const defaultAddress = data.find((addr: Address) => addr.default);
        if (defaultAddress) {
            setSelectedAddress(defaultAddress);
        } else if (data.length > 0) {
            setSelectedAddress(data[0]);
        }
    } catch (error) {
        console.log("Error fetching Address", error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleResetCart = () => {
    const confirmed = window.confirm(
        "Are you sure to reser your cart?"
    );
    if (confirmed) {
        resetCart();
        toast.success("Cart reset successfully!");
    }
  };


  return (
    <div>CartPage</div>
  )
}

export default CartPage;