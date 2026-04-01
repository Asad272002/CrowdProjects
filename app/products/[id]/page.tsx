"use cache";

import {getFeaturedProducts}  from "@/lib/products/product-select";
import { cache } from "react";



export  const generateStaticParams = async () => {
    const products = await getFeaturedProducts();
    return products.map((product) => ({
        params: { id: product.id.toString() },
    }));
}

export default async function Product({
    params,
}: {
    params: Promise <{ id: string }>;

})
{
   const {id} = await params;
    return (
      

    <div><h1>Product{id}</h1></div>
  );
}