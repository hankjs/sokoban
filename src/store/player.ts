import { defineStore } from "pinia";
import { reactive } from "vue";

interface Player {
  x: number;
  y: number;
}

export const usePlayerStore = defineStore("player", () => {
  const player = reactive<Player>({
    x: 0,
    y: 0,
  });

  function _move(dx: number, dy: number) {
    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  function movePlayerToDown() {
    _move(0, 1);
  }

  function movePlayerToUp() {
    _move(0, -1);
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
