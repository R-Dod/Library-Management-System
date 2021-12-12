import { useState, useEffect } from 'react';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import axios from 'axios';
import moment from 'moment';


const url = 'http://localhost:4000';


function AuthorList() {

  const [allAuthors, setAllAuthors] = useState([]);
  // receive database table here

  useEffect(() => {

    axios.request({
      url: url + '/author/getall',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllAuthors(response.data);
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <MaterialDataTable
        title="All Authors"
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
              field: 'AUTHOR_ID', title: 'ID', type: 'number', width: 10, editable: 'never',
              render: rowData => <a href={`author/crud/${rowData.AUTHOR_ID}`}>{rowData.AUTHOR_ID}</a>
            },
            { field: 'FIRST_NAME', title: 'First Name', width: 130 },
            { field: 'LAST_NAME', title: 'Last Name', width: 130 },
            { field: 'EMAIL', title: 'Email', width: 130 },
          ]
        }
        data={allAuthors}
        editable={{
          onRowAdd: (newAddedData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/author/insert`,
                  data: newAddedData,
                  method: 'POST',
                }).then((response) => {
                  console.log('newAddedData', newAddedData)

                  setAllAuthors([...allAuthors, newAddedData]);
                });

                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                axios.request({
                  url: url + `/author/deletebyid/${oldData.AUTHOR_ID}`,

                  method: 'DELETE',
                }).then((response) => {
                  console.log(response.data)
                  const dataDelete = [...allAuthors];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAllAuthors([...dataDelete]);
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

export default AuthorList

