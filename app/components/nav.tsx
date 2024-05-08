'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  HomeIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from 'app/components/ui/navigation-menu';
import { cn } from 'app/lib/utils';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Nav() {
  return (
    <header className="sticky flex justify-between inset-x-0 top-0 z-50 container bg-transparent">
      <NavigationMenu>
        <NavigationMenuList className="max-w-2xl mx-auto">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-background pl-0',
                )}
              >
                <HomeIcon width={18} height={18} className="mr-2" />
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-background hover:text-foreground/80 text-foreground/60',
                )}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-background hover:text-foreground/80 text-foreground/60',
                )}
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <nav className="flex items-center">
        <Link href="https://github.com/owenchang1992">
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon width={18} height={18} />
          </Button>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Nav;
