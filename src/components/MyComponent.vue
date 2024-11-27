<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",

  data() {
    return {
      message: "This is my custom component",
    };
  },

  methods: {
    changeMessage() {
      this.message = "Welcome to my page!";
    },
  },
};
</script>

<style scoped>
h2 {
  color: green;
}

button {
  background-color: lightblue;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: blue;
  color: pink;
}
</style>
