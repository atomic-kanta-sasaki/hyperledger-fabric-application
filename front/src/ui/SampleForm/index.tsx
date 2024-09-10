import React from "react";
import { FormLayout } from "../../components/layouts/FormLayout";
import { FormInput } from "../../components/form/FormInput";
import { FormSelect } from "../../components/form/FormSelect";
import { FormButton } from "../../components/form/FormButton";
import { SelectChangeEvent } from "@mui/material";
type SampleFormProps = {
  formData: {
    name: string;
    age: string;
    gender: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: SelectChangeEvent) => void;
  handleSubmit: () => void;
};

export const SampleFormUi: React.FC<SampleFormProps> = ({
  formData,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
}) => {
  return (
    <FormLayout title="User Information">
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <FormInput
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        type="number"
      />
      <FormSelect
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleSelectChange}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />
      <FormButton label="Submit" onClick={handleSubmit} />
    </FormLayout>
  );
};
