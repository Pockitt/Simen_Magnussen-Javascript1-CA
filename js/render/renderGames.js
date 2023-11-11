export async function renderGames(games, parent, heading) {
    parent.innerHTML = "";
    parent.innerHTML = heading;
    for (let i = 0; i < games.length; i++) {
      parent.innerHTML += ` <div class="card">
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