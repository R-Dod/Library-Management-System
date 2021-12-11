
import { NextPage } from "next";
import Router, { useRouter } from 'next/router';
import Popup from '../../components/Popup';
import Image from 'next/image'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; //https://mui.com/components/grid/
import axios from "axios";

import moment from 'moment';

import Chip from '@mui/material/Chip'; //https://mui.com/components/chips/

import Container from '@mui/material/Container';


import React, { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const url = 'http://localhost:4000';
const user = { user_name: 'Ali Hasan', user_id: '101' };
const BookPage: NextPage<any, any> = function ({ bookID }) {

  const router = useRouter();

  const [buttonPopup, setButtonPopup] = useState(false);
  const [bookDetail, setBookDetail] = useState<any>([]);

  useEffect(() => {

    axios.request({
      url: url + `/book/getbyid?id=${bookID}`,
      method: 'GET',
    }).then((response) => {
      console.log('data received', response.data);
      setBookDetail(response.data);
    });
  }, []);

  const issueACopy = () => {

    if (bookDetail.AVAILABLECOPIES == 0) { return; }
    else {
      const insertInIssueHistory = {
        user: user.user_id,
        book_id: bookID
      }
      axios.request({
        url: url + `/issuereturn/insert`,
        data: insertInIssueHistory,
        method: 'POST',
      }).then((response) => {
        console.log('data received', response.data);
      });
    }
  };

  return (
    <>
      {
        bookDetail ? (
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={9}>
                <Item><h1>{bookDetail.TITLE}</h1> </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <button className="button" onClick={() => { setButtonPopup(true); issueACopy(); }}>Issue
                  </button>
                </Item>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1}>
              <Grid item xs={5}>
                <Item>
                  <Image
                    priority
                    src={`/images/${bookDetail.BOOK_ID}.jpg`}
                    height={300}
                    width={300}
                    alt={`${bookDetail.id}`}
                  />
                </Item>
              </Grid>
              <Grid item xs={7} container>
                <Item>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}><Item className="textAlignLeft">By: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className="textAlignLeft">
                        {
                          bookDetail.AUTHORS?.split(',').map((author, index) => {
                            if (author.trim().length > 0) {
                              return <Chip variant='outlined' label={author.trim()} key={index} component="a" href="#" clickable />
                            }
                          })
                        }
                      </Item>
                    </Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Genre: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className="textAlignLeft">
                        {
                          bookDetail.CATEGORIES?.split(',').map((category, index) => {
                            if (category.trim().length > 0) {
                              return <Chip color="info" label={category.trim()} key={index} component="a" href="#" clickable />
                            }
                          })
                        }
                      </Item>
                    </Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Original Cost: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className='booKPrice textAlignLeft'> Rs. {bookDetail.COST}</Item>
                    </Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">ISBN </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {bookDetail.ISBN}</Item></Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Published By </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {bookDetail.PUBLISHERNAME} </Item></Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Published On </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {moment(bookDetail.DATE_OF_PUBLISH).format('DD-MMM-YY')}</Item></Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <Item className="bookDescription">
                Description: {bookDetail.DESCRIPTION}
              </Item>
            </Grid>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3> Book Issued! </h3>
              {(bookDetail.AVAILABLECOPIES > 0) ?
                <p>
                  Please collect the book from us at the earliest.
                  The due date for returning the book is "within 2 weeks" !
                </p>
                :
                <p>
                  No copies of the book available. Please check again later.
                </p>

              }
            </Popup>
          </Container>
        ) : (
          <p> Book not found </p>
        )
      }

    </>
  );

};
BookPage.getInitialProps = async ({ query }) => {

  const { BookDetail } = query;

  return {
    bookID: BookDetail
  }

}

export default BookPage;