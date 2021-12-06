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

const columns = [
  { field: 'BOOK_ID', headerName: 'ID', type: 'number', width: 10 },
  { field: 'TITLE', headerName: 'Title', width: 130 },
  // { field: '', headerName: 'Author First Name', width: 130 },
  // { field: '', headerName: 'Author Last Name', width: 130 },
  // { field: 'category', headerName: 'Category', width: 130 },
  { field: 'DATE_OF_PUBLISH', headerName: 'Publish Date', width: 130 },
  { field: 'PUBLISHER_ID', headerName: 'Publisher ID', width: 130 },
  { field: 'COST', headerName: 'Cost', type: 'number', width: 10 },
  { field: 'ISBN', headerName: 'ISBN', width: 10 }

];

//const data = books

function BookList() {

  const [books, setAllBooks] = useState([]);
  // receive database table here

  useEffect(() => {

    axios.request({
      url: url + '/book/getAll',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllBooks(response.data);
    });
  }, []);

  return (
    <>
      {/* <MaterialDataTable
  title="Home Page"
      options={{
        selection: false,
        //detailPanelType: "single",
        paging: true,
        toolbar: true,
        search: true,
        exportButton: false,
        exportAllData: false,

        headerStyle: {
          font: 'Proxima Nova',
          fontSize: '14px',
          lineHeight: '20px',
        },
        rowStyle: (x) => {
          const styles = {
            font: 'Proxima Nova',
            fontSize: '14px',
            lineHeight: '65px',
            color: '#020A20',
            background: '',
          };

          return styles;
        },
      }}
     columns={
        [
            { field: 'id', title: 'ID', type:'number', width: 10 },
            { field: 'title', title: 'Title', width: 130 },
            { field: 'author', title: 'Author', width: 130 },
            { field: 'category', title: 'Category',  width: 130 },
            { field: 'publisher', title: 'Publisher', width: 130 },
            { field: 'cost', title: 'Cost',type:'number', width: 10 },
            { field: 'ISBN', title: 'ISBN', width: 10 }
        ]
     }
     data={books.map(book =>(
         {id: `${book.id}`, 
         title: `${book.title}`, 
         author: `${book.Author}`,
         category: `${book.Category}`,
         publisher: `${book.publisher}`,
         cost: `${book.cost}`,
         ISBN: `${book.ISBN}`
        }
     ))}
     editable={{
        onRowAdd: (newAddedData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
                setIssueHistory([...issueHistory, newAddedData]);
              resolve();
            }, 1000);
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
>

 </MaterialDataTable> */}
      <h1>Home Page</h1>
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
                <TableCell >{book.PUBLISHER_ID}</TableCell>
                <TableCell >{book.DATE_OF_PUBLISH}</TableCell>
                <TableCell >{book.COST}</TableCell>
                <TableCell >{book.ISBN}</TableCell>
                <TableCell><Link href="#">Delete</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

function AddBook() {
  const [book, setBook] = useState('')

  return (
    <>
      <input type='text' value={book} onChange={e => setBook(e.target.value)} />
      <button onClick={AddInfo}>Add Book</button>
    </>
  )
}

const AddInfo = async () => {
  const response = fetch('../../db.json', {
    method: 'POST',
    body: JSON.stringify({ book: book }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await response.json()
  //console.log(data)
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

