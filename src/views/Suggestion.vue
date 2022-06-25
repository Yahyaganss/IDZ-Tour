<template>
  <div id="Suggestion">
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
                <router-link class="dropdown-item active" to="/saran"
                  >Kritik & Saran</router-link
                >
                <router-link class="dropdown-item" to="/peta"
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
                <router-link class="dropdown-item" to="/makanan-khas-palembang"
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
    <img src="../assets/images/bg-masjid.png" alt="" style="position: absolute; width: 100%; z-index:0; height:90%; opacity:50%;">
    <div class="container-fluid under-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item">Saran & Kritik</li>
      </ol>
      <div class="box-suggest">
        <h3>Layanan Kritik & Saran</h3>
        <hr color="black" style="height: 2px" />
        <div class="form-group">
          <h5>Saran & Kritik</h5>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="12"
            placeholder="Silahkan Masukkan Saran & Kritik Anda..."
          ></textarea>
        </div>
        <div class="col-lg-6">
          <p>Terima Kasih atas laporan anda, kami akan terus memperbaiki keselahan
          kamui dan tetap melakukan pelayan dan menyajikan informasi terbaik
          yang kami dapatkan.</p>
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="form-control btn btn-success rounded float-right submit"
            style="width: 90px"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Suggestion",
  components: {
    Footer,
  },
};
</script>

<style>
</style>
