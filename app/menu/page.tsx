"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Home, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 2,
    name: "Chicken Caesar Salad",
    description: "Fresh romaine lettuce with grilled chicken, croutons, and Caesar dressing",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 3,
    name: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce",
    price: 11.99,
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 4,
    name: "Vegetarian Pasta",
    description: "Penne pasta with mixed vegetables in a creamy tomato sauce",
    price: 10.99,
    image: "/placeholder.svg?height=200&width=400"
  }
]

export default function Menu() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center sm:text-left">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="w-full p-4 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{item.name}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-40 sm:h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">View Details</Button>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

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
          <Link href="/menu">
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
  )
}
