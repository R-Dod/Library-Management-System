import React from 'react'
import { styled } from '@mui/material/styles';
import { GetStaticProps, GetStaticPaths } from "next";
import Image from 'next/image'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import moment from 'moment';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Member({member}) {
    //console.log(member.data)
    return (
        <>

<Box sx={{ flexGrow: 1,
                '& .MuiTextField-root': { m: 1, width: '25ch' },
 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid item xs={4}>
                  <Item> <h1 >{member.data[0].FIRST_NAME} {member.data[0].LAST_NAME}</h1></Item>
                </Grid>
                <Grid item xs={4}>
                  <Image
                  priority
                  src={`/images/memberprof.jpg`}
                  height={244}
                  width={264}
                  alt={`${member.MEMBER_ID}`}
                  />
                </Grid>
                <Grid item xs={4}>
                  <h3> Member ID: {member.data[0].MEMBER_ID}</h3>
                </Grid>
                <Grid item xs={4}>
                  <h4>Email: {member.data[0].EMAIL}</h4>
                </Grid>
                <h5>
                  Phone Number: {member.data[0].PHONE_NUMBER} <br />
                  Date of Birth: {moment(member.data[0].DATE_OF_BIRTH).format('DD-MMM-YY')}<br />
                  <br />
                  Address: {member.data[0].ADDRESS}<br />
                </h5>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </Box>

        </>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:4000/member/getAll`)
    const data = await response.json()
    const paths = data.data.map(info=>{
      return {
        params: {
          memberid: `${info.MEMBER_ID}`
        }
      }
    })
    return {
 
      paths,
      fallback : false,
    }
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context
    const response = await fetch(`http://localhost:4000/member/get/${params.memberid}`)
    const data = await response.json()
  
    return {
      props: {
        member: data,
      }
    }
  }

export default Member