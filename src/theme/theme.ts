"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  shadows: [
    "none", // Level 0
    "0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)", // Level 1
    "0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)", // Level 2
    "0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)", // Level 3
    "0px 0px 8px rgba(9, 30, 66, 0.16), 0px 0px 1px rgba(9, 30, 66, 0.12)", // Level 4
    "none", // Level 5
    "none", // Level 6
    "none", // Level 7
    "none", // Level 8
    "none", // Level 9
    "none", // Level 10
    "none", // Level 11
    "none", // Level 12
    "none", // Level 13
    "none", // Level 14
    "none", // Level 15
    "none", // Level 16
    "none", // Level 17
    "none", // Level 18
    "none", // Level 19
    "none", // Level 20
    "none", // Level 21
    "none", // Level 22
    "none", // Level 23
    "none", // Level 24
  ],
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: () => ({
  //         textTransform: "none",
  //       }),
  //     },
  //   },
  // },
});

export default theme;
