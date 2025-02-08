import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { Typography } from "@mui/material";

function BlogBanner() {
  return (
    <div className={styles.container}>
      {/* Left Image */}
      <div className={styles.leftContainer}>
        <Typography
          variant="h1"
          fontWeight="fontWeightBold"
          className={styles.pageHeadingDesktop}
        >
          NOSHI BLOGS
        </Typography>
      </div>

      {/* Right Image */}
      <div className={styles.rightImage}>
        <Image
          src="/blogs/blogs-background.svg"
          alt="blogs-background-image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* White Diagonal Overlay */}
      <div className={styles.diagonalOverlay}></div>

      {/* Text Content */}
      <div className={styles.textContent}>
        <Typography className={styles.pageHeadingMobile} variant="h1" fontWeight="fontWeightBold">
          NOSHI BLOGS
        </Typography>
      </div>
    </div>
  );
}

export default BlogBanner;
