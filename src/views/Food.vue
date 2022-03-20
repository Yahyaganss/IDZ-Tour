<template>
  <div id="Food">
    <Header />
    <!-- <img src="../assets/images/banner-bangunan-sejarah.png" alt="" style="margin-top:120px; width:100%; height:200px">  -->
    <div class="container-fluid under-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item">Ragam Khas</li>
        <li class="breadcrumb-item">Makanan Khas</li>
      </ol>
      <div class="row">
        <div class="col-lg-8">
          <div class="row row-content justify-content-between">
            <div class="col-auto food-image-description">
              <img src="../assets/images/banner1.jpeg" alt="" />
              <div class="food-description mx-auto">
                <h3>odadojadja</h3>
              </div>
            </div>
            <div class="col-auto food-image-description">
              <img src="../assets/images/corona.png" alt="" />
              <div class="food-description mx-auto">
                <h3>odadojadja</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3" style="margin-left: 85px">
          <div class="typical-food">
            <h4 class="text-center">Makanan Khas</h4>
            <hr color="black" style="height: 2px" />
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
            <div class="card-typical-food">
              <div class="row">
                <div class="col-lg-4">
                  <a href=""
                    ><img
                      src="../assets/images/corona.png"
                      alt=""
                      style="width: 90px"
                  /></a>
                </div>
                <div class="col-lg-8 align-self-start">
                  <a href=""
                    ><p>
                      Kasus Covid-19 meningkat, pemerintah menerapkan protokol
                      kesehatan
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <corona-vaksin-full />
    <Footer />
  </div>
</template>

<script>
import CoronaVaksinFull from "../components/CoronaVaksinFull.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "Food",
  components: {
    CoronaVaksinFull,
    Header,
    Footer,
  },
};
</script>

<style>