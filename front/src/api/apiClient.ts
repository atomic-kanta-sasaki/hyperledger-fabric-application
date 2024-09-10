import axios from "axios";

export const apiClient = async (
  endpoint: string,
  method = "GET",
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  body?: any,
) => {
  const options = {
    method,
    url: `${import.meta.env.VITE_API_ENDPOINT}/${endpoint}`,
    headers: {
      "Content-Type": "application/json",
    },
    ...(body && { data: body }),
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("API call failed");
  }
};
