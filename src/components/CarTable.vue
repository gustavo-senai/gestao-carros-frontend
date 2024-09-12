<script setup lang="ts">
import carros from '@/util/cars'

const carsInStock = carros
console.log('aqui',carsInStock)
</script>
<template>
  <div>
    <table>
      <thead></thead>
      <tbody>
      <tr v-for="(carro, index) in carsInStock" :key="index">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ carro.modelo }}</td>
      <td>{{ carro.marca }}</td>
      <td>{{ carro.ano }}</td>
      <td>{{ carro.placa }}</td>
    </tr>
      </tbody>
    </table>
  </div>
</template>