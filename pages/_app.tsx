import type { AppProps /*, AppContext */ } from 'next/app'
import NavigationProvider from '@components/context/NavigationProvider';

import '@assets/basic.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  )
}


export default MyApp