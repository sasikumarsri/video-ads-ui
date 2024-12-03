import axiosInstance from './axiosInstance';

// Function to fetch all users
export const getDevices = async (): Promise<any[]> => {
  const response = await axiosInstance.get<any[]>('/tv-devices'); // Replace `/users` with your API endpoint
  return response.data;
};

export const updateDeviceName = async (data: any): Promise<any[]> => {
  const response = await axiosInstance.put<any>('/tv-devices/' + data.id, data); // Replace `/users` with your API endpoint
  return response.data;
};
