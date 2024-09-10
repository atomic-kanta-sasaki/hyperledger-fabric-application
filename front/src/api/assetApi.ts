import { apiClient } from "./apiClient";

export const fetchAssets = async () => {
  return apiClient("asset/all");
};
