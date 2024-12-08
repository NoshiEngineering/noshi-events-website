import React from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <Stack className={styles.navContainer}>
      <Typography className={[styles.brand, styles.text].join(" ")}>
        NOSHI EVENTS
      </Typography>
      <Stack spacing={4} direction="row">
        <Typography className={[styles.content, styles.text].join(" ")}>
          Call: 8788150458
        </Typography>
        <Link
          className={[styles.content, styles.text].join(" ")}
          href="#"
          style={{ textDecoration: "none" }}
        >
          CONTACT US
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
