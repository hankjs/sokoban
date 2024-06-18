<template>
  <div>
    <Map></Map>
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y"></Target>
    </template>
    <Player></Player>
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :cargo="cargo"></Cargo>
    </template>
    <div v-if="game.isGameCompleted" class="bg-red-500">
      <button @click="handleToNextLevel">下一关</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from "@/components/game/map.vue";
import Player from "@/components/game/player.vue";
import Cargo from "@/components/game/cargo.vue";
import Target from "@/components/game/target.vue";
import { useCargoStore } from "@/store/cargo";
import { useGameStore } from "@/store/game";
import { useTargetStore } from "@/store/target";
import { gameData } from "@/game/gameData";

const { game, setupGame, toNextLevel } = useGameStore();
const { cargos } = useCargoStore();
const { targets } = useTargetStore();

setupGame(gameData);

function handleToNextLevel() {
  toNextLevel();
}
</script>

<style scoped></style>
