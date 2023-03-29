import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Headers from "@/components/headers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto container">
      <Headers />
      <Component {...pageProps} />
    </div>
  );
}
