import Image from "next/image";
type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const response = fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await (await response).json();
  console.log(event);

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="event background image"
          className="object-cover blur-3xl "
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw,1280px"
          priority
        />

        <div>
          <Image src={event.imageUrl} alt={event.name} />
        </div>
      </section>
      <div></div>
    </main>
  );
}
