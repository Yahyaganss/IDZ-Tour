<template>
  <div id="HistoryBuilding">
    <Header />
    <img src="../assets/images/beranda-1.png" alt="" style="width: 100%" />
    <div class="container-fluid">
      <div class="content-history-building">
        <h2 class="mt-3">Bangunan Sejarah</h2>
        <h2>Kota Palembang</h2>
        <div class="row" style="margin: 0 0 30px 0">
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 80%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
              <h4>Pempek</h4>
              <div class="line"></div>
              <p>
                Pempek merupakan makanan khas kota Palembang yang sangat di
                minati warga lokal maupun wisatawan...
              </p>
            </div>
            </router-link>
          </div>
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
              <h4>Pempek</h4>
              <div class="line"></div>
              <p>
                Pempek merupakan makanan khas kota Palembang yang sangat di
                minati warga lokal maupun wisatawan...
              </p>
            </div>
            </router-link>
          </div>
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 80%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
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
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
              <h4>Pempek</h4>
              <div class="line"></div>
              <p>
                Pempek merupakan makanan khas kota Palembang yang sangat di
                minati warga lokal maupun wisatawan...
              </p>
            </div>
            </router-link>
          </div>
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
              <h4>Pempek</h4>
              <div class="line"></div>
              <p>
                Pempek merupakan makanan khas kota Palembang yang sangat di
                minati warga lokal maupun wisatawan...
              </p>
            </div>
            </router-link>
          </div>
          <div class="history-building-card">
            <img
              src="../assets/images/corona.png"
              style="width: 100%; height: 75%; z-index: 1"
              alt=""
            />
            <router-link to="/berita">
              <div class="description-history-building-card mx-auto">
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
  name: "HistoryBuilding",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>