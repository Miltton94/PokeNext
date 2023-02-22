import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
    </Head>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
