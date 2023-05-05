import { Vec3 } from "./types";

export class Face {
  constructor(
    public a: number,
    public b: number,
    public c: number,
    public d: number
  ) {}

  fromNormalDistance(normal: Vec3, distance: number): Face {
    return new Face(normal.x, normal.y, normal.z, distance);
  }

  getNormal(): Vec3 {
    return new Vec3(this.a, this.b, this.c);
  }

  getOrigin(): Vec3 {
    return this.getNormal().scale(this.d);
  }
}

export class Brush {
  constructor(public faces: Face[]) {}
}
