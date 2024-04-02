<template>
  <div class="row d-flex justify-content-center">
    <div class="col-sm-4 mt-5">
      <div class="card rounded-2">
        <div class="card-header text-center">Login Form</div>
        <div class="card-body">
          <form @submit.prevent="LoginData">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                v-model="student.email"
                class="form-control mb-4"
                placeholder="Email"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                v-model="student.password"
                class="form-control mb-4"
                placeholder="Password"
              />
            </div>

            <div>
            <button type="submit" class="btn btn-primary m-2">Login</button>
              <router-link :to="{ name: 'Register' }" class="btn btn-success"
                >Register</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registation",
  data() {
    return {
      result: {},
      student: {
        email: "",
        password: "",
      },
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    LoginData() {
      axios.post("http://127.0.0.1:8000/api/login", this.student).then(({ data }) => {
        console.log(data);
        try {
          if (data.status === true) {
            localStorage.setItem('islogged', 'true'); 
            this.$router.push({ name: "Student" });
          } else {
            alert("Login failed");
          }
        } catch (err) {
          alert("Error, please try again");
        }
      });
    },
  },
};
</script>
