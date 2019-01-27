import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render() {
    return <html>
        <Head>
          <title>준호 한나, 결혼합니다.</title>
          <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700" key="google-font-nanum-m" />
          <style>{`
            html, body, p {
              margin: 0;
              padding: 0;
              margin-block-start: 0;
              margin-block-end: 0;
            }
            .hide {display: none;}
            .wrap-content {padding: 50px;}
          `}</style>
        </Head>

        <body>
          <Main />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=969225fd468a90819932423f35c6a247" />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: "Noto Sans KR", san-serif;
            font-size: 15px;
            font-weight: 100;
            color: #000;
            line-height: 2;
            letter-spacing: -1px;
            word-spacing: 2px;
          }`}</style>
      </html>;
  }
}