<template>
  <div class="row d-flex justify-content-center">
    <div class="col-sm-4 mt-5">
      <div class="card rounded-3">
        <div class="card-header text-center">Register Form</div>
        <div class="card-body">
          <form @submit.prevent="saveData">
            <label>First Name</label>
            <input
              type="text"
              v-model="student.name"
              name="name"
              id="name"
              class="form-control mb-4"
            />

            <label>Email</label>
            <input
              type="email"
              v-model="student.email"
              name="email"
              id="email"
              class="form-control mb-4"
            />

            <label>Password</label>
            <input
              type="password"
              v-model="student.password"
              name="password"
              id="password"
              class="form-control mb-4"
            />

            <input type="submit" value="Save" class="btn btn-success" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      result: {},
      student: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called");
  },
  methods: {
    saveData() {
      axios.post("http://127.0.0.1:8000/api/register", this.student).then(({ data }) => {
        console.log(data);
        try {
        localStorage.setItem('islogged', 'true'); 
         this.$router.push({ name: "Student" });
        } catch (err) {
          alert("failed");
        }
      });
    },
  },
};
</script>
