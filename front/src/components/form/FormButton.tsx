import React from "react";
import { Button } from "@mui/material";

interface FormButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
