export const parentMostPlayed = document.querySelector(".most-played-container");

export const parentNewGames = document.querySelector(".new-games-container");

export const allGames = document.querySelector(".all-games")


export const heading1 = `<h2>Most Played</h2>
                          <div class="collection-games-pics"></div>`
export const heading2 = `<h2>New Games</h2>
                          <div class="collection-games-pics"></div>`
export const heading3 = `<div class="gray-bar all-games">
                  <h3>All Games (15)</h3>
<input name="search" type="text" placeholder="Search..." class="search" />
</div>
<div class="collection-all-games-pics"></div>`

export function createHTML(data, parent, heading) {
  parent.innerHTML = "";
  parent.innerHTML = heading;
  for (let i = 0; i < data.length; i++) {
    parent.innerHTML += `<img src="${data[i].image}" alt="Picture of ${data[i].title} cover">`;
  }
  
}

export function renderCollection(data1, data2, data3, parent1, parent2, parent3, heading1, heading2, heading3) {
  createHTML(data1, parent1, heading1);
  createHTML(data2, parent2, heading2);
  createHTML(data3, parent3, heading3);
}
