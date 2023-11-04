<template>
  <div>
    <!-- Componente de navegación por defecto (Navbar) -->
    <Navbar @toggle-menu="toggleMenu" />

    <!-- Carga dinámica del componente según el rol del usuario -->
    <component :is="contentComponent" />
    
    <Menu :isOpen="menuOpen" @close-menu="closeMenu" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import Navbar from './components/Navbar.vue';
import Catalogo from './components/Catalogo.vue';
import Menu from './components/Menu.vue';
import MenuCliente from './components/MenuCliente.vue';
import CatalogoInterno from './components/CatalogoInterno.vue';
import Inicio from './components/Inicio.vue';

export default {
  components: {
    Navbar,
    Catalogo,
    Menu,
    MenuCliente,
    CatalogoInterno,
    Inicio,
  },
  data() {
    return {
      menuOpen: false,
      userRole: 1, // Inicialmente, el rol es nulo
      contentComponent: 'Inicio', // Componente de inicio por defecto
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    login() {
      // Simulamos una solicitud de autenticación con datos falsos
      const datos = {
        email: this.email,
        clave: this.password,
      };

      // Buscamos el usuario en el mock de usuarios
      const usuarioAutenticado = usuarios.find((usuario) => {
        return usuario.email === datos.email && usuario.clave === datos.clave;
      });

      if (usuarioAutenticado) {
        // Obtenemos el rol del usuario autenticado
        const rol = usuarioAutenticado.rol;
        if (rol === 1) {
          this.contentComponent = 'Catalogo'; // Muestra el catálogo
        } else if (rol === 2 || rol === 3) {
          this.contentComponent = 'CatalogoInterno'; // Muestra el catálogo interno
        } else {
          this.contentComponent = 'Catalogo';
        }
      } else {
        console.error('Error de autenticación');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente si es necesario */
.toggle-sidebar-button {
  position: fixed;
  top: 70px;
  right: 20px;
  z-index: 1000;
}

.message-sidebar {
  width: 30%;
  height: 100vh;
  position: fixed;
  top: 60px;
  left: -30%;
  transition: left 0.3s ease;
}

.message-sidebar-open {
  left: 0;
}

.fixed-message {
  margin: 20px;
}
</style>
