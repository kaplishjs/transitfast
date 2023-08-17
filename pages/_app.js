
function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  })
  return (
    <>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css"
            integrity="sha512-QfDd74mlg8afgSqm3Vq2Q65e9b3xMhJB4GZ9OcHDVy1hZ6pqBJPWWnMsKDXM7NINoKqJANNGBuVRIpIJ5dogfA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
