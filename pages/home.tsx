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

  // fetch data from db
  const data = [
    {
      id: 1,
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      bookName: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396 k views',
      createdAt: 'a week ago',
      publisher: 'AA production',
      author: 'A'
    },
    {
      id: 2,
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      bookName: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40 M views',
      createdAt: '3 years ago',
      publisher: 'BB production',
      author: 'B'
    },
    {
      id: 3,
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      bookName: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130 M views',
      createdAt: '10 months ago',
      publisher: 'CC production',
      author: 'C'
    },
  ];

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

              <Link href={`/book/${item.BOOK_ID}`} key={item.BOOK_ID}>
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
                      {/* <Typography display="block" variant="caption" color="text.secondary">
                        {item.first_name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {`${item.category_name} • ${item.createdAt}`}
                      </Typography> */}
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