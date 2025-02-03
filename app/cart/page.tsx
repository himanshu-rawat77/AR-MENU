"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Home, Search, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Beef Burger",
    price: 11.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Cart() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center sm:text-left">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is currently empty. Add some delicious items from our menu!</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4">
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 mb-4 sm:mb-0 sm:mr-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                <CardHeader className="flex-grow text-center sm:text-left">
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-between sm:space-x-4">
                  <span className="text-sm text-gray-600">Quantity: {item.quantity}</span>
                  <span className="text-lg font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                </CardContent>
                <CardFooter className="mt-2 sm:mt-0">
                  <Button variant="outline" size="sm">Remove</Button>
                </CardFooter>
              </div>
            </Card>
          ))}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
          </div>
          <Button className="w-full sm:w-auto sm:self-end mt-4">Proceed to Checkout</Button>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around items-center h-16">
         <Link href="/">
          <Button variant="ghost" className="flex flex-col items-center">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          </Link>
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
