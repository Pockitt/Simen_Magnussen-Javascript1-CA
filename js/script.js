import { newReleases, onSale, favorites } from "./data/filterData.js";
import { renderHome, parentNewReleases, parentOnSale, parentFanFavorites } from "./pages/home.js";
import { renderCollection, heading1, heading2, heading3, parentMostPlayed, parentNewGames, allGames } from "./pages/collection.js";
import { fifteen } from "./data/filterData.js";
import { heading1Home, heading2Home, heading3Home } from "./pages/home.js";
import { renderGame } from "./render/renderGame.js";
import { url } from "./data/constant.js";
import { getId } from "./data/getID.js";
import { getGames } from "./data/getGames.js";


switch(location.pathname) {
  case "/collection":
    try {
       renderCollection(favorites, newReleases, fifteen, parentMostPlayed, parentNewGames, allGames, heading1, heading2, heading3)

    } catch (error) {
      alert(`An error has occured. Details: ${error}`);
    }
    break;

  case "/product/gears-of-war-3.html":
    try {
        const id = getId();
        const newURL = url + "/" + id;
        const title = await getGames(newURL);
        renderGame(title);

    } catch(error) {
      alert(`An error has occured. Details: ${error}`);
    }

    break;
  default:
     try {
        renderHome(newReleases, onSale, favorites, parentNewReleases, parentOnSale, parentFanFavorites, heading1Home, heading2Home, heading3Home);
     } catch(error) {
        alert(`An error has occured. Details: ${error}`);
     }
}

// Martin Krüger made this in a class session 
// export const cart = {
//   items: [],
//   addToCart: function (product) {
//     console.log(product);
//     this.items.push(product);
//   },
//   clearCart: function () {
    
//   },
//   printItems: function () {
//     console.log(this.items);
//   },
// };
