<template>
  <section class="upcoming">
    <div class="container">

      <div class="flex-wrapper">

        <div class="title-wrapper">
          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Upcoming Movies</h2>
        </div>

        <ul class="filter-list">

          <li>
            <button class="filter-btn">Movies</button>
          </li>

          <li>
            <button class="filter-btn">TV Shows</button>
          </li>

          <li>
            <button class="filter-btn">Anime</button>
          </li>

        </ul>

      </div>

      <ul class="movies-list  has-scrollbar">

        <li>
          <div class="movie-card">

            <a href="./movie-details.html">
              <figure class="card-banner">
                <img src="./assets/images/upcoming-1.png" alt="The Northman movie poster">
              </figure>
            </a>

            <div class="title-wrapper">
              <a href="./movie-details.html">
                <h3 class="card-title">The Northman</h3>
              </a>

              <time datetime="2022">2022</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">HD</div>

              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT137M">137 min</time>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>8.5</data>
              </div>
            </div>

          </div>
        </li>

        <li>
          <div class="movie-card">

            <a href="./movie-details.html">
              <figure class="card-banner">
                <img src="./assets/images/upcoming-2.png"
                  alt="Doctor Strange in the Multiverse of Madness movie poster">
              </figure>
            </a>

            <div class="title-wrapper">
              <a href="./movie-details.html">
                <h3 class="card-title">Doctor Strange in the Multiverse of Madness</h3>
              </a>

              <time datetime="2022">2022</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">4K</div>

              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT126M">126 min</time>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>NR</data>
              </div>
            </div>

          </div>
        </li>

        <li>
          <div class="movie-card">

            <a href="./movie-details.html">
              <figure class="card-banner">
                <img src="./assets/images/upcoming-3.png" alt="Memory movie poster">
              </figure>
            </a>

            <div class="title-wrapper">
              <a href="./movie-details.html">
                <h3 class="card-title">Memory</h3>
              </a>

              <time datetime="2022">2022</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">2K</div>

              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="">N/A</time>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>NR</data>
              </div>
            </div>

          </div>
        </li>

        <li>
          <div class="movie-card">

            <a href="./movie-details.html">
              <figure class="card-banner">
                <img src="./assets/images/upcoming-4.png"
                  alt="The Unbearable Weight of Massive Talent movie poster">
              </figure>
            </a>

            <div class="title-wrapper">
              <a href="./movie-details.html">
                <h3 class="card-title">The Unbearable Weight of Massive Talent</h3>
              </a>

              <time datetime="2022">2022</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">HD</div>

              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT107M">107 min</time>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>NR</data>
              </div>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
</template>