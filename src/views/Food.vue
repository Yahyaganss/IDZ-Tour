<template>
  <div id="Food" style="background-color: #f9fafc">
    <Header />
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active mark"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          class="mark"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          class="mark"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="food-slider">
            <img src="../assets/images/bg-masjid.png" alt="" />
            <div class="text-food-slider">
              <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="food-slider">
            <img src="../assets/images/ampera-night.png" alt="" />
            <div class="text-food-slider">
              <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="food-slider">
            <img src="../assets/images/ampera-night.png" alt="" />
            <div class="text-food-slider">
              <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
    <!-- <div class="food-slider">
      <img src="../assets/images/ampera-night.png" alt="" />
      <div class="text-food-slider">
        <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
      </div>
    </div> -->
    <div class="container-fluid">
      <div class="content-food">
        <h2 class="mt-3">Makanan Khas</h2>
        <h2>Kota Palembang</h2>
        <div class="row" style="margin: 0 0 30px 0">
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row" style="margin: 0 0 30px 0">
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
          <div class="food-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-food-card mx-auto">
                <h4>Pempek</h4>
                <div class="line"></div>
                <p>
                  Pempek merupakan makanan khas kota Palembang yang sangat di
                  minati warga lokal maupun wisatawan...
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "Food",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>