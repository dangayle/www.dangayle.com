import React from "react";
import Head from "next/head";
import "../../static/style.css";
import Header from "../Header";

type Props = {
  title?: string;
};

const BaseTemplate: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div className="max-w-5xl mx-auto p-4 md:p-16 leading-tight">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="mw8 center">{children}</main>
  </div>
);

export default BaseTemplate;
