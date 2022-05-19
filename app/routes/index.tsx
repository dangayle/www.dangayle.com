
import type { TextLinkProps } from "~/components/TextLink";
import TextLink from "~/components/TextLink";
import BaseTemplate from "~/layouts/BaseTemplate";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import data from "~/data/index.json";
import type { MetaFunction } from "@remix-run/react/routeModules";

export const loader: LoaderFunction = async () => {
  return data;
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dan Gayle",
  description: "Full stack developer and #webperf engineer",
});

export default function Index() {
  const {data:navList} = useLoaderData() || [];
  return (
    <BaseTemplate>
      <nav className="text-xl">
        <ul className="mb-8">
          {navList.map((link:TextLinkProps) => (
            <li key={link.href} className="mb-4 md:mb-2">
              <TextLink text={link.text} href={link.href} />
            </li>
          ))}
        </ul>
        <h2 className="font-serif mb-4 text-2xl">Contact</h2>
        <p>
          <TextLink text="Email" href="mailto:dangayle@gmail.com" />
        </p>
      </nav>
    </BaseTemplate>
  );
}
