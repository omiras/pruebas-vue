// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const height = ref("");
    const weight = ref("");
    const bmi = ref("");

    const calculate = () => {
      console.log("El valor de height es: ", height.value);
      bmi.value = (weight.value / (height.value / 100) ** 2).toFixed(2);
    };

    return {
      height,
      weight,
      bmi,
      calculate,
    };
  },
}).mount("#app");
