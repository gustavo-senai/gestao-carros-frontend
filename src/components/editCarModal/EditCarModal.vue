<script setup lang="ts">
import type EditCarModalProps from '@/components/editCarModal/types'
import CarTable from '@/components/carsTable/CarTable.vue'

const props = defineProps<EditCarModalProps>()
console.log(props.carToEdit)
</script>
<template>
  <div
    class="modal-dialog modal-dialog-centered"
    id="myModal"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar carro</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <CarTable :cars-to-display="props.carToEdit" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</template>
