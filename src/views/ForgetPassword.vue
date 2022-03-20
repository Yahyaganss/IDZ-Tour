<template>
  <div id="ForgetPassword">
    <div class="ForgetPassword-card">
        <img src="../assets/logo/logo.png"  style="width:50%; display:block; margin:auto;" alt="">
      <h1 style="margin-top: 30px; text-align: center; font-weight: bolder; font-size:23px; color:white;">Reset Password</h1>
      <form action="#" class="signin-form">
        <div class="form-group mb-3">
          <label class="label" style="color:white; margin-top:30px;" for="name">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Email..."
            required
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="form-control btn btn-primary submit px-3"
            style="background-color:#EC982E; border:none;"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    <img src="../assets/images/bg-masjid.png" style="width:100%; " alt="">
  </div>
</template>

<script>
export default {
  name: "ForgetPassword",
};
</script>

<style>
</style>
