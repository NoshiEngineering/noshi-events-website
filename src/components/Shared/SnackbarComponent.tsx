"use client";
import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  type?: "success" | "error" | "warning" | "info";
  autoHideDuration?: number;
}

const SnackbarComponent: React.FC<SnackbarProps> = ({
  open,
  message,
  onClose,
  type = "success",
  autoHideDuration = 3000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
