import { TextField } from "@mui/material";
import React from "react";

interface ICustomTextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextField = ({
  placeholder,
  value,
  onChange,
}: ICustomTextFieldProps) => {
  return (
    <TextField
      hiddenLabel
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "white",
        },
      }}
    />
  );
};

export default CustomTextField;
