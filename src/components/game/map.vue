<script lang="ts" setup>
import { useMapStore, MapImg } from "../../store/map";

const { map } = useMapStore();
</script>

<template>
  <div class="map">
    <div v-for="row in map" class="flex">
      <div v-for="cell in row">
        <img :src="MapImg[cell]" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.map {
}
</style>
