<script setup lang="ts">
import type CarsTableProps from '@/components/carsTable/types'

const props = defineProps<CarsTableProps>()
const carsToDisplay = props.carsToDisplay

function editCar(placa) {
  const carToEdit = carsToDisplay.find((car) => car.placa === placa)
  if (carToEdit) {
    carToEdit.editando = !carToEdit.editando
    return carToEdit
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
        <h5 v-if="!carro.editando" class="list-group-item">{{ carro.modelo }}</h5>
        <div v-else class="form-group">
          <label for="modelo">Modelo</label>
          <input
            type="text"
            class="form-control"
            id="modelo"
            name="modelo"
            :placeholder="carro.modelo"
          />
        </div>
      </div>
      <ul v-if="!carro.editando" class="list-group list-group-flush">
        <li class="list-group-item">{{ carro.marca }}</li>
        <li class="list-group-item">{{ carro.ano }}</li>
        <li class="list-group-item">{{ carro.estado }}</li>
      </ul>
      <form v-else>
        <div class="form-group">
          <label for="marca">Marca</label>
          <input
            type="text"
            class="form-control"
            id="marca"
            name="marca"
            :placeholder="carro.marca"
          />
        </div>
        <div class="form-group">
          <label for="ano">Ano</label>
          <input type="number" class="form-control" id="ano" name="ano" :placeholder="carro.ano" />
        </div>
        <div class="form-group">
          <label for="estado">Estado</label>
          <input
            type="text"
            class="form-control"
            id="estado"
            name="estado"
            :placeholder="carro.estado"
          />
        </div>
      </form>

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
