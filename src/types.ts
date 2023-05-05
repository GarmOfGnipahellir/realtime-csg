import { NDArray } from "vectorious";

export class Vec3 extends NDArray {
  constructor(x?: number, y?: number, z?: number) {
    super([x ?? 0, y ?? 0, z ?? 0]);
  }
}
