import { useSampleForm } from "../hooks/form/useSampleForm";
import { SampleFormUi } from "../ui/SampleForm";
export const SampleForm: React.FC = () => {
  const { formData, handleInputChange, handleSelectChange, handleSubmit } = useSampleForm();
  return (
    <SampleFormUi
      formData={formData}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
    />
  );
};
