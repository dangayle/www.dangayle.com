import type { Route } from "./+types/home";
import type { TextLinkProps } from "~/components/TextLink";
import TextLink from "~/components/TextLink";
import TwoColumn from "~/layouts/TwoColumn";
import data from "~/data/index.json";
import { useEffect } from "react";

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
    // Preload responsive images with srcset
    {
      rel: "preload",
      as: "image",
      href: "/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg",
      imagesrcset:
        "/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 600w, /cdn-cgi/image/width=1200,height=1200,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 1200w",
      imagesizes: "600px",
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
            className="w-full mb-4 grow-on-hover"
            src="/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg"
            srcSet="/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 1x, /cdn-cgi/image/width=1200,height=1200,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 2x"
            alt="Daniel Gayle"
            loading="eager"
            fetchPriority="high"
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
