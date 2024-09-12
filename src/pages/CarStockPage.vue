<script setup lang="ts">
import CarTable from '@/components/carsTable/CarTable.vue'
import { reactive } from 'vue'
import carros from '@/util/cars'

const carsInStock = reactive(carros)
</script>
<template>
  <CarTable :cars-to-display="carsInStock" />
</template>
