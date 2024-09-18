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
const fields = [
  {
    for: 'inputPlaca',
    type: 'text',
    name: 'placa',
    title: 'Placa',
    model: newPlaca
  },
  {
    for: 'inputModelo',
    type: 'text',
    name: 'modelo',
    title: 'Modelo',
    model: newModelo
  },
  {
    for: 'inputMarca',
    type: 'text',
    name: 'marca',
    title: 'Marca',
    model: newMarca
  },
  {
    for: 'inputAno',
    type: 'number',
    name: 'ano',
    title: 'Ano',
    model: newAno
  },
  {
    for: 'inputCor',
    type: 'text',
    name: 'cor',
    title: 'Cor',
    model: newCor
  },
  {
    for: 'inputPreco',
    type: 'number',
    name: 'preco',
    title: 'Preço',
    model: newPreco
  },
]

function handleSubmit() {
  const newCar = {
    placa: newPlaca.value,
    modelo: newModelo.value,
    preco: newPreco.value,
    marca: newMarca.value,
    cor: newCor.value,
    ano: newAno.value,
    estado: 'disponível',
    editando: false,
    imagem: fileData.value
  }
  console.log(newCar)
  store.carros.push(newCar)
  emit('upload', newCar)
}

const rules = {
  placa: 'required|length:7',
  modelo: 'required',
  preco: 'required|min_value:1000',
  marca: 'required',
  cor: 'required|alpha',
  ano: 'required|min_value:1900',
}
</script>

<template>
  <div class="card text-center form-card">
    <VeeForm :validation-schema="rules" @submit="handleSubmit">
      <div class="mb-3" v-for="field in fields" :key="field.name">
        <label :for="field.for" class="form-label">{{ field.title }}</label>
        <VeeField :name="field.name" :bails="false" v-slot="{ field, errors }">
          <input
            :id="field.for"
            :type="field.type"
            v-model="field.model"
            class="form-control"
            v-bind="field"
          />
          <div class="error" v-for="(error, index) in errors" :key="index">
            {{ error }}
          </div>
        </VeeField>
      </div>
      <div class="mb-3">
        <label for="imagem" class="form-label">Imagem</label>
        <input type="file" id="imagem" class="form-control" @change="handleFileUpload" />
        <p v-if="fileData" class="my-2">Arquivo selecionado: {{ fileName }}</p>
        <button type="submit" class="btn btn-primary mt-3">Adicionar Carro</button>
      </div>
    </VeeForm>
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
  background-color: #1D3557;
  color: #FFFFFF;
}
.error {
  font-size: 16px;
  font-weight: 400;
  color: red;
}
</style>
