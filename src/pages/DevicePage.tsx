import React, { useEffect, useState } from 'react';
import './UserListPage.css';
import DeviceList from '../components/DeviceList';
import { getDevices } from '../api/device';
import MenuItem from '../components/Menu';

interface User {
  id: string;
  username: string;
  role: string;
}

const DevicePage: React.FC = () => {
  const [devices, setDevices] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getDevices();
        setDevices(data);
      } catch (err) {
        setError('Failed to fetch devices. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading devices...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (<>
    <div className="flex">
      <MenuItem />
      <div className="user-list-page page">
        <h1>Device List</h1>
        {devices.length > 0 ? (
          <DeviceList devices={devices} />
        ) : (
          <p>No devices found.</p>
        )}
      </div>
    </div>
  </>
  );
};

export default DevicePage;
