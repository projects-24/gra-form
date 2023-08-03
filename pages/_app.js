import 'funuicss/css/fun.css'
import 'styles/globals.css'
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
      <link rel="shortcut icon" href="/logo.png" />
      <title>{`Tax relief application form (2023)`}</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
