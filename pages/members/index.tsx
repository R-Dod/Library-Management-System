import React from "react"
import Data from '../../components/members.json'
import MaterialDataTable from '../../shared-components/data-table'
import { useState } from "react";

function memberlist() {

  const membersDataColumns = [
    { field: 'id', title: 'ID', editable: 'never' },
    { field: 'firstname', title: 'First Name', },
    { field: 'lastname', title: 'Last Name' },
    { field: 'PhoneNo', title: 'Phone Number' },
    { field: 'DOB', title: 'Date of Birth' },
    { field: 'email', title: 'Email' },
    { field: 'address', title: 'Address' },
    { field: 'password', title: 'Password'}
  ];
  const membersData: any[] = Data;
  const [memberList, setMemberList] = useState<any[]>(membersData);

  return (

    <React.Fragment>
      <MaterialDataTable
        options={{
          exportButton: true,
          draggable: false,
          actionsColumnIndex: 1,
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
                setMemberList([...memberList, newAddedData]);
                resolve(null);
              }, 1000)
            }),
          onRowUpdate: (newData, oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                const dataUpdate = [...memberList];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;

                setMemberList([...dataUpdate]);

                resolve(null);
              }, 1000);
            }),
          onRowDelete: (oldData: any) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                const dataDelete = [...memberList];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setMemberList([...dataDelete]);

                resolve(null);
              }, 1000);
            }),
        }}
      />

    </React.Fragment>
  )
}
// )}
// const columns = useMemo(() => COLUMNS, [])
// const data = useMemo(() => Data, [])

// const TableInstance = useTable({
//     columns,
//     data
// })



// const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
// } = TableInstance


// return (
//     <table {...getTableProps()}>
//         <thead>
//             {
//                 headerGroups.map(headerGroup => {
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                     {
//                         headerGroup.headers.map(column => {
//                          <th {...column.getHeaderProps()}>{column.render('Header')}</th> 
//                          console.log(headerGroup)  
//                         })}
//                 </tr>   
//                 })}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//             {
//                 rows.map(row => {
//                     prepareRow(row)
//                     return (
//                     <tr {...row.getRowProps()}>
//                         {
//                             row.cells.map(cell=>{
//                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>                                    
//                             })}
//                         </tr>                            
//                     )
//                 })
//             }

//         </tbody>
//     </table>
// )

export default memberlist