"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IEventType } from ".";
import { useRouter } from "next/navigation";

interface IEventTypes {
  eventTypes: IEventType[];
}

function EventsMobileView({ eventTypes }: IEventTypes) {
  const router = useRouter();
  return (
    <Stack gap={2}>
      <Typography
        fontWeight="fontWeightMedium"
        sx={{
          fontSize: "16px",
          margin: "20px 0px 4px 0px",
          textAlign: "center",
        }}
      >
        We specialize in
      </Typography>
      {eventTypes.map((event: IEventType, index: number) => (
        <Stack
          key={index}
          onClick={() => router.push(`/${event.urlSlug}`)}
          spacing={2.5}
          direction="row"
          padding={1.4}
          sx={{
            backgroundColor: "#658352 !important",
            boxShadow: "0px 2px 4px 0px #00000040",
            borderRadius: "4px",
            background: "#fff",
            transition: "box-shadow 0.3s ease", // Smooth transition effect
            "&:hover": {
              boxShadow: "0px 4px 12px 0px #00000080", // Stronger shadow on hover
            },
          }}
        >
          <Stack sx={{ width: "55%" }}>
            <Typography
              fontWeight="fontWeightMedium"
              sx={{ color: "#fff", fontSize: "16px" }}
            >
              {event.heading}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "12px",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
                // display: "-webkit-box",
                // WebkitLineClamp: 3, // Limits the text to 3 lines
                // WebkitBoxOrient: "vertical",
              }}
            >
              {event.mobileDescription}
            </Typography>
          </Stack>
          <Stack
            sx={{
              borderRadius: "4px",
              position: "relative",
              height: "80px",
              width: "45%",
              overflow: "hidden", // Ensures the image respects the container's borderRadius
            }}
          >
            <Image
              src={event.image}
              alt={event.heading}
              fill // Makes the image responsive and occupy the container
              style={{
                borderRadius: "4px",
                objectFit: "cover", // Ensures the image scales nicely within the container
              }}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default EventsMobileView;
