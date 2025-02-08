import { notFound } from "next/navigation";

import { Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";
import { Metadata } from "next";
import { events } from "./config";
import EventsBanner from "@/components/EventsBanner";

type TProps = {
  params: Promise<{ event: string }>;
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const { event } = await params;

  const eventMatch = events.find((p) => p.eventSlug === event);

  if (!eventMatch) {
    return notFound();
  }

  return {
    title: eventMatch.heading,
    description: eventMatch.metaDescription,
    keywords: eventMatch.keywords,
    openGraph: {
      title: eventMatch.heading,
      description: eventMatch.metaDescription,
      images: [eventMatch.image],
    },
  };
}

export default async function page({ params }: TProps) {
  const { event } = await params;

  const eventMatch = events.find((p) => p.eventSlug === event);

  if (!eventMatch) {
    return notFound();
  }

  return (
    <>
      <Stack
        sx={{
          height: "auto",
          paddingTop: { xs: "30px", md: "15px" },
          paddingBottom: { xs: "20px", md: "18px" },
          backgroundColor: "#FBF9EF",
        }}
      >
        <EventsBanner />
        <Stack className="fixed-size-container">
          <Typography
            variant="h1"
            className={styles.heading}
            fontWeight="fontWeightBold"
          >
            {eventMatch.heading}
          </Typography>
          <Stack className={styles.imageContainer}>
            <Image
              src={eventMatch.image}
              alt={eventMatch.heading}
              className={styles.image}
              fill
            />
          </Stack>
          <Stack dangerouslySetInnerHTML={{ __html: eventMatch.description }} />
        </Stack>
      </Stack>
    </>
  );
}
