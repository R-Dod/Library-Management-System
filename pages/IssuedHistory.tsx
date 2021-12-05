import 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Checkbox, Grid, IconButton, Tooltip } from '@material-ui/core';
import MaterialDataTable from '../shared-components/data-table';

const FilterMultiValDataComponent = (props: any) => {

    // receive database table here
    const IssueHistoryData: any = [
        {
            id: 1,
            BookID: 'B1',
            BookName: 'Book 1',
            IssueDate: '20/11/2021',
            Duedate: '28/11/2021',
            AmountFine:100, //if you return it late
            Returned: true,
            ReturnDate: '28/11/2021',
            FineDate:'No fine',
            LateFine:0 //total accumulated fine
            //issue id??
        },
        {
            id: 2,
            BookID: 'B2',
            BookName: 'Book 2',
            IssueDate: '20/11/2021',
            Duedate: '28/11/2021',
            AmountFine:100, 
            Returned: true,
            ReturnDate: '28/11/2021',
            FineDate:'No fine',
            LateFine:0 

        }
    ];
    /////////////////////
    const columnDefs: any[] = [
        { title: 'Book ID', field: 'id' , editable: 'never' },
        {
        title: 'Book Name',
        field: 'BookName',
        editable: 'never',
        cellStyle: {
            maxWidth: '75ch',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        },
        { title: 'Issue Date', field: 'IssueDate' , editable: 'never'},
        { title: 'Due date', field: 'Duedate' , editable: 'never'},
        { title: 'Amount Fine', field: 'AmountFine' , editable: 'never'},
        { title: 'Return Date', field: 'ReturnDate' , editable: 'never'},
        { title: 'Fine payed on date', field: 'FineDate' , editable: 'never'},
        { title: 'Accumulated Fine', field: 'LateFine' , editable: 'never'},
        
        
        {
            title: 'Return Status',
            field: 'Returned',
            editable:'never',
            //Edit the following code:
            render: (rowData: any) => <Checkbox checked={rowData.Returned}></Checkbox>,
            editComponent: (props: any) => {
              return (
                <Checkbox
                  checked={props.rowData.Returned}
                  onChange={(e) => {
                    const newRowData = { ...props.rowData, Returned: e.target.checked };
                    props.onRowDataChange(newRowData);
                  }}
                />
              );
            },
          },
      
    ];


    useEffect (()=>{
      // get db data here
    });

    // block comment CTRL + K + C
    // block un-comment CTRL + K + U

    // const dbData = 'db';
    // let newdata = dbData;
    // newdata = 'blah'

    //change names here?
    const [issueHistory, setIssueHistory] = useState<any>(IssueHistoryData);

  return (
    <React.Fragment>

            <MaterialDataTable
              options={{
                exportButton: true,
                draggable: false,
                actionsColumnIndex: -1,
                padding: 'dense',
                search: true,
              }}
              title={'The books you have issued'}
              data={issueHistory}
              columns={columnDefs}
              singleSelect={true}
              //this goes away:?
              // editable={{
              //   onRowAdd: (newAddedData) =>
              //     new Promise<void>((resolve, reject) => {
              //       setTimeout(() => {
              //           setIssueHistory([...issueHistory, newAddedData]);
              //         resolve();
              //       }, 1000);
              //     }),
              //   onRowUpdate: (newData, oldData: any) =>
              //     new Promise<void>((resolve, reject) => {
              //       setTimeout(() => {

              //           const dataUpdate = [...issueHistory];
              //           const index = oldData.tableData.id;
              //           dataUpdate[index] = newData;

              //           setIssueHistory([...dataUpdate]);

              //         resolve();
              //       }, 1000);
              //     }),
              //   onRowDelete: (oldData: any) =>
              //     new Promise<void>((resolve, reject) => {
              //       setTimeout(() => {

              //           const dataDelete = [...issueHistory];
              //           const index = oldData.tableData.id;
              //           dataDelete.splice(index, 1); 
              //           setIssueHistory([...dataDelete]);

              //         resolve();
              //       }, 1000);
              //     }),
              // }}
            />

    </React.Fragment>
  );
};

export default FilterMultiValDataComponent;
