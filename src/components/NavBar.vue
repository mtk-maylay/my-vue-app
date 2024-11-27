<template>
  <nav class="navbar navbar-expand-lg navbar-info bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">M@Y</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" to="/todolist">Todo List</router-link>
        </div>
      </div>
      <div class="ms-auto">
        <button
          class="btn btn-outline-secondary text-white"
          id="theme-light"
          @click="setLightTheme"
        >
          Light
        </button>
        <button
          class="btn btn-outline-secondary text-white"
          id="theme-dark"
          @click="setDarkTheme"
        >
          Dark
        </button>     
        <button
          class="btn btn-outline-secondary text-white"
          id="logoutBtn"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    setLightTheme() {
      this.changeTheme("light");
    },
    setDarkTheme() {
      this.changeTheme("dark");
    },
    changeTheme(theme) {
      const themeLink = document.getElementById("theme-css");
      themeLink.href = `./themes/${theme}.css`;
      localStorage.setItem("theme", theme);
    },
    logout(){

      this.$router.push("/");
    }
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme") || "light";
    this.changeTheme(savedTheme);
  },
};
</script>

<style scoped>
.navbar {
  position: fixed; /* Keeps the navbar fixed on the top */
  top: 0; /* Aligns it to the top */
  left: 0; /* Aligns it to the left */
  right: 0; /* Aligns it to the right */
  /* background-color: #333; Background color of the navbar */
  /* color: white;    Text color */
  z-index: 1000; /* Ensures it stays above other elements */
}
</style>
