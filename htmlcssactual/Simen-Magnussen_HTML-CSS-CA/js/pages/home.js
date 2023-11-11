import { renderGames } from "./../render/renderGames.js";

export const parentNewReleases = document.querySelector(".new-releases")
export const parentOnSale = document.querySelector(".on-sale")
export const parentFanFavorites = document.querySelector(".fan-favourites")

export const heading1Home = `<h2>New Releases</h2>`;
export const heading2Home = `<h2>On Sale</h2>`;
export const heading3Home = `<h2>Fan Favourites</h2>`;

export function renderHome(games1, games2, games3, parent1, parent2, parent3, heading1, heading2, heading3) {
  renderGames(games1, parent1, heading1);
  renderGames(games2, parent2, heading2);
  renderGames(games3, parent3, heading3);
} 