async function getGameHub () {
    const url = "https://api.noroff.dev/api/v1/gamehub";
    const response = await fetch (url);
    const results = await response.json();
    console.log(results);
    return results;
}

let results = await getGameHub ();
console.log(results);



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

function makeHTML() {
   
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

makeHTML();

      

// Template - Product page

{/* `<h1>Gears of War 3</h1>
      <figure>
        <img src="../images/Gears/cover.jpg" />
      </figure>
      <section class="product-page-pics">
        <figure>
          <img
            src="../images/Gears/action1.jpg"
            alt="Gears of war action picture"
          />
        </figure>
        <figure>
          <img src="../images/Gears/action2.jpg" alt="Characters" />
        </figure>
        <figure>
          <img src="../images/Gears/action3.jpg" alt="Chainsaw duel" />
        </figure>
        <figure>
          <img src="../images/Gears/action4.jpg" alt="" />
        </figure>
      </section>
      <p>
        Gears of War 3 is a heart-pounding and action-packed third-person
        shooter that delivers an emotional and thrilling conclusion to the Gears
        of War trilogy. With its intense combat, gripping storyline, impressive
        graphics, and diverse gameplay modes, it is a must-play for fans of the
        franchise and anyone who enjoys a thrilling and immersive gaming
        experience.
      </p>
      <p>
        It is the third installment in the highly popular Gears of War
        franchise, and it continues the thrilling story of humanity's fight for
        survival against the monstrous Locust Horde, a race of underground
        creatures that threaten to wipe out humanity on Sera.
      </p>
      <section class="cta">
        <h2>Buy Gears of War 3</h2>
        <div class="price-and-atc">
          <p>$ 30</p>
          <a href="cart.html"><button class="btn-ok">Add to cart</button></a>
          <button class="wishlist">Wishlist</button>
        </div>
      </section>` */}

      // `<h1>${title}</h1>
      // <figure>
      //   <img src="../images" />
      // </figure>
      // <section class="product-page-pics">
      //   <figure>
      //     <img
      //       src="${results[i].image}"
      //       alt="picture of ${results[i].title} covercover"
      //     />
      //   </figure>
      //   <figure>
      //     <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      //   </figure>
      //   <figure>
      //     <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      //   </figure>
      //   <figure>
      //     <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      //   </figure>
      // </section>
      // <p>
      //   ${results[i].description}
      // </p>
      // <section class="cta">
      //   <h2>Buy ${results[i].title}</h2>
      //   <div class="price-and-atc">
      //     <p>${results[i].price}</p>
      //     <a href="cart.html"><button class="btn-ok">Add to cart</button></a>
      //     <button class="wishlist">Wishlist</button>
      //   </div>
      // </section>` 