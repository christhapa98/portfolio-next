import AppContextComponent from '@/context/app.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <AppContextComponent>
    <Component {...pageProps} />
  </AppContextComponent>
}
