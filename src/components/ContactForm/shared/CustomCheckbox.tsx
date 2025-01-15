import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

interface ICustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox = ({
  label,
  checked,
  onChange,
}: ICustomCheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            color: "#658352",
            "&.Mui-checked": {
              color: "#658352",
            },
          }}
        />
      }
      label={
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
          {label}
        </Typography>
      }
    />
  );
};
