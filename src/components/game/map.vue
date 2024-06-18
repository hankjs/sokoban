<script lang="ts" setup>
import { useMapStore, MapImg } from "../../store/map";



const { map } = useMapStore();
</script>

<template>
  <div class="map">
    <div v-for="row in map" class="row">
      <div v-for="cell in row" class="cell">
        <img :src="MapImg[cell]" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.map {
  background-color: #666666;
}
</style>
