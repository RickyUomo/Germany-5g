import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HomeSection />
        <AboutSection />
      </Box>
    </>
  );
}
