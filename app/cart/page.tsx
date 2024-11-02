import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

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

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is currently empty. Add some delicious items from our menu!</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex items-center p-4">
              <div className="relative w-20 h-20 mr-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Quantity: {item.quantity}</span>
                <span className="text-lg font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Remove</Button>
              </CardFooter>
            </Card>
          ))}
          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
          </div>
          <Button className="w-full mt-4">Proceed to Checkout</Button>
        </div>
      )}
    </div>
  )
}