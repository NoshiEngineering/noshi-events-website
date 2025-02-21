import { Stack, Typography } from "@mui/material";
import React from "react";
import TabScroll from "./TabScroll";
import MobileTabScroll from "./MobileTabScroll";

const Processes = () => {
  return (
    <Stack spacing={{ md: "80px" }} mb={"100px"}>
      <Stack>
        <Typography fontSize={{ xs: "14px", md: "32px" }} fontWeight={600}>
          With a team of experienced professionals and a passion for perfection,
        </Typography>
        <Typography fontSize={{ xs: "20px", md: "40px" }} fontWeight={700}>
          we plan, we execute, and you celebrate
        </Typography>
      </Stack>
      {/* desktop scroll */}
      <Stack display={{ xs: "none", md: "block" }}>
        <TabScroll />
      </Stack>
      {/* mobile scroll */}
      <Stack display={{ xs: "block", md: "none" }}>
        <MobileTabScroll />
      </Stack>
    </Stack>
  );
};

export default Processes;
