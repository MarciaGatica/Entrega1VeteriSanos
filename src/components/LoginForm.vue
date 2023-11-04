<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="email">Correo electrónico:</label>
      <input type="email" v-model="email" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" v-model="password" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary">Iniciar sesión</button>
  </form>
</template>

<script>
import usuarios from "../mocks/usuarios"; // Importa el mock de usuarios

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
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
          // Redirigir a la página de catalogo
          alert("Bienvenido Cliente");
          this.$router.push('/Catalogo');
        } else if (rol === 2 || rol === 3) {
          // Redirigir a la página de catalogo interno
          alert("Bienvenido colaborador");
          this.$router.push('/CatalogoInterno');
        } else {
          console.error('Rol de usuario desconocido');
          this.$router.push('/Catalogo');
        }
      } else {
        console.error('Error de autenticación');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este formulario si es necesario */
.form-group {
  margin-bottom: 15px;
}
</style>
