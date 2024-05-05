import * as React from 'react';
import { AppProps } from 'next/app';
import MiniDrawer from "@/components/MiniDrawer"; // Next.js에서 제공하는 AppProps 타입을 불러옵니다.

function MyApp({ Component, pageProps }: AppProps) { // AppProps를 사용하여 파라미터의 타입을 지정합니다.
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
