"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, ExternalLink } from "lucide-react"
import { useState } from "react"

interface Artist {
  id: number
  name: string
  bio: string
  image: string
  specialty: string
  artworksCount: number
  followers: number
  location: string
  email: string
  website: string
  featured: boolean
  artworks: string[]
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Alexandra Smith",
    bio: "Contemporary landscape painter specializing in natural light and atmospheric perspectives. Her work captures the raw beauty of nature through impressionistic techniques.",
    image: "/artist-alexandra.jpg",
    specialty: "Landscape",
    artworksCount: 48,
    followers: 1250,
    location: "Boulder, Colorado",
    email: "alexandra@crafttatva.com",
    website: "alexandrasmith.art",
    featured: true,
    artworks: ["/serene-landscape-painting.png", "/ocean-coastal-seascape.jpg"],
  },
  {
    id: 2,
    name: "Marcus Chen",
    bio: "Award-winning abstract artist known for bold color combinations and geometric compositions. Marcus creates pieces that challenge perception and invite contemplation.",
    image: "/artist-marcus.jpg",
    specialty: "Abstract",
    artworksCount: 32,
    followers: 980,
    location: "San Francisco, California",
    email: "marcus@crafttatva.com",
    website: "marcuschen.studio",
    featured: true,
    artworks: ["/abstract-art.png", "/colorful-vibrant-painting.jpg"],
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    bio: "Urban artist capturing the essence of city life through mixed media and photography. Sofia's work reflects the energy and diversity of metropolitan landscapes.",
    image: "/artist-sofia.jpg",
    specialty: "Contemporary",
    artworksCount: 56,
    followers: 1500,
    location: "Barcelona, Spain",
    email: "sofia@crafttatva.com",
    website: "sofiarart.es",
    featured: true,
    artworks: ["/urban-city-art.jpg", "/geometric-abstract-design.jpg"],
  },
  {
    id: 4,
    name: "James Wilson",
    bio: "Botanical illustrator and nature enthusiast with over 15 years of experience. James combines scientific precision with artistic beauty in every piece.",
    image: "/artist-james.jpg",
    specialty: "Landscape",
    artworksCount: 40,
    followers: 890,
    location: "London, England",
    email: "james@crafttatva.com",
    website: "jameswilsonart.uk",
    featured: false,
    artworks: ["/botanical-nature-art.jpg"],
  },
  {
    id: 5,
    name: "Emma Johnson",
    bio: "Minimalist sculptor exploring the intersection of form and function. Emma's work emphasizes simplicity and the beauty found in negative space.",
    image: "/artist-emma.jpg",
    specialty: "Contemporary",
    artworksCount: 28,
    followers: 760,
    location: "New York, New York",
    email: "emma@crafttatva.com",
    website: "emmajohnsonart.com",
    featured: false,
    artworks: ["/minimalist-modern-art.jpg"],
  },
  {
    id: 6,
    name: "David Kumar",
    bio: "Experimental artist pushing the boundaries of traditional mediums. David combines digital technology with physical materials to create unique immersive experiences.",
    image: "/artist-david.jpg",
    specialty: "Abstract",
    artworksCount: 35,
    followers: 1100,
    location: "Mumbai, India",
    email: "david@crafttatva.com",
    website: "davidkumarart.in",
    featured: false,
    artworks: ["/colorful-vibrant-painting.jpg"],
  },
]

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const specialties = ["Landscape", "Abstract", "Contemporary"]

  const filteredArtists = selectedSpecialty ? artists.filter((a) => a.specialty === selectedSpecialty) : artists
  const featuredArtists = filteredArtists.filter((a) => a.featured)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-muted/30 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Meet Our Artists</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover the talented creators behind our collection. Each artist brings unique perspective and mastery to
            their craft.
          </p>
        </div>
      </section>

      {/* Specialty Filter */}
      <section className="bg-background border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedSpecialty === null
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              All Artists
            </button>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded transition-colors ${
                  selectedSpecialty === specialty
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      {featuredArtists.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12">Featured Artists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArtists.map((artist) => (
                <div
                  key={artist.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  {/* Artist Image */}
                  <div className="h-64 bg-muted overflow-hidden">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Artist Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">{artist.name}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{artist.specialty}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {artist.location}
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-foreground">{artist.artworksCount}</p>
                          <p className="text-muted-foreground">Artworks</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{artist.followers}</p>
                          <p className="text-muted-foreground">Followers</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{artist.bio}</p>

                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setSelectedArtist(artist)}
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Artists Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12">
            {selectedSpecialty ? `${selectedSpecialty} Artists` : "All Artists"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="h-56 bg-muted overflow-hidden">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-serif font-semibold text-foreground mb-1">{artist.name}</h3>
                  <p className="text-xs text-accent font-medium mb-3">{artist.specialty}</p>

                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{artist.artworksCount} Works</span>
                    <span>{artist.followers} Followers</span>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-xs"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedArtist(artist)
                    }}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtist(null)}
        >
          <div
            className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 bg-background border-b border-border p-4 flex justify-end">
              <button
                onClick={() => setSelectedArtist(null)}
                className="text-foreground hover:text-accent transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              {/* Artist Header */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-48 flex-shrink-0">
                  <img
                    src={selectedArtist.image || "/placeholder.svg"}
                    alt={selectedArtist.name}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl font-serif font-bold text-foreground mb-2">{selectedArtist.name}</h1>
                  <p className="text-xl text-accent font-medium mb-4">{selectedArtist.specialty}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <MapPin className="w-5 h-5 text-accent" />
                      {selectedArtist.location}
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-2xl font-serif font-semibold text-foreground">
                          {selectedArtist.artworksCount}
                        </p>
                        <p className="text-sm text-muted-foreground">Artworks</p>
                      </div>
                      <div>
                        <p className="text-2xl font-serif font-semibold text-foreground">{selectedArtist.followers}</p>
                        <p className="text-sm text-muted-foreground">Followers</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground w-full">
                      View All Artworks
                    </Button>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">About</h2>
                <p className="text-foreground leading-relaxed">{selectedArtist.bio}</p>
              </div>

              {/* Contact */}
              <div className="border-t border-border pt-6">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <a
                    href={`mailto:${selectedArtist.email}`}
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {selectedArtist.email}
                  </a>
                  <a
                    href={`https://${selectedArtist.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {selectedArtist.website}
                  </a>
                </div>
              </div>

              {/* Featured Works */}
              {selectedArtist.artworks.length > 0 && (
                <div className="border-t border-border pt-6 mt-6">
                  <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Featured Works</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedArtist.artworks.map((artwork, idx) => (
                      <img
                        key={idx}
                        src={artwork || "/placeholder.svg"}
                        alt={`${selectedArtist.name}'s work`}
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
