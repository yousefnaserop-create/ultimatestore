"use strict";

/* =====================================
   GAMES DATABASE
===================================== */

const games = [
  {id:1,name:"Grand Theft Auto V",category:"Action",price:850,app:271590},
  {id:2,name:"Red Dead Redemption 2",category:"Adventure",price:1200,app:1174180},
  {id:3,name:"Cyberpunk 2077",category:"RPG",price:1100,app:1091500},
  {id:4,name:"The Witcher 3",category:"RPG",price:650,app:292030},
  {id:5,name:"Elden Ring",category:"RPG",price:1450,app:1245620},
  {id:6,name:"God of War",category:"Action",price:950,app:1593500},
  {id:7,name:"Hogwarts Legacy",category:"Adventure",price:1150,app:990080},
  {id:8,name:"Forza Horizon 5",category:"Racing",price:1250,app:1551360},
  {id:9,name:"EA SPORTS FC 25",category:"Sports",price:1400,app:2195250},
  {id:10,name:"Call of Duty MW III",category:"Shooter",price:1500,app:2519060},
  {id:11,name:"Counter-Strike 2",category:"Shooter",price:0,app:730},
  {id:12,name:"PUBG Battlegrounds",category:"Shooter",price:400,app:578080},
  {id:13,name:"Minecraft",category:"Adventure",price:700,app:1672970},
  {id:14,name:"Dying Light 2",category:"Action",price:900,app:534380},
  {id:15,name:"Resident Evil 4",category:"Action",price:1000,app:2050650},
  {id:16,name:"Resident Evil Village",category:"Action",price:750,app:1196590},
  {id:17,name:"Assassin's Creed Valhalla",category:"Adventure",price:1050,app:2208920},
  {id:18,name:"Assassin's Creed Odyssey",category:"Adventure",price:800,app:812140},
  {id:19,name:"Far Cry 6",category:"Action",price:950,app:2369390},
  {id:20,name:"Watch Dogs Legion",category:"Action",price:700,app:2239550},
  {id:21,name:"Marvel's Spider-Man",category:"Action",price:1300,app:1817070},
  {id:22,name:"Spider-Man Miles Morales",category:"Action",price:950,app:1817190},
  {id:23,name:"Horizon Zero Dawn",category:"Adventure",price:850,app:1151640},
  {id:24,name:"Horizon Forbidden West",category:"Adventure",price:1400,app:2420110},
  {id:25,name:"Ghost of Tsushima",category:"Adventure",price:1350,app:2215430},
  {id:26,name:"Sekiro",category:"Action",price:1050,app:814380},
  {id:27,name:"Dark Souls III",category:"RPG",price:850,app:374320},
  {id:28,name:"Baldur's Gate 3",category:"RPG",price:1600,app:1086940},
  {id:29,name:"Diablo IV",category:"RPG",price:1250,app:2344520},
  {id:30,name:"Borderlands 3",category:"Shooter",price:650,app:397540},
  {id:31,name:"DOOM Eternal",category:"Shooter",price:700,app:782330},
  {id:32,name:"Metro Exodus",category:"Shooter",price:500,app:412020},
  {id:33,name:"The Last of Us Part I",category:"Adventure",price:1450,app:1888930},
  {id:34,name:"Uncharted Legacy",category:"Adventure",price:1000,app:1659420},
  {id:35,name:"Need for Speed Heat",category:"Racing",price:600,app:1222680},
  {id:36,name:"Need for Speed Unbound",category:"Racing",price:950,app:1846380},
  {id:37,name:"Assetto Corsa",category:"Racing",price:350,app:244210},
  {id:38,name:"F1 24",category:"Racing",price:1100,app:2488620},
  {id:39,name:"Tekken 8",category:"Action",price:1300,app:1778820},
  {id:40,name:"Mortal Kombat 1",category:"Action",price:1150,app:1971870},
  {id:41,name:"Street Fighter 6",category:"Action",price:1200,app:1364780},
  {id:42,name:"It Takes Two",category:"Adventure",price:500,app:1426210},
  {id:43,name:"Sea of Thieves",category:"Adventure",price:750,app:1172620},
  {id:44,name:"The Forest",category:"Adventure",price:300,app:242760},
  {id:45,name:"Palworld",category:"Adventure",price:650,app:1623730}
];

/* =====================================
   DIGITAL PRODUCTS
   Image URLs are actual image assets.
===================================== */

const giftCards = [
  {
    id:"steam",
    name:"Steam Wallet",
    description:"Steam digital gift card",
    price:500,
    image:"https://cdn.simpleicons.org/steam/FFFFFF"
  },
  {
    id:"playstation",
    name:"PlayStation Card",
    description:"PlayStation Store credit",
    price:700,
    image:"https://cdn.simpleicons.org/playstation/FFFFFF"
  },
  {
    id:"xbox",
    name:"Xbox Gift Card",
    description:"Xbox digital wallet",
    price:600,
    image:"https://cdn.simpleicons.org/xbox/FFFFFF"
  },
  {
    id:"googleplay",
    name:"Google Play",
    description:"Google Play gift card",
    price:300,
    image:"https://cdn.simpleicons.org/googleplay/FFFFFF"
  },
  {
    id:"apple",
    name:"Apple Gift Card",
    description:"Apple Store credit",
    price:500,
    image:"https://cdn.simpleicons.org/apple/FFFFFF"
  }
];

const topups = [
  {
    id:"pubg",
    name:"PUBG Mobile UC",
    description:"PUBG Mobile currency",
    price:250,
    image:"https://cdn.simpleicons.org/pubg/FFFFFF"
  },
  {
    id:"valorant",
    name:"Valorant Points",
    description:"Valorant digital points",
    price:350,
    image:"https://cdn.simpleicons.org/valorant/FFFFFF"
  },
  {
    id:"freefire",
    name:"Free Fire Diamonds",
    description:"Free Fire game currency",
    price:200,
    image:"https://cdn.simpleicons.org/garena/FFFFFF"
  },
  {
    id:"fortnite",
    name:"Fortnite V-Bucks",
    description:"Fortnite game currency",
    price:400,
    image:"https://cdn.simpleicons.org/fortnite/FFFFFF"
  },
  {
    id:"efootball",
    name:"eFootball Coins",
    description:"eFootball game currency",
    price:180,
    image:"https://cdn.simpleicons.org/konami/FFFFFF"
  }
];

const programs = [
  {
    id:"netflix",
    name:"Netflix",
    description:"Streaming subscription",
    price:250,
    image:"https://cdn.simpleicons.org/netflix/FFFFFF"
  },
  {
    id:"spotify",
    name:"Spotify Premium",
    description:"Music subscription",
    price:150,
    image:"https://cdn.simpleicons.org/spotify/FFFFFF"
  },
  {
    id:"discord",
    name:"Discord Nitro",
    description:"Discord membership",
    price:300,
    image:"https://cdn.simpleicons.org/discord/FFFFFF"
  },
  {
    id:"gamepass",
    name:"Xbox Game Pass",
    description:"Gaming membership",
    price:450,
    image:"https://cdn.simpleicons.org/xbox/FFFFFF"
  },
  {
    id:"psplus",
    name:"PlayStation Plus",
    description:"PlayStation membership",
    price:550,
    image:"https://cdn.simpleicons.org/playstation/FFFFFF"
  }
];

/* =====================================
   ELEMENTS
===================================== */

const gamesGrid = document.getElementById("gamesGrid");
const giftGrid = document.getElementById("giftGrid");
const topupGrid = document.getElementById("topupGrid");
const programGrid = document.getElementById("programGrid");

const searchInput = document.getElementById("searchInput");
const searchBox = document.getElementById("searchBox");

const productModal = document.getElementById("productModal");
const productDetails = document.getElementById("productDetails");

const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");

let selectedCategory = "All";
let cart = [];

/* =====================================
   HELPERS
===================================== */

function formatPrice(price) {
  if (price === 0) return "FREE";

  return price.toLocaleString("en-US") + " EGP";
}

function gameImage(appId) {
  return "https://cdn.cloudflare.steamstatic.com/steam/apps/" +
    appId + "/header.jpg";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

function allDigitalProducts() {
  return [...giftCards, ...topups, ...programs];
}

function getProduct(id) {
  return allDigitalProducts().find(function (item) {
    return item.id === id;
  });
}

function getGame(id) {
  return games.find(function (item) {
    return item.id === Number(id);
  });
}

/* =====================================
   GAME CARDS
===================================== */

function createGameCard(game) {
  return `
    <article class="game-card" data-game-card="${game.id}">

      <div class="game-image">
        <img
          src="${gameImage(game.app)}"
          alt="${game.name}"
          loading="lazy"
          onerror="this.onerror=null;this.style.visibility='hidden';"
        >
      </div>

      <div class="game-info">
        <h3>${game.name}</h3>

        <div class="game-meta">
          <span class="game-category">${game.category} · PC</span>
          <span class="game-price">${formatPrice(game.price)}</span>
        </div>

        <div class="game-actions">
          <button class="details-button" data-details="${game.id}">
            Details
          </button>

          <button class="add-button" data-add-game="${game.id}">
            + Add
          </button>
        </div>
      </div>

    </article>
  `;
}

function renderGames() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredGames = games.filter(function (game) {
    const categoryMatches =
      selectedCategory === "All" ||
      game.category === selectedCategory;

    const searchMatches =
      game.name.toLowerCase().includes(searchText);

    return categoryMatches && searchMatches;
  });

  gamesGrid.innerHTML = filteredGames.map(createGameCard).join("");

  document.getElementById("emptyGames").style.display =
    filteredGames.length ? "none" : "block";
}

/* =====================================
   DIGITAL PRODUCT CARDS
===================================== */

function createProductCard(product) {
  return `
    <article class="product-card">

      <div class="product-image-area">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('image-failed');"
        >
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="product-bottom">
          <strong>${formatPrice(product.price)}</strong>

          <button data-add-product="${product.id}">
            + Add
          </button>
        </div>
      </div>

    </article>
  `;
}

function renderDigitalProducts() {
  giftGrid.innerHTML = giftCards.map(createProductCard).join("");
  topupGrid.innerHTML = topups.map(createProductCard).join("");
  programGrid.innerHTML = programs.map(createProductCard).join("");
}

/* =====================================
   FILTERS
===================================== */

function setupFilters() {
  const filters = document.getElementById("filters");

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("[data-filter]");

    if (!button) return;

    selectedCategory = button.dataset.filter;

    filters.querySelectorAll(".filter").forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderGames();
  });
}

/* =====================================
   SEARCH
===================================== */

function setupSearch() {
  document.getElementById("searchToggle").addEventListener("click", function () {
    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
      searchInput.focus();

      document.getElementById("games").scrollIntoView({
        behavior: "smooth"
      });
    }
  });

  searchInput.addEventListener("input", renderGames);
}

/* =====================================
   PRODUCT DETAILS
===================================== */

function openGameDetails(id) {
  const game = getGame(id);

  if (!game) return;

  productDetails.innerHTML = `
    <img
      class="modal-product-image"
      src="${gameImage(game.app)}"
      alt="${game.name}"
      onerror="this.onerror=null;this.style.visibility='hidden';"
    >

    <span class="eyebrow">${game.category} / PC GAME</span>

    <h2>${game.name}</h2>

    <p>
      اكتشف اللعبة وأضفها إلى مجموعة ألعابك.
      هذه صفحة تفاصيل تجريبية داخل المتجر.
    </p>

    <span class="modal-price">${formatPrice(game.price)}</span>

    <button class="modal-add" id="modalAddButton">
      ADD TO CART
    </button>
  `;

  productModal.classList.add("show");

  document.getElementById("modalAddButton").addEventListener("click", function () {
    addGameToCart(game.id);
    productModal.classList.remove("show");
  });
}

/* =====================================
   CART
===================================== */

function addGameToCart(id) {
  const game = getGame(id);

  if (!game) return;

  const itemId = "game-" + game.id;

  const existing = cart.find(function (item) {
    return item.id === itemId;
  });

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: itemId,
      name: game.name,
      price: game.price,
      image: gameImage(game.app),
      quantity: 1
    });
  }

  updateCart();
  showToast("تمت إضافة اللعبة إلى السلة");
}

function addDigitalProduct(id) {
  const product = getProduct(id);

  if (!product) return;

  const existing = cart.find(function (item) {
    return item.id === product.id;
  });

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  updateCart();
  showToast("تمت إضافة المنتج إلى السلة");
}

function removeFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id !== id;
  });

  updateCart();
}

function updateCart() {
  const count = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  const total = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  cartCount.textContent = count;
  cartTotal.textContent = formatPrice(total);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        🛒<br><br>
        سلة المشتريات فارغة
      </div>
    `;

    return;
  }

  cartItems.innerHTML = cart.map(function (item) {
    return `
      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="this.onerror=null;this.style.visibility='hidden';"
        >

        <div class="cart-item-info">
          <b>${item.name}</b>
          <small>
            ${formatPrice(item.price)} × ${item.quantity}
          </small>
        </div>

        <button class="remove-button" data-remove="${item.id}">
          حذف
        </button>

      </div>
    `;
  }).join("");
}

/* =====================================
   CART EVENTS
===================================== */

function setupCart() {
  document.getElementById("cartToggle").addEventListener("click", function () {
    cartModal.classList.add("show");
  });

  document.getElementById("closeCart").addEventListener("click", function () {
    cartModal.classList.remove("show");
  });

  cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
      cartModal.classList.remove("show");
    }
  });

  cartItems.addEventListener("click", function (event) {
    const button = event.target.closest("[data-remove]");

    if (!button) return;

    removeFromCart(button.dataset.remove);
    showToast("تم حذف المنتج");
  });

  document.getElementById("checkoutButton").addEventListener("click", function () {
    if (cart.length === 0) {
      showToast("السلة فارغة");
      return;
    }

    showToast("الدفع غير متصل في النسخة التجريبية");
  });
}

/* =====================================
   PAGE BUTTON EVENTS
===================================== */

function setupPageEvents() {
  document.addEventListener("click", function (event) {

    const addGame = event.target.closest("[data-add-game]");

    if (addGame) {
      event.stopPropagation();
      addGameToCart(addGame.dataset.addGame);
      return;
    }

    const addProduct = event.target.closest("[data-add-product]");

    if (addProduct) {
      addDigitalProduct(addProduct.dataset.addProduct);
      return;
    }

    const details = event.target.closest("[data-details]");

    if (details) {
      openGameDetails(details.dataset.details);
      return;
    }

    const gameCard = event.target.closest("[data-game-card]");

    if (gameCard) {
      openGameDetails(gameCard.dataset.gameCard);
    }
  });

  const featuredButton = document.querySelector("[data-featured]");

  featuredButton.addEventListener("click", function () {
    openGameDetails(featuredButton.dataset.featured);
  });

  document.getElementById("closeProduct").addEventListener("click", function () {
    productModal.classList.remove("show");
  });

  productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
      productModal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      productModal.classList.remove("show");
      cartModal.classList.remove("show");
    }
  });
}

/* =====================================
   START STORE
===================================== */

function startStore() {
  renderGames();
  renderDigitalProducts();

  setupFilters();
  setupSearch();
  setupCart();
  setupPageEvents();

  updateCart();

  console.log("ULTIMATE STORE READY");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startStore, {once:true});
} else {
  startStore();
}