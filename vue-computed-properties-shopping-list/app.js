// Tu código aquí.

import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    // nombre producto
    const productName = ref("");
    // precio producto
    const productPrice = ref("");

    // lista de todos los productos
    const allProducts = ref([]);

    // función que se ejecuta cada vez que hacemos clic en "Añadir producto"
    const addProduct = () => {
      allProducts.value.push({
        name: productName.value,
        price: productPrice.value,
      });

      // limpiar los inputs
      productName.value = "";
      productPrice.value = "";
    };

    // computed property:
    // 1. Son un mecansimo especial que ofrece Vue ( y otro frameworks), para calcular información en función de las variables de estado (setup())
    // 2. Normalmente NO tienen parámetros
    // 3. SIEMPRE tienen que devolver (return) un valor
    // 4. Tienen una sintaxis concreta que hay qué conocer
    const didYouBuyTomatoes = computed(() => {
      return allProducts.value.some((p) => p.name == "tomates");
    });

    return { productName, productPrice, allProducts, addProduct, didYouBuyTomatoes };
  },
}).mount("#app");
