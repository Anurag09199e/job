import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { HomepageCarousel } from "@/components/homepage-carousel"
import { TrendingArtworksCarousel, type Artwork } from "@/components/trending-artworks-carousel"

const carouselImages = [
  {
    id: 1,
    src: "/abstract-art-painting-landscape.jpg",
    alt: "Abstract landscape painting",
    title: "Abstract Collection",
  },
  {
    id: 2,
    src: "/colorful-vibrant-painting.jpg",
    alt: "Colorful vibrant artwork",
    title: "Vibrant Colors",
  },
  {
    id: 3,
    src: "/botanical-nature-art.jpg",
    alt: "Botanical nature art",
    title: "Nature Inspired",
  },
  {
    id: 4,
    src: "/minimalist-modern-art.jpg",
    alt: "Minimalist modern design",
    title: "Modern Minimalism",
  },
]

const trendingArtworks: Artwork[] = [
  {
    id: 1,
    image: "/abstract-art-painting-landscape.jpg",
    title: "Serene Horizon",
    artist: "Alexandra Chen",
    medium: "Oil on Canvas",
    size: "48x36 Inch",
    price: 125000,
    isWishlisted: false,
  },
  {
    id: 2,
    image: "/colorful-vibrant-painting.jpg",
    title: "Urban Symphony",
    artist: "David Kumar",
    medium: "Acrylic on Canvas",
    size: "36x24 Inch",
    price: 85000,
    isWishlisted: true,
  },
  {
    id: 3,
    image: "/botanical-nature-art.jpg",
    title: "Botanical Dreams",
    artist: "Emma Williams",
    medium: "Watercolor on Paper",
    size: "30x22 Inch",
    price: 65000,
    isWishlisted: false,
  },
  {
    id: 4,
    image: "/minimalist-modern-art.jpg",
    title: "Minimalist Essence",
    artist: "James Anderson",
    medium: "Acrylic on Canvas",
    size: "40x40 Inch",
    price: 95000,
    isWishlisted: false,
  },
  {
    id: 5,
    image: "/contemporary-art-gallery.jpg",
    title: "Contemporary Flow",
    artist: "Sofia Martinez",
    medium: "Mixed Media",
    size: "42x30 Inch",
    price: 110000,
    isWishlisted: true,
  },
  {
    id: 6,
    image: "/landscape-nature-mountains-painting.jpg",
    title: "Mountain Vista",
    artist: "Marcus Thompson",
    medium: "Oil on Canvas",
    size: "50x38 Inch",
    price: 145000,
    isWishlisted: false,
  },
  {
    id: 7,
    image: "/ocean-seascape-coastal-water.jpg",
    title: "Coastal Serenity",
    artist: "Alexandra Chen",
    medium: "Acrylic on Canvas",
    size: "44x32 Inch",
    price: 98000,
    isWishlisted: false,
  },
  {
    id: 8,
    image: "/urban-city-art.jpg",
    title: "City Lights",
    artist: "David Kumar",
    medium: "Oil on Canvas",
    size: "38x28 Inch",
    price: 115000,
    isWishlisted: false,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HomepageCarousel images={carouselImages} autoSlideInterval={3000} />

      {/* Trending Artworks Carousel */}
      <TrendingArtworksCarousel artworks={trendingArtworks} autoSlideInterval={5000} />

      {/* Featured Collections */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections showcasing diverse artistic styles and mediums
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection Cards */}
            {[
              { title: "Contemporary", count: "48 pieces" },
              { title: "Abstract", count: "32 pieces" },
              { title: "Landscape", count: "56 pieces" },
            ].map((collection) => (
              <a
                key={collection.title}
                href="/shop"
                className="group rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 bg-muted overflow-hidden">
                  <img
                    src={`/.jpg?height=300&width=400&query=${collection.title} art`}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground">{collection.count}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground text-center mb-16">Why Choose Crafttatva</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Authentic Art",
                description: "Every piece is original and verified by our curators",
              },
              {
                title: "Direct from Artists",
                description: "Support creators directly and get exclusive pieces",
              },
              {
                title: "Secure Checkout",
                description: "Safe transactions with flexible payment options",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent-foreground rounded-full" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Start Collecting?</h2>
          <p className="text-lg mb-8 opacity-90">
            Browse our extensive collection of original artwork and find your next favorite piece
          </p>
          <Button asChild className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground">
            <a href="/shop">Shop Now</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Crafttatva</h3>
              <p className="text-sm text-muted-foreground">
                Celebrating original art and supporting talented artists worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/shop" className="hover:text-accent transition-colors">
                    All Artworks
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-accent transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-accent transition-colors">
                    Curated Lists
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/artists" className="hover:text-accent transition-colors">
                    Artists
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Crafttatva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
