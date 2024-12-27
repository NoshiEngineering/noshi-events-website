import { Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Form from "./Form";

const ContactUs = () => {
  return (
    <Paper className={styles.mainContainer}>
      <Typography className={styles.headingText} fontSize={"20px"}>
        CONTACT US
      </Typography>
      <Form />
    </Paper>
  );
};

export default ContactUs;
