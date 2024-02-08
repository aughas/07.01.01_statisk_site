window.addEventListener("DOMContentLoaded", initClothes);

const params = new URLSearchParams(window.location.search);
const id = params.get("category");

function initClothes() {
  fetch(`https://kea-alt-del.dk/t7/api/products?category=${id}`)
    .then((response) => response.json())
    .then((json) => {
      showCategory(json);
    });
}

function showCategory(clothesJSON) {
  let clothesClone;

  clothesJSON.forEach((clothes) => {
    clothesClone.querySelector("a").href = `https://kea-alt-del.dk/t7/api/products?category=${clothes.id}`;
  });
}
