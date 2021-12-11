import '../styles/global.css'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '@mui/material/Container';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <Component {...pageProps} />
      </Container>
      <Footer />

    </>
  );

}