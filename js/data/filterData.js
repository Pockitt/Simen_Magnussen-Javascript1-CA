import { url } from "./constant.js";
import { getGames } from "./getGames.js";

export const games = await getGames (url);


export function getNewReleases(releases) {
  const games = [...releases];
  // for (let i = 0; i < releases.length; i++) {
  //   if (releases[i].released >= 2010) {
  //     games.push(releases[i]);
  //   }
  // }
  return games;
}

export const newReleases = getNewReleases(games);


export function getOnSale(releases) {
  const games = [...releases];
  // for (let i = 0; i < releases.length; i++) {
  //   if (releases[i].onSale) {
  //     games.push(releases[i]);
  //   } 
  // }
  // games.pop();
  // games.pop();
  // games.pop();
  // games.pop();
  return games;
}

export const onSale = getOnSale(games);


export function getFanFavourites(releases) {
  const games = [...releases];
  // for (let i = 0; i < releases.length; i++) {
  //   if (releases[i].favorite) {
  //     games.push(releases[i]);
  //   }
  // }
  return games;
}

export const favorites = getFanFavourites(games);


export function getFifteenGames(releases) {
    const games = [...releases];
    for ( let i = 0; i < releases.length; i++) {
        games.push(releases[i]);
    }
    games.push(releases[0]);
    games.push(releases[1]);
    games.push(releases[2]);
    games.push(releases[3]);
    games.push(releases[4]);
  
    return games;
  }
  
  export const fifteen = getFifteenGames(games);
