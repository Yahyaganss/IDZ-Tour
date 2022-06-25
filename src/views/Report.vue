<template>
  <div id="Report">
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
                <router-link class="dropdown-item active" to="/report"
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
          <img src="../assets/images/beranda-1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/beranda-1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/images/beranda-1.png" class="d-block w-100" alt="..." />
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
    <div class="container-fluid under-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item">Report</li>
      </ol>
       <div class="box-report">
            <h3>Layanan Pengaduan</h3>
            <hr color="black" style="height: 2px" />
            <form action="#" class="signin-form">
              <div class="form-group mb-3">
                <label class="label" for="name">Nama Pelapor</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nama..."
                  required
                />
              </div>
              <div class="row form-group">
                <div class="col">
                  <label for="exampleFormControlSelect1">Kecamatan</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style="color: grey"
                  >
                    <option disabled selected hidden>*Pilih Kecamatan*</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">Kelurahan</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style="color: grey"
                  >
                    <option disabled selected hidden>*Pilih Kelurahan*</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Alamat</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Alamat..."
                ></textarea>
              </div>
              <div class="row form-group mb-3">
                <div class="col">
                  <label class="label" for="">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email..."
                    required
                    style="margin: 0; width: 100%"
                  />
                </div>
                <div class="col">
                  <label class="label" for="">No. Handphone</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="No Handphone..."
                    required
                    style="margin: 0; width: 100%"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Laporan</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Masukkan Laporan Anda..."
                ></textarea>
              </div>
              <div class="row form-group mb-3">
                <div class="col">
                  <label class="label" for="">Tujuan Laporan Instansi</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style="color: grey"
                  >
                    <option disabled selected hidden>
                      *Pilih Lokasi Kejadian*
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="col">
                  <label class="label" for="">Tanggal Laporan</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="No Handphone..."
                    required
                    style="margin: 0; width: 100%; color: grey"
                  />
                </div>
                <div class="col">
                  <label class="label" for="">Lokasi Kejadian</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Lokasi Kejadian..."
                    required
                    style="margin: 0; width: 100%"
                  />
                </div>
              </div>
              <div class="row form-group mb-3">
                <div class="col">
                  <label class="label" for="name">Kirim Bukti</label>
                  <input
                    type="file"
                    class="form-control mb-3 file-lapor"
                    placeholder="Nama..."
                    required
                  />
                  <label class="label" for="">Tujuan Laporan Instansi</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    style="color: grey; width: 90%"
                  >
                    <option disabled selected hidden>
                      *Pilih Lokasi Kejadian*
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="col">
                  <p>Syarat & Ketentuan Laporan :</p>
                  <p>
                    1. Pengaduan bersifat umum yang berkaitan dengan instansi
                    resmi
                  </p>
                  <p>2. Pengaduan di ketik secara jelas dengan 5W+1H</p>
                  <p>3. Tidak melaporkan berita kebohongan</p>
                  <p>
                    4. Harus melaporkan secara pribadi bukan diperintahkan
                    seseorang
                  </p>
                </div>
              </div>
              <div class="form-group mb-5">
                <button
                  type="submit"
                  class="
                    form-control
                    btn btn-success
                    rounded
                    float-right
                    submit
                    px-3
                  "
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Report",
  components: {
    Footer,
  },
};
</script>

<style>
</style>
