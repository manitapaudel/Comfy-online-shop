import { getStorageItem, setStorageItem } from "../utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { colors, company, featured, image: img, name, price },
    } = product;
    const image = img[0].url;

    return { id, colors, company, featured, image, name, price };
  });
  setStorageItem("store", store);
};

export default setupStore;
