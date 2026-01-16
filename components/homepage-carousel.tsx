"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  id: number
  src: string
  alt: string
  title?: string
}

interface HomepageCarouselProps {
  images: CarouselImage[]
  autoSlideInterval?: number
  showDots?: boolean
}

export function HomepageCarousel({ images, autoSlideInterval = 3000, showDots = true }: HomepageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto slide effect
  useEffect(() => {
    if (isHovering || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [isHovering, images.length, autoSlideInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) {
    return (
      <section className="w-full py-12 bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </section>
    )
  }

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div
        className="relative mx-auto max-w-[900px] h-[380px] overflow-hidden bg-background group rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot Indicators */}
        {showDots && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  index === currentSlide ? "bg-white w-8 h-2" : "bg-white/50 hover:bg-white/70 w-2 h-2"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
