import { EventoEvent } from "@/lib/types";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return <section key={event.id}>{event.name}</section>;
}
