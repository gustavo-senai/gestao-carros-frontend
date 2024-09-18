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

const rules = {
  placa: 'required|length:7'
}
</script>

<template>
  <div class="card text-center form-card">
    <div class="card-body">
      <h5 class="card-title">Buscar Carro</h5>
      <VeeForm role="search" :validation-schema="rules" @submit="searchCar">
        <VeeField name="placa" :bails="false" v-slot="{ field, errors }">
          <input
            v-model="carToFind"
            class="form-control"
            id="placa"
            v-bind="field"
            placeholder="Digite a placa"
          />
          <div class="error" v-for="(error, index) in errors" :key="index">
            {{ error }}
          </div>
        </VeeField>
        <button class="btn btn-outline-light mt-3" type="submit">Buscar</button>
      </VeeForm>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  padding: 8px;
  margin: 24px auto;
  font-size: 24px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #1D3557;
  color: #FFFFFF;
}

.error {
  font-size: 16px;
  font-weight: 400;
  color: red;
}
</style>
