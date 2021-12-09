import Link from 'next/link';
import { NextPage } from "next";
import { useState, useEffect, useCallback } from 'react';
//import { books } from '../../db.json';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const url = 'http://localhost:4000';

//const temp = books
//console.log(books);


//const data = books

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
        actionsColumnIndex: -1,
        //detailPanelType: "single",
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
            { field: 'BOOK_ID', title: 'ID', type:'number', width: 10, editable: 'never',
            render: rowData => <a href={`books/crud/${rowData.BOOK_ID}`}>{rowData.BOOK_ID}</a>},
            { field: 'TITLE', title: 'Title', width: 130 },
            { field: 'AUTHORS', title: 'Author', width: 130 },
            { field: 'CATEGORIES', title: 'Category',  width: 130 },
            { field: 'PUBLISHER_ID', title: 'Publisher', width: 130 },
            { field: 'DATE_OF_PUBLISH', title: 'Published On',type:'number', width: 10 },
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
                console.log(response.data)
                //setBookCopies(response.data);  
                setAllBooks([...Allbooks, response.data]);
              });                
                //setIssueHistory([...issueHistory, newAddedData]);
              resolve();
            }, 1000);
          }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {

        //         const dataUpdate = [...issueHistory];
        //         const index = oldData.tableData.id;
        //         dataUpdate[index] = newData;

        //         setIssueHistory([...dataUpdate]);

        //       resolve();
        //     }, 1000);
        //   }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {

              axios.request({
                url: url + `/book/deletebyid/${oldData.BOOK_ID}`,
                //data: { id: oldData.ISSUE_ID },
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
      {/* <h1>Home Page</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Publish Date</TableCell>
              <TableCell>Publisher ID</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>ISBN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.BOOK_ID}>
                <TableCell component="th" scope="row"><Link href={`books/crud/${book.BOOK_ID}`}><a>{book.BOOK_ID}</a></Link></TableCell>
                <TableCell >{book.TITLE}</TableCell>
                <TableCell >{book.DATE_OF_PUBLISH}</TableCell>
                <TableCell >{book.PUBLISHER_ID}</TableCell>
                <TableCell >{book.COST}</TableCell>
                <TableCell >{book.ISBN}</TableCell>
                <TableCell><Link href="#">Delete</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  )
}

export default BookList

// export async function getStaticProps() {
//     //const response = await fetch('http://localhost:4000/books')

//     const temp1 = await response.json()//require('../../db.json')

//     return {
//         props: {
//             temp:temp1,
//         },
//     }
// }

