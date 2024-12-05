import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteCampaign } from '../api/campaigns';

// Delete button component
const DeleteButton = ({ id, refetchData }: { id: number; refetchData: () => void }) => {
  const handleClick = async () => {
    try {
      console.log('Deleting item with id:', id);
      await deleteCampaign(id);
        refetchData(); // Refetch data after deletion
    } catch (error) {
      console.error('Failed to delete campaign:', error);
    }
  };

  return <Button label="" icon="pi pi-trash" onClick={handleClick} />;
};

const LineList: React.FC<{ lines: any[]; refetchData: () => void }> = ({ lines, refetchData }) => {
  return (
    <DataTable value={lines} tableStyle={{ minWidth: '50rem' }}>
      <Column field="campaignName" header="Campaign Name"></Column>
      <Column field="deviceName" header="Device Name"></Column>
      <Column field="userName.username" header="Username"></Column>
      <Column field="video.title" header="Video Title"></Column>
      <Column field="video.url" header="Video URL"></Column>
      <Column
        header="Action"
        body={(rowData) => <DeleteButton id={rowData.id} refetchData={refetchData} />}
      />
    </DataTable>
  );
};

export default LineList;
