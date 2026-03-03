import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

/**
 * Snowbrew Home Page - Replicating TheHangoverSG.com Structure
 * Design: Blue color scheme (#003D82 primary, #D4AF37 gold accents)
 * Logo: Penguin mascot integrated throughout
 */

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { createFormMessage, openWhatsApp } = useWhatsApp();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    company: "",
    services: [] as string[],
    pax: "",
    eventDate: "",
    eventLocation: "",
    eventType: "",
    comments: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmitViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = createFormMessage(formData);
    openWhatsApp(message);
  };

  const testimonials = [
    {
      title: "Corporate Event Success",
      description: "Amazing bubble tea experience at our company gathering. Guests loved the customization options!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-4_1770040786000_na1fn_ZGVsaGktZXZlbnQtY2VsZWJyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTRfMTc3MDA0MDc4NjAwMF9uYTFmbl9aR1ZzYUdrdFpYWmxiblF0WTJWc1pXSnlZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WdG9stG67RRxAlp3yIWIwz6WFhexfIjDPQwogX7n2JztssNegBBzD~uM9LGLOBi0jgzSsDxouMG-EmU~GSs5mLt6Fk3fQKK4euPas-249ntUEVmWjuUVQURxhQ0rOIz1kiVVhWP8ncd~Dh~B1yCehC8X1ORUjdOiayqtDIfrAAaxWrxtjC52wWFNPY5o2VxsQlZpQTqUZs9UGhTR9pkOxspeYgRXhuf7Bz8gI5FBdO3BhJG~erT1n5lTjJGu8xh-nFVDg9aiwKWjQk9i7oKOBk8mWxvSjw8V2HegFVWWjaSdfmIkBtZYweFtqWfH4rapDyn8sXRlhSK1wo~iIDzDdA__"
    },
    {
      title: "Wedding Celebration",
      description: "Perfect addition to our wedding reception. The live station was a huge hit with guests!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-2_1770040782000_na1fn_c2VydmljZS1saXZlLXN0YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTJfMTc3MDA0MDc4MjAwMF9uYTFmbl9jMlZ5ZG1salpTMXNhWFpsTFhOMFlYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rwy-IxhF6wIPqsWsq7GsDJsj5-fU3gcWyLKDM~NKFrMN3dE6iG~OjQqXfavubRm9a0PzRyRrg-bggm6gr7A~b9RIhDkJxFvK~nxeKmqOKo6UISAgajx5bGm9W9PGTZSNn5S1qR4hUBu14hVbrsQYAOJ4U3QNmedd-zMSWnIZTBmhQlILILWQBcBCAlqti-R7JTDpLdNNxPGESJjytsH9ZiX2p4JKFGK3KgDA7rtmc7eQ4QirIPMx72ut40ckxmn-NZiKdPaC3Dv-JUYKETeSzTmkLTjlsXExCSMx6Pksmd5Jp1AbqmX1r-4nBzVtu5RGwE8X1SRIIBD1nlKjCr8hFQ__"
    },
    {
      title: "Private Party",
      description: "Snowbrew made our celebration unforgettable. Professional service and delicious bubble tea!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-5_1770040788000_na1fn_YnViYmxlLXRlYS12YXJpZXRpZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTVfMTc3MDA0MDc4ODAwMF9uYTFmbl9ZblZpWW14bExYUmxZUzEyWVhKcFpYUnBaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iljpyg2vKCTTPmTcbUlSBBENpC-Jk1zcwjZ2hRkKitC~Qkv0tV1O7sezjZkgleu4vfCwy~US4gqsn78Lij9isWls3ybXmGbk~KHj6jY85-cuROOp63ATjfTBeF5nNaF9oWcnNDOlaxRWRVbiik4-JGCRpamGpbZhMHpbYnIw5Lki6pxgRNEz1dX4w0UYYUZ5bwqfOY1-fF388uv2udeplo7ry0uTDJQwLgrVGVpvpITvzBLqPvC~pA0W7tnvSznvFG3UPUiFDFu~FvPwBJgFgDXOjfjPqEgJNhdR~D71752d8gpVsCbfhodKat8gFcnZPb5WCsZwmIOUXZSwwjp7IQ__"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
      {/* Navigation - Dashed Border Style */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-dashed border-accent">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Logo and Branding */}
            <div className="flex items-center gap-3">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-3_1770040777000_na1fn_cGVuZ3Vpbi1tYXNjb3QtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTNfMTc3MDA0MDc3NzAwMF9uYTFmbl9jR1Z1WjNWcGJpMXRZWE5qYjNRdGFHVnlidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BJ7nreVjTG0FhCNZYaIgxlLu-~ZmVtuJLUG39FG3z2iGkIYJZI9MvGoMJmjgAvAC-EmIjxJ9vNqaLF5d63Jy9CR9luxlyQ9fj-O6v8kahZgO0uG8cofnC9Lb6qe6TG7xvI70Oharut84dMfFltwoHD-5PVtJm6OYYthv~nxvdOrNC1aZfcNyvnrgoXJg5T2Adu-zDvYy5VzwEVGka5U3ovx6LnyC7SeceuM8OQnHBqkuxiQiAEuRXtvAOa9ortVar-linQFoZa7WB80EMBoXHFQmllW3cYv9B82BLLU3yYcgFu6GKcFzMDBPvVwnLiLhfSIrE~4Nbrqh-EM87Txlqg__"
                alt="Snowbrew Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="text-center">
                <h1 className="text-2xl font-bold text-accent">SNOWBREW</h1>
                <p className="text-xs text-secondary">bubble tea live bar</p>
              </div>
            </div>

            {/* Navigation Items - Dashed Boxes */}
            <div className="hidden md:flex items-center gap-2 flex-wrap justify-center flex-1">
              {["HOME", "OUR SERVICES", "HOW TO ORDER", "CLIENTS AND REVIEWS", "PAST EVENTS", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-1 border-2 border-dashed border-accent text-accent text-sm font-semibold hover:bg-accent/5 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Search Icon */}
            <button className="p-2 hover:bg-muted rounded">
              <Search className="w-5 h-5 text-accent" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gray-800 overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/RbBcrmK9KDYA80mIEWLI4R/sandbox/WPEndDzKIC5JeQ4SJleclm-img-1_1770040785000_na1fn_aGVyby1idWJibGUtdGVhLXBvdXJpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUmJCY3JtSzlLRFlBODBtSUVXTEk0Ui9zYW5kYm94L1dQRW5kRHpLSUM1SmVRNFNKbGVjbG0taW1nLTFfMTc3MDA0MDc4NTAwMF9uYTFmbl9hR1Z5YnkxaWRXSmliR1V0ZEdWaExYQnZkWEpwYm1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wz92-D92vL1kHJhXtloD-Ots2Nt18YWF2up~ySv5E30RSLUXOnogpzhxOautarNAvh2RvdMUhJEQXlTWZxyH-bjBojFEVUtlDWiqot1Bnlgve4Y8e1J8USJsgO-XCUfiD-aNV7Mr0Y4RoLQ2m79uafMDQVLgOolIkqLhGMrC9BLHlSmvKEsDTUqYsPUfkW6D~UUJ5Ol2-PJfe6i2qWzyM9q61SyyA4ITgLKcnYc0GWGdVgfYPZp8Q7zv11za0t~bkDSSZp7V~6zKLQeMqvXGaG56sEMjhY5BnBob1460hRJwhNlgc5R-UjZ-m4tNDaSSY34lMWro0p9bUGQygba30Q__"
          alt="Bubble tea hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold italic text-center mb-4">BUBBLE TEA<br />LIVE STATION</h2>
          <p className="text-lg md:text-xl text-secondary">WE BRING LIFE TO YOUR EVENTS</p>
        </div>
      </section>

      {/* Only Available in Delhi Banner */}
      <div className="bg-gray-200 text-center py-3 text-accent font-semibold uppercase tracking-wider">
        Only available in Delhi
      </div>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold italic text-accent mb-4">About Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-foreground/80 text-lg leading-relaxed">
            We are committed to delivery unique, innovative, and trendy catering options that elevate events. From customised flavours to personalised branding on cups, packaging, and booth designs, we ensure every detail aligns with your theme. More than just catering, we are your partners in creating unforgettable events.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-12">Our Services</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Live Station */}
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4">Bubble Tea Live Station & Catering</h3>
              <p className="text-foreground/80 mb-4">
                Our Live Station lets guests customise sugar levels to suit their preferences. We also provide custom branding options, including stickers on cups for added personalisation.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Customisable sugar levels</li>
                <li>✓ Custom branding options</li>
                <li>✓ Professional staff included</li>
              </ul>
            </Card>

            {/* Party Box */}
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4">Party Box Self-Serve Catering</h3>
              <p className="text-foreground/80 mb-4">
                Self-serve bubble tea with free pearls included for every order. This option is perfect for smaller parties with lower minimum order than Live Stations!
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Self-serve convenience</li>
                <li>✓ Free pearls included</li>
                <li>✓ Lower minimum order</li>
              </ul>
            </Card>

            {/* Bottled Tea */}
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4">Bottled Bubble Tea</h3>
              <p className="text-foreground/80 mb-4">
                Our Bottled Bubble Tea is perfect for full-day events or grab-and-go options – fuss-free and convenient! They stay fresh for up to 3 days when refrigerated.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Fresh for up to 3 days</li>
                <li>✓ Grab-and-go convenience</li>
                <li>✓ Premium quality</li>
              </ul>
            </Card>

            {/* Other Services */}
            <Card className="p-8 border-2 border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4">Other Food Live Stations</h3>
              <p className="text-foreground/80 mb-4">
                We offer a variety of food live stations that cater to a wide range of target audience, such as Acai Bowls, Smoothies, Popcorn, Nachos, and more!
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Diverse menu options</li>
                <li>✓ Customisable offerings</li>
                <li>✓ Professional setup</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials/Clients Section */}
      <section id="clients-and-reviews" className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-12">Clients & Testimonials</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-muted p-8 rounded-lg">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-accent mb-2">{testimonials[currentTestimonial].title}</h3>
              <p className="text-foreground/80 text-lg">{testimonials[currentTestimonial].description}</p>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-foreground/60">
              {currentTestimonial + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Choose Your Bubble Tea Live Station Package</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Catering bubble tea for an event but don't know where to start? Here are some standard packages, but feel free to create your own package to tailor better to your event!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="p-8 border-2 border-accent/30 hover:border-accent transition">
              <h3 className="text-2xl font-bold text-accent mb-4">Basic Package</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent">100-200</div>
                <p className="text-foreground/60">cups</p>
              </div>
              <ul className="space-y-3 text-foreground/80 mb-8">
                <li>• Choose 2 flavours from our menu offerings</li>
                <li>• Pearls included</li>
                <li>• Complimentary 2 hours (up to) service at event</li>
                <li>• 1 event on-site service staff</li>
                <li>• Service includes transportation to venue, booth set-up & clean-up</li>
                <li>• Minimum 1.5m x 1.5m space required</li>
                <li>• Complimentary customisable stickers on cups</li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Enquire Now</Button>
            </Card>

            {/* Premium Package */}
            <Card className="p-8 border-2 border-secondary/50 hover:border-secondary transition bg-white shadow-lg">
              <div className="bg-secondary text-accent px-3 py-1 inline-block rounded text-sm font-bold mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold text-accent mb-4">Premium Package</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent">300-400</div>
                <p className="text-foreground/60">cups</p>
              </div>
              <ul className="space-y-3 text-foreground/80 mb-8">
                <li>• Choose 2 flavours from our menu offerings</li>
                <li>• Pearls included</li>
                <li>• Complimentary 2 hours (up to) service at event</li>
                <li>• 1-2 event on-site service staff</li>
                <li>• Service includes transportation to venue, booth set-up & clean-up</li>
                <li>• Minimum 2m x 2m space required</li>
                <li>• Complimentary customisable stickers on cups</li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Enquire Now</Button>
            </Card>

            {/* Baller Package */}
            <Card className="p-8 border-2 border-accent/30 hover:border-accent transition">
              <h3 className="text-2xl font-bold text-accent mb-4">Baller Package</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-accent">&gt;500</div>
                <p className="text-foreground/60">cups</p>
              </div>
              <ul className="space-y-3 text-foreground/80 mb-8">
                <li>• Choose 2 flavours from our menu offerings</li>
                <li>• Pearls included</li>
                <li>• Complimentary 3 hours (up to) service at event</li>
                <li>• 2 event on-site service staff</li>
                <li>• Service includes transportation to venue, booth set-up & clean-up</li>
                <li>• Minimum 2m x 2m space required</li>
                <li>• Complimentary customisable stickers on cups</li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Enquire Now</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="how-to-order" className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">How To Order</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
            </div>

            {/* Email and Contact */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Company (if applicable)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Choice of Live Station / Product *</label>
              <div className="space-y-2">
                {["Bubble Tea Live Station", "Bottled Bubble Tea", "Party Box 5L Catering", "Other Food Live Stations"].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span className="text-foreground">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">No. of Pax to Serve *</label>
                <input
                  type="number"
                  name="pax"
                  value={formData.pax}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Event Date and Time *</label>
                <input
                  type="datetime-local"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
            </div>

            {/* Event Location and Nature */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Event Location *</label>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nature of Event *</label>
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  placeholder="e.g., Birthday, Corporate Event, Wedding"
                  className="w-full px-4 py-2 border border-border rounded"
                />
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">How did you hear about us? *</label>
              <div className="space-y-2">
                {["Word-of-mouth / Friend's recommendation", "Google search", "Social media", "Other"].map((source) => (
                  <label key={source} className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-foreground">{source}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Additional Comments</label>
              <textarea
                name="comments"
                rows={4}
                value={formData.comments}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded"
              ></textarea>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <Button className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 text-lg font-semibold">
                SUBMIT
              </Button>
              <Button
                onClick={handleSubmitViaWhatsApp}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition">Bubble Tea Live Station</a></li>
                <li><a href="#" className="hover:text-white transition">Bottled Bubble Tea</a></li>
                <li><a href="#" className="hover:text-white transition">Party Box Catering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>📞 +91 XXXXX XXXXX</li>
                <li>📧 hello@snowbrew.in</li>
                <li>📍 Delhi, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Snowbrew. All rights reserved. Exclusively serving Delhi.</p>
            <div className="mt-4 space-y-1">
              <a href="#" className="block hover:text-white transition">Terms and Conditions</a>
              <a href="#" className="block hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
