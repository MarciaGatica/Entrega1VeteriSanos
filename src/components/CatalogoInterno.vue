<template>

    <div class="catalog">
        <!-- Contenido del catálogo -->
        <h1 class="titulo">catalogo interno </h1>
        <div class="contenedor">
            <div v-for="(producto, index) in productos" :key="index" class="card">
                <img :src="producto.foto" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{{ producto.nombre }}</h5>
                    <h1>{{ producto.precio }}</h1>
                    <button>modificar</button>
                    <button>eliminar</button>
                  
                </div>
            </div>
        </div>
        <div>
            <RouterView />
        </div>
    </div>
</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from "vue";
import { productosMock } from "../mocks/productos.js"; // Corregir la ruta de importación
import NavTrabajador from "./NavTrabajador.vue";
export default {
    name: "catalogoInterno",
    setup() {
        const productos = ref([]);

        onMounted(async () => {
            productos.value = productosMock;
        });

        return {
            productos,
        };
    },
};

</script>
  
<style scoped>
.catalog {
    padding: 100px;
}

.titulo {
    margin-top: 2%;
    margin-bottom: 3%;
    text-align: center;
}

.contenedor {
    width: 100%;
    height: auto;
    display: flex !important;
    flex-wrap: wrap;
    text-align: center;
}

.card {
    margin: 2%;
    width: 20%;
}
</style>
  