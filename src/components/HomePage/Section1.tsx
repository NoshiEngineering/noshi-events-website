import { Stack } from "@mui/material";
import React from "react";
import ContactUs from "../ContactForm";

const Section1 = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url('/homepage/test-img1.png')`,
        // backgroundSize: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "100%",
      }}
    >
      <ContactUs />
    </Stack>
  );
};

export default Section1;
