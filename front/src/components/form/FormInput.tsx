import React from "react";
import { TextField } from "@mui/material";

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: boolean;
  helperText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  helperText,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      helperText={helperText}
      variant="outlined"
      margin="normal"
    />
  );
};
