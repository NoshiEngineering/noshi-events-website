import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export default async function NotFound() {
  return (
    <Stack
      className="fixed-size-container"
      spacing={{ xs: 1, md: 2 }}
      direction={{ xs: "column", md: "row" }}
      sx={{
        paddingTop: { xs: "50px" },
        paddingBottom: { xs: "20px" },
        height: { md: "80vh" },
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        className={styles.notFoundBearImag}
        src="/404/bear.svg"
        alt=""
        height="160"
        width="160"
      />
      <Stack height="100%" width="100%" spacing={3}>
        <Stack
          height="100%"
          width="100%"
          spacing={{ xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "20px", md: "32px" }}
            fontWeight={{ xs: 600 }}
            textAlign="center"
          >
            Not Found? <br /> That’s Un-koala-fied!
          </Typography>
          <Typography
            component="p"
            fontSize={{ xs: "14px", md: "24px" }}
            lineHeight={{ xs: "21px", md: "33px" }}
            textAlign="center"
            maxWidth="562px"
          >
            Looks like the branch you were looking for doesn’t exist! No
            worries—let’s climb back home
          </Typography>
          <Link href="/" passHref>
            <Button
              variant="contained"
              sx={{
                fontWeight: 400,
                backgroundColor: "#658352",
                borderRadius: "100px",
                padding: { xs: "8px 22px" },
              }}
            >
              Return Home
            </Button>
          </Link>
        </Stack>
        <Stack
          direction="row"
          gap={{ xs: "8px", md: "16px" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="p" fontSize={{ xs: "12px", md: "16px" }}>
            Follow Us On :
          </Typography>
          <Stack
            direction="row"
            gap={{ xs: "8px", md: "16px" }}
            alignItems="center"
            justifyContent="center"
          >
            <Link
              href="https://facebook.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <SiFacebook className={styles.notFoundPageIcon} color="#316FF6" />
            </Link>
            <Link
              href="https://www.instagram.com/noshievents"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <FaInstagram
                className={styles.notFoundPageIcon}
                color="#ee2a7b"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC43-JcTDGR0Ickfxznz3YTQ"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <FaYoutube color="#CD201F" className={styles.notFoundPageIcon} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/noshievents"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <BiLogoLinkedinSquare
                color="#0A66C2"
                className={styles.notFoundPageIcon}
              />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
