"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
import ContactCard from "./ContactCard";
import { EmailOutline, MapMarkerOutline, Phone } from "mdi-material-ui";

const ReachOut = () => {
  return (
    <Stack alignItems="center" gap={{ xs: "8px", md: "60px" }} width="100%">
      <Typography
        textAlign="center"
        fontSize={{ xs: "16px", md: "32px" }}
        fontWeight={{ xs: 600, md: 700 }}
      >
        Reach Out To Us
      </Typography>
      <Stack
        width="100%"
        justifyContent={{ md: "space-between" }}
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: "30px" }}
        flexWrap="wrap"
      >
        <ContactCard
          icon={<EmailOutline sx={{ fontSize: 48 }} />}
          text={[
            "Send us an Email",
            {
              content: "info@noshievents.com",
              clickable: true,
              onClick: () =>
                (window.location.href = "mailto:info@noshievents.com"),
              sx: { textDecoration: "underline" },
            },
          ]}
        />
        <ContactCard
          icon={<Phone sx={{ fontSize: 48 }} />}
          text={[
            "Call Us On",
            {
              content: "+91 9373090013",
              clickable: true,
              onClick: () => {
                navigator.clipboard.writeText("+91 9373090013");
                alert("Copied to clipboard: +91 9373090013");
              },
            },
            {
              content: "+91 7908728576",
              clickable: true,
              onClick: () => {
                navigator.clipboard.writeText("+91 7908728576");
                alert("Copied to clipboard: +91 7908728576");
              },
            },
          ]}
        />
        <ContactCard
          icon={
            <MapMarkerOutline
              sx={{ fontSize: 48, cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Ponda,+Goa",
                  "_blank"
                )
              }
            />
          }
          text={["We are located at", { content: "Ponda, Goa" }]}
        />
      </Stack>
    </Stack>
  );
};

export default ReachOut;
