import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

interface ICustomTextFieldProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const CustomTextField = ({
  placeholder,
  value,
  label,
  onChange,
  error,
  helperText,
}: ICustomTextFieldProps) => {
  return (
    <Stack gap={{ xs: "8px" }} width="100%">
      <Typography fontSize={{ xs: "12px" }} fontWeight={600}>
        {label}
      </Typography>
      <TextField
        fullWidth
        hiddenLabel
        variant="outlined"
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
        helperText={helperText}
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
