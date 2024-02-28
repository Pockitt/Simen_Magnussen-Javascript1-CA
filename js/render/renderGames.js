export async function renderGames(games, parent, heading) {
    parent.innerHTML = "";
    parent.innerHTML = heading;
    for (let i = 0; i < games.length; i++) {
      parent.innerHTML += ` <div class="card">
      <figure>
        <a href="./product/gears-of-war-3.html?id=${games[i].id}">
          <img src="${games[i].images[0].src}" alt="picture of ${games[i].name} cover" />
        </a>
      </figure>
      <div class="card-details">
        <h3 class="cardGameTitle">${games[i].name}</h3>
        <div class="card-images">
          <figure>
            <img
              class="card-images"
              src="${games[i].images[0].src}"
              alt="picture of ${games[i].name} cover"
               />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${games[i].images[0].src}"
              alt="picture of ${games[i].name} cover"
             />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${games[i].images[0].src}"
              alt="picture of ${games[i].name} cover"
             />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${games[i].images[0].src}"
              alt="picture of ${games[i].name} cover"
             />
          </figure>
        </div>
        <div class="card-price">
            <p>$ ${games[i].prices.price}</p>
        </div>
      </div>
    </div> `
    }
  }