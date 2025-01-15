import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Form() {
  return (
    <Stack
      className="fixed-size-container"
      sx={{
        borderRadius: "12px",
        backgroundColor: "#C8B9A2",
        marginTop: "14px !important",
        marginBottom: "14px !important",
        padding: "42px 38px 14px 38px",
        "@media (max-width: 900px)": {
          padding: "12px 16px 16px 16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            "@media (max-width: 900px)": {
              flexDirection: "column",
              alignItems: "center",
              spacing: "2",
            },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "700",
              fontSize: "32px",
              width: "45%",
              "@media (max-width: 900px)": {
                textAlign: "center",
                width: "100%",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "12px",
              },
            }}
          >
            Let Us Plan Your Next Event
          </Typography>
          <Stack
            direction="column"
            sx={{
              width: "100%",
              "@media (min-width: 901px)": {
                width: "40%",
              },
            }}
          >
            <TextField
              placeholder="Enter Email Id"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#C8B9A2", // Set border color when not hovered
                  },
                  "&:hover fieldset": {
                    borderColor: "#C8B9A2", // Set border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#C8B9A2", // Set border color when focused
                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox color="success" />}
              label={
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  Subscribe to Noshi Events NewsLetter
                </Typography>
              }
              sx={{
                margin: 0,
                "@media (max-width: 900px)": {
                  width: "100%",
                },
              }}
            />
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#658352",
              color: "#fff",
              padding: "10px 44px",
              height: "28px",
              width: "94px",
              "&:hover": { backgroundColor: "#5a7c4d" },
              "@media (min-width: 901px)": {
                marginLeft: "50px",
                height: "40px",
                width: "135px",
              },
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Form;
