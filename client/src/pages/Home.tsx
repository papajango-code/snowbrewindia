import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Star, MapPin, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Snowbrew Home Page
 * Design: Vibrant Urban Playfulness
 * - Fredoka (bold, rounded) for headings
 * - Open Sans for body text
 * - Teal (#0EA5A5), Coral (#FF6B6B), Plum (#6B2C91) palette
 * - Organic curved sections, playful interactions
 */

export default function Home() {
  const [expandedPricing, setExpandedPricing] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-accent/20">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">❄️</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Snowbrew</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition">Services</a>
            <a href="#pricing" className="text-foreground hover:text-accent transition">Pricing</a>
            <a href="#contact" className="text-foreground hover:text-accent transition">Contact</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full">
            Enquire Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Curved background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-accent font-semibold text-sm">🎉 Exclusive to Delhi</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Premium Bubble Tea for Your Events
              </h1>
              <p className="text-lg text-foreground/70">
                Snowbrew brings the perfect bubble tea experience to your celebrations, corporate events, and special occasions in Delhi. Customizable flavors, live stations, and unforgettable moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/5 rounded-full px-8">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-1_1770040785000_na1fn_aGVyby1idWJibGUtdGVhLXBvdXJpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTFfMTc3MDA0MDc4NTAwMF9uYTFmbl9hR1Z5YnkxaWRXSmliR1V0ZEdWaExYQnZkWEpwYm1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wz92-D92vL1kHJhXtloD-Ots2Nt18YWF2up~ySv5E30RSLUXOnogpzhxOautarNAvh2RvdMUhJEQXlTWZxyH-bjBojFEVUtlDWiqot1Bnlgve4Y8e1J8USJsgO-XCUfiD-aNV7Mr0Y4RoLQ2m79uafMDQVLgOolIkqLhGMrC9BLHlSmvKEsDTUqYsPUfkW6D~UUJ5Ol2-PJfe6i2qWzyM9q61SyyA4ITgLKcnYc0GWGdVgfYPZp8Q7zv11za0t~bkDSSZp7V~6zKLQeMqvXGaG56sEMjhY5BnBob1460hRJwhNlgc5R-UjZ-m4tNDaSSY34lMWro0p9bUGQygba30Q__"
                alt="Bubble tea being poured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Curved divider top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 20%)'
        }}></div>

        <div className="container pt-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Live Station */}
            <Card className="p-8 rounded-3xl border-2 border-accent/20 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Live Station</h3>
              <p className="text-foreground/70 mb-4">
                Interactive bubble tea station with customizable flavors, sugar levels, and toppings. Perfect for corporate events, weddings, and celebrations.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>✓ 100-500+ cups capacity</li>
                <li>✓ Custom branding options</li>
                <li>✓ Professional staff included</li>
              </ul>
            </Card>

            {/* Service 2: Party Box */}
            <Card className="p-8 rounded-3xl border-2 border-secondary/20 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Party Box Catering</h3>
              <p className="text-foreground/70 mb-4">
                Self-serve bubble tea in convenient 5L party boxes. Ideal for smaller gatherings and intimate celebrations.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>✓ Lower minimum order</li>
                <li>✓ Self-serve convenience</li>
                <li>✓ Fresh pearls included</li>
              </ul>
            </Card>

            {/* Service 3: Bottled Tea */}
            <Card className="p-8 rounded-3xl border-2 border-accent/20 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Bottled Bubble Tea</h3>
              <p className="text-foreground/70 mb-4">
                Pre-made bubble tea in bottles for grab-and-go convenience. Perfect for full-day events and office deliveries.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>✓ Fresh for up to 3 days</li>
                <li>✓ Easy distribution</li>
                <li>✓ Premium quality</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Snowbrew */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-4_1770040786000_na1fn_ZGVsaGktZXZlbnQtY2VsZWJyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTRfMTc3MDA0MDc4NjAwMF9uYTFmbl9aR1ZzYUdrdFpYWmxiblF0WTJWc1pXSnlZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WdG9stG67RRxAlp3yIWIwz6WFhexfIjDPQwogX7n2JztssNegBBzD~uM9LGLOBi0jgzSsDxouMG-EmU~GSs5mLt6Fk3fQKK4euPas-249ntUEVmWjuUVQURxhQ0rOIz1kiVVhWP8ncd~Dh~B1yCehC8X1ORUjdOiayqtDIfrAAaxWrxtjC52wWFNPY5o2VxsQlZpQTqUZs9UGhTR9pkOxspeYgRXhuf7Bz8gI5FBdO3BhJG~erT1n5lTjJGu8xh-nFVDg9aiwKWjQk9i7oKOBk8mWxvSjw8V2HegFVWWjaSdfmIkBtZYweFtqWfH4rapDyn8sXRlhSK1wo~iIDzDdA__"
                alt="Delhi event celebration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose Snowbrew?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Premium Quality</h4>
                    <p className="text-foreground/70">Freshly prepared with the finest ingredients and authentic bubble tea recipes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Full Customization</h4>
                    <p className="text-foreground/70">Custom flavors, branding, and booth designs to match your event theme perfectly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Professional Team</h4>
                    <p className="text-foreground/70">Experienced staff ensuring smooth service, setup, and cleanup for your peace of mind.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 mt-6">
                Book Your Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing Packages</h2>
            <p className="text-lg text-foreground/70">Flexible options for events of any size. Custom packages available on request.</p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <Card className="p-8 rounded-3xl border-2 border-accent/30 hover:border-accent hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic Package</h3>
              <p className="text-foreground/60 mb-6">Perfect for small gatherings</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">₹8,999</span>
                <span className="text-foreground/60 ml-2">onwards</span>
              </div>
              <ul className="space-y-3 mb-8 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  100-200 cups capacity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  2 flavors included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  2 hours service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  1 staff member
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
                Enquire Now
              </Button>
            </Card>

            {/* Premium Package */}
            <Card className="p-8 rounded-3xl border-2 border-secondary/30 hover:border-secondary hover:shadow-2xl transition-all duration-300 relative scale-105 md:scale-100">
              <div className="absolute -top-4 left-8 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Premium Package</h3>
              <p className="text-foreground/60 mb-6">Ideal for corporate events</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-secondary">₹15,999</span>
                <span className="text-foreground/60 ml-2">onwards</span>
              </div>
              <ul className="space-y-3 mb-8 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  300-400 cups capacity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  3 flavors included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  2-3 hours service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  2 staff members
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full">
                Enquire Now
              </Button>
            </Card>

            {/* Baller Package */}
            <Card className="p-8 rounded-3xl border-2 border-accent/30 hover:border-accent hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-8 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                Premium
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Baller Package</h3>
              <p className="text-foreground/60 mb-6">For large-scale celebrations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">₹24,999</span>
                <span className="text-foreground/60 ml-2">onwards</span>
              </div>
              <ul className="space-y-3 mb-8 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  500+ cups capacity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  5+ flavors included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  3 hours service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  2-3 staff members
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
                Enquire Now
              </Button>
            </Card>
          </div>

          {/* Custom Pricing */}
          <Card className="p-8 rounded-3xl bg-gradient-to-r from-accent/5 to-secondary/5 border-2 border-dashed border-accent/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Custom Packages</h3>
                <p className="text-foreground/70">Need something unique? We can create a tailored package for your specific requirements.</p>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 flex-shrink-0">
                Get Custom Quote
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Elevate Your Event?</h2>
            <p className="text-lg text-foreground/70">Get in touch with us today to book your bubble tea catering experience in Delhi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Card className="p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Location</h4>
              <p className="text-foreground/70 text-sm">Serving all of Delhi NCR</p>
            </Card>

            <Card className="p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Phone</h4>
              <p className="text-foreground/70 text-sm">+91 XXXXX XXXXX</p>
            </Card>

            <Card className="p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📧</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Email</h4>
              <p className="text-foreground/70 text-sm">hello@snowbrew.in</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-12 py-6 text-lg">
              Send Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❄️</span>
                <h3 className="text-xl font-bold">Snowbrew</h3>
              </div>
              <p className="text-white/70">Premium bubble tea catering for Delhi's most memorable events.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition">Live Station</a></li>
                <li><a href="#" className="hover:text-white transition">Party Box</a></li>
                <li><a href="#" className="hover:text-white transition">Bottled Tea</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2026 Snowbrew. All rights reserved. Exclusively serving Delhi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
