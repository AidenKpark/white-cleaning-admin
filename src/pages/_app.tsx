import * as React from 'react';
import {AppProps} from 'next/app';
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <CssBaseline/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
