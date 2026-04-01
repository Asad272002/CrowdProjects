"use cache";

import { CalendarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { Suspense } from "react";     
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProducts() {
const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();


  return (
    <section className="py-20">
    <div className="wrapper space-y-12">
    <SectionHeader 
    title="Recently Launched Products" 
    icon={CalendarIcon} 
    description="Check out the latest products we've launched." />
   
    {recentlyLaunchedProducts.length > 0 ?(
                <div 
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyLaunchedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>):(
            <EmptyState message="No Products launched recently." icon={CalendarIcon} />
        )}
     </div>
    </section>
  );
}