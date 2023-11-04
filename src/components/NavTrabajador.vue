<script>
  import LoginPopup from '../components/LoginPopup.vue';
  import RegisterPopup from '../components/RegisterPopup.vue';

export default {
  components: {
    LoginPopup,
    RegisterPopup,
  },
  methods: {
    openLoginPopup() {
      this.$refs.loginPopup.openPopup();
    },
    openRegisterPopup() {
      this.$refs.registerPopup.openPopup();
    },
    toggleMenu() {
      this.$emit('toggle-menu'); // Emite un evento para indicar que se debe abrir/cerrar el menú
    },
  },
};
  </script>



<!-- Navbar.vue -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container">
        <!-- Izquierda: Logo y nombre de la tienda -->
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo_gato.png" alt="Logo" width="50" height="50" >
          <span class="titulo">Veteri Sanos</span>
        </a>
  
        <!-- Derecha: Botones de inicio de sesión y creación de perfil -->
        <div class="btn-group btn-group-lg" role="group">
    
    <button @click="toggleMenu" class="toggle-menu-button">Menú</button>

    <!-- Renderiza los componentes LoginPopup y RegisterPopup -->
    <LoginPopup ref="loginPopup" />
    <RegisterPopup ref="registerPopup" />



</div>
      </div>
    </nav>
  </template>
  
  



  
  <style scoped>

.titulo {
  margin-right: 50%;
  color: aliceblue;
}

.logo {
  width: 4%;
}

.btn-group {
  margin-right: 5%;
  margin-bottom: 1%;
  margin-top: 1%;


}

.navbar {
  background-color: #CC7379;
}


.btn-group button {

  background-color: #ffffffff;
  /* Green background */
  border: 1px solid #ffffffff;
  /* Green border */
  color: black;
  /* White text */
  padding: 10px 24px;
  /* Some padding */
  cursor: pointer;
  /* Pointer/hand icon */
  float: left;
  /* Float the buttons side by side */
}

.btn-group button:not(:last-child) {
  border-right: none;
  /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn-group button:hover {
  color: black;
  background-color: #CC7379;
}
  </style>
  