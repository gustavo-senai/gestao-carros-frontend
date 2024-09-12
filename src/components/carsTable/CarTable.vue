<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type CarsTableProps from '@/components/carsTable/types'
import EditCarModal from '@/components/editCarModal/EditCarModal.vue'

const props = defineProps<CarsTableProps>()
const carsToDisplay = props.carsToDisplay
const showModal = ref(false)
const carToEdit = ref()

onMounted(() => {
  const myModal = document.getElementById('myModal')
})

function editCar(placa) {
  carToEdit.value = carsToDisplay.find((car) => car.placa === placa)
  if (carToEdit) {
    showModal.value = true
    return carToEdit.value
  }
}

function removeCar(placa) {
  const index = carsToDisplay.findIndex((car) => car.placa === placa)
  if (index !== -1) {
    carsToDisplay.splice(index, 1)
  }
}
</script>
<template>
  <div class="cars-container">
    <div
      class="card text-center"
      style="max-width: 18rem"
      v-for="(carro, index) in carsToDisplay"
      :key="index"
    >
      <div class="card-body cards">
        <img src="../../assets/img/icon.png" class="card-img-top" :alt="`${carro.modelo} foto`" />
        <h5 class="list-group-item">{{ carro.modelo }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ carro.marca }}</li>
        <li class="list-group-item">{{ carro.ano }}</li>
        <li class="list-group-item">{{ carro.estado }}</li>
      </ul>
      <div class="card-body">
        <button
          type="button"
          class="btn btn-primary mx-1"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          @click="editCar(carro.placa)"
        >
          Editar
        </button>
        <button type="button" class="btn btn-primary" @click="removeCar(carro.placa)">
          Remover
        </button>
      </div>
    </div>
  </div>
  <EditCarModal v-if="showModal" :car-to-edit="carToEdit" />
</template>
<style scoped lang="scss">
.cars-container {
  display: flex;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}
</style>
