<script lang="ts" setup>
import { shallowReactive, shallowRef } from "vue";

defineProps({});
const emits = defineEmits([]);

const refVar = shallowRef(false);
</script>

<template>
<div class="game">Game</div>
</template>

<style scoped>
.game {
}
</style>
