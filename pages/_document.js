// @flow

import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';
import {flush} from 'emotion';

type Props = {
  __NEXT_DATA__: *,
  ids: *,
}

const dev = process.env.NODE_ENV !== 'production';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    if (dev) {
      flush();
    }
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {...page, ...styles};
  }

  constructor(props: Props) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <title>FOCUS</title>
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: this.props.css}}
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}
