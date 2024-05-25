"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!eventName) {
        toast.error("Event name is required", { autoClose: 2000 });
      } else if (!eventDate) {
        toast.error("Event date is reqquired", { autoClose: 2000 });
      } else if (!eventDescription) {
        toast.error("A brief event description is required", {
          autoClose: 2000,
        });
      } else if (!eventLocation) {
        toast.error("Event location is required", { autoClose: 2000 });
      } else if (!eventOrganizer) {
        toast.error("Who is the event organizer?", { autoClose: 2000 });
      } else {
        const newEvent = {
          id: new Date().getTime().toString(),
          name: eventName,
          date: eventDate,
          description: eventDescription,
          location: eventLocation,
          organizer: eventOrganizer,
        };

        const events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));

        setEventName("");
        setEventDate("");
        setEventDescription("");
        setEventLocation("");
        setEventOrganizer("");

        toast.success("New event added!", { autoClose: 2000 });
      }
    } catch {
      toast.error(
        "Sorry, an error occurred in a component. Try reloading the page."
      );
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="p-4 max-w-2xl mx-auto px-4 py-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label htmlFor="eventName">Event Name *</label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                required
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="What is the name of the event?"
              />
            </div>

            <div>
              <label htmlFor="eventDate">Event Date *</label>
              <input
                type="date"
                name="eventDate"
                id="eventDate"
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder="When will the event take place?"
              />
            </div>
          </div>

          <div>
            <label htmlFor="eventDescription">Event Description *</label>
            <textarea
              name="eventDescription"
              id="eventDescription"
              cols="30"
              rows="6"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
              placeholder="Give a short description about the event"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div>
              <label htmlFor="eventLocation">Event Location *</label>
              <input
                type="text"
                name="eventLocation"
                id="eventLocation"
                required
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Where will the event take place?"
              />
            </div>

            <div>
              <label htmlFor="eventOrganizer">Event Organizer *</label>
              <input
                type="text"
                name="eventOrganizer"
                id="eventOrganizer"
                required
                value={eventOrganizer}
                onChange={(e) => setEventOrganizer(e.target.value)}
                placeholder="Who is the primary organizer of the event?"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white py-2 px-6 rounded-lg font-bold text-neutral-900"
          >
            Create new event
          </button>
        </form>
      </div>
    </>
  );
}
