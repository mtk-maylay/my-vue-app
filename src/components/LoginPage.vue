<template>
  <!-- For both horizontal and vertical centering, you can use Bootstrap’s flexbox -->
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="col-4">
      <div class="container bg-info mx-auto">
        <form @submit.prevent="login" class="loginForm">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="username"
              required
            />
            <label for="floatingInput" class="text-dark">Username</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
              required
            />
            <label for="floatingPassword" class="text-dark">Password</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      // Simulate a simple login check
      if (this.email === "test@example.com" && this.password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or another page
        this.$router.push("/todolist");
      } else {
        this.errorMessage = "Invalid email or password";
      }
    },

    async login() {
      try {
        const response = await axios.post("http://localhost:6060/api/login", {
          username: this.username,
          password: this.password,
          tenantName : "tenant_2"
        });

        console.log("Login API Response : " ,response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        this.$router.push("/todolist");
      } catch (error) {
        console.log("Login Failed!", error.message);
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style scoped>
.loginForm {
  padding-top: 30px;
}

.btn {
  margin-top: 30px;
  margin-bottom: 30px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
