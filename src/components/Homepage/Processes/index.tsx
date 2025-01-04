import { Stack, Typography } from "@mui/material";
import React from "react";
import TabScroll from "./TabScroll";

const Processes = () => {
  return (
    <Stack spacing={{ md: "80px" }} mb={"100px"}>
      <Typography fontSize={{ md: "32px" }} fontWeight={600}>
        With a team of experienced professionals and a passion for perfection,
        <span style={{ fontWeight: 700 }}> we plan</span>{" "}
        <span style={{ fontWeight: 700 }}>we execute</span>, and{" "}
        <span style={{ fontWeight: 700 }}>you celebrate</span>
      </Typography>
      <TabScroll />
    </Stack>
  );
};

export default Processes;
