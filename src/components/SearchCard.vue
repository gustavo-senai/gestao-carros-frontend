<script setup lang="ts">
import { ref } from 'vue'
import { carStore } from '@/stores/cars'

const store = carStore()
const emit = defineEmits(['carFound'])

const carToFind = ref('')

function searchCar() {
  const carFound = store.carros.find((car) => car.placa === carToFind.value)
  if (carFound) {
    emit('carFound', carFound)
  } else {
    alert('Não há nenhum carro com esta placa')
  }
}
</script>

<template>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <form class="d-flex" role="search" @submit.prevent="searchCar">
        <input
          v-model="carToFind"
          class="form-control me-2"
          type="search"
          placeholder="Digite a placa do carro que deseja encontrar"
        />
        <button class="btn btn-outline-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</template>
