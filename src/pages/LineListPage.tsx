import React, { useEffect, useState } from 'react';
import './UserListPage.css';
import LineList from '../components/LineList';
import { useParams } from 'react-router-dom';
import { getLinesByCampaignId } from '../api/campaigns';
import MenuItem from '../components/Menu';

interface User {
  id: string;
  username: string;
  role: string;
}

const LineListPage: React.FC = () => {
  const [lines, setLines] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getLinesByCampaignId(id ?? '1');
        setLines(data);
      } catch (err) {
        setError('Failed to fetch lines. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading lines...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="flex">
        <MenuItem />
        <div className="user-list-page page">
          <h1>Line List</h1>
          {lines.length > 0 ? (
            <LineList lines={lines} />
          ) : (
            <p>No lines found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default LineListPage;
