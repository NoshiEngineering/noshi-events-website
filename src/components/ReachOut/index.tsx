"use client";
import { Snackbar, Stack, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { EmailOutline, MapMarkerOutline, Phone } from "mdi-material-ui";
import copy from "copy-to-clipboard";

const ReachOut = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCopy = (text: string) => {
    copy(text);
    setSnackbarMessage(`Copied to clipboard: ${text}`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ReachOut;
