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
      href: "/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg",
      as: "image",
    },
  ];
}

export function HydrateFallback() {
  // Static content that matches the layout while JS loads
  const placeholderWidths = ['75%', '60%', '80%', '70%', '65%'];
  
  return (
    <TwoColumn
      navigation={
        <>
          <div className="w-full aspect-square mb-4 bg-gray-100 animate-pulse rounded" />
          <p>
            <span className="text-blue-600 underline">Email me</span>
          </p>
        </>
      }
      body={
        <>
          <ul className="mb-8">
            {/* Show placeholder items while loading */}
            {placeholderWidths.map((width, i) => (
              <li key={i} className="mb-4 md:mb-2">
                <span className="inline-block h-5 bg-gray-100 animate-pulse rounded" style={{ width }} />
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}

export default function Home() {
  const navList = data.data;
  return (
    <TwoColumn
      navigation={
        <>
          <picture>
            <source
              srcSet="/cdn-cgi/image/width=300,height=300,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 1x, /cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 2x"
              media="(max-width: 768px)"
            />
            <img
              className="w-full mb-4"
              src="/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg"
              srcSet="/cdn-cgi/image/width=600,height=600,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 1x, /cdn-cgi/image/width=1200,height=1200,fit=cover,gravity=face,format=auto,quality=85/profile.jpg 2x"
              alt="Daniel Gayle"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="600"
            />
          </picture>
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
