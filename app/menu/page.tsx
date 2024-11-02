import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="w-full">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Details</Button>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}