import { getStorageItem } from "../utils.js"

const store = getStorageItem("store");
const findStoreItem = (id) => {
    const item = store.find((item) => item.id === id);
    return item;
}

export default findStoreItem;