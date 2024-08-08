import axiosInstance from "../utils/axios";

export const getUserProfile = async (
  token: string,
  id: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/ums/${id}/`, {
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
export const editUserProfile = async (
  token: string,
  payload: Record<string, any>,
  id: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/patient/${id}/`,
      payload,
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
