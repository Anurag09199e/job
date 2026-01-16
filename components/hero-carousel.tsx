"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeroCarouselProps {
  images: string[]
  height?: string
}

export default function HeroCarousel({ images = [], height = "70vh" }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, images.length])

  // Handle previous slide
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) {
    return (
      <section style={{ height }} className="w-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </section>
    )
  }

  return (
    <section
      style={{ height }}
      className="relative w-full overflow-hidden bg-background"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-white w-8 h-2" : "bg-white/50 hover:bg-white/70 w-2 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 sm:right-8 z-10 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-lg">
        {currentSlide + 1} / {images.length}
      </div>
    </section>
  )
}
