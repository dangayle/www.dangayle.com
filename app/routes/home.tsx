import type { Route } from "./+types/home";
import type { TextLinkProps } from "~/components/TextLink";
import TextLink from "~/components/TextLink";
import TwoColumn from "~/layouts/TwoColumn";
import { useLoaderData } from "react-router";
import data from "~/data/index.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Gayle" },
    { name: "description", content: "Full stack developer and #webperf engineer" },
  ];
}

export function links() {
  return [
    {
      rel: "preload",
      href: "https://dangayle.mo.cloudinary.net/profile/IMG_2353.jpg?tx=ar_1:1,c_fill,g_auto:subject,w_responsive",
      as: "image",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  return data;
}

export default function Home() {
  const { data: navList } = useLoaderData<typeof loader>();
  return (
    <TwoColumn
      navigation={
        <>
          <img
            className="w-full mb-4"
            src="https://dangayle.mo.cloudinary.net/profile/IMG_2353.jpg?tx=ar_1:1,c_fill,g_auto:subject,w_responsive"
            alt="Daniel Gayle"
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
