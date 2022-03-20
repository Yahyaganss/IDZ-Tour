<template>
  <div id="Report">
    <Header />
    <div class="container-fluid under-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item">Report</li>
      </ol>
      <div class="row">
        <div class="col-lg-8" style="width: 95%;">
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
          <corona-vaksin-half/>
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
import CoronaVaksinHalf from '../components/CoronaVaksinHalf.vue'
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue'
import SideNews from '../components/SideNews.vue'


export default {
  name: "Report",
  components: {
    CoronaVaksinHalf,
    Header,
    Footer,
    SideNews,
  }
};
</script>

<style>
</style>
