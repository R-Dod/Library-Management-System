
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <Item> <h1>{bookDetail.TITLE}</h1></Item>
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <Item>  <h3> Author: {bookDetail.AUTHORS} </h3> </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>  <h4>Category: {bookDetail.CATEGORIES}</h4> </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <h5>
                      Publisher: {bookDetail.PUBLISHER_ID} <br />
                      Published on: {bookDetail.DATE_OF_PUBLISH}<br />
                      <br />
                    </h5>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    Description: {bookDetail.DESCRIPTION}<br />
                    <br />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    Original Cost: {bookDetail.COST}<br />
                    ISBN: {bookDetail.ISBN}<br />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <button className="button" onClick={() => { setButtonPopup(true); issueACopy(); }}>Issue
                    </button>
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
              </Grid>
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