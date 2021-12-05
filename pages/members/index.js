import React from "react"
import Data from '../../components/members.json'
import MaterialDataTable from '../../shared-components/data-table'


function memberlist(){
    return (

    <React.Fragment>
    <MaterialDataTable
    options={{
      exportButton: true,
      draggable: false,
      actionsColumnIndex: -1,
      search: true,
    }}
    title={'Members'}
    data={Data.map(data => (
        {
            id:`${data.id}`,
            firstName:`${data.firstname}`,
            lastName: `${data.lastname}`,
            PhoneNo: `${data.PhoneNo}`,
            DOB: `${data.DOB}`,
            email: `${data.email}`,
            address: `${data.address}`,
            password:`${data.password}`
        }        
    ))
}
    columns={[
        { field: 'id',title: 'ID', type:'number'},
        { field: 'firstName',title: 'First Name',},
        { field: 'lastName',title: 'Last Name'},
        { field: 'PhoneNo',title: 'Phone Number'},
        { field: 'DOB',title: 'Date of Birth'},
        { field: 'email',title: 'Email'},
        { field: 'address',title: 'Address'},
        { field: 'password',title: 'Password'}
    ]}
    singleSelect={true}
    editable={{
        onRowAdd: (newAddedData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
              //setIssueHistory([...issueHistory, newAddedData]);
            resolve();
          }, 1000)
       }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {

              const dataUpdate = [...issueHistory];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;

              setIssueHistory([...dataUpdate]);

            resolve();
          }, 1000);
        }),
      onRowDelete: (oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {

              const dataDelete = [...issueHistory];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1); 
              setIssueHistory([...dataDelete]);

            resolve();
          }, 1000);
        }),
    }}
  />

</React.Fragment>
    )}
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