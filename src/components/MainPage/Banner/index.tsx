import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "./index.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      {/* Left Image */}
      <div className={styles.leftImage}>
        <Image
          src="/homepage/Banner/background-image-one.svg"
          alt="Left Event Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right Image */}
      <div className={styles.rightImage}>
        <Image
          src="/homepage/Banner/background-image-two.svg"
          alt="Right Event Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* White Diagonal Overlay */}
      <div className={styles.diagonalOverlay}></div>

      {/* Text Content */}
      <div className={styles.textContent}>
        <Typography className={styles.heading} fontWeight="fontWeightBold">
          NOSHI EVENTS
        </Typography>
        <Typography className={styles.subheading}>
          Crafting Experiences That Turn Into Long-Lasting Memories.
        </Typography>
      </div>
    </div>
  );
}

export default Banner;
