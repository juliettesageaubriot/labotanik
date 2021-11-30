import type { AppProps /*, AppContext */ } from 'next/app'

import '@assets/basic.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp