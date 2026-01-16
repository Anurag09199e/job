"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Link from "next/link"

export interface Artwork {
  id: number
  image: string
  title: string
  artist: string
  medium: string
  size: string
  price: number
  isWishlisted?: boolean
}

interface TrendingArtworksCarouselProps {
  artworks: Artwork[]
  autoSlideInterval?: number
}

export function TrendingArtworksCarousel({ 
  artworks, 
  autoSlideInterval = 5000 
}: TrendingArtworksCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [wishlistedItems, setWishlistedItems] = useState<Set<number>>(
    new Set(artworks.filter(a => a.isWishlisted).map(a => a.id))
  )

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(4)
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, artworks.length - itemsPerView)

  // Reset current index when itemsPerView changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsPerView])

  // Auto-slide effect
  useEffect(() => {
    if (isHovering || artworks.length === 0 || maxIndex === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [isHovering, artworks.length, maxIndex, autoSlideInterval])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlistedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  if (artworks.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-3">
            Artwork trending now
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular contemporary artworks for sale
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {artworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="min-w-0 flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link href={`/shop/${artwork.id}`}>
                    <div className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-t-lg">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(artwork.id, e)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 z-10"
                          aria-label="Add to wishlist"
                        >
                          <Heart
                            className={`w-5 h-5 transition-colors ${
                              wishlistedItems.has(artwork.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-600 hover:text-red-500"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-1">
                          {artwork.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {artwork.artist}
                        </p>
                        <div className="space-y-1 mb-4">
                          <p className="text-xs text-muted-foreground">
                            {artwork.medium}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {artwork.size}
                          </p>
                        </div>
                        <p className="text-xl font-semibold text-foreground">
                          ₹{artwork.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {artworks.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card border border-border shadow-lg rounded-full p-2 sm:p-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Previous artworks"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card border border-border shadow-lg rounded-full p-2 sm:p-3 hover:bg-accent hover:text-accent-foreground transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Next artworks"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
