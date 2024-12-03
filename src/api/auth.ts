import axiosInstance from './axiosInstance';

// Define the login payload type
interface LoginPayload {
  username: string;
  password: string;
  deviceId?: number;
}

// Define the response type (replace `any` with actual type if available)
interface LoginResponse {
  data: {
    token: string;
    userName: string;
    id: string;
    deviceId: string;
    role: string;
  };
}

// Login API function
export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/users/login', data);
  console.log(response);
  return response.data;
};
