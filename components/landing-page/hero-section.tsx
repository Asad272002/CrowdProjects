import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LiveBadge = () => (
  <Badge variant="outline" className="px-4 py-2 mb-8 text-sm backdrop-blur-sm">
    <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
    </span>
    <span className="text-muted-foreground">Join Thousands of creators showcasing their work</span></Badge>
);
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
        <LiveBadge />
      <h1 className="text-5xl font-bold text-foreground">Share What You've Built, Discover What's Launching</h1>

    <p className="text-muted-foreground my-5">
      A Community Platform for creators to showcase their apps, Ai Tools, SAAS Products , and Creative projects.
      Authentic launches, real builders , genuine feedback.
    </p>
    <Button>Share Your Products</Button>
    <Button>Explore Projects</Button>
    </div>
    </div>
    </section>
  );
}