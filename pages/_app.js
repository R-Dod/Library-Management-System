import '../styles/global.css'
import Navbar from '../components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <div>Welcome User!</div> */}

      <Container maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </>
  );

}