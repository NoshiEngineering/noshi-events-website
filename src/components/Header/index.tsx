"use client"
import React from "react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";
import { Menu, Phone } from "mdi-material-ui";


function Header() {
  

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
              <Typography variant="subtitle1" className={styles.links}>
                Events
              </Typography>
              <Typography variant="subtitle1" className={styles.links}>
                Contact Us
              </Typography>
            </Stack>
            <Stack direction="column" justifyContent="center">
              <Button variant="contained" className={styles.buttonStyles}>
                Call : +91 9373090013
              </Button>
            </Stack>
          </Stack>

          <Stack direction="row"
            justifyContent="space-between"
            className={`fixed-size-container ${styles.mobileView}`}>
            <Stack direction="row" alignItems="center">
              <Image
                src="/noshi-events-logo.svg"
                width={32}
                height={32}
                alt="logo"
              />
              <Typography sx={{fontSize: "10px", marginLeft: "4px"}} color="primary" fontWeight="fontWeightMedium">NOSHI EVENTS</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Phone color="primary" sx={{height: "24px", width: "24px"}}/>
              <Menu color="primary" sx={{height: "24px", width: "24px", marginLeft: "20px"}}/>
            </Stack>
          </Stack>
      </Stack>
    </>
  );
}

export default Header;
