<template>
  <div class="container">
    <h2 class="todo text-center">To Do List</h2>
    <div class="row">
      <div class="col-6">
        <label for="exampleFormControlInput1" class="form-label"
          ><b>Name</b></label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Add a new task name"
          v-model="newTodo"
          @keyup:enter="addTodoList"
        />
      </div>
      <div class="col-6">
        <label for="exampleFormControlInput1" class="form-label"
          ><b>Price</b></label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Add a new task price"
          v-model="price"
          @keyup:enter="addTodoList"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <label for="datepicker" class="form-label"
          ><b>Select Date:</b></label
        >
        <input
          type="text"
          ref="datepicker"
          class="form-control"
          placeholder="Add a new task date"
          v-model="selectedDate"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="addTodoList">Submit</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in paginatedData" :key="index">
          <th scope="row">{{ index + currentPage + (currentPage - 1) * 2 }}</th>
          <td>{{ todo.name }}</td>
          <td>{{ todo.price }}</td>
          <td>{{ todo.date }}</td>
          <td><button @click="removeTodo(index)" id="remove">X</button></td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination controls -->
    <div class="pagination">
      <button
        class="btn btn-primary"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <button
        class="btn btn-primary"
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="btn btn-primary"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      todoList: [],
      price: 0,
      selectedDate: null,
      currentPage: 1,
      itemsPerPage: 3,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.todoList.length / this.itemsPerPage);
    },

    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.todoList.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    addTodoList() {
      if (this.newTodo.trim() !== "") {
        this.todoList.push({
          name: this.newTodo.trim(),
          price: this.price,
          date: this.selectedDate,
        });
        this.newTodo = "";
        this.price = 0;
        this.selectedDate = "";
      }
    },

    removeTodo(index) {
      return this.todoList.splice(index, 1); // Removes 1 element at index
    },

    setPage(page) {
      this.currentPage = page;
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
  mounted() {
    flatpickr(this.$refs.datepicker, {
      dateFormat: "Y-m-d",
    });
  },
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  margin-left: 10px;
  margin: 10px;
  color: white;
}
#remove {
  color: red;
}
.container .table {
  margin-top: 50px;
  padding-top: 50px;
}

.todo {
  padding-top: 100px;
}
</style>
