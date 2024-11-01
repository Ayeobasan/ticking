import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function EventList({ events, navigateTo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden transition-transform duration-200 hover:scale-105">
          <Image
            src={event.image}
            alt={event.name}
            width={300}
            height={200}
            className="w-full object-cover"
          />
          <CardHeader>
            <CardTitle>{event.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Date: {event.date}</p>
            <p className="font-bold mt-2">Price: ${event.price}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigateTo('eventDetails', event)}>View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}