import type { Route } from "./+types/home";
import type { TextLinkProps } from "~/components/TextLink";
import TextLink from "~/components/TextLink";
import TwoColumn from "~/layouts/TwoColumn";
import data from "~/data/index.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Gayle" },
    {
      name: "description",
      content: "Full stack developer and #webperf engineer",
    },
  ];
}

export function links() {
  return [
    {
      rel: "preload",
      href: "/cdn-cgi/image/width=600,height=600,fit=cover,gravity=auto,format=auto/profile.jpg",
      as: "image",
    },
  ];
}

export default function Home() {
  const navList = data.data;
  return (
    <TwoColumn
      navigation={
        <>
          <img
            className="w-full mb-4"
            src="/cdn-cgi/image/width=600,height=600,fit=cover,gravity=auto,format=auto/profile.jpg"
            alt="Daniel Gayle"
            width="600"
            height="600"
          />
          <p>
            <TextLink text="Email me" href="mailto:dangayle@gmail.com" />
          </p>
        </>
      }
      body={
        <>
          <ul className="mb-8">
            {navList.map((link: TextLinkProps) => (
              <li key={link.href} className="mb-4 md:mb-2">
                <TextLink text={link.text} href={link.href} />
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
