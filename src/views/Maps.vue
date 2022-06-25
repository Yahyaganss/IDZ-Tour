<template>
  <div id="Maps">
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
                  <router-link class="dropdown-item active" to="/peta"
                    >Peta</router-link
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
    <div class="map mx-auto my-4">
      <div class="map-header row justify-content-between mx-auto">
        <p class="my-auto ml-3">Selasa, 13.00 WIB</p>
        <h4 class="my-auto ml-5">KOTA PALEMBANG</h4>
        <div class="search my-auto mr-1">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Mau jalan kemana hari ini..."
            aria-label="Search"
          />
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="list-map mx-auto mt-5 mb-3">
      <p class="text-center" style="font-size:30px; font-weight:900;">
        Daftar Tempat Wisata Kota Palembang
      </p>
      <div class="row justify-content-between mb-4">
        <div class="card-list-map align-items-center">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
        <div class="card-list-map align-items-center">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
      </div>
      <div class="row justify-content-between mb-4">
        <div class="card-list-map align-items-center">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
        <div class="card-list-map align-items-center">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
      </div>
      <div class="row justify-content-between mb-4">
        <div class="card-list-map align-items-center">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
        <div class="card-list-map">
          <h2>MONPERA</h2>
          <p>
            Bangunan berdiri pada tahun 1900 dan menjadi salah satu bangunan
            bersejrah di kota palembang
          </p>
          <p class="mt-3">Alamat :</p>
          <p>Jl. swadaya block c nomor 13 Palembang</p>
          <p class="mt-3">Jam Buka : 07.00 - 13.00</p>
          <button
            type="button"
            class="btn btn-primary float-right mb-3"
            style="
              border-radius: 4px;
              padding: 7px 20px;
              box-shadow: 0 4px 4px grey;
              background-color: #3748e2;
            "
          >
            Booking Sekarang
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <button
          type="button"
          class="btn btn-primary mr-2"
          style="
            border-radius: 4px;
            padding: 7px 20px;
            box-shadow: 0 4px 4px grey;
            background-color: #3748e2;
          "
        >
          1
        </button>
        <button
          type="button"
          class="btn btn-primary mr-2"
          style="
            border-radius: 4px;
            padding: 7px 20px;
            box-shadow: 0 4px 4px grey;
            background-color: #3748e2;
          "
        >
          2
        </button>
        <button
          type="button"
          class="btn btn-primary mr-2"
          style="
            border-radius: 4px;
            padding: 7px 20px;
            box-shadow: 0 4px 4px grey;
            background-color: #3748e2;
          "
        >
          3
        </button>
        <button
          type="button"
          class="btn btn-primary"
          style="
            border-radius: 4px;
            padding: 7px 20px;
            box-shadow: 0 4px 4px grey;
            background-color: #3748e2;
          "
        >
          4
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Maps",
  components: {
    Header,
    Footer,
  },
};

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header-fixed");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
</script>

<style>
</style>