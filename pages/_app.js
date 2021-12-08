import '../styles/global.css'
import Navbar from '../components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function App({ Component, pageProps }) {
  return (
    <>

      <Navbar />
      {/* <div>Welcome User!</div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Component {...pageProps} />
          </Grid>
          <Grid item xs={1} />
        </Grid>

      </Box>
    </>
  );

}