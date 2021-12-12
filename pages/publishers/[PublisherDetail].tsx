
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
import Button from '@mui/material/Button';
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
const PublisherPage: NextPage<any, any> = function ({ publisherID }) {

  const router = useRouter();

  const [buttonPopup, setButtonPopup] = useState(false);
  const [publisherDetail, setPublisherDetail] = useState<any>([]);

  useEffect(() => {

    axios.request({
      url: url + `/publisher/getbyid?id=${publisherID}`,
      method: 'GET',
    }).then((response) => {
      console.log('data received', response.data);
      setPublisherDetail(response.data);
    });
  }, []);

  // const issueACopy = () => {

  //   if (authorDetail.AVAILABLECOPIES == 0) { return; }
  //   else {
  //     const insertInIssueHistory = {
  //       user: user.user_id,
  //       book_id: authorID
  //     }
  //     axios.request({
  //       url: url + `/issuereturn/insert`,
  //       data: insertInIssueHistory,
  //       method: 'POST',
  //     }).then((response) => {
  //       console.log('data received', response.data);
  //     });
  //   }
  // };

  return (
    <>
      {
        publisherDetail ? (
          <Container maxWidth="lg">
            <Grid container columnSpacing={0}>
              <Grid item xs={10}>
                <Item><h1 className='bookDetailHeading'>{publisherDetail.PUBLISHER_ID}</h1> </Item>
              </Grid>
              {/* <Grid item xs={2}>
                <Item>
                  <h1>
                    <Button size="medium" variant="contained" onClick={() => { setButtonPopup(true); issueACopy(); }}>
                      Issue
                    </Button>
                  </h1>
                </Item>
              </Grid> */}
            </Grid>
            <Grid container rowSpacing={1}>
              {/* <Grid item xs={5}>
                <Item>
                  <Image
                    priority
                    src={`/images/${authorDetail.BOOK_ID}.jpg`}
                    height={300}
                    width={300}
                    alt={`${authorDetail.id}`}
                  />
                </Item>
              </Grid> */}
              <Grid item xs={7} container>
                <Item>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/* <Grid item xs={4}><Item className="textAlignLeft">By: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className="textAlignLeft">
                        {
                          authorDetail.AUTHORS?.split(',').map((author, index) => {
                            if (author.trim().length > 0) {
                              return <Chip variant='outlined' label={author.trim()} key={index} component="a" href="#" clickable />
                            }
                          })
                        }
                      </Item>
                    </Grid> */}
                    {/* <Grid item xs={4}><Item className="textAlignLeft">Genre: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className="textAlignLeft">
                        {
                          authorDetail.CATEGORIES?.split(',').map((category, index) => {
                            if (category.trim().length > 0) {
                              return <Chip color="info" label={category.trim()} key={index} component="a" href="#" clickable />
                            }
                          })
                        }
                      </Item>
                    </Grid> */}
                    <Grid item xs={4}><Item className="textAlignLeft">Name: </Item></Grid>
                    <Grid item xs={8}>
                      <Item className='textAlignLeft'> {publisherDetail.NAME}</Item>
                    </Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Address: </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {publisherDetail.ADDRESS}</Item></Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Email: </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {publisherDetail.EMAIL}</Item></Grid>
                    <Grid item xs={4}><Item className="textAlignLeft">Phone Number: </Item></Grid>
                    <Grid item xs={8}><Item className="textAlignLeft"> {publisherDetail.PHONE_NO}</Item></Grid>

                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <p> Category not found </p>
        )
      }

    </>
  );

};
PublisherPage.getInitialProps = async ({ query }) => {

  const { PublisherDetail } = query;

  return {
    publisherID: PublisherDetail
  }
}

export default PublisherPage;