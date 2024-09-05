import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
export const useSampleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
      });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSelectChange = (e: SelectChangeEvent) => {
        setFormData({
          ...formData,
          gender: e.target.value as string,
        });
      };
    
      const handleSubmit = () => {
        console.log(formData);
      };
    
      return {
        formData,
        setFormData,
        handleInputChange,
        handleSelectChange,
        handleSubmit,
      }
}