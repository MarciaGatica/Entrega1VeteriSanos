<script >/*
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'; // Asegúrate de tener la ruta correcta
import Catalogo from './views/Catalogo.vue'; // Asegúrate de tener la ruta correcta
import Menu from './components/Menu.vue';  // Importa el nuevo componente con el mensaje

export default {
  components: {
    Navbar,
    Catalogo,
    Menu,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
*/
</script>

  

<template>
  <!--
  <div>
    <Navbar @toggle-menu="toggleMenu" />
    <Catalogo/>

   
    <Catalog />

    <Menu :isOpen="menuOpen" @close-menu="closeMenu" />
  </div>
-->
</template>





<style>
/* Estilos específicos para el botón de control */
.toggle-sidebar-button {
  position: fixed;
  top: 70px; /* Ajusta según la altura de la barra de navegación */
  right: 20px;
  z-index: 1000; /* Asegura que esté debajo de la barra de navegación */
}

/* Ajustes para que MessageSidebar esté debajo de Navbar */
.message-sidebar {
  width: 30%;
  height: 100vh;
  position: fixed;
  top: 60px; /* Altura de la Navbar, ajusta según tus necesidades */
  left: -30%;
  transition: left 0.3s ease;
}

.message-sidebar-open {
  left: 0;
}

.fixed-message {
  margin: 20px;
}

/* Puedes agregar más estilos según tus necesidades */
</style>