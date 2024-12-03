import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
interface User {
  id: string;
  username: string;
  role: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  console.log(users)
  return (

    <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
      <Column field="id" header="id"></Column>
      <Column field="username" header="Name"></Column>
      <Column field="role" header="Role"></Column>
    </DataTable>
  );
};

export default UserList;
