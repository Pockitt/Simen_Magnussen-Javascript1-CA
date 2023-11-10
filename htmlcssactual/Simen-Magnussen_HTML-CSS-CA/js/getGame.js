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


export function makeGamePage () {
    const gamePage = document.querySelector ("main")
    gamePage.innerHTML += `<h1>${results[i].title}</h1>
    <figure>
      <img src="${results[i].image}" />
    </figure>
    <section class="product-page-pics">
      <figure>
        <img
          src="${results[i].image}"
          alt="picture of ${results[i].title} covercover"
        />
      </figure>
      <figure>
        <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      </figure>
      <figure>
        <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      </figure>
      <figure>
        <img src"${results[i].image}" alt="picture of ${results[i].title} cover" />
      </figure>
    </section>
    <p>
      ${results[i].description}
    </p>
    <section class="cta">
      <h2>Buy ${results[i].title}</h2>
      <div class="price-and-atc">
        <p>${results[i].price}</p>
        <a href="cart.html"><button class="btn-ok">Add to cart</button></a>
        <button class="wishlist">Wishlist</button>
      </div>
    </section>` 
}
    