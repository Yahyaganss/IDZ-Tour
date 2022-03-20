<template>
  <div id="Register">
    <div class="register-card">
      <div class="row justify-content-center">
        <h2 style="color: blue; font-weight: bolder; text-shadow: 5px 5px 5px grey">IDZ</h2>
        <h2 style="color: red; font-weight: bolder; text-shadow: 5px 5px 5px grey">NEWS</h2>
      </div>
      <h1 style="margin-top: 30px; text-align: center">SIGN UP</h1>
      <form action="#" class="signin-form">
        <div class="form-group mb-3">
          <label class="label" for="name">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div class="row form-group mb-3">
          <div class="col">
            <label class="label" for="name">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              required
              style="margin: 0; width: 100%;"
            />
          </div>
          <div class="col">
            <label class="label" for="name">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              required
              style="margin: 0; width: 100%"
            />
          </div>
        </div>
        <div class="form-group mb-3">
          <label class="label" for="password">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label class="label" for="password">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="form-control btn btn-primary rounded submit px-3"
          >
            Sign Up
          </button>
        </div>
        <div class="haveAcc">
          <div class="row justify-content-center mt-5">
            <p>Have Account? </p>
            <a href=""><p>Sign In</p></a>
            <p>Now</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>
