export default {
  mode: "universal",
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [],
  modules: [
    "@nuxtjs/emotion",
    "@chakra-ui/nuxt",
    "./codesandbox"
  ],

  build: {
    extend(config, ctx) {}
  }
};
