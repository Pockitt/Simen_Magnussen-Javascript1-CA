export async function getGames (url) {
    
    const response = await fetch (url);
    const games = await response.json();
    return games;

}
