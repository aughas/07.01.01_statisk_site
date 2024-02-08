window.addEventListener("DOMContentLoaded", init);

const clothesURL = "https://kea-alt-del.dk/t7/api/products";

let clothesTemplate;
let clothesContainer;

//hämta kod från json url^^^^ (?)
function init() {
  console.log("init");

  clothesTemplate = document.querySelector(".clothes_template");
  console.log("clothesTemplate", clothesTemplate);

  clothesContainer = document.querySelector(".clothes_container");
  console.log("clothes_container", clothesContainer);

  fetch(clothesURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showclothes(json);
    });
}

function showclothes(clothesJSON) {
  let clothesClone;

  clothesJSON.forEach((clothes) => {
    console.log("clothes", clothes);
    clothesClone = clothesTemplate.cloneNode(true).content;
    clothesClone.querySelector(".clothes_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${clothes.id}.webp`;
    clothesClone.querySelector(".clothes_image").alt = `Picture of a ${clothes.name} clothes`;
    clothesClone.querySelector(".discount span").textContent = clothes.discount;

    if (clothes.soldout == 1) {
      clothesClone.querySelector(".clothes_image_container").classList.add("soldOut");
    }

    if (clothes.discount) {
      clothesClone.querySelector(".discount").classList.remove("hide");
    }

    clothesClone.querySelector(".clothes_name").textContent = clothes.productdisplayname;
    clothesClone.querySelector(".clothes_price span").textContent = clothes.price;
    clothesClone.querySelector(".clothes_brandname").textContent = clothes.brandname;
    clothesClone.querySelector("a").href = `produkt.html?id=${clothes.id}`;
    clothesContainer.appendChild(clothesClone);
  });
}
