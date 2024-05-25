"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EventList() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    setEventList(events);
  }, []);

  const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];

  const handleBookEvent = (event) => {
    // Check if the event is already booked
    if (
      bookedEvents.find((e) => e.name === event.name && e.date === event.date)
    ) {
      toast.error("Event already booked!", { autoClose: 2000 });
      return;
    }

    // If the event is not booked, then add it to booked events
    const updateBookedEvents = [...bookedEvents, event];
    localStorage.setItem("bookedEvents", JSON.stringify(updateBookedEvents));
    toast.success("Event booked successfully!", { autoClose: 2000 });
  };

  return (
    <>
      <ToastContainer />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-white text-4xl text-center font-bold mb-8">
          Events
        </h2>
        {eventList.length === 0 ? (
          <p className="text-white">No events found</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-lg border border-neutral-800"
              >
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">{event.name}</h4>
                  <p className="text-neutral-400 text-sm">
                    <strong className="text-white">Date:</strong> {event.date}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    {event.description}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong className="text-white">Location:</strong>{" "}
                    {event.location}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong className="text-white">Organizer:</strong>{" "}
                    {event.organizer}
                  </p>
                  <button
                    onClick={() => handleBookEvent(event)}
                    className="bg-neutral-800 hover:bg-neutral-900 transition py-2 px-6 rounded-lg text-white text-sm font-semibold"
                  >
                    Book Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
