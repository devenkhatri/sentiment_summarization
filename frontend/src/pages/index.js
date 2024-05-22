import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Typography, styled, Button, FormControl } from '@mui/material';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This page used for home page of application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.main_title_div}>
          <Typography variant="h4" className={styles.main_title}>Page Title</Typography>
        </div>
        
        <Box component="section" sx={{ p: 2, border: '1px solid #f2f2f2'}}>
          Content goes here  
        </Box>
      </main>
    </>
  );
}
