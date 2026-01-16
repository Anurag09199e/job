"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  id: number
  src: string
  alt: string
  title: string
}

interface CarouselSectionProps {
  images?: CarouselImage[]
  autoSlideInterval?: number
}

export function CarouselSection({
  images = [
    {
      id: 1,
      src: "/carousel-image-1.jpg",
      alt: "Gallery 1",
      title: "Modern Art Collection",
    },
    {
      id: 2,
      src: "/carousel-image-2.jpg",
      alt: "Gallery 2",
      title: "Nature Inspired",
    },
    {
      id: 3,
      src: "/carousel-image-3.jpg",
      alt: "Gallery 3",
      title: "Contemporary Works",
    },
    {
      id: 4,
      src: "/carousel-image-4.jpg",
      alt: "Gallery 4",
      title: "Abstract Expression",
    },
    {
      id: 5,
      src: "/carousel-image-5.jpg",
      alt: "Gallery 5",
      title: "Landscape Series",
    },
  ],
  autoSlideInterval = 3000,
}: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    if (isHovered || !images.length) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [isHovered, images.length, autoSlideInterval])

  const handlePrevious = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  if (!images.length) {
    return (
      <section className="w-full bg-white">
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-400">No images available</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-white">
      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden bg-background"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Images Container */}
        <div className="relative h-screen max-h-[600px] sm:max-h-[500px] md:max-h-[600px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end">
                <div className="w-full p-6 sm:p-8 md:p-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-semibold">
                    {image.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-2 sm:p-3 rounded-full transition-all duration-200 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-2 sm:p-3 rounded-full transition-all duration-200 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "bg-white w-8 h-2" : "bg-white/50 hover:bg-white/75 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter (optional) */}
        <div className="absolute top-6 right-6 z-20 bg-black/30 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  )
}
