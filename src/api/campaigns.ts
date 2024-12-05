import axiosInstance from './axiosInstance';

export const getAllCampaigns = async (): Promise<any> => {
  const response = await axiosInstance.get<any>('video-assignments');
  return response.data;
};

export const deleteCampaign = async (id: any): Promise<any> => {
  const response = await axiosInstance.delete<any>('video-assignments/' + id);
  return response.data;
};

export const deleteCampaignByDeviceID = async (id: any): Promise<any> => {
  const response = await axiosInstance.delete<any>('video-assignments/device/' + id);
  return response.data;
};

export const getLinesByCampaignId = async (id: string): Promise<any> => {
  const response = await axiosInstance.get<any>(`video-assignments/${id}/rows`);
  return response.data;
};

export const createCampaign = async (data: any): Promise<any> => {
  const response = await axiosInstance.post<any>(`video-assignments/create`, data);
  return response.data;
};
