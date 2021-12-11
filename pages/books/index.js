import { useState, useEffect } from 'react';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import axios from 'axios';
import moment from 'moment';


const url = 'http://localhost:4000';


function BookList() {

  const [Allbooks, setAllBooks] = useState([]);
  // receive database table here

  useEffect(() => {

    axios.request({
      url: url + '/book/getAllData',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllBooks(response.data);
    });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <MaterialDataTable
        title="All Books"
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
              field: 'BOOK_ID', title: 'ID', type: 'number', width: 10, editable: 'never',
              render: rowData => <a href={`books/crud/${rowData.BOOK_ID}`}>{rowData.BOOK_ID}</a>
            },
            { field: 'TITLE', title: 'Title', width: 130 },
            { field: 'AUTHORS', title: 'Author', width: 130 },
            { field: 'CATEGORIES', title: 'Category', width: 130 },
            { field: 'PUBLISHER_ID', title: 'Publisher', width: 130 },
            {
              field: 'DATE_OF_PUBLISH', title: 'Published On', width: 10,
            },
            { field: 'ISBN', title: 'ISBN', width: 10 }
          ]
        }
        data={Allbooks}
        editable={{
          onRowAdd: (newAddedData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/book/insert`,
                  data: newAddedData,
                  method: 'POST',
                }).then((response) => {
                  console.log('newAddedData', newAddedData)

                  setAllBooks([...Allbooks, newAddedData]);
                });

                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                axios.request({
                  url: url + `/book/deletebyid/${oldData.BOOK_ID}`,

                  method: 'DELETE',
                }).then((response) => {
                  console.log(response.data)
                  const dataDelete = [...Allbooks];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAllBooks([...dataDelete]);
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

export default BookList

