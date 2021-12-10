import React from "react"
import MaterialDataTable from '../../shared-components/data-table'
import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

const url = 'http://localhost:4000';

function memberlist() {

  const membersDataColumns: any[] = [
    { field: 'MEMBER_ID', title: 'ID', editable: 'never' },
    { field: 'FIRST_NAME', title: 'First Name' },
    { field: 'LAST_NAME', title: 'Last Name' },
    { field: 'PHONE_NUMBER', title: 'Phone Number' },
    { field: 'DATE_OF_BIRTH', title: 'Date of Birth',
    render: rowData => moment(rowData.DATE_OF_BIRTH).format('DD-MMM-YY')
  },
    { field: 'EMAIL', title: 'Email' },
    { field: 'ADDRESS', title: 'Address' },
    { field: 'PASSWORD', title: 'Password',
    render: rowData => 
    <p typeof="password"/>},

  ];
  const [memberList, setMemberList] = useState<any>([]);

    useEffect(() => {

    axios.request({
      url: url + `/member/getAll`,

      method: 'GET',
    }).then((response) => {
      console.log('data received', response.data.data);
      //console.log(response.data)
      setMemberList(response.data.data);
    });
  }, []);

  return (

    <React.Fragment>
      <MaterialDataTable
        options={{
          exportButton: false,
          draggable: false,
          actionsColumnIndex: -1,
          search: true,
        }}
        title={'Members'}
        data={memberList}
        columns={membersDataColumns}
        singleSelect={true}
        editable={{
          onRowAdd: (newAddedData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/member/insert`,
                  data: newAddedData,
                  method: 'POST',
                }).then((response) => {
                  console.log('newAddedData', newAddedData)
                  setMemberList([...memberList, newAddedData]);
                }); 
                resolve(null);
              }, 1000)
            }),
            onRowUpdate: (newData, oldData: any) =>
            new Promise<void>((resolve, reject) => {
              setTimeout(() => {

                axios.request({
                  url: url + `/member/edit/${oldData.MEMBER_ID}`,
                  data: newData,
                  method: 'PUT',
                }).then((response) => {
                  const dataUpdate = [...memberList];
                  const index = oldData.tableData.id;
                  //alert(oldData.tableData.id);
                  console.log(response.data)
                  dataUpdate[index] = newData;
                  setMemberList([...dataUpdate]);

                });
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.request({
                  url: url + `/member/remove/${oldData.MEMBER_ID}`,
                  method: 'DELETE',
                }).then((response) => {
                  console.log(response.data)
                  const dataDelete = [...memberList];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setMemberList([...dataDelete]);
                });

                resolve(null);
              }, 1000);
            }),
        }}
      />

    </React.Fragment>
  )
}

export default memberlist

