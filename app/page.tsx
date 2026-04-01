import { HeroSection } from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLauchedProducts from "@/components/landing-page/recently-launched-products";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
    <HeroSection />

    <Suspense fallback={<div className="wrapper py-20">Loading featured products...</div>}>
      <FeaturedProducts />
    </Suspense>
    <Suspense fallback={<div className="wrapper py-20">Loading recent launches...</div>}>
      <RecentlyLauchedProducts />
    </Suspense>
</div>
);
}
