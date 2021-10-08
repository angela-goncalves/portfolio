import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="m-12 mt-0">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
