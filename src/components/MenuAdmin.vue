
<template>
  <h1>menu administrador</h1>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeMenu() {
        this.$emit('close-menu'); // Emite un evento para cerrar el menú
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el menú */
  .menu {
    position: fixed;
    top: 70px; /* Ajusta según la altura de la barra de navegación y el contenido anterior */
    right: -200px; /* Inicialmente fuera de la pantalla */
    width: 200px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }
  
  .menu-open {
    right: 0; /* Muestra el menú al abrirlo */
  }
  
  .close-menu-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  