"use client";
import React, { useState } from "react";
import { Snackbar, Button, Stack, Typography, Alert } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";
import { Menu, Phone } from "mdi-material-ui";
import SideNav from "./SideNav";
import copy from "copy-to-clipboard";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleScrollToContact = () => {
    const div = document.querySelector("#contact-section");
    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const handleScrollToEvents = () => {
    const div = document.querySelector("#events-section");
    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const phoneNumber = "+91 9373090013";

  const handleCopyPhoneNumber = () => {
    copy(phoneNumber)
    setSnackbarMessage(`Copied to clipboard: ${phoneNumber}`);
    setSnackbarOpen(true);
  };

  return (
    <>
      <Stack className={styles.backgroundContainer}>
        <Stack
          direction="row"
          justifyContent="space-between"
          className={`fixed-size-container ${styles.desktopView}`}
        >
          <Stack direction="row" alignItems="center">
            <Image
              src="/noshi-events-logo.svg"
              width={60}
              height={60}
              alt="logo"
            />
            <Button
              variant="text"
              disableRipple
              className={styles.links}
              onClick={handleScrollToEvents}
            >
              Events
            </Button>
            <Button
              variant="text"
              disableRipple
              className={styles.links}
              onClick={handleScrollToContact}
            >
              Contact Us
            </Button>
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Button
              variant="contained"
              onClick={handleCopyPhoneNumber}
              className={styles.buttonStyles}
            >
              Call : {phoneNumber}
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          className={`fixed-size-container ${styles.mobileView}`}
        >
          <Stack direction="row" alignItems="center">
            <Image
              src="/noshi-events-logo.svg"
              width={32}
              height={32}
              alt="logo"
            />
            <Typography
              sx={{ fontSize: "10px", marginLeft: "4px" }}
              color="primary"
              fontWeight="fontWeightMedium"
            >
              NOSHI EVENTS
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Phone color="primary" sx={{ height: "24px", width: "24px" }} onClick={handleCopyPhoneNumber} />
            <Menu
              onClick={toggleDrawer}
              color="primary"
              sx={{ height: "24px", width: "24px", marginLeft: "20px" }}
            />
          </Stack>
        </Stack>
      </Stack>
      {drawerOpen && <SideNav open={drawerOpen} toggleDrawer={toggleDrawer} />}
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
    </>
  );
}

export default Header;
