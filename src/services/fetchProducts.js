import { allProductsURL } from "./utils.js";

const fetchProducts = async () => {
    try {
        const response = await fetch(allProductsURL);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default fetchProducts;
