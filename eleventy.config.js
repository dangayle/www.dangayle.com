export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
}

export const config = {
  // Cloudflare Pages deploys build/client (set in the Pages project settings).
  dir: { input: "src", output: "build/client" },
};
