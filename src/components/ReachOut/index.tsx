"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
import ContactCard from "./ContactCard";
import { EmailOutline, MapMarkerOutline, Phone } from "mdi-material-ui";
import copy from "copy-to-clipboard";
import { useSnackbar } from "@/Context/SnackbarContext";

const ReachOut = () => {
  const { showSnackbar } = useSnackbar();
  const handleCopy = (text: string) => {
    copy(text);
    showSnackbar(`Copied to clipboard: ${text}`);
  };

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
              onClick: () => handleCopy("+91 9373090013"),
            },
            {
              content: "+91 7908728576",
              clickable: true,
              onClick: () => handleCopy("+91 7908728576"),
            },
          ]}
        />
        <ContactCard
          icon={
            <MapMarkerOutline
              sx={{ fontSize: 48, cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/SWY6xox3kbofLxW2A",
                  "_blank"
                )
              }
            />
          }
          text={[
            "We are located at",
            {
              content: "Goa",
              clickable: true,
              onClick: () =>
                window.open(
                  "https://maps.app.goo.gl/SWY6xox3kbofLxW2A",
                  "_blank"
                ),
              sx: { textDecoration: "underline" },
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default ReachOut;
