import { Divider, Stack } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import FooterContent from "./FooterContent";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#765D37",
        paddingTop: { xs: "20px", md: "70px" },
        paddingBottom: { xs: "20px", md: "60px" },
      }}
    >
      <Grid
        container
        className="fixed-size-container"
        spacing={{ xs: 4, md: 12 }}
        width="100%"
        sx={{ alignItems: "center" }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Heading />
          <Divider
            sx={{
              borderColor: "white",
              marginTop: { xs: "20px" },
              display: { xs: "block", md: "none" },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <FooterContent />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
