<template>
  <div id="Header">
    <nav class="navbar navbar-expand-lg navbar-light nav-1 " style="background-color:#faefeb;"> 
      <div class="container-fluid">
        <div class="dropdown">
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
            class="dropdown-menu p-0 mt-2 languange"
            style="width: 90%; border-radius: 10px; margin-left: 12px;"
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
    </nav>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light nav-2">
        <div class="container-fluid">
          <router-link to="/">
            <img
            src="../assets/logo/logo.png"
            style="height: auto; width: 250px"
            alt=""
          />
          </router-link>
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
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light nav-3">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
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
                  <router-link class="dropdown-item" to="/report">Pengaduan</router-link>
                  <router-link class="dropdown-item" to="/saran">Kritik & Saran</router-link>
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
                  <router-link class="dropdown-item" to="/makanan-khas-palembang">Makanan Khas</router-link>
                  <router-link class="dropdown-item" to="/bangunan-sejarah">Bangunan Sejarah</router-link>
                  <a class="dropdown-item" href="#">Seni Budaya</a>
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
                  Profile
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Struktur Pemerintah</a>
                  <router-link class="dropdown-item" to="/sejarah-palembang">Sejarah Palembang</router-link>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="fa-solid fa-circle-exclamation"></i>Update Corona
                  Virus</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img src="../assets/icons/batik.png" style="width:100%; position:absolute; height:100%; top:0; z-index:2;" alt="">
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

window.onscroll = function() {scrollFunction()};
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
