import { NDArray } from "vectorious";
import { Group, Pt } from "pts";
import { canvasRadius } from "./";

export class Face {
  constructor(public position: NDArray, public normal: NDArray) {}

  toPts(): Group {
    return Group.fromArray([]);
  }
}

export class Brush {
  constructor(public faces: Face[]) {}
}
