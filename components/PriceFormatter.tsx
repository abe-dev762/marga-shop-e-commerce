import React from 'react';
import { twMerge } from 'tailwind-merge';

interface PriceFormatterProps {
    amount: number | undefined;
    className?: string;
}


const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
    const finalPrice = new Number(amount).toLocaleString("en-us", {
        currency: "USD",
        style: "currency",
        minimumFractionDigits: 2,
    });

  return (
    <span 
    className={twMerge("text-sm font-semibold text-darkColor", className)}
    >
        {finalPrice}
    </span>
  );
};

export default PriceFormatter;