<script setup lang="ts">
import SearchCard from '@/components/SearchCard.vue'
import CarTable from '@/components/carsTable/CarTable.vue'
import { ref } from 'vue'

const carsToDisplay = ref([])

function showCar(value) {
  carsToDisplay.value.push(value)
}
</script>
<template>
  <SearchCard @car-found="showCar" />
  <CarTable :cars-to-display="carsToDisplay" />
</template>
