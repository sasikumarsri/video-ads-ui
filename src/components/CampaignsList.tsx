
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
const ViewButton = ({ id }: { id: number }) => {
  const navigate = useNavigate()
  return (<Button label='' icon='pi pi-eye' onClick={() => navigate('/lines/' + id)}></Button>)
}

const CampaignsList: React.FC<any> = ({ campaigns }) => {
  return (

    <DataTable value={campaigns} tableStyle={{ minWidth: '50rem' }}>
      <Column field="deviceId" header="ID"></Column>
      <Column field="campaignName" header="Campaign Name"></Column>
      <Column field="deviceName" header="Device Name"></Column>
      <Column field="userName.username" header="Name"></Column>
      <Column field="count" header="# of lines"></Column>
      <Column header="Action" body={(rowData) => <ViewButton id={rowData.deviceId} />} ></Column>
    </DataTable>
  );
};

export default CampaignsList;
