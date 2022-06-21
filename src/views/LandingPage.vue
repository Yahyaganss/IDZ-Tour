<template>
  <div id="LandingPage" style="background-color: #f9fafc">
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
        style="width: 90%; position: absolute; height: 100%; z-index: -1"
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
            <li class="nav-item active">
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
                <a class="dropdown-item" href="#">Kritik & Saran</a>
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
          <div class="home-slider">
            <img src="../assets/images/bg-masjid.png" alt="" />
            <div class="text-home-slider">
              <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="home-slider">
            <img src="../assets/images/ampera-night.png" alt="" />
            <div class="text-home-slider">
              <h1>MARILAH KITA JAGA BERSAMA!!!</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="home-slider">
            <img src="../assets/images/ampera-night.png" alt="" />
            <div class="text-home-slider">
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
    <center>
      <div
        id="carouselExampleCaptions"
        class="carousel slide slider"
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
              <p>
                Some representative placeholder content for the second slide.
              </p>
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
              <p>
                Some representative placeholder content for the third slide.
              </p>
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
    </center>
    <h3 style="margin-top: 40px; margin-left: 35px">Berita Terbaru</h3>
    <div class="container-fluid" style="width: 100%; margin: auto">
      <!-- <ul id="autoWidth" class="cs-hidden" style="left: 0; margin-left: -50px">
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
        <li class="item-a">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <router-link to="/berita">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </router-link>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </li>
      </ul> -->
      <div class="row">
        <div class="card">
          <router-link to="/berita">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
          </router-link>
          <div class="card-body">
            <router-link to="/berita">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </router-link>
            <p class="date">Kamis, 03 Maret 2022</p>
          </div>
        </div>
        <router-link to="/berita">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </router-link>
        <router-link to="/berita">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </router-link>
        <router-link to="/berita">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </router-link>
        <router-link to="/berita">
          <div class="card">
            <img
              src="../assets/images/corona.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p class="date">Kamis, 03 Maret 2022</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="galery">
      <img
        src="../assets/images/ampera-night.png"
        alt=""
        style="
          width: 100%;
          position: absolute;
          left: 0;
          height: 90%;
          margin-top: -25px;
        "
      />
      <h3>Galeri Foto</h3>
      <div class="row">
        <div class="col-lg-6 left">
          <div
          id="carousel-1"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <img
                data-target="#carousel-1"
                data-slide-to="0"
                class="active"
                src="../assets/images/corona.png"
                style="margin-left: -20px"
              />
            <img
                data-target="#carousel-1"
                data-slide-to="1"
                src="../assets/images/corona.png"
                alt="#"
                style="margin-left: 130px"
              />
            <img
                data-target="#carousel-1"
                data-slide-to="2"
                src="../assets/images/corona.png"
                alt="#"
                style="margin-left: 280px"
              />
            <img
                data-target="#carousel-1"
                data-slide-to="3"
                src="../assets/images/corona.png"
                alt="#"
                style="margin-left: 430px"
              />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active card-up">
                <img
                  src="../assets/images/banner1.jpeg"
                  class="d-block w-100"
                />
                <div class="desc-image">
                  <h3>odjajdaojd</h3>
                </div>
              </div>
              <div class="carousel-item card-up">
                <img
                  src="../assets/images/banner1.jpeg"
                  class="d-block w-100"
                />
                <div class="desc-image">
                  <h3>odjajdaojd</h3>
                </div>
              </div>
              <div class="carousel-item card-up">
                <img
                  src="../assets/images/banner1.jpeg"
                  class="d-block w-100"
                />
                <div class="desc-image">
                  <h3>odjajdaojd</h3>
                </div>
              </div>
              <div class="carousel-item card-up">
                <img
                  src="../assets/images/banner1.jpeg"
                  class="d-block w-100"
                />
                <div class="desc-image">
                  <h3>odjajdaojd</h3>
                </div>
              </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carousel-1"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carousel-1"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
        </div>
        <div class="col-lg-6 right">
          <h3>#PeduliLingkungan</h3>
          <img src="../assets/images/banner1.jpeg" alt="" />
          <div class="desc-pedulilingkungan">
            <h3>dojaodjdaadfa-flip-horizontal</h3>
          </div>
        </div>
      </div>
    </div>
    <corona-vaksin-full style="margin-top: 100px" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import CoronaVaksinFull from "../components/CoronaVaksinFull.vue";
import axios from "axios";

export default {
  name: "LandingPage",
  components: {
    Footer,
    CoronaVaksinFull,
  },
  async created() {
    const { data } = await axios.get("https://covidtracking.com/api/us/daily");
    console.log(data);
  },
};

window.addEventListener("scroll", function () {
  let header = document.querySelector(".nav-2");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

// $(document).ready(function () {
//   $("#autoWidth").lightSlider({
//     autoWidth: true,
//     loop: false,
//     onSliderLoad: function () {
//       $("#autoWidth").removeClass("cs-hidden");
//     },
//   });
// });
</script>
