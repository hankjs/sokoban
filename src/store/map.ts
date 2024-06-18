import { defineStore } from "pinia"

import floorImg from "../assets/floor.png";
import wallImg from "../assets/wall.png";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}

export const MapImg: Record<MapTile, string> = {
  [MapTile.WALL]: wallImg,
  [MapTile.FLOOR]: floorImg,
};

export const useMapStore = defineStore("map", () => {
  const map: MapTile[][] = [
    [
      MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL,
    ],
    [
      MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL,
    ],
    [
      MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL,
    ],
    [
      MapTile.WALL, MapTile.FLOOR, MapTile.FLOOR, MapTile.FLOOR, MapTile.WALL,
    ],
    [
      MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL, MapTile.WALL,
    ],
  ];

  return {
    map
  }
})