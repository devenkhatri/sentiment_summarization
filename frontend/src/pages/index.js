import {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Typography, styled, Button, FormControl } from '@mui/material';
import { API } from "aws-amplify";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const fetchData = async () => {
    setLoading(true);
    const conversation = await API.get(
      "genai-app-boilerplate",
      `/hello_world`,
      {}
    );
    setResponse(conversation);
    setLoading(false);
  };
  useEffect(() => {
    fetchData()
  }, [])
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
          {response?.messages && !loading ? <><b>Response from hello_world service</b> - {response.messages}</> : "Content goes here"}
        </Box>
      </main>
    </>
  );
}
