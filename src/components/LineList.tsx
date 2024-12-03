import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { deleteCampaign } from '../api/campaigns';

// Handle click event for delete action
const handleClick = async (id: number) => {
  console.log('Deleting item with id:', id);
  const dele = await deleteCampaign(id)
  if (dele) {
    location.reload()
  }
}

// Delete button component
const DeleteButton = ({ id }: { id: number }) => (
  <Button label='' icon='pi pi-trash' onClick={() => handleClick(id)} />
);

const LineList: React.FC<any> = ({ lines }) => {
  return (
    <DataTable value={lines} tableStyle={{ minWidth: '50rem' }}>
      <Column field="campaignName" header="Campaign Name"></Column>
      <Column field="deviceName" header="Device Name"></Column>
      <Column field="userName.username" header="Username"></Column>
      <Column field="video.title" header="Video Title"></Column>
      <Column field="video.url" header="Video URL"></Column>
      <Column
        header="Action"
        body={(rowData) => <DeleteButton id={rowData.id} />} // Pass deviceId or appropriate ID from rowData
      />
    </DataTable>
  );
};

export default LineList;
