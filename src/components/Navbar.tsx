
import { useState } from "react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-shopease-purple" />
            <span className="text-xl font-bold text-shopease-purple">ShopEase</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-shopease-purple transition-colors">
              Home
            </a>
            {categories.slice(0, 4).map((category) => (
              <a
                key={category.id}
                href={`/category/${category.id}`}
                className="text-sm font-medium hover:text-shopease-purple transition-colors"
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Search, Theme Toggle and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
            <ThemeToggle />
            <Button variant="outline" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-shopease-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-sm font-medium hover:text-shopease-purple transition-colors">
                Home
              </a>
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="text-sm font-medium hover:text-shopease-purple transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t">
              <Button className="w-full flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span>View Cart (0)</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
