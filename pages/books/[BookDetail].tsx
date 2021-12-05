
import { NextPage } from "next";
import Router, { useRouter } from 'next/router';
import Popup from '../../components/Popup';
import Image from 'next/image'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const url = 'http://localhost:4000';

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
    const insertInIssueHistory = {
      user: '101',
      book_id: bookID
    }
    axios.request({
      url: url + `/issuereturn/insert`,
      data: insertInIssueHistory,
      method: 'POST',
    }).then((response) => {
      console.log('data received', response.data);
    });
  };

  return (
    <>
      {
        bookDetail ? (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Grid item xs={4}>
                  <Item> <h1 >{bookDetail.TITLE}</h1></Item>
                </Grid>
                <Grid item xs={4}>
                  <Image
                    priority
                    src={`/images/${bookDetail.BOOK_ID}.jpg`}
                    height={144}
                    width={144}
                    alt={`${bookDetail.id}`}
                  />
                </Grid>
                <Grid item xs={4}>
                  <h3> Author: {bookDetail.first_name} </h3>
                </Grid>
                <Grid item xs={4}>
                  <h4>Category: {bookDetail.category_name}</h4>
                </Grid>
                <h5>
                  Publisher: {bookDetail.PUBLISHER_ID} <br />
                  Published on: {bookDetail.DATE_OF_PUBLISH}<br />
                  <br />
                  Description: {bookDetail.DESCRIPTION}<br />
                  <br />
                  Original Cost: {bookDetail.COST}<br />
                  ISBN: {bookDetail.ISBN}<br />
                </h5>
                <button className="button" onClick={() => setButtonPopup(true)}>Issue</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h3> Book Issued! </h3>
                  {(bookDetail.copies > 0) ? issueACopy() : issueACopy()}
                  {(bookDetail.copies > 0) ?
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
              </Grid>

              <Grid item xs={2} />
            </Grid>
          </Box>
        )
          : (<p> No Book Found </p>)
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