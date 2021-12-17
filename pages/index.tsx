import React from "react";
import BaseTemplate from "../components/layouts/BaseTemplate";
import TextLink from "../components/TextLink";

type linkType = {
  text: string;
  href: string;
};

const navList: linkType[] = [
  {
    href: "https://www.crateandbarrel.com",
    text: "A Senior Frontend Developer at Crate and Barrel.",
  },
  {
    href: "https://www.helloalpha.com",
    text: "Formerly a software engineer at Alpha Medical.",
  },
  {
    href: "https://www.spokesman.com",
    text: "Formerly an online developer in The Spokesman-Review's newsroom.",
  },
  {
    href: "https://www.twitter.com/dangayle/",
    text: "Sometimes shouts into the wind on Twitter.",
  },
  {
    href: "https://www.linkedin.com/in/dangayle/",
    text: "Keeps his LinkedIn up to date, doesn't know why.",
  },
  {
    href: "https://www.flickr.com/photos/dangayle/",
    text: "Used to do photography until someone stole his camera bag.",
  },
  {
    href: "https://www.instagram.com/melvin_the_fluffy/",
    text: "Misses his squish-faced friend, Melvin the Fluffy. RIP.",
  },
  {
    href: "https://www.instagram.com/fred_phyllis_george/",
    text:
      "Struggles to maintain sanity working from home with two cats and an idiot doodle.",
  },
  {
    href: "https://tailwindcss.com",
    text: "Loves atomic CSS, never wants to go back to the old, dark ways.",
  },
  {
    href: "https://nextjs.org",
    text: "NextJS is pretty sweet.",
  },
];

const Home: React.FunctionComponent = () => (
  <BaseTemplate title="Dan Gayle">
    <nav className="text-xl">
      <ul className="mb-8">
        {navList.map((link) => (
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
      .grow {
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
        transform: scale(0.9);
      }
    `}</style>
  </BaseTemplate>
);

export default Home;
