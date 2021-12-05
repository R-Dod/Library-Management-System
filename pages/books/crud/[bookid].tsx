import { NextPage } from "next";
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from "next";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DataTable from "../../shared-components/data-table";
import { useState } from "react";
import Button from '@mui/material/Button';
import styles from '../../components/layout.module.css';

const copies: any[] = [
    { field: 'sno', title: '#', type:'number', width: 10 },
    { field: 'id', title: 'ID', type:'number', width: 10 },
    { field: 'status', title: 'Status', width: 130 },
    { field: 'ShelfNo', title: 'Shelf No.', width: 130 }
];

const rows: any = [
    {
        sno: 1,
        id: 100,
        status: 'Checked Out',
        ShelfNo: '234'
    },
    {
        sno:2,
        id: 101,
        status: 'Available',
        ShelfNo: '345'
    },
    {
        sno: 3,
        id: 102,
        status: 'Checked Out',
        ShelfNo: '2340'
    },
    {
        sno:4,
        id: 103,
        status: 'Available',
        ShelfNo: '3450'
    },
    {
        sno: 5,
        id: 104,
        status: 'Checked Out',
        ShelfNo: '2341'
    },
    {
        sno:6,
        id: 105,
        status: 'Available',
        ShelfNo: '3451'
    },        
];

const BookPage: NextPage<any, any> = function ({ book }) {
    const router = useRouter();
    const [rowsvalue, setrows] = useState<any>(rows);

    return (
    <div>
        <h1>{book.title}</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },}}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="id"
          label="ID"
          defaultValue={book.id}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />        
       <h1> <TextField
          required
          id="title"
          label="Title"
          defaultValue={book.title}
          variant="standard"
        /></h1>
        <TextField
          id="author"
          label="Author"
          defaultValue={book.Author}
          variant="standard"
        />
        <TextField
          id="category"
          label="category"
          defaultValue={book.Category}
          variant="standard"
        />
          <TextField
          id="publisher"
          label="Publisher"
          defaultValue={book.publisher}
          variant="standard"
        />
          <TextField
          id="date"
          //type="date"
          label="Date"
          defaultValue={book.date}
          variant="standard"
        />

        <TextField
          id="price"
          label="Cost"
          type="number"
          defaultValue={book.cost}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="isbn"
          label="ISBN"
          defaultValue={book.ISBN}
          variant="standard"
        />        

        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          defaultValue={book.Description}
          variant="standard"
        />

      </Box>
        
      <div style={{ height: 400, width: '100%' }}>
          <DataTable
                        options={{
                            showSelectAllCheckbox: false,
                            selection: false,
                            exportButton: false,
                            draggable: false,
                            search: false,
                            paging:false
                          }}
      title={'All Copies'}
              columns={copies}              
              data={rows}
              editable={{
                onRowAdd: (newAddedData) =>
                  new Promise<void>((resolve, reject) => {
                    setTimeout(() => {
                        setrows([...rows, newAddedData]);
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData: any) =>
                  new Promise<void>((resolve, reject) => {
                    setTimeout(() => {

                        const dataUpdate = [...rowsvalue];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;

                        setrows([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData: any) =>
                  new Promise<void>((resolve, reject) => {
                    setTimeout(() => {

                        const dataDelete = [...rowsvalue];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1); 
                        setrows([...dataDelete]);

                      resolve();
                    }, 1000);
                  }),
              }}

              />&nbsp; <div>
              <Button className={styles.button}>Save Changes</Button></div>&nbsp; </div>

    </div>
    )
        // <div>
        //     <h2>
        //         {book.id} {book.title} | {book.date}
        //     </h2>
        //     <h3>Rs. {book.cost}</h3>
        //     <h4>{book.ISBN}</h4>
        //     <p>{book.Description}</p>
        //     <button>Save</button>
        // </div>       
    
//   console.log(router.query);
//   // Get ID from router.query and fetch data for that id
//   // replace it by returned data from API
//   const data = {
//     id:1,
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     bookName: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396 k views',
//     createdAt: 'a week ago',
//     publisher: 'AA production',
//     author: 'A'
//   };

  

//   return (
//       <>
//           <h1> {data.bookName} </h1>
//           <h2> {data.publisher} </h2>
//           <h3> {data.author} </h3>
//       </>
//   );
};

export default BookPage


export const getStaticProps: GetStaticProps = async (context) =>{
    const { params } = context
    const response = await fetch(`http://localhost:4000/books/${params.bookid}`)
    const data = await response.json()
    return {
        props: {
            book: data
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const response = await fetch(`http://localhost:4000/books`)
    const data = await response.json()

    const paths = data.map((book) => {
        return {
            params: {
                bookid : `${book.id}`,
            }
        }
    })

    return {
    paths,
    fallback: false
}
}