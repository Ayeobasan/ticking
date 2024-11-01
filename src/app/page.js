"use client";

import Checkout from "@/components/Checkout";
import EventDetails from "@/components/EventDetails";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import { useState } from "react";

export default function Home() {
  const events = [
    {
      id: 1,
      name: "Summer Festival",
      date: "2023-07-15",
      price: 50,
      image: "/Inline-04-1.jpg",
    },
    {
      id: 2,
      name: "Tech Conference 2023",
      date: "2023-08-22",
      price: 100,
      image: "/Inline-05-2.jpg",
    },
    {
      id: 3,
      name: "Food & Wine Expo",
      date: "2023-09-10",
      price: 75,
      image: "/ticketsimg.jpg",
    },
    {
      id: 4,
      name: "Summer Music Festival",
      date: "2023-07-15",
      price: 50,
      image: "/tickets.jpg",
    },
    {
      id: 5,
      name: "Summer Music Festival",
      date: "2023-07-15",
      price: 50,
      image: "/Inline-04-1.jpg",
    },
    {
      id: 6,
      name: "Summer Music Festival",
      date: "2023-07-15",
      price: 50,
      image: "/Inline-04-1.jpg",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("eventList");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState({});

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateTo = (page, event = null) => {
    setCurrentPage(page);
    if (event) setSelectedEvent(event);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="container mx-auto p-4 bg-background text-foreground">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Event Ticketing Platform</h1>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </header>

        {currentPage === "eventList" && (
          <EventList events={events} navigateTo={navigateTo} />
        )}

        {currentPage === "eventDetails" && (
          <EventDetails
            event={selectedEvent}
            navigateTo={navigateTo}
            setSelectedTickets={setSelectedTickets}
          />
        )}

        {currentPage === "checkout" && (
          <Checkout
            event={selectedEvent}
            selectedTickets={selectedTickets}
            navigateTo={navigateTo}
          />
        )}
      </div>
    </div>
  );
}
