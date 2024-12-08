import { Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Form from "./Form";

const ContactUs = () => {
  return (
    <Paper
      sx={{ width: "502px", border: "10px solid #DEDEDBBD" }}
      elevation={0}
      className={styles.mainContainer}
    >
      <Typography
        color="#765D37"
        fontWeight={600}
        fontSize="28px"
        textAlign="center"
      >
        CONTACT US
      </Typography>
      <Form />
    </Paper>
  );
};

export default ContactUs;
