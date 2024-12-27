"use client";
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "./shared/CustomTextField";
import styles from "./styles.module.css";
import { Controller, useForm } from "react-hook-form";
import { IFormValues } from "./interface";
import { defaultFormValues } from "./constants";

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IFormValues>({
    defaultValues: defaultFormValues,
  });

  const onFormSubmit = (values: IFormValues) => {
    console.log(values, "submitted values");
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <CustomTextField
        label="First Name"
        placeholder="First Name *"
        value={"value"}
        onChange={(newValue) => {}}
      />
      <Button variant="contained" fullWidth className={styles.submitBtn}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
