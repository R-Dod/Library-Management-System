// import { NextPage } from "next";
// import { useRouter } from 'next/router';
import { Book, Copyright, Add } from "@material-ui/icons";
import { GetStaticProps, GetStaticPaths } from "next";
import * as React from 'react';
import{ Component } from 'react'
 import Box from '@mui/material/Box';
 import TextField from '@mui/material/TextField';
 import DataTable from "../../../shared-components/data-table";
 import Button from '@mui/material/Button';
 import styles from '../../../components/layout.module.css';
 import { useState, useEffect, useCallback } from 'react';
 import axios from 'axios';
 import moment from 'moment';


 const url = 'http://localhost:4000';

// // receive database table here




// const rows: any = [
//   {
//     sno: 1,
//     id: 100,
//     status: 'Checked Out',
//     ShelfNo: '234'
//   },
//   {
//     sno: 2,
//     id: 101,
//     status: 'Available',
//     ShelfNo: '345'
//   },
//   {
//     sno: 3,
//     id: 102,
//     status: 'Checked Out',
//     ShelfNo: '2340'
//   },
//   {
//     sno: 4,
//     id: 103,
//     status: 'Available',
//     ShelfNo: '3450'
//   },
//   {
//     sno: 5,
//     id: 104,
//     status: 'Checked Out',
//     ShelfNo: '2341'
//   },
//   {
//     sno: 6,
//     id: 105,
//     status: 'Available',
//     ShelfNo: '3451'
//   },
// ];

// const BookDataPage: NextPage<any, any> = function () {
//   const router = useRouter();
//   const bookID = router.query.bookid;
//   //console.log(BookID)
 //  const [BookCopies, setBookCopies] = useState<any>(rows);
//   const [BookInfo, setBookInfo] = useState<any>([]);

//   useEffect(() => {

//     axios.request({
//       url: url + `/book/getbyid?id=${bookID}`,

//       method: 'GET',
//     }).then((response) => {
//       console.log('data received', response.data);
//       //console.log(response.data)
//       setBookInfo(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>{BookInfo.TITLE}</h1>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '100%' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="id"
//           label="ID"
//     ={BookInfo.Book_ID}
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="standard"
//         />
//         <h1> <TextField
//           required
//           id="title"
//           label="Title"
//     ={BookInfo.TITLE}
//           variant="standard"
//         /></h1>
//         <TextField
//           id="author"
//           label="Authors"
//     ={BookInfo.AUTHORS}
//           variant="standard"
//         />
//         <TextField
//           id="category"
//           label="Category"
//     ={BookInfo.CATEGORIES}
//           variant="standard"
//         />
//         <TextField
//           id="publisher"
//           label="Publisher"
//     ={BookInfo.PUBLISHER_ID}
//           variant="standard"
//         />
//         <TextField
//           id="date"
//           //type="date"
//           label="Date"
//     ={BookInfo.DATE_OF_PUBLISH}
//           variant="standard"
//         />

//         <TextField
//           id="price"
//           label="Cost"
//           type="number"
//     ={BookInfo.COST}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="isbn"
//           label="ISBN"
//     ={BookInfo.ISBN}
//           variant="standard"
//         />

//         <TextField
//           id="standard-multiline-static"
//           label="Description"
//           multiline
//     ={BookInfo.DESCRIPTION}
//           variant="standard"
//         />

//       </Box>

//       <div style={{ height: 400, width: '100%' }}>
//         <DataTable
//           options={{
//             showSelectAllCheckbox: false,
//             selection: false,
//             exportButton: false,
//             draggable: false,
//             search: false,
//             paging: false
//           }}
//           title={'All Copies'}
//           columns={copies}
//           data={BookCopies}
//           editable={{
//             onRowAdd: (newAddedData) =>
//               new Promise<void>((resolve, reject) => {
//                 setTimeout(() => {
//                   setBookCopies([...rows, newAddedData]);
//                   resolve();
//                 }, 1000);
//               }),
//             onRowUpdate: (newData, oldData: any) =>
//               new Promise<void>((resolve, reject) => {
//                 setTimeout(() => {

//                   const dataUpdate = [...BookCopies];
//                   const index = oldData.tableData.id;
//                   dataUpdate[index] = newData;

//                   setBookCopies([...dataUpdate]);

//                   resolve();
//                 }, 1000);
//               }),
//             onRowDelete: (oldData: any) =>
//               new Promise<void>((resolve, reject) => {
//                 setTimeout(() => {

//                   const dataDelete = [...BookCopies];
//                   const index = oldData.tableData.id;
//                   dataDelete.splice(index, 1);
//                   setBookCopies([...dataDelete]);

//                   resolve();
//                 }, 1000);
//               }),
//           }}

//         />&nbsp; <div>
//           <Button className={styles.button}>Save Changes</Button></div>&nbsp; </div>

//     </div>
//   )

// };

// export default BookDataPage


// // export const getStaticProps: GetStaticProps = async (context) => {
// //   const { params } = context
// //   const response = await fetch(`http://localhost:4000/book/getbyid?id=${params.Book_ID}`)
// //   console.log(params)
// //   const data = await response.json()
// //   return {
// //     props: {
// //       BookInfo: data
// //     },
// //   }
// // }

// // export const getStaticPaths: GetStaticPaths = async () => {
// //   const response = await fetch(`http://localhost:4000/book/getAllData`)
// //   //console.log(response)
// //   const data = await response.json()

// //   const paths = data.map((book) => {
// //     return {
// //       params: {
// //         bookid: `${book.Book_ID}`,
// //       }
// //     }
// //   })

// //   return {
// //     paths,
// //     fallback: false
// //   }
// // }


// class BookPage extends Component {
//   constructor(props) {
//     super(props)
//     const [bookdetails, setbookdetails] = useState<any>(book);

//     useEffect(() => {

//       axios.request({
//         url: url + `http://localhost:4000/book/getbyid?id=${book.BOOK_ID}`,
//         method: 'GET',
//       }).then((response) => {
//         //console.log('data received', response.data);
//         //console.log(book.BOOK_ID)
//         setbookdetails(response.data);
//         console.log('BookCopies', BookCopies)
//       });
//     }, []);
//     this.state = {

//       BOOK_ID : `${bookdetails.BOOK_ID}`,
//       TITLE : `${bookdetails.TITLE}`,
//       AUTHORS: `${bookdetails.AUTHORS}`,
//       CATEGORIES: `${bookdetails.CATEGORIES}`,
//       PUBLISHER_ID: `${bookdetails.PUBLISHER_ID}`,
//       DATE_OF_PUBLISH: `${bookdetails.DATE_OF_PUBLISH}`,
//       DESCRIPTION: `${bookdetails.DESCRIPTION}`,
//       COST: `${bookdetails.COST}`,
//       ISBN: `${bookdetails.ISBN}`      

//     }
//   }
// }


const copies: any[] = [
  //{ field: 'sno', title: '#', type: 'number', width: 10 },
  { field: 'COPY_ID', title: 'ID', type: 'number', width: 10 , editable: 'never'},
  { field: 'STATUS', title: 'Status', width: 130 , editable: 'onUpdate'},
  { field: 'SHELF_NO', title: 'Shelf No.', width: 130 }
];

let state = {
      BOOK_ID : '',
      TITLE : '',
      AUTHORS: '',
      CATEGORIES: '',
      PUBLISHER_ID: '',
      DATE_OF_PUBLISH: '',
      DESCRIPTION: '',
      COST: '',
      ISBN: ''
}

function handleTitle(e) {
  state.TITLE = e.target.value;
  console.log('state values', state)
}

function handlePubID(e) {
  state.PUBLISHER_ID = e.target.value;
  console.log('State values', state)
}
function handleDate(e) {
  state.DATE_OF_PUBLISH = e.target.value;
  console.log('State values', state)
}

function handleDesc(e) {
  state.DESCRIPTION = e.target.value;
  console.log('State values', state)
}

function handleCost(e) {
  state.COST = e.target.value;
  console.log('State values', state)
}

function handleISBN(e) {
  state.ISBN = e.target.value;
  console.log('State values', state)
}




function BookInfo({book}) {
     const [bookdetails, setbookdetails] = useState<any>(book);
     //console.log('Book Details',bookdetails)
     const [BookCopies, setBookCopies] = useState<any>([]);

    //  function UpdateBookDetails() {
    //   useEffect(() => {
    
    //     axios.request({
    //       url: url + `/book/updatebyid/${bookdetails.BOOK_ID}`,
    //       data: ,
    //       method: 'PUT',
    //     }).then((response) => {
    //     console.log(response.data)
    //     setbookdetails(response.data);
    //     });
    //   }, []);
    // }

     state = {

      BOOK_ID : `${bookdetails.BOOK_ID}`,
      TITLE : `${bookdetails.TITLE}`,
      AUTHORS: `${bookdetails.AUTHORS}`,
      CATEGORIES: `${bookdetails.CATEGORIES}`,
      PUBLISHER_ID: `${bookdetails.PUBLISHER_ID}`,
      DATE_OF_PUBLISH: `${moment(bookdetails.DATE_OF_PUBLISH).format('DD-MMM-YY')}`,
      DESCRIPTION: `${bookdetails.DESCRIPTION}`,
      COST: `${bookdetails.COST}`,
      ISBN: `${bookdetails.ISBN}`
    }

    //console.log('State values', state)

  useEffect(() => {

    axios.request({
      url: url + `/book/getCopiesbyid?id=${book.BOOK_ID}`,

      method: 'GET',
    }).then((response) => {
      //console.log('data received', response.data);
      //console.log(book.BOOK_ID)
      //setbookdetails({...bookdetails, COST:3000})
      //console.log('New Book Details',bookdetails)

      setBookCopies(response.data);
      console.log('BookCopies', BookCopies)
    });
  }, []);

  // setbook(book)

    return (
    <div>
      <h1>{bookdetails.TITLE}</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="id"
          label="ID"
          defaultValue={bookdetails.BOOK_ID}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          required
          id="title"
          label="Title"
          defaultValue={bookdetails.TITLE}
          onChange={handleTitle}
          variant="filled"
        />
        <TextField
          id="author"
          label="Authors"
          defaultValue={bookdetails.AUTHORS}
          //onChange={this.handleAuthors}
          variant="filled"
        />
        <TextField
          id="category"
          label="Category"
          defaultValue={bookdetails.CATEGORIES}
          variant="filled"
        />
        <TextField
          id="publisher"
          label="Publisher ID"
          defaultValue={bookdetails.PUBLISHER_ID}
          onChange={handlePubID}
          variant="filled"
        />
        <TextField
          id="date"
          //type="date"
          label="Date"
          defaultValue= {moment(bookdetails.DATE_OF_PUBLISH).format('DD-MMM-YY')}
          onChange={handleDate}
          variant="filled"
        />

        <TextField
          id="price"
          label="Cost"
          type="number"
          defaultValue={bookdetails.COST}
          onChange={handleCost}
          // InputLabelProps={{
          //   shrink: true,
          // }}
          variant="filled"
        />
        <TextField
          id="isbn"
          label="ISBN"
          contentEditable="true"
          defaultValue={bookdetails.ISBN}
          onChange={handleISBN}
          variant="filled"
        />

        <TextField
          id="Description"
          label="Description"
          multiline
          defaultValue={bookdetails.DESCRIPTION}
          onChange={handleDesc}
          variant="filled"
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
            paging: false
          }}
          title={'All Copies'}
          columns={copies}
          data={BookCopies}
          editable={{

            onRowAdd: (newAddedData) => 
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                  axios.request({
                    url: url + `/book/insertCopy/${book.BOOK_ID}`,
                    data: newAddedData,
                    method: 'POST',
                  }).then((response) => {
                    console.log('response', response.data)
                    //setBookCopies(response.data);  
                    setBookCopies([...BookCopies, response.data]);
                  });                                     
                  resolve();
              }, 1000);
 
              
              }),
              onRowUpdate: (newData, oldData: any) =>
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
  
                  axios.request({
                    url: url + `/book/updateCopy`,
                    data: newData,
                    method: 'PUT',
                  }).then((response) => {
                    const dataUpdate = [...BookCopies];
                    const index = oldData.tableData.id;
                    alert(oldData.tableData.id);
                    console.log(response.data)
                    dataUpdate[index] = newData;
  
                    setBookCopies([...dataUpdate]);
  
                  });
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData: any) =>
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {

                  axios.request({
                    url: url + `/book/deleteCopy`,
                    data: { COPY_ID: oldData.COPY_ID },
                    method: 'DELETE',
                  }).then((response) => {
                    const dataDelete = [...BookCopies];
                    const index = oldData.tableData.id;
                    console.log(response)
                    if(response.data == '') {
                    dataDelete.splice(index, 1);
                    setBookCopies([...dataDelete]);
                    } else {
                    alert(response.data +"\nThe Book has been Checked out");
                  }
                  });
                  resolve();
                }, 1000);
              }),
          }}

        /> 
        &nbsp; 
        {/* <div>
          <Button variant='contained'>Save Changes</Button></div>&nbsp;  */}
          <span>
            <Button variant="contained" style={{
            display: 'inline-block',
            width: '100%',
            paddingTop: '2%',
            paddingBottom: '4%',
            backgroundColor: 'rgb(3, 7, 235)',
            borderRadius: '10px',
            color: 'white'              
            }} 
            onClick={() => {
              console.log('STATE TO SEND', state);
              axios.request({
                url: url + `/book/updatebyid/${bookdetails.BOOK_ID}`,
                data: state,
                method: 'PUT',
              }).then((response) => {
              console.log(response)
              setbookdetails(response.data);
              });
            }}
            >
              Save Changes
              </Button></span>
          </div>

    </div>
   )

}

export default BookInfo




export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:4000/book/getAllData`)
  const data = await response.json()
  const paths = data.map(info=>{
    return {
      params: {
        bookid: `${info.BOOK_ID}`
      }
    }
  })
  return {
    // paths: [
    //   {
    //     params: {bookid: '100'}
    //   }
    // ],
    paths,
    fallback : false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(`http://localhost:4000/book/getbyid?id=${params.bookid}`)
  const data = await response.json()

  return {
    props: {
      book: data,
    }
  }
}