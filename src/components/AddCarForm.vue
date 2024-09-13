<script setup lang="ts">
import { ref } from 'vue'
import carros from '@/util/cars'

const newPlaca = ref('')
const newModelo = ref('')
const newPreco = ref()
const newMarca = ref('')
const newCor = ref('')
const newAno = ref()
const newEstado = ref('')

function handleSubmit() {
  const newCar = {
    placa: newPlaca.value,
    modelo: newModelo.value,
    preco: newPreco.value,
    marca: newMarca.value,
    cor: newCor.value,
    ano: newAno.value,
    estado: newEstado.value,
    editando: false
  }
  carros.push(newCar)
  console.log('Novo carro:', newCar)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="placa" class="form-label">Placa</label>
      <input v-model="newPlaca" type="text" class="form-control" id="placa" />
    </div>

    <div class="mb-3">
      <label for="modelo" class="form-label">Modelo</label>
      <input v-model="newModelo" type="text" class="form-control" id="modelo" />
    </div>

    <div class="mb-3">
      <label for="preco" class="form-label">Preço</label>
      <input v-model="newPreco" type="number" class="form-control" id="preco" />
    </div>

    <div class="mb-3">
      <label for="marca" class="form-label">Marca</label>
      <input v-model="newMarca" type="text" class="form-control" id="marca" />
    </div>

    <div class="mb-3">
      <label for="cor" class="form-label">Cor</label>
      <input v-model="newCor" type="text" class="form-control" id="cor" />
    </div>

    <div class="mb-3">
      <label for="ano" class="form-label">Ano</label>
      <input v-model="newAno" type="number" class="form-control" id="ano" />
    </div>

    <div class="mb-3">
      <label for="estado" class="form-label">Estado</label>
      <select v-model="newEstado" class="form-select" id="estado">
        <option value="disponível">Disponível</option>
        <option value="em manutenção">Em manutenção</option>
        <option value="alugado">Alugado</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Adicionar Carro</button>
  </form>
</template>
