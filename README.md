# www.dangayle.com

A one-page static site built with [11ty](https://www.11ty.dev/). Cloudflare Pages deploys it from `master`.

- `npm run dev` starts a local server with live reload.
- `npm run build` writes the site to `build/client`.

Edit `src/index.liquid` to change the page. Eleventy copies the files in `public/` to the site root unchanged.
