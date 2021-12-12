import { useState, useEffect } from 'react';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import axios from 'axios';
import moment from 'moment';


const url = 'http://localhost:4000';


function AuthorList() {

  const [allCategories, setAllCategories] = useState([]);
  // receive database table here

  useEffect(() => {

    axios.request({
      url: url + '/category/getall',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllCategories(response.data);
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <MaterialDataTable
        title="All Categories"
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
              title: 'ID', field: 'CATEGORY_ID', type: 'number', width: 10, editable: 'never',
              render: rowData => <a href={`category/crud/${rowData.CATEGORY_ID}`}>{rowData.CATEGORY_ID}</a>
            },
            { title: 'Name', field: 'CATEGORY_NAME', width: 130 },
            { title: 'Description', field: 'CAT_DESC', width: 130 },
          ]
        }
        data={allCategories}
        editable={{
          onRowAdd: (newAddedData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/category/insert`,
                  data: newAddedData,
                  method: 'POST',
                }).then((response) => {
                  console.log('newAddedData', newAddedData)

                  setAllCategories([...allCategories, newAddedData]);
                });

                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                axios.request({
                  url: url + `/category/deletebyid/${oldData.CATEGORY_ID}`,

                  method: 'DELETE',
                }).then((response) => {
                  console.log(response.data)
                  const dataDelete = [...allCategories];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAllCategories([...dataDelete]);
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

