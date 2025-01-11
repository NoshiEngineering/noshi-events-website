import { Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IEventType {
  heading: string;
  description: string;
  image: string;
}

interface IEventTypes {
  eventTypes: IEventType[];
}

function EventsMobileView({ eventTypes }: IEventTypes) {
  return (
    <Stack gap={2}>
      <Typography fontWeight="fontWeightMedium" sx={{fontSize: "16px",margin: "20px 0px 4px 0px", textAlign: "center"}}>We specialize in</Typography>
      {eventTypes.map((event: IEventType, index: number) => (
        <Stack
          key={index}
          spacing={2}
          direction="row"
          padding={1.4}
          sx={{ boxShadow: "0px 2px 4px 0px #00000040", borderRadius: "4px", background: "#fff" }}
        >
          <Stack>
            <Typography
              fontWeight="fontWeightMedium"
              sx={{ color: "#1E2203", fontSize: "16px" }}
            >
              {event.heading}
            </Typography>
            <Tooltip title={event.description} arrow>
              <Typography
                sx={{
                  color: "#1E2203",
                  fontSize: "12px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3, // Limits the text to 3 lines
                  WebkitBoxOrient: "vertical",
                }}
              >
                {event.description}
              </Typography>
            </Tooltip>
          </Stack>
          <Image
            src={event.image}
            alt={event.heading}
            height={90}
            width={100}
            style={{ borderRadius: "4px" }}
          />
        </Stack>
      ))}
    </Stack>
  );
}

export default EventsMobileView;
