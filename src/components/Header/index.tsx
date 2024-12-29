import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";

function Header() {
  return (
    <>
      <Stack className={styles.backgroundContainer}>
        <Stack
          direction="row"
          justifyContent="space-between"
          className={`fixed-size-container ${styles.contentContainer}`}
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
      </Stack>
    </>
  );
}

export default Header;
