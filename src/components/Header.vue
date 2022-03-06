<template>
  <div id="Header">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-white mr-3 ml-4 mt-2">
        <div class="languange">
          <input type="radio" name="radio" id="ID" />
          <label for="ID" class="ID">
            <span>ID</span>
          </label>
          <input type="radio" name="radio" id="EN" />
          <label for="EN" class="EN">
            <span>EN</span>
          </label>
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
              margin-left: 250px;
              font-size: 18px;
              font-style: italic;
            "
          >
            Aplikasi Website Resmi Terupdate dan Terpercaya
          </span>
        </div>
        <div class="search">
          <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Pencarian..."
                aria-label="Search"
              />
              <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>
