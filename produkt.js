window.addEventListener("DOMContentLoaded", initClothes);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function initClothes() {
  fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
    .then((response) => response.json())
    .then((json) => {
      showSingleClothes(json);
    });
}

function showSingleClothes(clothes) {
  console.log("clothes", clothes);

  document.querySelector(".single_clothes_info img").src = `https://kea-alt-del.dk/t7/images/webp/640/${clothes.id}.webp`;

  document.querySelector(".single_brand").textContent = clothes.productdisplayname;

  document.querySelector(".single_clothes_describtion").textContent = `${clothes.articletype} / ${clothes.brandname}`;
  document.querySelector(".price").textContent = `${clothes.price} DKK:-`;

  document.querySelector(".list_gender").textContent = clothes.gender;
  document.querySelector(".list_season").textContent = clothes.season;
  document.querySelector(".list_articletype").textContent = clothes.articletype;

  document.querySelector(".single_brand_h1").textContent = clothes.brandname;
  document.querySelector(".year").textContent = `Product made in ${clothes.productionyear}`;
}
