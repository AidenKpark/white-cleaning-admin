import * as React from 'react';
import {AppProps} from 'next/app';
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <CssBaseline/>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
