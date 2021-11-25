import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Angela's Front-end Developer Portfolio"
          ></meta>
          <html lang="en" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-asap">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
