import { useEffect } from "react";
import { useSampleForm } from "../hooks/form/useSampleForm";
import { useAssetStore } from "../stores/assetStore";
import { SampleFormUi } from "../ui/SampleForm";
import { AssetTableUi } from "../ui/AssetTable";
export const SampleForm: React.FC = () => {
  const { formData, handleInputChange, handleSelectChange, handleSubmit } = useSampleForm();
  const { assets, loadAssets } = useAssetStore();
  
  useEffect(() => {
    loadAssets();
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <SampleFormUi
        formData={formData}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
      />
      <AssetTableUi rows={assets} /> 
    </>
    
  );
};
