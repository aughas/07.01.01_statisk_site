window.addEventListener("DOMContentLoaded", initBeer);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function initBeer() {
  fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
    .then((response) => response.json())
    .then((json) => {
      showSingleBeer(json);
    });
}

function showSingleBeer(beer) {
  console.log("beer", beer);

  document.querySelector(".single_beer_info img").src = `https://kea-alt-del.dk/t7/images/webp/640/${beer.id}.webp`;

  document.querySelector("h2").textContent = beer.productdisplayname;

  document.querySelector(".single_beer_describtion").textContent = `${beer.articletype} / ${beer.brandname}`;
  document.querySelector(".price").textContent = `${beer.price} DKK:-`;

  document.querySelector(".list_gender").textContent = beer.gender;
  document.querySelector(".list_season").textContent = beer.season;
  document.querySelector(".list_articletype").textContent = beer.articletype;

  document.querySelector("h1").textContent = beer.brandname;
  document.querySelector(".year").textContent = `Product made in ${beer.productionyear}`;

  document.querySelector(".single_beer_info p").textContent = `Beer by ${beer[0].contributed_by}`;

  console.log("food_pairing", beer[0].food_pairing);

  let foodPairingList = document.querySelector(".single_beer_info ul");
  beer[0].food_pairing.forEach((paring) => {
    const item = document.createElement("li");
    item.textContent = paring;
    foodPairingList.appendChild(item);
  });
}
