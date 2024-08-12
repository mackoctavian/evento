import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className=" flex-1 basis-80 h-[380px] max-w-[500px]"
    >
      <section
        key={event.id}
        className="w-full h-full  flex flex-col relative bg-white/[3%]  overflow-hidden rounded-xl  transition hover:scale-105 active:scale-[1.02]"
      >
        <Image
          src={event.imageUrl}
          width={500}
          height={280}
          alt={event.name}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <span className="block text-2xl font-semibold">{event.name}</span>
          <span className="block italic text-white/75">
            By {event.organizerName}
          </span>
          <span className="block text-sm text-white/50 mt-4">
            {event.location}
          </span>

          <section className="absolute flex flex-col items-center justify-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-nd">
            <p className="text-xl font-bold -mb-[5px]">
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "2-digit",
              })}
            </p>
            <p className="text-xs uppercase text-accent ">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
              })}
            </p>
          </section>
        </div>
      </section>
    </Link>
  );
}
