import axiosInstance from './axiosInstance';

// Define the user type based on the API response
interface User {
  id: string; // User ID
  username: string; // User name
  role: string; // User email
}

// Function to fetch all users
export const getVideos = async (): Promise<any> => {
  const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  console.log(user);
  const response = await axiosInstance.get<any>(
    `/video-assignments/getDeviceCampaigns/${user.id}/${user.deviceId}`
  );
  return response.data;
};

export const getAllVideos = async (): Promise<any> => {
  const response = await axiosInstance.get<any>('videos');
  return response.data;
};

export const createVideos = async (data: any): Promise<any> => {
  const response = await axiosInstance.post<any>('videos', data);
  return response.data;
};
