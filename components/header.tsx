"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, Search, Heart, Bell, User, Moon, Sun, LogOut, Settings, Package, CreditCard, LogIn, ChevronDown } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useTheme } from "next-themes"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [wishlistCount] = useState(3) // Mock wishlist count
  const [notificationsCount] = useState(2) // Mock notifications count
  const [isLoggedIn] = useState(false) // Mock auth state
  const { items } = useCart()
  const { theme, setTheme } = useTheme()

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      setSearchOpen(false)
      // Navigate to search results or perform search
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors">
          Crafttatva
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Shop Mega Dropdown */}
          <div className="relative group">
            <Link 
              href="/shop" 
              className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1"
            >
              Shop
              <ChevronDown className="w-4 h-4 transition-transform duration-700 ease-in-out group-hover:rotate-180" />
            </Link>
            
            {/* Full-Width Mega Dropdown Menu */}
            <div className="fixed left-0 right-0 top-16 border-t border-border shadow-xl py-10 px-16 z-50 opacity-0 translate-y-3 pointer-events-none transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              {/* Animated 3D Background (behind content) */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                  className="mega-3d-bg absolute -inset-24 opacity-[0.18] blur-2xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(600px 400px at 20% 30%, rgba(217, 119, 6, 0.35), transparent 60%), radial-gradient(520px 360px at 78% 34%, rgba(37, 99, 235, 0.30), transparent 60%), radial-gradient(520px 360px at 55% 82%, rgba(168, 85, 247, 0.25), transparent 60%), linear-gradient(120deg, rgba(15, 23, 42, 0.06), rgba(255, 255, 255, 0.10), rgba(15, 23, 42, 0.06))",
                  }}
                />
                {/* subtle vignette to keep text readable */}
                <div className="absolute inset-0 bg-white/65 dark:bg-background/55 backdrop-blur-[2px]" />
              </div>

              <div
                className="max-w-7xl mx-auto relative"
                onMouseEnter={(e) => {
                  const el = (e.currentTarget.parentElement?.querySelector('.mega-3d-bg') as HTMLElement | null)
                  el?.classList.add('mega-3d-bg-pause')
                }}
                onMouseLeave={(e) => {
                  const el = (e.currentTarget.parentElement?.querySelector('.mega-3d-bg') as HTMLElement | null)
                  el?.classList.remove('mega-3d-bg-pause')
                }}
              >
                {/* White / glass content layer */}
                <div className="rounded-2xl border border-border/70 bg-white/85 dark:bg-popover/75 backdrop-blur-md shadow-lg px-10 py-8">
                  <div className="grid grid-cols-6 gap-8">
                  {/* Column 1 - By Category */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY CATEGORY</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?category=paintings"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Paintings
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=drawing"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Drawing
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=category"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 - By Style */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY STYLE</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?style=abstraction"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Abstraction
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=figuratives"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Figuratives
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=realism"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Realism
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=surrealism"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Surrealism
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=contemporary"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Contemporary
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=hyper-realism"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Hyper Realism
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?style=portraiture"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Portraiture
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=style"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 - By Subject */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY SUBJECT</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?subject=abstract"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Abstract
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=architecture"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Architecture
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=ghats"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Ghats
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=landscapes"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Landscapes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=nude"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Nude
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=cityscapes"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Cityscapes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?subject=sea"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Sea
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=subject"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 - By Color */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY COLOR</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?color=red"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Red
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=orange"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Orange
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=yellow"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Yellow
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=blue"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Blue
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=green"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Green
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=brown"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Brown
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?color=purple"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Purple
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=color"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 5 - By Price */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY PRICE</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?price=under-25000"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Under 25000
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?price=under-100000"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Under 100000
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?price=above-100000"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Above 100000
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?price=above-300000"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Above 300000
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=price"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 6 - By Size */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">BY SIZE</h3>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          href="/shop?size=small"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Small
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?size=medium"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Medium
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?size=large"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Large
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?size=extra-large"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                        >
                          Extra Large
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/shop?filter=size"
                          className="text-sm font-medium text-accent hover:text-foreground transition-colors block"
                        >
                          View all
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          
          <Link href="/artists" className="text-sm text-foreground hover:text-accent transition-colors">
            Artists
          </Link>
          <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
            About
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="p-2 hover:text-accent transition-colors" 
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist */}
          <button 
            className="relative p-2 hover:text-accent transition-colors" 
            aria-label="Wishlist"
            onClick={() => window.location.href = "/wishlist"}
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Notifications */}
          <button 
            className="relative p-2 hover:text-accent transition-colors" 
            aria-label="Notifications"
            onClick={() => window.location.href = "/notifications"}
          >
            <Bell className="w-5 h-5" />
            {notificationsCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                {notificationsCount}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Shopping Cart */}
          <Link href="/cart" className="relative p-2 hover:text-accent transition-colors" aria-label="Shopping cart">
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                {items.length}
              </span>
            )}
          </Link>

          {/* User Account */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:text-accent transition-colors" aria-label="User menu">
                  <User className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Wishlist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/payment-methods" className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Payment Methods
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <Link href="/login" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            </Button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <div>
              <Link 
                href="/shop" 
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
              Shop
            </Link>
              <div className="pl-4 space-y-2 border-l border-border">
                <Link 
                  href="/shop?category=paintings" 
                  className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Paintings
                </Link>
                <Link 
                  href="/shop?category=prints" 
                  className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prints
                </Link>
                <Link 
                  href="/shop?category=sculptures" 
                  className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sculptures
                </Link>
                <Link 
                  href="/shop?category=digital" 
                  className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Digital Art
                </Link>
              </div>
            </div>
            <Link 
              href="/artists" 
              className="block text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Artists
            </Link>
            <Link 
              href="/about" 
              className="block text-sm text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {!isLoggedIn && (
              <Link 
                href="/login" 
                className="block text-sm text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
            <div className="pt-3 border-t border-border space-y-2">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors w-full"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search Artworks</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for artworks, artists, or collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2 font-medium">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {["Abstract", "Landscape", "Portrait", "Contemporary", "Minimalist"].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setSearchQuery(term)
                      setTimeout(() => handleSearch(), 0)
                    }}
                    className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  )
}
