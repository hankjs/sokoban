<script lang="ts" setup>
import { useMapStore, MapImg, MapTile } from "../../store/map";

const { map, setupMap } = useMapStore();
setupMap([
  [MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL],
  [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
  [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
  [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
  [MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL],
]);
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
