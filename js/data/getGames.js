export async function getGames (url) {
    try {
        const response = await fetch (url);
        if(response.status !== 200) {
            throw(new Error(`Fetch operation failed...`))
        }
        const games = await response.json();
        console.log(games)
        return games;
    } catch(error) {
        alert(`An error has occured. Details: ${error}`);
    }
}