import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserListPage from '../pages/UserListPage';
import YouTubePlayerPage from '../pages/YouTubePlayerPage';
import DevicePage from '../pages/DevicePage';
import VideoListPage from '../pages/VideoListPage';
import CampaignsListPage from '../pages/CampaignsListPage';
import LineListPage from '../pages/LineListPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/devices" element={<DevicePage />} />
        <Route path="/videos" element={<VideoListPage />} />
        <Route path="/campaigns" element={<CampaignsListPage />} />
        <Route path="/lines/:id" element={<LineListPage />} />
        <Route path="/player" element={<YouTubePlayerPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

