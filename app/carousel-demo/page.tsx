"use client"

import { ImageCarousel } from "@/components/image-carousel"

const carouselImages = [
  {
    id: "1",
    src: "/abstract-art-modern-painting.jpg",
    alt: "Abstract modern painting",
    title: "Abstract Expression",
  },
  {
    id: "2",
    src: "/landscape-nature-mountains-painting.jpg",
    alt: "Landscape nature scene",
    title: "Mountain Serenity",
  },
  {
    id: "3",
    src: "/contemporary-minimalist-art-design.jpg",
    alt: "Minimalist contemporary art",
    title: "Modern Minimalism",
  },
  {
    id: "4",
    src: "/colorful-vibrant-artwork-pattern.jpg",
    alt: "Colorful vibrant artwork",
    title: "Vibrant Colors",
  },
  {
    id: "5",
    src: "/ocean-seascape-coastal-water.jpg",
    alt: "Ocean seascape",
    title: "Coastal Beauty",
  },
]

export default function CarouselDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Image Carousel</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A responsive, accessible carousel component with auto-slide, manual navigation, and smooth transitions.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Default Carousel (with all features)</h2>
          <ImageCarousel images={carouselImages} autoSlideInterval={3000} showIndicators={true} showControls={true} />
        </div>

        {/* Minimal Variant */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Minimal Carousel (no indicators)</h2>
          <ImageCarousel
            images={carouselImages.slice(0, 3)}
            autoSlideInterval={4000}
            showIndicators={false}
            showControls={true}
          />
        </div>

        {/* Feature List */}
        <section className="bg-gray-50 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Features</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Auto Slide</h3>
                <p className="text-sm text-gray-600 mt-1">Automatically transitions every 3 seconds (configurable)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Manual Navigation</h3>
                <p className="text-sm text-gray-600 mt-1">Previous/Next buttons and clickable indicators</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smooth Transitions</h3>
                <p className="text-sm text-gray-600 mt-1">CSS transitions for elegant fade effects</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Pause on Hover</h3>
                <p className="text-sm text-gray-600 mt-1">Auto-slide pauses when hovering over the carousel</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Responsive Design</h3>
                <p className="text-sm text-gray-600 mt-1">Works perfectly on mobile, tablet, and desktop</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-sm font-semibold text-blue-700">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">No Dependencies</h3>
                <p className="text-sm text-gray-600 mt-1">Pure React with useState and useEffect</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Usage</h2>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm font-mono">
              {`import { ImageCarousel } from '@/components/image-carousel'

const images = [
  {
    id: '1',
    src: '/image1.jpg',
    alt: 'First image',
    title: 'Slide 1',
  },
  // ... more images
]

export default function MyPage() {
  return (
    <ImageCarousel
      images={images}
      autoSlideInterval={3000}
      showIndicators={true}
      showControls={true}
    />
  )
}`}
            </pre>
          </div>
        </section>
      </div>
    </main>
  )
}
