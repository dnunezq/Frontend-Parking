<template>


    <section class="login-clean">
        <form v-on:submit.prevent="processSignUp">
            <h2 class="visually-hidden">Crear cuenta</h2>
            <div class="illustration"><i class="icon ion-ios-navigate"></i></div>

            <div class="mb-3"><input class="form-control" v-model="user.username" type="text" name="user" placeholder="Usuario"></div>

            <div class="mb-3"><input class="form-control" v-model="user.password" type="password" name="password" placeholder="contraseña"></div>
            
            <div class="mb-3"><input class="form-control" v-model="user.email" type="email" name="email" placeholder="Email"></div>
            
            <div class="mb-3"><input class="form-control" v-model="user.name" type="text" name="name" placeholder="Nombre completo"></div>
            
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Registrar</button></div>
            <router-link class="forgot" to="LogIn">Ya tengo una cuenta</router-link>
        </form>
    </section>

</template>


<script>
import gql from "graphql-tag";

export default {
    name: "SignUp",

    data: function() {
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
    processSignUp: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($userInput: SignUpInput!) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          };

          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },

  },
}
</script>


<style>

    .login-clean {
  background: #f1f7fc;
  padding: 80px 0;
}

.login-clean form {
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 4px;
  color: #505e6c;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

.login-clean .illustration {
  text-align: center;
  padding: 0 0 20px;
  font-size: 100px;
  color: rgb(244,71,107);
}

.login-clean form .form-control {
  background: #f7f9fc;
  border: none;
  border-bottom: 1px solid #dfe7f1;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 8px;
  height: 42px;
}

.login-clean form .btn-primary {
  background: #f4476b;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none !important;
}

.login-clean form .btn-primary:hover, .login-clean form .btn-primary:active {
  background: #eb3b60;
}

.login-clean form .btn-primary:active {
  transform: translateY(1px);
}

.login-clean form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-clean form .forgot:hover, .login-clean form .forgot:active {
  opacity: 1;
  text-decoration: none;
}



</style>