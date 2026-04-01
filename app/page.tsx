import { HeroSection } from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLauchedProducts from "@/components/landing-page/recently-launched-products";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";
export default function Home() {
  return (
    <div>
    <HeroSection />

    
      <FeaturedProducts />
    
    <Suspense fallback={<div className="wrapper py-20">Loading recent launches...
      <LoaderIcon className="size-5" />
    </div>}>
    
      <RecentlyLauchedProducts />
    </Suspense>
</div>
);
}
