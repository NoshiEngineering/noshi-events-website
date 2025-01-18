"use client";
import { emailRegExp } from "@/utils/regex";
import {
  Button,
  CircularProgress,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "@/Context/SnackbarContext";

interface IForm {
  email: string;
}

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { handleSubmit, control, reset } = useForm<IForm>({
    defaultValues: { email: "" },
  });
  const { showSnackbar } = useSnackbar();

  const onSubmit = async (values: IForm) => {
    setIsSubmitting(true);
    try {
      await axios.post("api/contact-us/newsletter", {
        ...values,
        subscription: true,
      });
      showSnackbar("You have subscribed for Noshi events", "success");
      reset();
    } catch (error) {
      console.log(error);
      showSnackbar("Error occurred", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={"16px"}
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
              <Stack position="relative" width="100%">
                <TextField
                  fullWidth
                  variant="filled"
                  size="small"
                  placeholder="Email Address"
                  onChange={(e) =>
                    field.onChange((field.value = e.target.value))
                  }
                  value={field.value}
                />
                {fieldState.error && (
                  <FormHelperText
                    error
                    sx={{
                      position: "absolute",
                      bottom: "-25px",
                      left: "0",
                    }}
                  >
                    {fieldState.error.message}
                  </FormHelperText>
                )}
              </Stack>
            )}
          />
          <Button
            disabled={isSubmitting}
            endIcon={
              isSubmitting && (
                <CircularProgress size={18} sx={{ color: "white" }} />
              )
            }
            type="submit"
            sx={{
              background: "#658352",
              padding: "10px  30px",
              borderRadius: "8px",
            }}
            variant="contained"
          >
            Subscribe
          </Button>
        </Stack>
      </form>
    </>
  );
};
