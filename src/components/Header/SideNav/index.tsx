"use client";
import React from "react";
import { Drawer, Stack, Typography } from "@mui/material";
import { ChevronRightCircle, CloseCircle } from "mdi-material-ui";

interface ISideNav {
  open: boolean;
  toggleDrawer: (isOpen: boolean) => void; // Define proper type for toggleDrawer
}

function SideNav({ open, toggleDrawer }: ISideNav) {
  const handleScrollToContact = () => {
    const div = document.querySelector("#contact-section");
    if (div) {
      toggleDrawer(false)
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const handleScrollToEvents = () => {
    const div = document.querySelector("#events-section");
    if (div) {
      toggleDrawer(false)
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "70%",
          height: "100%",
          backgroundColor: "#FBF9EF",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative",
        },
      }}
    >
      <CloseCircle
        sx={{
          position: "absolute",
          color: "#000",
          fontSize: "25px",
          cursor: "pointer",
          top: "16px",
          right: "16px",
        }}
        onClick={() => toggleDrawer(false)}
      />
      <Stack spacing={2} justifyContent="flex-start" sx={{ margin: "80px 16px" }}>
        <Stack direction="row" justifyContent="space-between" onClick={handleScrollToEvents}>
          <Typography fontWeight="fontWeightMedium" sx={{fontSize: "18px"}}>
            Events
          </Typography>
          <ChevronRightCircle/>
        </Stack>
        <Stack direction="row" justifyContent="space-between" onClick={handleScrollToContact}>
          <Typography fontWeight="fontWeightMedium" sx={{fontSize: "18px"}} >
            Contact Us
          </Typography>
          <ChevronRightCircle/>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default SideNav;
