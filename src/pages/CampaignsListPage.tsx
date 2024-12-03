import React, { useEffect, useState } from 'react';
import './UserListPage.css';
import { createCampaign, getAllCampaigns } from '../api/campaigns';
import { getAllVideos } from '../api/videos';  // Assuming you have an API for fetching videos
import CampaignsList from '../components/CampaignsList';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { getUsers } from '../api/users';
import { InputText } from 'primereact/inputtext';
import MenuItem from '../components/Menu';

interface Campaign {
  id: string;
  name: string;
}

interface Video {
  id: string;
  title: string;
}

interface User {
  id: string;
  username: string;
}

const CampaignsListPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [campaignName, setCampaignName] = useState<string>('');  // State for campaign name

  // Fetch campaigns, users, and videos on initial load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignsData = await getAllCampaigns();
        setCampaigns(campaignsData);

        const usersData = await getUsers();
        setUsers(usersData);

        const videosData = await getAllVideos();
        setVideos(videosData);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    if (!campaignName || !selectedUser || selectedVideos.length === 0) {
      // Optionally show a message if any required field is missing
      alert('Please fill in all fields');
      return;
    }

    const camp = {
      campaignName,
      videoIds: selectedVideos,
      userId: selectedUser,
      assetType: "active",
      assignedAssetUrl: "https://example.com/asset.mp4",
    };

    try {
      await createCampaign(camp); // Save the campaign
      // After saving, fetch campaigns again to refresh the list
      const campaignsData = await getAllCampaigns();
      setCampaigns(campaignsData);

      // Optionally reset form values after save
      setCampaignName('');
      setSelectedUser(null);
      setSelectedVideos([]);
    } catch (err) {
      console.error('Failed to create campaign:', err);
      setError('Failed to create campaign. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading">Loading campaigns...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="flex">
        <MenuItem />
        <div className="user-list-page page">
          <h1>Campaigns List</h1>

          <div className="flex mb-3">
            {/* Input field for campaign name */}
            <div className="p-mr-2 py-0 col-3">
              <span className="p-float-label h-100">
                <InputText
                  id="campaignName"
                  className='col-12 py-0 h-100'
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="Enter Campaign Name"
                />
                <label htmlFor="campaignName">Campaign Name</label>
              </span>
            </div>

            {/* Dropdown for selecting a user */}
            <div className="p-mr-2 py-0 col-3">
              <span className="p-float-label">
                <Dropdown
                  id="userDropdown"
                  className='col-12'
                  value={selectedUser}
                  options={users.map((user) => ({ label: user.username, value: user.id }))}
                  onChange={(e) => setSelectedUser(e.value)}
                  placeholder="Select User"
                />
                <label htmlFor="userDropdown">Select User</label>
              </span>
            </div>

            {/* MultiSelect for selecting video IDs */}
            <div className="p-mr-2 col-3 py-0">
              <span className="p-float-label">
                <MultiSelect
                  id="videoSelect"
                  value={selectedVideos}
                  className='col-12'
                  options={videos.map((video) => ({ label: video.title, value: video.id }))}
                  onChange={(e) => setSelectedVideos(e.value)}
                  placeholder="Select Videos"
                  display="chip"
                />
                <label htmlFor="videoSelect">Select Videos</label>
              </span>
            </div>
            <Button label="Save" className="col-3" onClick={handleSave} />

          </div>

          {campaigns.length > 0 ? (
            <CampaignsList campaigns={campaigns} />
          ) : (
            <p>No campaigns found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CampaignsListPage;
