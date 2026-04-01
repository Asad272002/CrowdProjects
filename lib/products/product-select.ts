import { db } from '@/db';

import { products } from '@/db/schema';

import { eq } from "drizzle-orm";
import { connection } from 'next/server';
import { cache } from 'react';



export async function getFeaturedProducts(){
    "use cache"
    const productsData= await db.select().from(products).where(
        eq(products.status, "approved")
    );

    return productsData;
}

export async function getAllProducts(){
 
    const productsData= await db.select().from(products).where(
        eq(products.status, "approved")
    );

    return productsData;
}

export async function getRecentlyLaunchedProducts(){
    await connection(); 
    const productsData= await getAllProducts();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return productsData.filter(
        (product) => 
        product.createdAt && new Date(product.createdAt.toISOString()) > oneWeekAgo);
}