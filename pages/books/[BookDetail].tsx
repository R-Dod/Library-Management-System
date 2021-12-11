
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
            <Grid>
              <Grid item xs={12}>
                <Item><h1>{bookDetail.TITLE}</h1> </Item>
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
                    <Grid item xs={8}><Item className="textAlignLeft"> {bookDetail.PUBLISHER_ID} </Item></Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Published On </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {moment(bookDetail.DATE_OF_PUBLISH).format('DD-MMM-YY')}</Item></Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <Item className="bookDescription">
                Description: {bookDetail.DESCRIPTION}
                However, until now, books on wealth creation have overlooked the powerful forces available inside
                each of us that we can harness and direct in order to manifest the abundance we desire and
                deserve. This fascinating book clearly explains time-tested principles for creating wealth,
                providing guidance on how to alter our behaviors and emotions to actually change the nature
                of our relationship with the powerful stream of abundance that we can tap into at any time.
                As Peggy McColl explains, we can actually transform our energy vibration and send a clear
                message to the universe that we're ready to claim our financial birthright.
                And, best of all, the universe's response to the modifications we make internally
                can be startlingly quick! It's not enough, though, to simply understand what sets apart
                those who are already enjoying a rich and plentiful life from those who are weighed down
                by a feeling of lack. Peggy offers practical advice on how to apply the 21 Distinctions
                of Wealth and become a money magnet
              </Item>
            </Grid>
          </Container>
        ) : (
          <p> Book not found </p>
        )
      }
      {/* {

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
                  <Item>  <h3> Author: </h3>
                    <Chip label={bookDetail.AUTHORS} component="a" href="#basic-chip" clickable />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>  <h4>Category: </h4>
                    <Chip label={bookDetail.CATEGORIES} component="a" href="#basic-chip" clickable />
                  </Item>
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
      } */}

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