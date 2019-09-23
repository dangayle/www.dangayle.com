const withCSS = require('@zeit/next-css')
const withPurgeCss = require("next-purgecss");

class TailwindExtractor {
    static extract(content) {
        return content.match(/[\w-/:]+(?<!:)/g) || [];
    }
}
module.exports = withPurgeCss(withCSS({
    plugins: [
        ["styled-jsx/babel", {
            plugins: [
                [
                    "styled-jsx-plugin-postcss",
                    {
                        path: "./postcss.config.js"
                    }
                ]
            ]
        }]
    ],
    purgeCss: {
        extractors: [{
            extractor: TailwindExtractor,
            extensions: ["html", "js", "jsx", "tsx", "css"]
        }]
    },
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]"
    }
}));