"use cache";

import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header"
import {Button} from "@/components/ui/button";
import Link from "next/link"
import { Suspense } from "react";

import ProductCard from "@/components/products/product-card";
import { get } from "http";
import { getFeaturedProducts } from "@/lib/products/product-select";


// const featuredProducts = [
//     {
//         id: 1,
//         name: "Parity Kit",
//         description: "A toolkit for creating parity ",
//         tags: ["Parity", "Toolkit"],
//         votes : 700,
//         isFeatured: true
//     },
//     {
//         id: 2,
//         name: "Full Stack Course",
//         description: "Learn to build production ready code ",
//         tags: ["Full-Stack", "NextJS"],
//         votes : 500,
//         isFeatured: false
//     }
// ]

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();
  return (
    <section className="py-20 bg-muted/20">
    <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
           <SectionHeader
        title="Featured Today"
        icon={StarIcon}
        description="Check out the latest products we've launched!"
        />
        <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
            View All<ArrowUpRightIcon  
            className="size-4"/>
            </Link>
            </Button>
      
    </div>
    <div 
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </div>
    </section>
  );
}