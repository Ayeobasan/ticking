import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const ticketTypes = [
  { id: 'general', name: 'General Admission', price: 50 },
  { id: 'vip', name: 'VIP', price: 100 },
]

export default function EventDetails({ event, navigateTo, setSelectedTickets }) {
  const [tickets, setTickets] = useState({ general: 0, vip: 0 })
  const [totalPrice, setTotalPrice] = useState(0)

  const handleTicketChange = (type, quantity) => {
    const newTickets = { ...tickets, [type]: parseInt(quantity) }
    setTickets(newTickets)
    
    const newTotalPrice = ticketTypes.reduce((total, ticketType) => {
      return total + (newTickets[ticketType.id] * ticketType.price)
    }, 0)
    setTotalPrice(newTotalPrice)
  }

  const handleContinueToCheckout = () => {
    setSelectedTickets(tickets)
    navigateTo('checkout')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <Image
        src={event.image}
        alt={event.name}
        width={600}
        height={400}
        className="w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Date: {event.date}</p>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo et nunc bibendum, in bibendum nunc tincidunt.</p>
        
        <div className="space-y-4">
          {ticketTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <span>{type.name} - ${type.price}</span>
              <Select onValueChange={(value) => handleTicketChange(type.id, value)}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-xl font-bold">Total: ${totalPrice}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleContinueToCheckout} disabled={totalPrice === 0}>
          Continue to Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}