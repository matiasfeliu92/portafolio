import Head from "next/head";
import Image from "next/image";
// import { Inter } from 'next/font/google'
import Navbar1 from "@/components/NavBar1";
import { Main } from "@/components/Main";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Main/>
    </>
  );
}
