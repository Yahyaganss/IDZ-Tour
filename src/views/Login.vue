<template>
  <div id="Login">
    <div class="login-card">
      <div class="row justify-content-center">
        <h2 style="color: blue; font-weight: bolder; text-shadow: 5px 5px 5px grey">IDZ</h2>
        <h2 style="color: red; font-weight: bolder; text-shadow: 5px 5px 5px grey">NEWS</h2>
      </div>
      <h1 style="margin-top: 30px; text-align: center; font-weight: bolder;">SIGN IN</h1>
      <form action="#" class="signin-form">
        <div class="form-group mb-3">
          <label class="label" for="name">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Email..."
            required
          />
        </div>
        <div class="form-group mb-3">
          <label class="form-label-placeholder" for="password">Password</label>
          <input
            type="password"
            placeholder="Password..."
            class="form-control"
            required
          />
        </div>
        <div class="form-group d-md-flex">
          <div class="w-50 text-left">
            <label class="checkbox-wrap checkbox-primary mb-0"
              >Remember Me
              <input type="checkbox" checked />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="w-50 text-md-right">
            <router-link to="/forget-password">Forgot Password</router-link>
          </div>
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="form-control btn btn-primary rounded submit px-3"
          >
            Sign In
          </button>
        </div>
        <div class="haveAcc">
          <div class="row justify-content-center mt-5">
            <p>Not Have An Account? </p>
            <a href=""><p>Sign Up</p></a>
            <p>Now</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>
