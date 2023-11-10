// Tu código aquí.

import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const videogames = ref(["Zelda", "Kirby Adventure", "Pokemon", "Mario"]);

    return { videogames };
  },
}).mount("#app");
