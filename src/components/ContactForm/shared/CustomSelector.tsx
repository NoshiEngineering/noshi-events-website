import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  FormHelperText,
} from "@mui/material";

interface ICustomSelectorProps {
  label: string;
  value: string;
  options: string[] | { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const CustomSelector = ({
  label,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  error,
  helperText,
}: ICustomSelectorProps) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={Boolean(error)}
      sx={{
        "& .MuiFormHelperText-root": {
          fontSize: "14px",
        },
        gap: { xs: "8px" },
      }}
    >
      <Typography fontSize="14px" fontWeight={600}>
        {label}
      </Typography>
      <Select
        value={value}
        displayEmpty
        onChange={(e) => onChange(e.target.value)}
        renderValue={(selectedValue) => {
          if (selectedValue === "") {
            return (
              <Typography sx={{ color: "#9EA6B4" }}>{placeholder}</Typography>
            );
          }
          return selectedValue;
        }}
        size="small"
      >
        {options.map((option, idx) => {
          const optionValue =
            typeof option === "string" ? option : option.value;
          const optionLabel =
            typeof option === "string" ? option : option.label;
          return (
            <MenuItem sx={{ textWrap: "wrap" }} value={optionValue} key={idx}>
              {optionLabel}
            </MenuItem>
          );
        })}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelector;
