"use client";
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "./shared/CustomTextField";
import styles from "./styles.module.css";
import { Controller, useForm } from "react-hook-form";
import { IFormValues } from "./interface";
import { defaultFormValues, eventSelectionOptions } from "./constants";
import { emailRegExp, phoneRegExp } from "@/utils/regex";
import { CustomCheckbox } from "./shared/CustomCheckbox";
import CustomSelector from "./shared/CustomSelector";
import axios from "axios";
import { useSnackbar } from "@/Context/SnackbarContext";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { handleSubmit, control, reset } = useForm<IFormValues>({
    defaultValues: defaultFormValues,
  });
  const { showSnackbar } = useSnackbar();

  const onFormSubmit = async (values: IFormValues) => {
    setIsSubmitting(true);
    try {
      await axios.post("api/contact-us", values);
      showSnackbar("This is a success message!", "success");
      reset();
    } catch (error) {
      console.log(error);
      showSnackbar("Error Occurred", "success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack gap={{ xs: "16px", md: "20px" }}>
          <Stack
            width="100%"
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: "16px", md: "20px" }}
          >
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <CustomTextField
                  label="First Name"
                  placeholder="First Name *"
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <CustomTextField
                  label="Last Name"
                  placeholder="Last Name *"
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Stack>
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
              <CustomTextField
                label="Email"
                placeholder="Email *"
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is required",
              pattern: {
                value: phoneRegExp,
                message: "Invalid phone number",
              },
            }}
            render={({ field, fieldState }) => (
              <Stack gap={{ xs: "8px" }}>
                <Typography fontSize={{ xs: "12px" }} fontWeight={600}>
                  Phone
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type="number"
                  placeholder="Phone number *"
                  value={field.value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (!newValue || /^[0-9]*$/.test(newValue)) {
                      field.onChange(newValue);
                    }
                  }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  sx={{
                    "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button":
                      {
                        appearance: "none",
                        margin: 0,
                      },
                    "& input[type='number']": {
                      MozAppearance: "textfield",
                    },
                  }}
                />
              </Stack>
            )}
          />
          <Controller
            name="reachOutOnWhatsApp"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                label="Reach Out To Me On WhatsApp"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
              />
            )}
          />
          <Controller
            name="eventType"
            control={control}
            rules={{ required: "Event type is required" }}
            render={({ field, fieldState }) => (
              <CustomSelector
                label="Event Type"
                placeholder="Interested in type of event"
                value={field.value}
                onChange={(value) => field.onChange((field.value = value))}
                options={eventSelectionOptions}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="newsLetterSubscription"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                label="Subscribe to Noshi Events NewsLetter"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
              />
            )}
          />
          <Button
            disabled={isSubmitting}
            variant="contained"
            fullWidth
            className={styles.submitBtn}
            type="submit"
            sx={{ backgroundColor: "#658352" }}
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
    </>
  );
};

export default Form;
