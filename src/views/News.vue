<template>
  <div id="News">
    <Header />
    <div class="container-fluid under-header">
      <div class="row">
        <div class="col-lg-6">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item">Ragam Khas</li>
            <li class="breadcrumb-item">Bangunan Sejarah</li>
          </ol>
        </div>
        <div class="col-lg-4"></div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <a href="">
            <div class="box-news">
              <div class="row">
                <div class="col-lg-3 img-news">
                  <img
                    class="img-news"
                    src="../assets/images/corona.png"
                    alt=""
                  />
                </div>
                <div class="col-lg-9" style="margin-left: -50px">
                  <div class="title">
                    <a href=""
                      ><h3>
                        Kasus Covid 19 Meningkat Pemerintah Menerapkan Protokol
                        Kesehatan
                      </h3></a
                    >
                  </div>
                  <div class="row date-time justify-content-between">
                    <a href=""
                      ><div class="col-lg-auto date">
                        Kamis, 22 Maret 2025
                      </div></a
                    >
                    <a href=""><div class="col-lg-auto time">02.00 WIB</div></a>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div class="box-news">
            <div class="row">
              <div class="col-lg-3 img-news">
                <img
                  class="img-news"
                  src="../assets/images/corona.png"
                  alt=""
                />
              </div>
              <div class="col-lg-9" style="margin-left: -50px">
                <div class="title">
                  <h3>
                    Kasus Covid 19 Meningkat Pemerintah Menerapkan Protokol
                    Kesehatan
                  </h3>
                </div>
                <div class="row date-time justify-content-between">
                  <div class="col-lg-auto date">Kamis, 22 Maret 2025</div>
                  <div class="col-lg-auto time">02.00 WIB</div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-news">
            <div class="row">
              <div class="col-lg-3 img-news">
                <img
                  class="img-news"
                  src="../assets/images/corona.png"
                  alt=""
                />
              </div>
              <div class="col-lg-9" style="margin-left: -50px">
                <div class="title">
                  <h3>
                    Kasus Covid 19 Meningkat Pemerintah Menerapkan Protokol
                    Kesehatan
                  </h3>
                </div>
                <div class="row date-time justify-content-between">
                  <div class="col-lg-auto date">Kamis, 22 Maret 2025</div>
                  <div class="col-lg-auto time">02.00 WIB</div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-news">
            <div class="row">
              <div class="col-lg-3 img-news">
                <img
                  class="img-news"
                  src="../assets/images/corona.png"
                  alt=""
                />
              </div>
              <div class="col-lg-9" style="margin-left: -50px">
                <div class="title">
                  <h3>
                    Kasus Covid 19 Meningkat Pemerintah Menerapkan Protokol
                    Kesehatan
                  </h3>
                </div>
                <div class="row date-time justify-content-between">
                  <div class="col-lg-auto date">Kamis, 22 Maret 2025</div>
                  <div class="col-lg-auto time">02.00 WIB</div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-news">
            <div class="row">
              <div class="col-lg-3 img-news">
                <img
                  class="img-news"
                  src="../assets/images/corona.png"
                  alt=""
                />
              </div>
              <div class="col-lg-9" style="margin-left: -50px">
                <div class="title">
                  <h3>
                    Kasus Covid 19 Meningkat Pemerintah Menerapkan Protokol
                    Kesehatan
                  </h3>
                </div>
                <div class="row date-time justify-content-between">
                  <div class="col-lg-auto date">Kamis, 22 Maret 2025</div>
                  <div class="col-lg-auto time">02.00 WIB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3" style="margin-left: 85px">
          <side-news />
        </div>
      </div>
    </div>
    <corona-vaksin-full />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SideNews from "../components/SideNews.vue";
import CoronaVaksinFull from "../components/CoronaVaksinFull.vue";

export default {
  name: "News",
  components: {
    Footer,
    CoronaVaksinFull,
    SideNews,
    Header,
  },
};
</script>

<style>
</style>