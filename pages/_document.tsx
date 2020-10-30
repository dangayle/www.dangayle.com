import Document, { Html, Head, Main, NextScript } from "next/document";
import "../static/style.css";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="f4">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            data-ad-client="ca-pub-3031118380746335"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
