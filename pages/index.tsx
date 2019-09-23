import React from "react";
import Head from "next/head";
import BaseTemplate from "../components/layouts/BaseTemplate";
import TextLink from "../components/TextLink";
import "../static/style.css";

type linkType = {
  text: string;
  href: string;
};

const navList: linkType[] = [
  {
    href: "https://www.helloalpha.com",
    text: "Works at Alpha Medical as a web developer."
  },
  {
    href: "https://www.spokesman.com",
    text: "Formerly a web dev at The Spokesman-Review."
  },
  {
    href: "https://www.soundcloud.com/dangayle/",
    text: "Makes bad techno that no one should listen to."
  },
  {
    href: "https://www.twitter.com/dangayle/",
    text: "Shouts into the wind on Twitter."
  },
  {
    href: "https://www.linkedin.com/in/dangayle/",
    text: "Keeps his LinkedIn up to date, doesn't know why."
  },
  {
    href: "https://www.flickr.com/photos/dangayle/",
    text: "Used to do photography until someone stole his camera bag."
  },
  {
    href: "https://www.instagram.com/melvin_the_fluffy/",
    text: "Misses his squish-faced friend, Melvin the Fluffy. RIP."
  },
  {
    href: "https://www.instagram.com/fred_phyllis_george/",
    text:
      "Struggles to maintain sanity working from home with two cats and an idiot doodle."
  },
  {
    href: "http://tachyons.io/",
    text: "Loves atomic CSS, built spokesman.com using Tachyons."
  },
  {
    href: "https://tailwindcss.com",
    text: "Still loves atomic CSS, and uses Tailwind CSS at Alpha Medical."
  },
  {
    href: "https://craftcms.com",
    text: "Learning that CraftCMS makes for a fine headless CMS."
  },
  {
    href: "https://nextjs.org",
    text:
      "Learning that NextJS static html React pages can be fun and profitable."
  }
];

const Home: React.FunctionComponent = () => (
  <BaseTemplate title="Dan Gayle">
    <nav className="text-xl">
      <ul className="mb-8">
        {navList.map(link => (
          <li key={link.href} className="mb-4 md:mb-2 grow">
            <TextLink text={link.text} href={link.href} />
          </li>
        ))}
      </ul>
      <h2 className="font-serif mb-4 text-2xl font-bold">Contact</h2>
      <p className="grow">
        <TextLink text="Email" href="mailto:dangayle@gmail.com" />
      </p>
    </nav>
    <style global={true} jsx={true}>{`
    .grow{
      -moz-osx-font-smoothing: grayscale;
      backface-visibility: hidden;
      transform: translateZ(0);
      transition: transform 0.25s ease-out;
    }

    .grow:hover,
    .grow:focus {
      transform: scale(1.05);
    }

    .grow:active {
      transform: scale(.90);
    }
    `}</style>
  </BaseTemplate>
);

export default Home;
