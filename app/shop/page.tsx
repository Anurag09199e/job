"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  title: string
  artist: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Serene Landscape",
    artist: "Alexandra Smith",
    price: 1200,
    image: "/serene-landscape-painting.png",
    rating: 4.5,
    reviews: 24,
    category: "Landscape",
  },
  {
    id: 2,
    title: "Abstract Dreams",
    artist: "Marcus Chen",
    price: 950,
    image: "/abstract-art.png",
    rating: 4.8,
    reviews: 18,
    category: "Abstract",
  },
  {
    id: 3,
    title: "Urban Reflections",
    artist: "Sofia Rodriguez",
    price: 1500,
    image: "/urban-city-art.jpg",
    rating: 4.6,
    reviews: 32,
    category: "Contemporary",
  },
  {
    id: 4,
    title: "Nature's Palette",
    artist: "James Wilson",
    price: 800,
    image: "/botanical-nature-art.jpg",
    rating: 4.7,
    reviews: 15,
    category: "Landscape",
  },
  {
    id: 5,
    title: "Minimalist Form",
    artist: "Emma Johnson",
    price: 650,
    image: "/minimalist-modern-art.jpg",
    rating: 4.4,
    reviews: 21,
    category: "Contemporary",
  },
  {
    id: 6,
    title: "Colorful Explosion",
    artist: "David Kumar",
    price: 1100,
    image: "/colorful-vibrant-painting.jpg",
    rating: 4.9,
    reviews: 28,
    category: "Abstract",
  },
  {
    id: 7,
    title: "Coastal Breeze",
    artist: "Isabella Martinez",
    price: 1300,
    image: "/ocean-coastal-seascape.jpg",
    rating: 4.5,
    reviews: 19,
    category: "Landscape",
  },
  {
    id: 8,
    title: "Urban Geometry",
    artist: "Lucas Thompson",
    price: 900,
    image: "/geometric-abstract-design.jpg",
    rating: 4.6,
    reviews: 26,
    category: "Contemporary",
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["Contemporary", "Abstract", "Landscape"]

  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Shop Artworks</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse our curated collection of original paintings, sculptures, and digital art from world-class artists.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-serif font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCategory === null ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  All Artworks
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Showing {sortedProducts.length} results</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Product Image */}
                  <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          wishlist.includes(product.id) ? "fill-accent text-accent" : "text-foreground"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{product.artist}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-serif font-semibold text-foreground">${product.price}</span>
                      <Button
                        className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
