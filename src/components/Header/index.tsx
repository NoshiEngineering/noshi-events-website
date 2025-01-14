"use client";
import React, {useState} from "react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";
import { Menu, Phone } from "mdi-material-ui";
import SideNav from "./SideNav";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleScrollToContact = (e: any) => {
    let div = document.querySelector("#contact-section");
    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const handleScrollToEvents = (e: any) => {
    let div = document.querySelector("#events-section");
    if (div) {
      div.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const phoneNumber = "+91 9373090013"

  const handleCopyPhoneNumber = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
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
            <Phone color="primary" sx={{ height: "24px", width: "24px" }} />
            <Menu
              onClick={toggleDrawer}
              color="primary"
              sx={{ height: "24px", width: "24px", marginLeft: "20px" }}
            />
          </Stack>
        </Stack>
      </Stack>
      {drawerOpen && (
        <SideNav
          open={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
      )}
    </>
  );
}

export default Header;
