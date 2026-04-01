"use client";

import { CompassIcon, HomeIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Suspense } from "react";


const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <SparkleIcon className="size-4 text-primary-foreground"/>  
        </div>
        I <span className="text-primary">
        Build 
        </span>This
    </Link>

  );
};


export default function Header() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50  border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="wrapper px-12">
            <div className="flex h-16 justify-between items-center">
                <Logo />    
                <nav className="flex items-center gap-1">
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                    <HomeIcon className="size-4 "/>
                    <span>Home</span>
                    </Link>
                    <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                    
                    <CompassIcon className="size-4" />
                    <span>Explore</span>
                    </Link>
                       </nav>
                    <div className="flex items-center gap-3">
                      <Suspense fallback={<div>LoadingAUTH ...</div>}>
                      {isLoaded && !isSignedIn && (
                        <div className="flex items-center gap-3">
                          <SignInButton />
                          <SignUpButton>
                            <button className="bg-primary text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer" >
                              Sign Up
                            </button>
                          </SignUpButton>
                        </div>
                      )}

                      {isLoaded && isSignedIn && (
                        <Button asChild>
                          <Link href="/submit" className="">
                            <SparkleIcon className="size-4" />
                            <span>Submit Project</span>
                          </Link>
                        </Button>
                      )}
                      {isLoaded && isSignedIn && <UserButton />}
                      </Suspense>
                    </div>
             
            </div>
        </div>
    </header>
  );
}
