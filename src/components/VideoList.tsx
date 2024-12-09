import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
const deleteButton = () => (<Button label='' icon='pi pi-trash' disabled></Button>)
const VideosList: React.FC<any> = ({ videos }) => {
  return (
    <DataTable value={videos} tableStyle={{ minWidth: '50rem' }}>
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
      <Column field="url" header="video url"></Column>
      <Column header="Action" body={deleteButton}></Column>
    </DataTable>
  );
};

export default VideosList;
