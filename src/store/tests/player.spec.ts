import { it, expect, describe, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { usePlayerStore } from "../player";
import { MapTile, useMapStore } from "../map";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
        [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
        [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
      ]);
    });

    it("should move to left", () => {
      // setup
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });

    it("should move to right", () => {
      // setup
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });

    it("should move to down", () => {
      // setup
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });

    it("should move to up", () => {
      // setup
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(0);
    });
  });


  describe("collision wall", () => {
    beforeEach(() => {
      let map = [
        [MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL],
        [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
        [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
        [MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL],
        [MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL],
      ];

      const { setupMap } = useMapStore();
      setupMap(map);
    });

    it("should not move to left when collision a wall", () => {
      // setup
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });

    it("should not move to right when collision a wall", () => {
      // setup
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(3);
    });

    it("should not move to up when collision a wall", () => {
      // setup
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(1);
    });
    it("should not move to down when collision a wall", () => {
      // setup
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 3;

      movePlayerToDown();

      expect(player.y).toBe(3);
    });
  });
});
