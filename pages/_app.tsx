import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="G-0DYS93CCM3" />
      </Layout>
    </ChakraProvider>
  );
}
