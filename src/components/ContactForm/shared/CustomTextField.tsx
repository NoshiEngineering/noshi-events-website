import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "../styles.module.css";

interface ICustomTextFieldProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextField = ({
  placeholder,
  value,
  label,
  onChange,
}: ICustomTextFieldProps) => {
  return (
    <Stack>
      <Typography className={styles.label}>{label}</Typography>
      <TextField
        hiddenLabel
        variant="outlined"
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            // backgroundColor: "white",
          },
        }}
      />
    </Stack>
  );
};

export default CustomTextField;
