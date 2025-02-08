import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const Heading = () => {
  return (
    <Stack alignItems="center" spacing={1}>
    <Stack direction="row" gap={{ xs: "6px", md: "9px" }} alignItems="center">
      <Image
        src="/noshi-events-logo.svg"
        className={styles.logo}
        width={60}
        height={60}
        alt="logo"
      />
      <Stack alignItems="flex-start">
        <Typography
          fontSize={{ xs: "16px", md: "24px" }}
          fontWeight={{ xs: 600 }}
          color="#FFFFFF"
        >
          NOSHI EVENTS
        </Typography>
        <Typography fontSize={{ xs: "12px", md: "14px" }} color="#FFFFFF">
          Crafting Experiences That Turn Into Long-Lasting Memories.
        </Typography>
       
      </Stack>
    </Stack>
    <Typography fontSize={{ xs: "16px", md: "24px" }}  fontWeight={{ xs: 600 }} color="#FFFFFF"  >
          A Shree Ventures Enterprise
        </Typography>
    </Stack>
  );
};

export default Heading;
