import '@/styles/globals.css';

// import components
import Layout from "./components/layout/Main";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
