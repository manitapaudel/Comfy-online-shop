const allProductsURL = "https://www.course-api.com/javascript-store-products";
const singleProductsURL =
  "https://www.course-api.com/javascript-store-single-product";

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const getStorageItem = (item) => {
  const storageItem = localStorage.getItem(item);
  if (storageItem) {
    return JSON.parse(storageItem);
  } else {
    return [];
  }
};

export { allProductsURL, singleProductsURL, setStorageItem, getStorageItem };
