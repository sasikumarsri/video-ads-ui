import axiosInstance from './axiosInstance';

// Define the user type based on the API response
export interface User {
  id: string; // User ID
  username: string; // User name
  role: string; // User email
}

// Function to fetch all users
export const getUsers = async (): Promise<any> => {
  const response = await axiosInstance.get<User[]>('/users'); // Replace `/users` with your API endpoint
  return response.data;
};
