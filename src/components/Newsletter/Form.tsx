"use client";
import { emailRegExp } from "@/utils/regex";
import { Button, FormHelperText, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface IForm {
  email: string;
}

export const Form = () => {
  const { handleSubmit, control } = useForm<IForm>({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
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
                onChange={(e) => field.onChange((field.value = e.target.value))}
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
  );
};
