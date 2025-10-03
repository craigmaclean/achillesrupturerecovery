"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { Menu, X, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Just Injured?", href: "/just-injured" },
    { name: "Just Injured? (Sidebar)", href: "/just-injured-sidebar" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg">
              <svg className="h-8 w-8 text-black fill-black" xmlns="http://www.w3.org/2000/svg" width="168" height="191.65" viewBox="0 0 168 191.65"><path d="M17,16l-.99-16,34.02,33.47c3.25,4.2.75,11.68,2.49,15.51.54,1.19,17.28,18.03,18.48,18.55l.5.45c11.91-14.52,11.18,1.32,14.51,11.02,10.64-7.9,17.52-19.67,19.73-32.75l1.25-12.24c2.69,15.77.89,32.31-9.48,45.01-5.84,7.16-23.37,15.89-23.19,25.31.13,6.57,9.09,16.41,12.49,22.37,6.62,11.63,8.06,18.83,12.14,30.86,4.75,14.01,19.68,22.7,34.05,23.44-.28-5.2-6.43-7.71-9.21-12.28-7.92-13.02-4.29-26.45-3.75-40.17.4-10.16-1.68-19.89-.91-29.91,1.51-19.85,11.88-47.62,27.37-60.63,1.12-.94,1.63-2.43,3.5-1.99-12.02,14.49-18.06,32.62-21.53,50.96-2.94,15.51-.46,20.67-.38,34.53.08,14.2-5.64,27.15,1.19,41.73,3.71,7.92,14.48,11.49,12.73,21.78l25.99-2.51c-6.68,4-15.93,7.24-23.6,8.4-29.8,4.51-40.59-12.69-66.03-14.77-10.21-.83-19.41,1.38-29.37,2.86.76-1.8,4.45-2.61,6.22-3.26,14.57-5.4,28.6-6.25,43.77-2.74-2.41-3.76-5.31-7.41-6.78-11.71-2.11-6.21-2.58-12.08-5.37-18.63-8.7-20.48-33.71-36.75-8.86-57.63l-15.9-4.1c-1.11-4.48,3.47-6.44,5.88-9.41l-.45-.5c-6.46-4.79-15.39-18.84-23.12-19.91-2.92-.4-6.21.39-8.89-.11C30.99,50.13,5.68,20.87,0,16h17ZM22,25.99c-2.33-4.02-5.22-5.82-10-4.98,2.33,4.02,5.22,5.82,10,4.98ZM46.99,41.99c.83-4.31-1.53-6.91-4.98-8.99-.6,3.97.32,8.39,4.98,8.99Z"/><path d="M112,97.99c-8.9,1-12.31,3.51-11,13.01-1.75,1.99-11.52-10.42-1.95-16.44,6.15-3.87,13.76,2.65,12.95,3.43Z"/></svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Achilles Rupture Recovery
              </h1>
              <p className="text-sm text-muted-foreground">Trusted guidance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-muted-foreground hover:text-primary transition-smooth font-medium ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              <Heart className="h-4 w-4 mr-2" />
              Newsletter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-muted-foreground hover:text-primary transition-smooth font-medium py-2 ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="sm" className="mt-4 w-full">
                <Heart className="h-4 w-4 mr-2" />
                Newsletter
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;