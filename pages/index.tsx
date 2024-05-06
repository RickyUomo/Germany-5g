import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { CompanySection } from "@/components/CompanySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIZWINNER</title>
        <meta name="description" content="5G xR Expo Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* no favicon for now */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Box>
        <HomeSection />
        <AboutSection />
        <CompanySection />
      </Box>
    </>
  );
}
