import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

const TextLink: React.FunctionComponent<Props> = props => (
  <a href={props.href} className="link text-red-600 hover:text-black">
    {props.text}
  </a>
);

export default TextLink;
