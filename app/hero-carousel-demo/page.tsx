import HeroCarousel from "@/components/hero-carousel"
import { Header } from "@/components/header"

export default function HeroCarouselDemo() {
  const carouselImages = [
    "/modern-art-abstract-painting.jpg",
    "/nature-landscape-painting.jpg",
    "/contemporary-art-gallery.jpg",
    "/abstract-colorful-painting.jpg",
    "/landscape-mountain-scenery.jpg",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Carousel Section */}
      <HeroCarousel images={carouselImages} height="70vh" />

      {/* Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Hero Carousel Component</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A fully responsive hero image carousel built with React, Tailwind CSS, and no external libraries. Perfect
            for showcasing featured artworks, collections, or any hero section content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Auto-Sliding",
              description: "Images automatically advance every 4 seconds",
            },
            {
              title: "Manual Navigation",
              description: "Click arrow buttons to navigate between slides",
            },
            {
              title: "Pause on Hover",
              description: "Auto-slide pauses when hovering over the carousel",
            },
            {
              title: "Smooth Animations",
              description: "CSS fade transitions between images",
            },
            {
              title: "Fully Responsive",
              description: "Optimized for mobile, tablet, and desktop views",
            },
            {
              title: "Dot Indicators",
              description: "Interactive dots show current slide and allow direct navigation",
            },
          ].map((feature, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="border border-border rounded-lg p-6 bg-muted/30">
          <h3 className="text-lg font-semibold text-foreground mb-4">Basic Usage</h3>
          <pre className="overflow-x-auto text-sm text-foreground">
            <code>{`import HeroCarousel from '@/components/hero-carousel';

export default function Page() {
  const images = [
    '/image-1.jpg',
    '/image-2.jpg',
    '/image-3.jpg',
  ];

  return (
    <HeroCarousel 
      images={images} 
      height="70vh" 
    />
  );
}`}</code>
          </pre>
        </div>
      </section>
    </main>
  )
}
