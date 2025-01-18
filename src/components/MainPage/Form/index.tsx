"use client";
import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { emailRegExp } from "@/utils/regex";
import axios from "axios";
import { CustomCheckbox } from "@/components/ContactForm/shared/CustomCheckbox";
import SnackbarComponent from "@/components/ContactForm/shared/SnackbarComponent";

interface IFormValues {
  email: string;
  subscription: boolean;
}

function Form() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { handleSubmit, control, reset } = useForm<IFormValues>({
    defaultValues: { email: "", subscription: true },
  });

  const onFormSubmit = async (values: IFormValues) => {
    setIsSubmitting(true);
    try {
      await axios.post("api/contact-us/newsletter", values);
      reset();
      setSnackbarOpen(true);
      setSnackbarMessage("You have subscribed for Noshi events");
    } catch (error) {
      console.log(error);
      setSnackbarOpen(true);
      setSnackbarMessage("Error Occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        style={{
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
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: emailRegExp,
                  message: "Invalid email address",
                },
              }}
              render={({ field, fieldState }) => (
                  <TextField
                    placeholder="Enter Email Id"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                    error={!!fieldState.error}
                    size="small"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#C8B9A2",
                        },
                        "&:hover fieldset": {
                          borderColor: "#C8B9A2",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C8B9A2",
                        },
                      },
                    }}
                  />

              )}
            />
            <Controller
              name="subscription"
              control={control}
              render={({ field }) => (
                <CustomCheckbox
                  label="Subscribe to Noshi Events NewsLetter"
                  checked={field.value}
                  onChange={(event) => field.onChange(event.target.checked)}
                />
              )}
            />
          </Stack>
          <Button
            variant="contained"
            disabled={isSubmitting}
            type="submit"
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
            endIcon={
              isSubmitting && (
                <CircularProgress size={18} sx={{ color: "white" }} />
              )
            }
          >
            Submit
          </Button>
        </Stack>
      </form>
      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={() => setSnackbarOpen(false)}
      />
    </Stack>
  );
}

export default Form;
