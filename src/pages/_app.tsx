import Header from "@/components/Header";
import { Global } from "@/styles/Global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
