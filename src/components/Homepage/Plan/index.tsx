import React from "react";
import { Button, Stack, Typography } from "@mui/material";

function Plan() {
  return (
    <Stack
      className="fixed-size-container"
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: "20px 148px",
        textAlign: "center",
        "@media (max-width: 900px)": {
          padding: "16px 0px 10px 0px",
        },
      }}
    >
      <Typography
        fontWeight="fontWeightMedium"
        sx={{
          color: "#1E2203",
          "@media (max-width: 900px)": {
            fontSize: "16px",
          },
          "@media (min-width: 901px)": {
            fontSize: "24px",
          },
        }}
      >
        Plan Your Perfect Event With Us
      </Typography>
      <Typography
        sx={{
          marginTop: "24px",
          fontSize: "20px",
          "@media (max-width: 900px)": {
            marginTop: "8px",
            fontSize: "12px"
          },
        }}
      >
        At Noshi Events, we believe that every event has a story to tell, and
        we’re here to make it unforgettable. From the spark of an idea to
        flawless execution, we craft seamless events and timeless memories.
      </Typography>
      <Button variant="contained" sx={{
          backgroundColor: "#658352",
          "&:hover": { backgroundColor: "#5a7c4d" },
          "@media (max-width: 900px)": {
            color: "#fff",
            marginTop: "8px",
          },
          "@media (min-width: 901px)": {
           marginTop: "24px",
          },
        }} >
        Book Now
      </Button>
    </Stack>
  );
}

export default Plan;
