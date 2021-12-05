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
            CopyId: 3,
            IssueId: 12,
            IssueDate: '20/11/2021',
            IssuedTo: 'Maheen',
            Duedate:'29/11/2021',
            Amountfine:100, // this would be the fine if he got late
            Returned: true,
            ReturnDate: '28/11/2021' , //havent returned yet
            FineDate: null, // no fine applicable yet
            LateFine: 0 //accumulated fine
        },
        {
            id: 2,
            BookID: 'B2',
            BookName: 'Book 2',
            CopyId: 4,
            IssueId: 13,
            IssueDate: '13/12/2020',
            IssuedTo: 'Noor',
            Duedate:'29/11/2021',
            Amountfine:100, 
            Returned: false,
            ReturnDate: null,
            FineDate: null, 
            LateFine: 0 
        }
    ];
    
    const columnDefs: any[] = [
        { title: 'ID', field: 'id' },
        { title: 'Book ID', field: 'BookID' },
        {
        title: 'Book Name',
        field: 'BookName',
        cellStyle: {
            maxWidth: '75ch',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        },
        { title: 'Copy ID', field: 'CopyId' , editable: 'never'},
        { title: 'Issue ID', field: 'IssueId' , editable: 'never'},
        { title: 'Issue Date', field: 'IssueDate' , editable: 'never'},
        { title: 'Issued To', field: 'IssuedTo' },
        { title: 'Due Date', field: 'Duedate' },
        { title: 'Amount Fine', field: 'AmountFine' },

        {
            title: 'Return Status',
            field: 'Returned',
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
          { title: 'Returned on date', field: 'ReturnDate' },
          { title: 'Date of Fine payment', field: 'FineDate' },
          { title: 'Accumulated Fine', field: 'LateFine' },
      
    ];


    useEffect (()=>{
      // get db data here
    });

    // block comment CTRL + K + C
    // block un-comment CTRL + K + U

    // const dbData = 'db';
    // let newdata = dbData;
    // newdata = 'blah'

    const [issueHistory, setIssueHistory] = useState<any>(IssueHistoryData);

  return (
    <React.Fragment>

            <MaterialDataTable
              options={{
                exportButton: true,
                draggable: false,
                actionsColumnIndex: 1,
                padding: 'dense',
                search: true,
              }}
              title={'Members Issued History'}
              data={issueHistory}
              columns={columnDefs}
              singleSelect={true}
              editable={{
                onRowAdd: (newAddedData) =>
                  new Promise<void>((resolve, reject) => {
                    setTimeout(() => {
                        setIssueHistory([...issueHistory, newAddedData]);
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData: any) =>
                  new Promise<void>((resolve, reject) => {
                    setTimeout(() => {

                        const dataUpdate = [...issueHistory];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;

                        setIssueHistory([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData: any) =>
                  new Promise<void>((resolve, reject) => {
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
  );
};

export default FilterMultiValDataComponent;
