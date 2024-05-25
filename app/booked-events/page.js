"use client";

import { useState, useEffect } from "react";

export default function BookedEvents() {
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("bookedEvents") || "[]");
    setBookedEvents(events);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-white text-4xl text-center font-bold mb-8">
          Booked Events
        </h2>
        {bookedEvents.length === 0 ? (
          <p className="text-white">No booked events found</p>
        ) : (
          <table
            width="100%"
            className="text-white overflow-auto container w-full"
          >
            <thead>
              <tr>
                <td className="font-bold text-lg py-4">Event name</td>
                <td className="font-bold text-lg py-4">Event date</td>
                <td className="font-bold text-lg py-4">Event location</td>
                <td className="font-bold text-lg py-4">Event organizer</td>
              </tr>
            </thead>

            <tbody>
              {bookedEvents.map((event) => (
                <tr key={event.id} className="py-2">
                  <td className="py-3">{event.name}</td>
                  <td className="py-3">{event.date}</td>
                  <td className="py-3">{event.location}</td>
                  <td className="py-3">{event.organizer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
