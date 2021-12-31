import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;
