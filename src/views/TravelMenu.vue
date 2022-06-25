<template>
  <div id="TravelMenu">
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
                  class="nav-link dropdown-toggle active"
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
                    >Maps</router-link
                  >
                  <router-link class="dropdown-item active" to="/menu-travel"
                    >Travel</router-link
                  >
                </div>
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
                  Ragam Khas
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link
                    class="dropdown-item"
                    to="/makanan-khas-palembang"
                    >Makanan Khas</router-link
                  >
                  <router-link class="dropdown-item" to="/bangunan-sejarah"
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
    `
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
          <img
            src="../assets/images/maps-1.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/maps-1.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/maps-1.png"
            class="d-block w-100"
            alt="..."
          />
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
    `
    <div
      id="carouselExampleCaptions"
      class="carousel slide slider mb-5 mx-auto"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/banner1.jpeg" class="banner" alt="#" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Bersama Kita Bisa Hadapi</h5>
            <h3>COVID 19</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/banner1.jpeg"
            class="d-block banner"
            alt="#"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/images/banner1.jpeg"
            class="d-block banner"
            alt="#"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
        style="background-color: transparent; border: 0; position: absolute"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
        style="background-color: transparent; border: 0"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>

    <div class="travel-box mx-auto mb-5 p-5">
      <div class="row mx-auto justify-content-between">
        <img src="../assets/logo/idz-travel.png" style="width: 20%" alt="" />
        <div class="search my-auto">
          <input
            class="form-control"
            type="search"
            placeholder="Mau Liburan Kemana Nih..."
            aria-label="Search"
          />
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
      </div>
      <div class="row mx-auto mt-5">
        <div class="search my-auto">
          <input
            class="form-control"
            type="date"
            placeholder="Mau Liburan Kemana Nih..."
            aria-label="date"
          />
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
        <div class="search my-auto">
          <input
            class="form-control"
            type="search"
            placeholder="Mau Liburan Kemana Nih..."
            aria-label="Search"
          />
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
      </div>
      <div class="row mt-4 justify-content-between">
        <div class="col-lg-4">
          <div class="travel-card">
            <img src="../assets/images/kemaro.png" alt="">
            <div class="desc-travel-card">
              <h4>Paket Pulau Kemaro</h4>
              <h5>Sungai Musi, Palembang</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="travel-card">
            <p>odjaojda</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="travel-card">
            <p>odjaojda</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "TravelMenu",
  components: {
    Footer,
  },
};
</script>

<style>
</style>