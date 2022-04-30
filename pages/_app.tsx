import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer, AgreementToast } from '@/components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main id='main-content'>
        <Component {...pageProps} />
        <AgreementToast />
      </main>
      <Footer />
      <ToastContainer theme='colored' closeOnClick pauseOnHover draggable={false} />
    </>
  );
}

export default MyApp;
