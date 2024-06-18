import { it, expect, describe, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { MapTile, useMapStore } from "../map";


describe("map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should setup map", () => {
    const { map, setupMap } = useMapStore();
    const newMap = [
      [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
      [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
      [MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR],
    ];

    setupMap(newMap);

    expect(map).toEqual(newMap);
  });
});
