import Image from 'next/image';
import styles from "./index.module.css";
import { Typography } from '@mui/material';

export default function EventsBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.firstSectionBackground} />
        <div className={styles.diagonalOverlay} />
        <div className={styles.imageContainer}>
          <Image
            src="/eventsPage/events-page-background.svg"
            alt="floral-arrangement"
            fill
            priority
          />
        </div>
        <div className={styles.pageHeading}>
          <Typography variant="h1" fontWeight="fontWeightBold" className={styles.mainHeading}>EVENTS</Typography>
        </div>
      </div>
      <div className={styles.textContent}>
        <Typography className={styles.pageHeadingMobile} variant="h1" fontWeight="fontWeightBold">
          EVENTS
        </Typography>
      </div>
    </div>
  )
}
