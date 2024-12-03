import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { getUsers } from '../api/users';
import './UserListPage.css';
import { Button } from 'primereact/button';
import MenuItem from '../components/Menu';

interface User {
  id: string;
  username: string;
  role: string;
}

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (<>
    <div className="flex">
      <MenuItem />
      <div className="user-list-page page">
        <h1>User List</h1>
        {users.length > 0 ? (
          <>
            <div className="flex flex-column col-12">
              <div className="col-12 flex justify-content-end">
                {/* <Button label='Add usere' icon="pi pi-plus"></Button> */}

              </div>
              <UserList users={users} />

            </div>
          </>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  </>
  );
};

export default UserListPage;
