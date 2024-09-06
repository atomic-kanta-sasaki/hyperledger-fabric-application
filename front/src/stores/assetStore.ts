import create from 'zustand';
import { fetchAssets } from '../api/assetApi';
type Asset = {
    docType?: string;
    ID?: string;
    Color?: string;
    Size?: number;
    Owner?: string;
    AppraisedValue?: number;
};

interface AssetStoreState {
  assets: Asset[];
  loading: boolean;
  error: string | null;
  loadAssets: () => Promise<void>;
}

export const useAssetStore = create<AssetStoreState>((set) => ({
  assets: [],
  loading: false,
  error: null,

  loadAssets: async () => {
    set({ loading: true });
    try {
      const assets: Asset[] = await fetchAssets(); 
      set({ assets, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
