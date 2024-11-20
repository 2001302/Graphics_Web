'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
          <NavigationMenuList className="flex items-center gap-1">
            <NavigationMenuItem>
              <Link href="/search" className="h-9 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium">
                Explore
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" className="h-9 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium">
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