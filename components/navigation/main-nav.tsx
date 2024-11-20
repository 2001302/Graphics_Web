'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Search } from "lucide-react"

export function MainNav() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Atlas Graphic
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <Link href="/search?category=character" className="block p-3 hover:bg-accent rounded-md">
                      Characters
                    </Link>
                  </li>
                  <li className="row-span-3">
                    <Link href="/search?category=environment" className="block p-3 hover:bg-accent rounded-md">
                      Environments
                    </Link>
                  </li>
                  <li className="row-span-3">
                    <Link href="/search?category=props" className="block p-3 hover:bg-accent rounded-md">
                      Props
                    </Link>
                  </li>
                  <li className="row-span-3">
                    <Link href="/search?category=vehicles" className="block p-3 hover:bg-accent rounded-md">
                      Vehicles
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/search" className="block p-3">
                Explore
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" className="block p-3">
                Community
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline">Sign In</Button>
          <Button>Upload Model</Button>
        </div>
      </div>
    </nav>
  )
} 