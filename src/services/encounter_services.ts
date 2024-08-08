import axiosInstance from "../utils/axios";

export const getAllEncounters = async (
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/encounter/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page_size: 10,
        page: 1,
      },
    });
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const getSingleEncounter = async (
  token: string,
  encounterId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/encounter/${encounterId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const createSingleEncounter = async (
  token: string,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(`/api/v1/encounter/`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const updateSingleEncounter = async (
  token: string,
  encounterId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.put(
      `/api/v1/encounter/${encounterId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const partialUpdateSingleEncounter = async (
  token: string,
  encounterId: number,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      payload,
      `/api/v1/encounter/${encounterId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const deleteEncounter = async (
  token: string,
  encounterId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.delete(
      `/api/v1/encounter/${encounterId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
