export function renderGame(game) {
    const gamePage = document.querySelector ("main");
    const title = document.querySelector ("title");
    gamePage.innerHTML = `<h1>${game.name}</h1>
    <figure>
      <img class="product-page-main-img" src="${game.images[0].src}" />
    </figure>
    <section class="product-page-pics">
      <figure>
        <img
          src="${game.images[0].src}"
          alt="picture of ${game.name} cover"
        />
      </figure>
      <figure>
        <img src="${game.images[0].src}" alt="picture of ${game.name} cover" />
      </figure>
      <figure>
        <img src="${game.images[0].src}" alt="picture of ${game.name} cover" />
      </figure>
      <figure>
        <img src="${game.images[0].src}" alt="picture of ${game.name} cover" />
      </figure>
    </section>
    <p>
      ${game.description}
    </p>
    <section class="cta">
      <h2>Buy ${game.name}</h2>
      <div class="price-and-atc">
        <p>$ ${game.prices.price}</p>
        <a href="cart.html"><button class="btn-ok">Add to cart</button></a>
        <button class="wishlist">Wishlist</button>
      </div>
    </section>
      <section class="product-reviews">
        <div class="gray-bar, review-bar">
          <h3 class="reviews-h">Reviews (467)</h3>
        </div>
        <div class="review">
          <img
            src="../images/profilepic-placeholder.jpg"
            class="profile-picture"
            alt="Profile picture"
          />
          <div class="review-text">
            <h4>xUsernamEx</h4>
            <p>Changed my life, so good, amazing story! 10/10</p>
          </div>
        </div>
        <div class="review">
          <img
            src="../images/profilepic-placeholder.jpg"
            class="profile-picture"
            alt="Profile picture"
          />
          <div class="review-text">
            <h4>Touchgrass420</h4>
            <p>Brutal multiplayer, nice campaign</p>
          </div>
        </div>
        <div class="review">
          <img
            src="../images/profilepic-placeholder.jpg"
            class="profile-picture"
            alt="Profile picture"
          />
          <div class="review-text">
            <h4>Totallynotcheating</h4>
            <p>Beast mode is too good, money well spent</p>
          </div>
        </div>
      </section>
      <section class="sys-req">
        <div class="gray-bar sys-req-bar">
          <h3>System requirements</h3>
        </div>
        <div class="sys">
          <div class="sys-req-li">
            <h4>Minimum</h4>
            <ul>
              <li>Processor: AMD Phenom II X4 960T or Intel i3550</li>
              <li>Graphics: AMD HD 6850 or NVIDIA GeForce GTS 450</li>
              <li>DirectX: Version 11</li>
              <li>Storage: 43 GB available space</li>
            </ul>
          </div>
          <div class="sys-req-li">
            <h4>Recommended</h4>
            <ul>
              <li>Processor: AMD Phenom II X4 960T or Intel i3550</li>
              <li>Graphics: AMD HD 6850 or NVIDIA GeForce GTS 450</li>
              <li>DirectX: Version 11</li>
              <li>Storage: 43 GB available space</li>
            </ul>
          </div>
        </div>
      </section>` 
      title.innerHTML = `Game Hub | ${game.name}`
  }
