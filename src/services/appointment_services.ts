import axiosInstance from "../utils/axios";

export interface Appointment {
  id: number;
  title: string;
  type: string;
  description: string;
  start_at: string; // If you're not parsing the date, you can keep it as a string
  end_at: string; // Same here, keep as a string if not parsing
  location: string;
  patient: number;
  institution: number;
  patient_name: string;
}

export const getAllAppointments = async (
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/appointment/`, {
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
export const getSingleAppointment = async (
  token: string,
  appointmentId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get(
      `/api/v1/appointment/${appointmentId}`,
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
export const createAppointment = async (
  token: string,
  payload: Record<string, any>
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(`/api/v1/appointment/`, payload, {
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
export const getCurrentUserAppointments = async (
  token: string,
  patientId: number
): Promise<any> => {
  try {
    const response = await axiosInstance.get<Appointment[]>(
      `/api/v1/patient/${patientId}/appointment/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response; // Return the data property of the response
  } catch (error) {
    console.error("Error in getCurrentUserAppointments:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const updateSingleAppointment = async (
  token: string,
  appointmentId: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.put(
      `/api/v1/appointment/${appointmentId}/`,
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
export const partialUpdateSingleAppointment = async (
  token: string,
  appointmentId: any,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      payload,
      `/api/v1/appointment/${appointmentId}/`,
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
export const deleteSingleAppointment = async (
  token: string,
  appointmentId: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.delete(
      `/api/v1/appointment/${appointmentId}/`,
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
