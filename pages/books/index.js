import Link from 'next/link';
import { NextPage } from "next";
import { useState } from 'react';
import   {books} from '../../db.json';
import MaterialDataTable from '../../shared-components/data-table';
import 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const temp = books
//console.log(books);

const columns  = [
    { field: 'id', headerName: 'ID', type:'number', width: 10 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'category', headerName: 'Category',  width: 130 },
    { field: 'publisher', headerName: 'Publisher', width: 130 },
    { field: 'cost', headerName: 'Cost',type:'number', width: 10 },
    { field: 'ISBN', headerName: 'ISBN', width: 10 }

];

const data = books

function BookList() {
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
                        <TableCell>Author(s)</TableCell>
                        <TableCell>Category(s)</TableCell>
                        <TableCell>Publisher</TableCell>
                        <TableCell>Cost</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {temp.map((book) => (
                            <TableRow key={book.title}>
                                <Link href = {`books/${book.id}`}><a>
                                    <TableCell component="th" scope="row">{book.id}</TableCell>
                                    <TableCell >{book.title}</TableCell>
                                    <TableCell >{book.Author}</TableCell>
                                    <TableCell >{book.Category}</TableCell>
                                    <TableCell >{book.publisher}</TableCell>
                                    <TableCell >{book.cost}</TableCell>
                                    </a>
                                    </Link>
                                    <TableCell><Link href = "#">Delete</Link></TableCell>
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
        <input type='text' value={book} onChange={e=> setBook(e.target.value)} />
        <button onClick={AddInfo}>Add Book</button>
        </>
    )
}

const AddInfo = async () => {
    const response = fetch('../../db.json', {
        method: 'POST',
        body: JSON.stringify({book: book}),
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

