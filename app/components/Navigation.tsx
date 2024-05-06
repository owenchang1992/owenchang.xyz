"use client"

import * as React from "react"
import Link from "next/link"

import { HomeIcon, SunIcon, CubeIcon } from '@radix-ui/react-icons'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "app/components/ui/navigation-menu"
import { cn } from "app/lib/utils"

export function Navigation() {
  return (
    <header className="sticky inset-x-0 top-0 w-screen z-50 container">
      <NavigationMenu>
        <NavigationMenuList className="max-w-2xl mx-auto">
          <NavigationMenuItem >
            <Link href="/" legacyBehavior passHref >
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-background")}>
                <HomeIcon width={18} height={18} className="mr-2"/>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/work" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-background hover:text-foreground/80 text-foreground/60")}>
                Work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Navigation
