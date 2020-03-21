import React from "react";
import App from "next/app";
import TagManager from "react-gtm-module";
import { TagManagerArgs } from "react-gtm-module";

const tagManagerArgs: TagManagerArgs = {
  gtmId: "GTM-TPL9Q6V"
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
