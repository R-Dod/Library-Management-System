import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import Image from 'next/image'


const url = 'http://localhost:4000';

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

  return (
    <React.Fragment>
      <Box sx={{ overflow: 'hidden' }}>
        <Grid container wrap="nowrap">

          {allBooks?.map((item: any, index: number) => {
            return (

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
                      <Typography display="block" variant="caption" color="text.secondary">
                        {item.AUTHORS}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {`${item.CATEGORIES} `}
                      </Typography>
                    </Box>

                  ) : (
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  )}
                </Box>
              </Link>

            );
          })}

        </Grid>
      </Box>

    </React.Fragment>
  );
};

export default Home;