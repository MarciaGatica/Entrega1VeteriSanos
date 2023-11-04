<!-- RegisterPopup.vue -->
<template>
    <div v-if="showPopup" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Crear Producto</h5>
            <button type="button" class="close" @click="closePopup" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <CrearProductoForm @register="handleRegister" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CrearProductoForm from './CrearProductoForm.vue';
  
  export default {
    components: {
        CrearProductoForm,
    },
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
      handleRegister(userData) {
        console.log('Nuevo Producto registrado:', userData);
        this.closePopup();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente si es necesario */
  </style>
  