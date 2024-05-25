import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="p-4 bg-neutral-900">
        <nav className="flex items-center justify-start lg:justify-between flex-wrap">
          <div>
            <Link href="/" className="text-white font-semibold">
              Event Booking App
            </Link>
          </div>

          <ul className="flex items-center justify-start gap-4 text-white">
            <li>
              <Link href="/">All Events</Link>
            </li>
            <li>
              <Link href="/booked-events">View Booked Events</Link>
            </li>
            <li>
              <Link href="/new-event">Add New Event</Link>
            </li>
          </ul>

          <div className="text-white font-bold">Welcome</div>
        </nav>
      </header>
    </>
  );
}
