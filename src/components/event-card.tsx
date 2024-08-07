import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section
      key={event.id}
      className="flex flex-col flex-1 basis-80 bg-white/[3%] h-[380px] overflow-hidden rounded-xl max-w-[500px]"
    >
      <Image
        src={event.imageUrl}
        width={500}
        height={280}
        alt={event.name}
        className="h-[60%] object-fit"
      />
      <div className="flex flex-col flex-1 justify-center items-center">
        <span className="block text-2xl font-semibold">{event.name}</span>
        <span className="block italic text-white/75">
          By {event.organizerName}
        </span>
        <span className="block text-sm text-white/50 mt-4">
          {event.location}
        </span>
      </div>
    </section>
  );
}
