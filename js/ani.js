const navbarNav = document.querySelector(".navbar-nav");
// ketika paw-menu di klik
document.querySelector("#paw-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#paw-menu");
const sb = document.querySelector("#search");
const sc = document.querySelector("#shopping-cart");

//sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

const shoppingCartItems = document.querySelector(".shopping-cart");
const addToCartButtons = document.querySelectorAll(".shopping-cart a, .product-content a");

addToCartButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Simulate adding an item to the cart
    const productName = btn.closest(".product-content")?.querySelector("h3")?.textContent || "Unnamed Product";
    const productPrice = btn.closest(".product-content")?.querySelector(".product-price")?.textContent || "Unknown Price";
    const productImage = btn.closest(".modal-content")?.querySelector("img")?.src || "img/default.png";

    // Create a new cart item
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${productImage}" alt="${productName}" />
      <div class="item-detail">
        <h3>${productName}</h3>
        <div class="item-price">${productPrice}</div>
      </div>
      <i data-feather="trash-2" class="remove-item"></i>
    `;

    // tambah item
    shoppingCartItems.appendChild(cartItem);
    feather.replace();

    const removeItemButton = cartItem.querySelector(".remove-item");
    removeItemButton.onclick = () => {
      cartItem.remove();
    };

    alert(`${productName} udah ada di cart!`);
  };
});