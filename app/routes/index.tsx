import type { TextLinkProps } from "~/components/TextLink";
import TextLink from "~/components/TextLink";
import TwoColumn from "~/layouts/TwoColumn";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import data from "~/data/index.json";
import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "https://dangayle.mo.cloudinary.net/profile/IMG_2353.jpg?tx=ar_1:1,c_fill,g_auto:subject,w_responsive",
      as: "image",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  return data;
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Daniel Gayle",
  description: "Full stack developer and #webperf engineer",
});

export default function Index() {
  const { data: navList } = useLoaderData() || [];
  return (
    <TwoColumn
      navigation={
        <>        
          <img className="w-full mb-4" src="https://dangayle.mo.cloudinary.net/profile/IMG_2353.jpg?tx=ar_1:1,c_fill,g_auto:subject,w_responsive" alt="Daniel Gayle" />
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
    ></TwoColumn>
  );
}
