"use client";
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "./shared/CustomTextField";

const Form = () => {
  const [value, setValue] = useState<string>("");
  return (
    <form>
      <Stack spacing={0.5}>
        <CustomTextField
          placeholder="Name *"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <CustomTextField
          placeholder="Email *"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <CustomTextField
          placeholder="Phone *"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Available on WhatsApp"
          sx={{
            marginLeft: 0,
            "& .MuiFormControlLabel-label": {
              marginLeft: "-4px",
            },
          }}
        />

        <Stack justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{ padding: "8px 24px", backgroundColor: "#008c5a" }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
