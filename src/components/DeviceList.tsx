import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { updateDeviceName } from '../api/device';

interface Device {
  id: string;
  device_name: string;
  is_online: boolean;
  user: {
    username: string;
  };
}

const DeviceList: React.FC<{ devices: any }> = ({ devices }) => {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [deviceName, setDeviceName] = useState<string>('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const onEditClick = (device: Device) => {
    setSelectedDevice(device);
    setDeviceName(device.device_name);
    setIsDialogVisible(true);
  };

  const onUpdateDevice = async () => {
    if (selectedDevice) {
      // Update the device name (you can handle API calls here)
      selectedDevice.device_name = deviceName;
      const update: any = await updateDeviceName(selectedDevice)
      if (update.id) {
        selectedDevice.device_name = deviceName;
        setIsDialogVisible(false);
        console.log('Updated device:', selectedDevice); // You can make an API call here to update the device
      }

    }
  };

  const editButton = (device: Device) => (
    <Button label='' icon='pi pi-pencil' onClick={() => onEditClick(device)} />
  );

  return (
    <>
      <DataTable value={devices} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID"></Column>
        <Column field="device_name" header="Device Name"></Column>
        {/* <Column field="is_online" header="Device Online Status"></Column> */}
        <Column field="user.username" header="Username"></Column>
        <Column header="Action" body={editButton}></Column>
      </DataTable>

      {/* Edit Device Modal */}
      <Dialog
        visible={isDialogVisible}
        style={{ width: '600px' }}
        onHide={() => setIsDialogVisible(false)}
        closeIcon='pi pi-times-circle'
        header="Edit Device Name"
        footer={
          <Button label="Update" icon="pi pi-check" onClick={onUpdateDevice} />
        }
      >
        <div className="p-field col-12">
          <label htmlFor="deviceName" className='mb-2'>Device Name</label>
          <InputText
            id="deviceName"
            className='col-12'
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            autoFocus
          />
        </div>
      </Dialog>
    </>
  );
};

export default DeviceList;
