import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { LayoutDefault } from '~/components';

const routesNoNeedDefaultLayout = ['/login', '/signup']
function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if (routesNoNeedDefaultLayout.includes(appProps.router.pathname))
    return <Component {...pageProps} />

  return (
    <LayoutDefault>
      <Component {...pageProps} />;
    </LayoutDefault>
  )
}

export default MyApp;
