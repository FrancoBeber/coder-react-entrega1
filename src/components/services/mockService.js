import products from "../../data/products";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export function getItemsCategory(categoryID) {
  return new Promise((resolve, reject) => {
    let itemsFound = products.filter((item) => {
      return item.genero === categoryID;
    });
    resolve(itemsFound);
  });
}

export function getSingleItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemEncontrado = products.find((item) => (item.id = parseInt(id)));
      if (itemEncontrado) {
        resolve(itemEncontrado);
      } else {
        reject("Item no encontrado");
      }
      //resolve(products[2]);
    }, 1000);
  });
}

export default getItems;
