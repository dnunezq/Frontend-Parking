<template>
  <div class="split left">
    <div class="centered">
      <form v-on:submit.prevent="processSignUp">
        <h3>Crear Cuenta</h3>

        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-lg"
            v-model="user.name"
            placeholder="Nombre"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
            placeholder="Correo Electronico"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="user.username"
            placeholder="Usuario"
          />
        </div>
        <br />
        <div class="form-group">
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="user.password"
            placeholder="Clave"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Crear Cuenta
        </button>

        <p class="forgot-password text-right">
          ¿ya estas registrado
          <router-link :to="{ name: 'login' }">Inicia sesion?</router-link>
        </p>
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
  name: "SignUp",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    processSignUp: function () {
      axios
        .post("", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };

          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);

          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>
