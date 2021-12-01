import type { AppProps /*, AppContext */ } from 'next/app'
import NavigationProvider from '@components/Context/NavigationProvider';

import '@assets/basic.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  )
}


export default MyApp