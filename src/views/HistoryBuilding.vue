<template>
  <div id="HistoryBuilding">
    <div id="Header">
    <nav class="navbar navbar-expand-lg navbar-light nav-1">
      <div class="container-fluid">
        <div class="dropdown languange ml-5">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style="border-radius: 20px; padding: 7px 25px"
          >
            <i class="fa-solid fa-globe"></i>
            Bahasa Indonesia
          </button>
          <div
            class="dropdown-menu p-0 mt-2 languange-menu"
            style="width: 90%; border-radius: 10px; margin-left: 12px"
            aria-labelledby="dropdownMenuButton"
          >
            <router-link
              class="dropdown-item active indo"
              style="background-color: grey"
              to="/"
              >Bahasa Indonesia</router-link
            >
            <router-link class="dropdown-item inggris" to="/"
              >Bahasa Inggris</router-link
            >
          </div>
        </div>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarText"
        >
          <span
            class="navbar-text"
            style="
              font-weight: bold;
              color: black;
              font-size: 18px;
              font-style: italic;
            "
          >
            Aplikasi Website Resmi Terupdate dan Terpercaya
          </span>
        </div>
        <router-link to="/register">
          <button
            type="button"
            class="btn btn-danger"
            style="border-radius: 20px; padding: 7px 20px; margin-right: 10px"
          >
            Buat Akun
          </button>
        </router-link>
        <router-link to="/login">
          <button
            type="button"
            class="btn btn-primary"
            style="border-radius: 20px; padding: 7px 15px"
          >
            Masuk
          </button>
        </router-link>
      </div>
      <img
        src="../assets/icons/batik.png"
        style="width: 95%; position: absolute; height: 100%; z-index: -1"
        alt=""
      />
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light nav-2 position-fixed">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link to="/">
            <img
              src="../assets/logo/logo.png"
              alt=""
              style="width: 15rem; height: auto"
            />
          </router-link>
          <ul class="navbar-nav mr-auto" style="margin-left: 50px">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/berita">Berita</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Layanan
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/report"
                  >Pengaduan</router-link
                >
                <router-link class="dropdown-item" to="/saran"
                  >Kritik & Saran</router-link
                >
                <router-link class="dropdown-item" to="/peta"
                  >Peta</router-link
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ragam Khas
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/makanan-khas-palembang"
                  >Makanan Khas</router-link
                >
                <router-link class="dropdown-item active" to="/bangunan-sejarah"
                  >Bangunan Sejarah</router-link
                >
                <a class="dropdown-item" href="#">Seni Budaya</a>
              </div>
            </li>
            
          </ul>
          <div class="search">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Pencarian..."
              aria-label="Search"
            />
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
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
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="mark"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="mark"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/maps-1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/maps-1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/maps-1.png" class="d-block w-100" alt="..." />
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