"use client"

import { useEffect, useRef, useState } from "react"
import { SlidersHorizontal, Star, ShoppingCart, ChevronLeft, ChevronRight, Home, Search, User } from "lucide-react"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"


function ModelViewerComponent({ src, alt, iosSrc }: { src: string; alt: string; iosSrc: string }) {
  const modelRef = useRef<HTMLDivElement>(null)
  const modelViewerRef = useRef<any>(null)

  useEffect(() => {
    if (modelRef.current) {
      const modelViewer = document.createElement("model-viewer") as HTMLModelViewerElement
      modelViewer.src = src
      modelViewer.alt = alt
      modelViewer.setAttribute("auto-rotate", "")
      modelViewer.setAttribute("camera-controls", "")
      modelViewer.setAttribute("ar", "")
      modelViewer.setAttribute("ar-modes", "webxr scene-viewer quick-look")
      modelViewer.setAttribute("ios-src", iosSrc)
      modelViewer.setAttribute("shadow-intensity", "1")
      modelViewer.setAttribute("environment-image", "neutral")
      modelViewer.style.width = "100%"
      modelViewer.style.height = "100%"

      modelRef.current.appendChild(modelViewer)
      modelViewerRef.current = modelViewer

      return () => {
        if (modelRef.current) {
          modelRef.current.innerHTML = ""
        }
      }
    }
  }, [src, alt, iosSrc])

  return <div ref={modelRef} style={{ width: "100%", height: "100%" }} />
}

export default function FoodOrdering() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      <div className="container mx-auto px-4 py-6 mb-16 md:mb-0">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">ORDER YOUR FAVORITE FOOD</h1>
          <div className="relative flex items-center">
            <Input type="search" placeholder="Search..." className="w-[300px] pr-12 rounded-full border-gray-200" />
            <Button size="icon" variant="ghost" className="absolute right-0 hover:bg-transparent">
              <SlidersHorizontal className="h-5 w-5 text-[#ffac33]" />
            </Button>
          </div>
        </header>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4 md:hidden">
            <div className="relative">
              <Input type="search" placeholder="Search..." className="w-full pr-12 rounded-full border-gray-200" />
              <Button size="icon" variant="ghost" className="absolute right-0 top-0 hover:bg-transparent">
                <SlidersHorizontal className="h-5 w-5 text-[#ffac33]" />
              </Button>
            </div>
            <Button className="mt-4" onClick={() => setIsSearchOpen(false)}>
              Close
            </Button>
          </div>
        )}

        {/* Banner Carousel */}
        <div className="relative mb-8 overflow-hidden rounded-2xl mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex-none w-full">
                <div className="relative w-full" style={{ paddingTop: "33.33%" }}>
                  <Image
                    src="/Background.png"
                    alt="Super Delicious Burger Deal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="rounded-2xl object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/80 rounded-full p-1 md:p-2 shadow-md hover:bg-white transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </button>
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
            {[1, 2, 3].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-200 ${
                  i === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { name: "Chicken", price: "$15.00", image: "/burger-2.png.png" },
              { name: "Pro Burger", price: "$12.00", image: "/burger-2.png.png" },
              { name: "Pro Pasta", price: "$18.00", image: "/pasta.png.png" },
              { name: "Pro Pizza", price: "$20.00", image: "/french-fry.png.png" },
            ].map((category, i) => (
              <div key={i} className="flex-none text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ffac33]/10 rounded-full flex items-center justify-center mb-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <p className="text-xs md:text-sm font-medium">{category.name}</p>
                <p className="text-xs text-[#8b8b8b]">{category.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Section with 3D Models */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">RECOMMENDED FOR YOU</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Ramen", price: "$33.00", model: "../../ramen/scene.gltf", ios: "../../ramen/scene.usdz" },
              { name: "Pizza", price: "$33.00", model: "../../pizza/pizza.gltf", ios: "../../pizza/pizza.usdz" },
              { name: "Ramen", price: "$33.00", model: "../../ramen/scene.gltf", ios: "../../ramen/scene.usdz" },
              { name: "Pizza", price: "$33.00", model: "../../pizza/pizza.gltf", ios: "../../pizza/pizza.usdz" },
            ].map((item, index) => {
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="w-full aspect-[4/3]">
                        <ModelViewerComponent src={item.model} alt={`3D model of ${item.name}`} iosSrc={item.ios} />
                      </div>
                      <div
                        className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer transition-colors"
                        onClick={() => setIsFavorite(!isFavorite)}
                      >
                        <Star className={`w-4 h-4 ${isFavorite ? "text-[#ffac33] fill-[#ffac33]" : "text-gray-400"}`} />
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
                          <div className="flex items-center gap-1 text-xs md:text-sm text-[#8b8b8b]">
                            <Star className="w-3 h-3 md:w-4 md:h-4 text-[#ffac33]" />
                            <span>4.5</span>
                          </div>
                        </div>
                        <Button size="icon" variant="outline" className="rounded-full h-8 w-8 md:h-10 md:w-10">
                          <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm md:text-base font-bold">{item.price}</p>
                        <p className="text-xs md:text-sm text-[#8b8b8b] line-through">$35.00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-around items-center h-16">
            <Button variant="ghost" className="flex flex-col items-center">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-6 w-6" />
              <span className="text-xs mt-1">Search</span>
            </Button>
            <Link href ="/menu">
            <Button variant="ghost" className="flex flex-col items-center">
                <User className="h-6 w-6" />
                <span className="text-xs mt-1">Menu</span>
              </Button>
              </Link>
            <Link href="/cart">
            <Button variant="ghost" className="flex flex-col items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cart</span>
            </Button>
            </Link>

          </div>
        </nav>
      </div>
    </>
  )
}

