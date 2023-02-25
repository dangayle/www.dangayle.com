export type TextLinkProps = {
  text: string;
  href: string;
};

function TextLink(props: TextLinkProps) {
  return (
    <a href={props.href} className="link text-blue-600 hover:text-black hover:underline">{props.text}</a>
  );
}

export default TextLink;
