import { useEffect } from "react";
import { useSampleForm } from "../hooks/form/useSampleForm";
import { useAssetStore } from "../stores/assetStore";
import { AssetUi } from "../ui/Asset";
import { SampleFormUi } from "../ui/SampleForm";
export const SampleForm: React.FC = () => {
  const { formData, handleInputChange, handleSelectChange, handleSubmit } = useSampleForm();
  const { assets, loading, error, loadAssets } = useAssetStore();

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <>
      <SampleFormUi
        formData={formData}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
      />
      <AssetUi 
        assets={assets} 
        loading={loading} 
        error={error} 
      />
    </>
    
  );
};
