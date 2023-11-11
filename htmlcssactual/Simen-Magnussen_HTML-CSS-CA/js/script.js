
// import { renderGames } from "./render/renderGames.js";
// import { renderGame } from "./render/renderGame.js";

if (window.location.pathname === "index.html") {
    getGames();
    renderGames();
}

if (window.location.pathname === "gears-of-war-3.html") {
    getAndRenderGame();
}


// getGames.js

export async function getGames () {
    try {
        const url = "https://api.noroff.dev/api/v1/gamehub";
        const response = await fetch (url);
        const games = await response.json();
        return games;
    }
    catch (error) {
        console.log(error);
    }
}

// renderGames.js
// import { getGames } from "../data/getGames.js"
   
export async function renderGames() {
  const games = await getGames();
  const gameCard = document.querySelector("main")
  for (let i = 0; i < games.length; i++) {
    gameCard.innerHTML += ` <div class="card">
    <figure>
      <a href="./product/gears-of-war-3.html?id=${games[i].id}">
        <img src="${games[i].image}" alt="picture of ${games[i].title} cover" />
      </a>
    </figure>
    <div class="card-details">
      <h3 class="cardGameTitle">${games[i].title}</h3>
      <div class="card-images">
        <figure>
          <img
            class="card-images"
            src="${games[i].image}"
            alt="picture of ${games[i].title} cover"
             />
        </figure>
        <figure>
          <img
            class="card-images"
            src="${games[i].image}"
            alt="picture of ${games[i].title} cover"
           />
        </figure>
        <figure>
          <img
            class="card-images"
            src="${games[i].image}"
            alt="picture of ${games[i].title} cover"
           />
        </figure>
        <figure>
          <img
            class="card-images"
            src="${games[i].image}"
            alt="picture of ${games[i].title} cover"
           />
        </figure>
      </div>
      <div class="card-price">
          <p>$ ${games[i].price}</p>
      </div>
    </div>
  </div> `
  }
}


//getAndRenderGame.js

export async function getAndRenderGame() {
    
    try {
        
        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get("id");

        const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

        const response = await fetch (url);
        const game = await response.json();
        
        renderGame();
    }
    catch (error) {
        console.log(error);
    }
}

function renderGame(game) {
    const gamePage = document.querySelector ("section")
    gamePage.innerHTML += `<h1>${game.title}</h1>
    <figure>
      <img src="${game.image}" />
    </figure>
    <section class="product-page-pics">
      <figure>
        <img
          src="${game.image}"
          alt="picture of ${game.title} covercover"
        />
      </figure>
      <figure>
        <img src"${game.image}" alt="picture of ${game.title} cover" />
      </figure>
      <figure>
        <img src"${game.image}" alt="picture of ${game.title} cover" />
      </figure>
      <figure>
        <img src"${game.image}" alt="picture of ${game.title} cover" />
      </figure>
    </section>
    <p>
      ${game.description}
    </p>
    <section class="cta">
      <h2>Buy ${game.title}</h2>
      <div class="price-and-atc">
        <p>$ ${game.price}</p>
        <a href="cart.html"><button class="btn-ok">Add to cart</button></a>
        <button class="wishlist">Wishlist</button>
      </div>
    </section>` 
  }
  