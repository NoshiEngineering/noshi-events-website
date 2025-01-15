import { Stack, Typography } from "@mui/material";
import React from "react";
import { Form } from "./Form";

const Newsletter = () => {
  return (
    <Stack gap={{ xs: "16px", md: "8px" }}>
      <Typography
        fontSize="24px"
        fontWeight={600}
        display={{ xs: "none", md: "block" }}
      >
        NewsLetter
      </Typography>
      <Typography fontSize={{ xs: "16px", md: "14px" }} fontWeight={600}>
        Subscribe to our newsletter for the latest updates on new features and
        product releases.
      </Typography>
      <Form />
    </Stack>
  );
};

export default Newsletter;
