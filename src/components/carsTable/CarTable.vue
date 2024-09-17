<script setup lang="ts">
import type CarsTableProps from '@/components/carsTable/types'
import { ref } from 'vue'

const props = defineProps<CarsTableProps>()
const carsToDisplay = props.carsToDisplay
const howManyAreEditing = ref(0)

const newPlaca = ref()
const newModelo = ref()
const newPreco = ref()
const newMarca = ref()
const newCor = ref()
const newAno = ref()
const newEstado = ref()

function saveEdit(car) {
  console.log('inicio', car)
  if (car) {
    car.placa = newPlaca.value
    car.modelo = newModelo.value
    car.preco = newPreco.value
    car.marca = newMarca.value
    car.cor = newCor.value
    car.ano = newAno.value
    car.estado = newEstado.value
    car.editando = false
  }
  howManyAreEditing.value = 0
  console.log('final', car)
}

const editCar = (placa) => {
  const carToEdit = carsToDisplay.find((car) => car.placa === placa)
  howManyAreEditing.value++
  if (!carToEdit.editando && howManyAreEditing.value === 1) {
    carToEdit.editando = true
    newPlaca.value = carToEdit.placa
    newModelo.value = carToEdit.modelo
    newPreco.value = carToEdit.preco
    newMarca.value = carToEdit.marca
    newCor.value = carToEdit.cor
    newAno.value = carToEdit.ano
    newEstado.value = carToEdit.estado
  } else if (carToEdit.editando) {
    saveEdit(carToEdit)
  }
  console.log('primeira funcao', carToEdit)
  return carToEdit
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
        <img :src="carro.imagem" class="card-img-top mb-2" :alt="`${carro.modelo} foto`" />
        <h5 v-if="!carro.editando" class="list-group-item">{{ carro.modelo }}</h5>
        <div v-else class="form-group">
          <label for="modelo">Modelo</label>
          <input
            type="text"
            class="form-control"
            id="modelo"
            name="modelo"
            v-model="newModelo"
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
            v-model="newMarca"
            id="marca"
            name="marca"
            :placeholder="carro.marca"
          />
        </div>
        <div class="form-group">
          <label for="ano">Ano</label>
          <input
            type="number"
            class="form-control"
            id="ano"
            name="ano"
            v-model="newAno"
            :placeholder="carro.ano"
          />
        </div>
        <div class="form-group">
          <label for="cor">Cor</label>
          <input
            type="text"
            class="form-control"
            id="cor"
            name="cor"
            v-model="newCor"
            :placeholder="carro.cor"
          />
        </div>
        <div class="form-group">
          <label for="placa">Placa</label>
          <input
            type="text"
            class="form-control"
            id="placa"
            name="placa"
            v-model="newPlaca"
            :placeholder="carro.placa"
          />
        </div>
        <div class="form-group">
          <label for="estado">Disponibilidade</label>
          <select class="form-control" id="estado" name="estado" v-model="newEstado">
            <option value="disponivel">Disponivel</option>
            <option value="em manutenção">Em manutenção</option>
            <option value="alugado">Alugado</option>
          </select>
        </div>
      </form>

      <div class="card-body">
        <button type="button" class="btn btn-primary mx-1" @click="editCar(carro.placa)">
          {{ carro.editando ? 'Salvar' : 'Editar' }}
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

  img {
    height: 150px;
  }
}
</style>
