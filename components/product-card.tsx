"use client"

import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"

interface ProductCardProps {
  id: number
  title: string
  artist: string
  price: number
  image: string
  rating: number
  reviews: number
  isWishlisted: boolean
  onWishlistToggle: (id: number) => void
}

export function ProductCard({
  id,
  title,
  artist,
  price,
  image,
  rating,
  reviews,
  isWishlisted,
  onWishlistToggle,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-[3/4]">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => onWishlistToggle(id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-accent text-accent" : "text-foreground"}`} />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-serif font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviews})
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-serif font-semibold text-foreground">${price}</span>
          <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
