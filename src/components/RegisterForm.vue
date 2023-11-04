<template>
  <div>
    <h1>Registro de Usuario</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nombre" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import usuarios from '../mocks/usuarios'; 

export default {
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
    };
  },
  methods: {
    registerUser() {
      // Crea un nuevo usuario
      const nuevoUsuario = {
        nombre: this.nombre,
        email: this.email,
        clave: this.password,
        rol: 1, 
      };

      // Agrega el nuevo usuario al mock
      usuarios.push(nuevoUsuario);

      // Limpia los campos del formulario
      this.nombre = '';
      this.email = '';
      this.password = '';

      alert('Usuario registrado exitosamente'); 
    },
  },
};
</script>
