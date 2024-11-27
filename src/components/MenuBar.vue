<template>
  <div>
    <nav class="side-menu" :class="{ active: isActive }">
      <div class="logo">MyWebsite</div>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="main-content" :class="{ 'content-active': isActive }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.side-menu {
  background: #333;
  color: white;
  width: 250px;
  height: 100vh;
  position: fixed;
  left: -250px; /* Hidden by default */
  transition: left 0.3s ease;
  padding: 1rem;
}

.side-menu.active {
  left: 0; /* Show menu when active */
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 1rem 0;
}

.menu li a {
  color: white;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.main-content {
  margin-left: 250px; /* Space for the menu */
  padding: 1rem;
  transition: margin-left 0.3s ease;
}

.content-active {
  margin-left: 0; /* Full width when menu is active */
}

@media (max-width: 768px) {
  .side-menu {
    left: -250px; /* Hidden */
  }

  .side-menu.active {
    left: 0; /* Show */
  }

  .menu-toggle {
    display: block;
  }

  .main-content {
    margin-left: 0; /* Full width */
  }
}
</style>