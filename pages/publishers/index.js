import { useState, useEffect } from 'react';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import axios from 'axios';
import moment from 'moment';


const url = 'http://localhost:4000';


function PublisherList() {

  const [allPublishers, setAllPublishers] = useState([]);
  // receive database table here

  useEffect(() => {

    axios.request({
      url: url + '/publisher/getall',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllPublishers(response.data);
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <MaterialDataTable
        title="All Publishers"
        options={{
          selection: false,
          actionsColumnIndex: 0,
          paging: true,
          toolbar: true,
          search: true,
          exportButton: false,
          exportAllData: false,

          headerStyle: {
            font: 'Proxima Nova',
            fontSize: '18px',
            lineHeight: '20px',
          },
          rowStyle: (x) => {
            const styles = {
              font: 'Proxima Nova',
              fontSize: '15px',
              lineHeight: '65px',
              color: '#020A20',
              background: '',
            };

            return styles;
          },
        }}
        columns={
          [
            {
              title: 'ID', field: 'PUBLISHER_ID', type: 'number', width: 10, editable: 'never',
              render: rowData => <a href={`publishers/crud/${rowData.PUBLISHER_ID}`}>{rowData.PUBLISHER_ID}</a>
            },
            { title: 'Name', field: 'NAME', width: 130 },
            { title: 'Address', field: 'ADDRESS', width: 130 },
            { title: 'Email', field: 'EMAIL', width: 130 },
            { title: 'Phone Number', field: 'PHONE_NO', width: 130 },
          ]
        }
        data={allPublishers}
        editable={{
          onRowAdd: (newAddedData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/publisher/insert`,
                  data: newAddedData,
                  method: 'POST',
                }).then((response) => {
                  console.log('newAddedData', newAddedData)

                  setAllPublishers([...allPublishers, newAddedData]);
                });

                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                axios.request({
                  url: url + `/publisher/deletebyid/${oldData.PUBLISHER_ID}`,

                  method: 'DELETE',
                }).then((response) => {
                  console.log(response.data)
                  const dataDelete = [...allPublishers];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAllPublishers([...dataDelete]);
                });

                resolve();
              }, 1000);
            }),
        }}
      >

      </MaterialDataTable>

    </>
  )
}

export default PublisherList

