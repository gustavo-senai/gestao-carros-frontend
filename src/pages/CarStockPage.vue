<script setup lang="ts">
import CarTable from '@/components/carsTable/CarTable.vue'
import { reactive } from 'vue'
import { carStore } from '@/stores/cars'

const store = carStore()

const carsInStock = reactive(store.carros)
</script>
<template>
  <CarTable :cars-to-display="carsInStock" />
</template>
