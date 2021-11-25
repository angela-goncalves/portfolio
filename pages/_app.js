import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="font-asap m-4 mt-0 md:m-24 md:mt-12 lg:m-32 lg:mt-12 flex flex-col justify-center">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
