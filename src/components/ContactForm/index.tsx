import { Paper, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: { xs: "20px", md: "22px" },
        gap: { xs: "24px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        textAlign="center"
        fontSize={{ xs: "16px", md: "32px" }}
        fontWeight={700}
      >
        CONTACT US
      </Typography>
      <Form />
    </Paper>
  );
};

export default ContactUs;
