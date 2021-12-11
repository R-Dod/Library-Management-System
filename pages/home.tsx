import Link from 'next/link';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import React, { Fragment, useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import Image from 'next/image';

import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const url = 'http://localhost:4000';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home: NextPage<any, any> = function () {
  const [allBooks, setAllBooks] = useState<any>([]);

  //FETCH DATA FROM DB
  useEffect(() => {

    axios.request({
      url: url + '/book/getAll',
      method: 'GET',
    }).then((response) => {
      console.log(response.data);
      setAllBooks(response.data);
    });
  }, []);

  const [input, setInput] = useState("");

  const getInput = (event, val) => {
    setInput(val);
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Item>
          <Autocomplete
            onChange={(e: any) => {
              console.log('event', e);
            }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            renderOption={(props: any, option: any) => {
              console.log(option);
              return (
                <React.Fragment>
                  <Link href={`/books/${option.BOOK_ID}`} key={option.BOOK_ID}>
                    <li
                      id={option.BOOK_ID}
                      onClick={(e: any) => {
                        console.log('event', e);
                      }}
                      className='searchFormatting'
                    >{option.TITLE}</li>
                  </Link>
                </React.Fragment>)
            }}
            options={allBooks}
            sx={{ width: 1100 }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Search book title"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )
            }}
          />
        </Item>
      </Grid>

      <br />
      <Box sx={{ overflow: 'hidden' }}>
        <Grid container justifyContent="flex-start" direction="row"
          alignItems="stretch" spacing={1}>

          {allBooks?.map((item: any, index: number) => {
            return (

              <Grid item xs={3} className='gridItem'>
                <Item>
                  <Link href={`/books/${item.BOOK_ID}`} key={item.BOOK_ID}>
                    <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                      {item ? (
                        <Image
                          priority
                          src={`/images/${item.BOOK_ID}.jpg`}
                          height={144}
                          width={144}
                          alt={`${item.TITLE}`}
                        />
                      ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                      )}

                      {item ? (

                        <Box sx={{ pr: 2 }}>
                          <Typography gutterBottom variant="body2">
                            {item.TITLE}
                          </Typography>

                          {
                            item.AUTHORS?.split(',').map((author, index) => {
                              if (author.trim().length > 0) {
                                return <Chip variant='outlined' className='chipFontSize' label={author.trim()} key={index} component="a" href="#" clickable />
                              }
                            })
                          }
                          {
                            item.CATEGORIES?.split(',').map((category, index) => {
                              if (category.trim().length > 0) {
                                return <Chip color="info" className='chipFontSize' label={category.trim()} key={index} component="a" href="#" clickable />
                              }
                            })
                          }
                        </Box>
                      ) : <></>
                      }

                    </Box>
                  </Link>
                </Item>
              </Grid>

            );
          })}

        </Grid>
      </Box>

    </React.Fragment>
  );
};

export default Home;