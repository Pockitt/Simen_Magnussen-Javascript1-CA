// Template - Home/Store product display

{/* <div class="card">
        <figure>
          <a href="product/gears-of-war-3.html">
            <img src="images/Hunt/cover.jpg" alt="picture of Hunt:Showdown" />
          </a>
        </figure>
        <div class="card-details">
          <h3>Hunt:Showdown</h3>
          <div class="card-images">
            <figure>
              <img
                class="card-images"
                src="images/Hunt/cover.jpg"
                alt="picture of Hunt:Showdown"
              />
            </figure>
            <figure>
              <img
                class="card-images"
                src="images/Hunt/cover.jpg"
                alt="picture of Hunt:Showdown"
              />
            </figure>
            <figure>
              <img
                class="card-images"
                src="images/Hunt/cover.jpg"
                alt="picture of Hunt:Showdown"
              />
            </figure>
            <figure>
              <img
                class="card-images"
                src="images/Hunt/cover.jpg"
                alt="picture of Hunt:Showdown"
              />
            </figure>
          </div>
          <div class="card-price">$ 35</div>
        </div>
      </div> */}


export function makeGameCards() {
   
    const gameCard = document.querySelector("main")
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
      gameCard.innerHTML += ` <div class="card">
      <figure>
        <a href="">
          <img src="${results[i].image}" alt="picture of ${results[i].title}cover" />
        </a>
      </figure>
      <div class="card-details">
        <h3 class="cardGameTitle">${results[i].title}</h3>
        <div class="card-images">
          <figure>
            <img
              class="card-images"
              src="${results[i].image}"
              alt="picture of ${results[i].title}cover"
               />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${results[i].image}"
              alt="picture of ${results[i].title}cover"
             />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${results[i].image}"
              alt="picture of ${results[i].title}cover"
             />
          </figure>
          <figure>
            <img
              class="card-images"
              src="${results[i].image}"
              alt="picture of ${results[i].title}cover"
             />
          </figure>
        </div>
        <div class="card-price>
            <p>"${results[i].price}"</p>
        </div>
      </div>
    </div> `
    }
  }
 
 makeGameCards();