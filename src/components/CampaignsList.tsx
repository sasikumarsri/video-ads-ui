import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { deleteCampaignByDeviceID } from '../api/campaigns';
import ToastService from '../api/tosterService';

const CampaignsList: React.FC<any> = ({ campaigns, refetch }) => {
  const navigate = useNavigate();

  const handleDeleteCampaign = async (id: number) => {
    try {
      await deleteCampaignByDeviceID(id);
      ToastService.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Campaign Deleted!',
    });
      console.log(`Campaigns for device ${id} deleted successfully.`);
      refetch(); // Optionally refresh parent data
    } catch (error) {
      console.error(`Failed to delete campaigns for device ${id}`, error);
    }
  };

  const ViewButton = ({ id }: { id: number }) => (
    <>
      <Button label="" icon="pi pi-eye" onClick={() => navigate(`/lines/${id}`)} />
      <Button
        label=""
        className="ml-2"
        icon="pi pi-trash"
        onClick={() => handleDeleteCampaign(id)}
      />
    </>
  );

  return (
    <DataTable value={campaigns} tableStyle={{ minWidth: '50rem' }}>
      <Column field="deviceId" header="ID" />
      <Column field="campaignName" header="Campaign Name" />
      <Column field="deviceName" header="Device Name" />
      <Column field="userName.username" header="Name" />
      <Column field="count" header="# of lines" />
      <Column header="Action" body={(rowData) => <ViewButton id={rowData.deviceId} />} />
    </DataTable>
  );
};

export default CampaignsList;
