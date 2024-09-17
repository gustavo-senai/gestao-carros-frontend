<script setup lang="ts">
import { ref } from 'vue'
import { carStore } from '@/stores/cars'

const store = carStore()
const emit = defineEmits(['upload'])

const newPlaca = ref('')
const newModelo = ref('')
const newPreco = ref()
const newMarca = ref('')
const newCor = ref('')
const newAno = ref()
const newEstado = ref('')
const fileData = ref(null)
const fileName = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name

    const reader = new FileReader()
    reader.onload = () => {
      fileData.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

function handleSubmit() {
  const newCar = {
    placa: newPlaca.value,
    modelo: newModelo.value,
    preco: newPreco.value,
    marca: newMarca.value,
    cor: newCor.value,
    ano: newAno.value,
    estado: newEstado.value,
    editando: false,
    imagem: fileData.value
  }
  store.carros.push(newCar)
  emit('upload', newCar)
}
</script>

<template>
  <div class="card text-center form-card">
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

      <div class="mb-3">
        <input type="file" @change="handleFileUpload" />
        <p v-if="fileData">Arquivo selecionado: {{ fileName }}</p>
      </div>
      <button type="submit" class="btn btn-primary">Adicionar Carro</button>
    </form>
  </div>
</template>
<style scoped lang="scss">
.form-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 8px;
  margin: auto;
  font-size: 24px;
  font-weight: 600;
  border-radius: 20px;
}
</style>
