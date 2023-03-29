import type { AppProps } from 'next/app';
import Head from 'next/head';
// import { DefaultSeo } from 'next-seo';

// import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '@/components/Theme/Chakra';
import Layout from '@/layouts/Dashboard';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      {/* <DefaultSeo {...defaultSEOConfig} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default MyApp;
