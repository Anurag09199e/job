import { CarouselSection } from "@/components/carousel-section"

export default function CarouselPage() {
  const sampleImages = [
    {
      id: 1,
      src: "/modern-art-abstract-painting.jpg",
      alt: "Modern Art Collection",
      title: "Modern Art Collection",
    },
    {
      id: 2,
      src: "/nature-landscape-painting.jpg",
      alt: "Nature Inspired",
      title: "Nature Inspired",
    },
    {
      id: 3,
      src: "/contemporary-art-gallery.jpg",
      alt: "Contemporary Works",
      title: "Contemporary Works",
    },
    {
      id: 4,
      src: "/abstract-colorful-painting.jpg",
      alt: "Abstract Expression",
      title: "Abstract Expression",
    },
    {
      id: 5,
      src: "/landscape-mountain-scenery.jpg",
      alt: "Landscape Series",
      title: "Landscape Series",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Image Carousel Section</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Responsive image carousel with auto-slide, manual navigation, smooth transitions, and pause-on-hover
            functionality.
          </p>
        </div>
      </section>

      {/* Carousel Component */}
      <CarouselSection images={sampleImages} autoSlideInterval={3000} />

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Auto Slide</h3>
                <p className="text-muted-foreground">Images automatically slide every 3 seconds (configurable)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Manual Navigation</h3>
                <p className="text-muted-foreground">Previous/Next buttons for manual slide control</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Smooth Animation</h3>
                <p className="text-muted-foreground">CSS transitions for smooth fade-in/fade-out effects</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pause on Hover</h3>
                <p className="text-muted-foreground">Auto-slide pauses when hovering over the carousel</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">Fully responsive for mobile, tablet, and desktop</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dot Indicators</h3>
                <p className="text-muted-foreground">Visual indicators and direct navigation to any slide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 md:py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Usage</h2>
          <div className="bg-white border border-border rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-foreground font-mono">
              {`import { CarouselSection } from '@/components/carousel-section'

const images = [
  { id: 1, src: '/image-1.jpg', alt: 'Image 1', title: 'Slide 1' },
  { id: 2, src: '/image-2.jpg', alt: 'Image 2', title: 'Slide 2' },
  // ... more images
]

export default function Page() {
  return <CarouselSection images={images} autoSlideInterval={3000} />
}`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  )
}
