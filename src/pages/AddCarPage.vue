<script setup lang="ts">
import AddCarForm from '@/components/AddCarForm.vue'
import CarTable from '@/components/carsTable/CarTable.vue'
import { ref } from 'vue'

const showCar = ref(false)
const newCar = ref([])

function displayNewCar(value) {
  showCar.value = true
  newCar.value.push(value)
}
</script>
<template>
  <AddCarForm @upload="displayNewCar" />
  <CarTable v-if="showCar" :cars-to-display="newCar" class="m-3" />
</template>
