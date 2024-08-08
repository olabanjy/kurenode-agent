import axiosInstance from "../utils/axios";

export const getAllPatients = async (
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/patient/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page_size: 5,
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
export const getSinglePatient = async (
  token: string,
  patientId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/patient/${patientId}/`, {
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
export const editSinglePatient = async (
  token: string,
  patientId: number,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.put(
      `/api/v1/patient/${patientId}/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page_size: 10,
          page: 1,
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
export const partialUpdateSinglePatient = async (
  token: string,
  patientId: number,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/patient/${patientId}/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page_size: 10,
          page: 3,
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
export const onboardSinglePatient = async (
  token: string,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/organization/actions/onboard-patient`,
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
export const getUserPlansDetails = async (
  token: string,
  id: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/organization/health-plans/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
