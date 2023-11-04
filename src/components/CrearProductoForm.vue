<template>
    <div>
   
      <form @submit.prevent="createProduct">
        <div class="form-group">
          <label for="nombre">Nombre del Producto:</label>
          <input type="text" v-model="nombre" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="precio">Precio:</label>
          <input type="number" v-model="precio" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="stock">Stock:</label>
          <input type="number" v-model="stock" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="foto">URL de la Foto:</label>
          <input type="text" v-model="foto" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Crear Producto</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { productosMock } from '../mocks/productos';
  
  export default {
    data() {
      return {
        nombre: '',
        precio: 0,
        stock: 0,
        foto: '',
      };
    },
    methods: {
      createProduct() {
        // Crea un nuevo producto
        const nuevoProducto = {
          id_producto: productosMock.length + 1, // Asigna un nuevo ID basado en la longitud del mock
          nombre: this.nombre,
          precio: parseFloat(this.precio), // Convierte el precio a número
          stock: parseInt(this.stock), // Convierte el stock a número entero
          foto: this.foto,
        };
  
        // Agrega el nuevo producto al mock
        productosMock.push(nuevoProducto);
  
        // Limpia los campos del formulario
        this.nombre = '';
        this.precio = 0;
        this.stock = 0;
        this.foto = '';
  
        alert('Producto creado exitosamente');
  
        // Puedes redirigir al usuario a otra página después de crear el producto si es necesario
        // Ejemplo:
        // this.$router.push('/catalogo');
      },
    },
  };
  </script>
  