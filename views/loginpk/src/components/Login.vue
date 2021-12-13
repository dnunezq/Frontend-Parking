<template>
  <div class="split left">
    <div class="centered">
      <form v-on:submit.prevent="processLogInUser">
        <h3>Iniciar Sesion</h3>

        <div class="form-group">
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Usuario"
            v-model="user.username"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Clave"
            v-model="user.password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Iniciar Sesion
        </button>
        <br />
        <div class="social-icons mt-3">
          <ul>
            <li>
              <a href="#"><i class="fa fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>

  <div class="split right">
    <div class="centered"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>
