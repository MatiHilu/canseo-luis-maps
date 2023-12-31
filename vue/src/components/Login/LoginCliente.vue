<template>
  <div class="general">
    <div v-if="notification" class="notification" :class="notificationClass">
      {{ message }}
    </div>
    <div class="login">
      <img class="canseo-img" src="https://canseo-vue.vercel.app/uploads/Canseo-login.png" alt="CanSeo">
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="email" id="email" v-model="email" required placeholder="Email" autocomplete="username">
        </div>
        <div class="form-group password-input">
          <input id="password" v-model="password" :type="passwordFieldType" required placeholder="Contraseña" autocomplete="current-password">
          <span type="button" @click="togglePasswordVisibility">
            <img v-if="showPassword" src="https://canseo-vue.vercel.app/uploads/show-password.png" alt="Mostrar contraseña">
            <img v-else src="https://canseo-vue.vercel.app/uploads/hide-password.png" alt="Ocultar contraseña">
          </span>
        </div>
        <button type="submit">Iniciar</button>
      </form>
      <span><router-link to="/registro/cliente" class="nav-link">¿Aún no tenés una cuenta? <span class="boton-registro">Registrate</span></router-link></span>
      <span><router-link to="/login/paseadores" class="nav-link soy-paseador">Soy Paseador</router-link></span>   
    </div>
  </div>
</template>

<script>
import ClientesService from "@/services/ClientesService";
import store from "@/store/index";

export default {
  name: "LoginCliente",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  computed: {
    notification() {
      return store.getters.getNotification;
    },
    message() {
      return store.getters.getMessage;
    },
    notificationClass() {
      return {
        error: this.notification === "error",
        success: this.notification === "success"
      };
    },
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    }
  },
  methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password
      };

      ClientesService.login(credentials)
        .then(response => {
          const clientId = response.data.clientId;
          store.commit('setClientId', clientId);
          localStorage.setItem("Authorization", 'Bearer ' + response.data.token);
          // Redireccionar a la página de cliente autenticado
          this.$router.push("/reservar");

          // Establecer notificación y mensaje en el store
          store.commit('setNotification', 'success');
          store.commit('setMessage', 'Inicio de sesión exitoso');
        })
        .catch(error => {
          console.log("Error al iniciar sesión como cliente: ", error);
          store.commit("setNotification", "error");
          store.commit("setMessage", "Error al iniciar sesión email o contraseña incorrectas");
          this.$router.push("/login/clientes");
          setTimeout(() => {
            store.commit("setNotification", null);
            store.commit("setMessage", null);
          }, 5000); // 5 segundos en milisegundos
        });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.general{
  min-height: 90vh;  
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 15px;
  padding-bottom: 40px;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
}

.canseo-img{
  margin-top: 20px;
  margin-bottom: 24px;
  width: 180px;
}

.login{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

form{
  margin-top: 30px;
  margin-bottom: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;

}

span a{
  color: #000;
}

.form-group {
  margin-bottom: 30px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border: 0px solid;
  border-bottom: 1px solid #000;
}

button {
  border-radius: 5px;
  border: 1px solid #8DBD47;
  background-color: #8DBD47;
  font-size: 18px;
  padding: 8px 15px;
  cursor: pointer;
  width: 50%;
  align-self: center;
}

.notification {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

}

.error {
  background-color: #f2dede;
  color: #a94442;
}

.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.password-input {
  position: relative;
}

.password-input span {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.password-input span:focus {
  outline: none;
}

.password-input img {
  width: 20px;
  height: 20px;
}

.soy-paseador{
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 5px 20px;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.boton-registro{
text-decoration: underline;  
}
</style>
