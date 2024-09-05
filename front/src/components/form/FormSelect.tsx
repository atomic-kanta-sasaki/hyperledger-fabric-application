import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void; 
  options: { label: string; value: string }[];
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, name, value, onChange, options }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label} name={name}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
