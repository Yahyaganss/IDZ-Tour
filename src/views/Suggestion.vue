<template>
  <div id="Suggestion">
    <Header />
    <div class="container-fluid under-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item">Saran & Kritik</li>
      </ol>
      <div class="row">
        <div class="col-lg-8" style="width:95%;">
          <div class="box-suggest">
            <h3>Layanan Kritik & Saran</h3>
            <hr color="black" style="height: 2px" />
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Saran & Kritik</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="12"
                  placeholder="Silahkan Masukkan Saran & Kritik Anda..."
                ></textarea>
              </div>
          </div>
          <corona-vaksin-half />
        </div>
        <div class="col-lg-3" style="margin-left:85px;">
          <side-news/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import CoronaVaksinHalf from "../components/CoronaVaksinHalf.vue";
import Footer from "../components/Footer.vue";
import SideNews from '../components/SideNews.vue';

export default {
  name: "Suggestion",
  components: {
    Header,
    CoronaVaksinHalf,
    Footer,
    SideNews,
  },
};
</script>

<style>
</style>
