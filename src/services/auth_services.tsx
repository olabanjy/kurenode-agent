import axiosInstance from "../utils/axios";

export const registerService = async (
  payload: Record<string, any>
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post("/register/", payload);
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const loginService = async (
  payload: Record<string, any>
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post("/login/", payload);
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const personalService = async (
  payload: Record<string, any>,
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/patient/profile/`,
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
export const sendOtpService = async (
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get("/api/v1/ums/send_otp/", {
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
export const verifyOtpService = async (
  token: string,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/ums/verify_otp/",
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

export const getAllOrganizationService = async (
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.get("/api/v1/organization/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // params: {
      //   page_size: 34,
      // },
    });
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const createUserMedicalRecordService = async (
  token: string,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/patient/medical-records/",
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
export const editUserMedicalRecords = async (
  token: string,
  payload: any,
  id: number
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/patient/${id}/medical-records/`,
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
export const verifyOtpToken = async (
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post("/verify/", payload);
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const addUserRelation = async (
  payload: any,
  id: number,
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/patient/${id}/relation/`,
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
// export const editUserMedicalRecords = async (
//   token: string
// ): Promise<Record<string, any>> => {
//   try {
//     const response = await axiosInstance.patch(
//       "/api/v1/patient/medical-records/",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     // Add specific error handling logic here
//     // console.error("Error in loginService:", error);
//     throw error; // Rethrow the error after handling (if needed)
//   }
// };

export const editUserHealthProfile = async (
  token: string,
  id: number,
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/patient/${id}/health-profile/`,
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
export const forgotPassword = async (
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/ums/reset-password-request/`,
      payload
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const resetPassword = async (
  payload: any
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/ums/reset-password/`,
      payload
    );
    return response;
  } catch (error) {
    // Add specific error handling logic here
    // console.error("Error in loginService:", error);
    throw error; // Rethrow the error after handling (if needed)
  }
};
export const changePasswordService = async (
  payload: any,
  id: string,
  token: string
): Promise<Record<string, any>> => {
  try {
    const response = await axiosInstance.patch(
      `/change_password/${id}/`,
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
