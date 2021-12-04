import '../styles/global.css'
import Navbar from '../components/Navbar/Navbar';
export default function App({ Component, pageProps }) {
    return (
    <>
      
      <Navbar/> 
      <div>Welcome User!</div>
      <Component {...pageProps} />
    </>
    );
    
  }